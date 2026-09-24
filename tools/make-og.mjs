// Social preview card. The Play feature graphic is 1024x500; Open Graph wants
// 1200x630, so it is scaled to cover and centre-cropped — the mascots and the
// wordmark both sit centred, so nothing important leaves the frame.
//
//   node tools/make-og.mjs
import { createRequire } from 'node:module';
const require_ = createRequire(import.meta.url);
const { chromium } = require_('C:/Users/houss/.gemini/antigravity-ide/scratch/madeby/tool/webtest/node_modules/playwright');
import fs from 'node:fs';

const SRC = 'C:/Users/houss/.gemini/antigravity-ide/scratch/madeby/promo/out/store/play-feature-1024x500-v3.png';
const OUT = 'public/images/og-card.jpg';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 200, height: 200 } });
const data = 'data:image/png;base64,' + fs.readFileSync(SRC).toString('base64');
const b64 = await page.evaluate(async (url) => {
  const img = new Image();
  img.src = url;
  await img.decode();
  const W = 1200, H = 630;
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const x = c.getContext('2d');
  x.imageSmoothingQuality = 'high';
  const s = Math.max(W / img.naturalWidth, H / img.naturalHeight);
  const w = img.naturalWidth * s, h = img.naturalHeight * s;
  x.drawImage(img, (W - w) / 2, (H - h) / 2, w, h);
  return c.toDataURL('image/jpeg', 0.9).split(',')[1];
}, data);
fs.writeFileSync(OUT, Buffer.from(b64, 'base64'));
await browser.close();
console.log(OUT, Math.round(fs.statSync(OUT).size / 1024) + ' KB');
