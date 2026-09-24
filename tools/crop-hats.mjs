// The app's hat art is drawn at 520x660 with the hat sitting where a mascot's
// head would be, so most of each file is empty space. On the shelf here the
// hats stand alone, so each viewBox is retightened to the drawing's own
// bounding box — measured in Chromium, which is the only thing on this machine
// that can resolve an SVG's real ink extent.
//
//   node tools/crop-hats.mjs
import { createRequire } from 'node:module';
const require_ = createRequire(import.meta.url);
const { chromium } = require_('C:/Users/houss/.gemini/antigravity-ide/scratch/madeby/tool/webtest/node_modules/playwright');
import fs from 'node:fs';
import path from 'node:path';

const DIR = path.join(process.cwd(), 'public/images/hats');
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 800, height: 900 } });

let done = 0;
for (const name of fs.readdirSync(DIR).filter((f) => f.endsWith('.svg'))) {
  const file = path.join(DIR, name);
  const svg = fs.readFileSync(file, 'utf8');
  await page.setContent(`<body style="margin:0">${svg}</body>`);
  const box = await page.evaluate(() => {
    const el = document.querySelector('svg');
    const b = el.getBBox();
    return { x: b.x, y: b.y, w: b.width, h: b.height };
  });
  // A hair of padding so a stroke on the edge is not clipped.
  const pad = Math.max(box.w, box.h) * 0.03;
  const vb = [box.x - pad, box.y - pad, box.w + pad * 2, box.h + pad * 2]
    .map((n) => Math.round(n * 10) / 10)
    .join(' ');
  const out = svg
    .replace(/\swidth="\d+"/, '')
    .replace(/\sheight="\d+"/, '')
    .replace(/viewBox="[^"]*"/, `viewBox="${vb}"`);
  fs.writeFileSync(file, out);
  done++;
}
await browser.close();
console.log(`retightened ${done} hats`);
