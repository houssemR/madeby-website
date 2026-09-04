// Generates the search-engine favicons from the brand mark.
//
//   node tools/make-favicons.mjs
//
// Reads public/images/logo_app.png — the sage tile, the same file behind the
// app's launcher icon and the Play listing — and writes:
//
//   public/favicon-48.png    Google asks for a square favicon whose sides are
//   public/favicon-96.png    a multiple of 48. The 512px launcher icon is not
//   public/favicon-192.png   one, which is why search showed the wrong mark.
//   public/favicon.ico       Bing still looks for this at the site root.
//
// No dependencies on purpose. A static site should not carry a browser
// download for a script that runs once a year, and this repo should not need
// anything from the app repo to build its own assets.
import { readFileSync, writeFileSync } from "node:fs";
import { deflateSync, inflateSync } from "node:zlib";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "public", "images", "logo_app.png");
const OUT = path.join(ROOT, "public");
const SIZES = [48, 96, 192];

// ── PNG ────────────────────────────────────────────────────────────────────

const CRC_TABLE = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();

function crc32(buf) {
  let c = -1;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}

function decodePng(buf) {
  let pos = 8;
  let w = 0, h = 0, bitDepth = 0, colorType = 0;
  const idat = [];
  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos);
    const type = buf.toString("ascii", pos + 4, pos + 8);
    const data = buf.subarray(pos + 8, pos + 8 + len);
    if (type === "IHDR") {
      w = data.readUInt32BE(0);
      h = data.readUInt32BE(4);
      bitDepth = data[8];
      colorType = data[9];
    } else if (type === "IDAT") idat.push(data);
    else if (type === "IEND") break;
    pos += 12 + len;
  }
  if (bitDepth !== 8) throw new Error(`bit depth ${bitDepth} unsupported`);
  const ch = { 0: 1, 2: 3, 4: 2, 6: 4 }[colorType];
  if (!ch) throw new Error(`colour type ${colorType} unsupported`);

  const raw = inflateSync(Buffer.concat(idat));
  const stride = w * ch;
  const out = Buffer.alloc(h * stride);
  let rp = 0;
  for (let y = 0; y < h; y++) {
    const filter = raw[rp++];
    const line = raw.subarray(rp, rp + stride);
    rp += stride;
    const cur = out.subarray(y * stride, (y + 1) * stride);
    const prev = y > 0 ? out.subarray((y - 1) * stride, y * stride) : null;
    for (let x = 0; x < stride; x++) {
      const a = x >= ch ? cur[x - ch] : 0;
      const b = prev ? prev[x] : 0;
      const c = prev && x >= ch ? prev[x - ch] : 0;
      let v = line[x];
      if (filter === 1) v += a;
      else if (filter === 2) v += b;
      else if (filter === 3) v += (a + b) >> 1;
      else if (filter === 4) {
        const p = a + b - c;
        const pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
        v += pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
      }
      cur[x] = v & 0xff;
    }
  }

  // Normalise to RGBA so the resampler only has one case to handle.
  const rgba = Buffer.alloc(w * h * 4);
  for (let i = 0, p = 0; i < w * h; i++, p += 4) {
    const s = i * ch;
    if (ch === 4) { rgba[p] = out[s]; rgba[p + 1] = out[s + 1]; rgba[p + 2] = out[s + 2]; rgba[p + 3] = out[s + 3]; }
    else if (ch === 3) { rgba[p] = out[s]; rgba[p + 1] = out[s + 1]; rgba[p + 2] = out[s + 2]; rgba[p + 3] = 255; }
    else if (ch === 2) { rgba[p] = rgba[p + 1] = rgba[p + 2] = out[s]; rgba[p + 3] = out[s + 1]; }
    else { rgba[p] = rgba[p + 1] = rgba[p + 2] = out[s]; rgba[p + 3] = 255; }
  }
  return { w, h, rgba };
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([len, body, crc]);
}

function encodePng(w, h, rgba) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8;  // bit depth
  ihdr[9] = 6;  // RGBA
  const raw = Buffer.alloc(h * (w * 4 + 1));
  for (let y = 0; y < h; y++) {
    raw[y * (w * 4 + 1)] = 0; // filter: none
    rgba.copy(raw, y * (w * 4 + 1) + 1, y * w * 4, (y + 1) * w * 4);
  }
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

/// Box filter. Averaging in premultiplied alpha keeps the edge of the rounded
/// tile from picking up a dark fringe where it meets transparency.
function resize(src, sw, sh, size) {
  const out = Buffer.alloc(size * size * 4);
  const scale = sw / size;
  for (let y = 0; y < size; y++) {
    const y0 = Math.floor(y * scale), y1 = Math.min(sh, Math.ceil((y + 1) * scale));
    for (let x = 0; x < size; x++) {
      const x0 = Math.floor(x * scale), x1 = Math.min(sw, Math.ceil((x + 1) * scale));
      let r = 0, g = 0, b = 0, a = 0, n = 0;
      for (let sy = y0; sy < y1; sy++) {
        for (let sx = x0; sx < x1; sx++) {
          const p = (sy * sw + sx) * 4;
          const al = src[p + 3] / 255;
          r += src[p] * al; g += src[p + 1] * al; b += src[p + 2] * al;
          a += src[p + 3];
          n++;
        }
      }
      const d = (y * size + x) * 4;
      const alpha = a / n;
      const un = alpha > 0 ? 255 / alpha : 0;
      out[d] = Math.round(Math.min(255, (r / n) * un));
      out[d + 1] = Math.round(Math.min(255, (g / n) * un));
      out[d + 2] = Math.round(Math.min(255, (b / n) * un));
      out[d + 3] = Math.round(alpha);
    }
  }
  return out;
}

/// ICO containing a single PNG. Every browser and crawler that matters has
/// understood PNG-in-ICO for years, and it avoids hand-rolling a BMP.
function pngToIco(png, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  const entry = Buffer.alloc(16);
  entry.writeUInt8(size >= 256 ? 0 : size, 0);
  entry.writeUInt8(size >= 256 ? 0 : size, 1);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(22, 12);
  return Buffer.concat([header, entry, png]);
}

// ── run ────────────────────────────────────────────────────────────────────

const { w, h, rgba } = decodePng(readFileSync(SRC));
if (w !== h) console.warn(`source is ${w}x${h}, not square — output will be squashed`);

let small = null;
for (const size of SIZES) {
  const png = encodePng(size, size, resize(rgba, w, h, size));
  if (size === 48) small = png;
  writeFileSync(path.join(OUT, `favicon-${size}.png`), png);
  console.log(`favicon-${size}.png`.padEnd(20) + png.length + " bytes");
}
const ico = pngToIco(small, 48);
writeFileSync(path.join(OUT, "favicon.ico"), ico);
console.log("favicon.ico".padEnd(20) + ico.length + " bytes (48px PNG payload)");
