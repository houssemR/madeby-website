// The wax seal, at web size. The app ships it at 1024px / 1.4 MB; the page
// shows it at about 200px.
//   node tools/make-seal.mjs
import { createRequire } from 'node:module';
const require_ = createRequire(import.meta.url);
const { chromium } = require_('C:/Users/houss/.gemini/antigravity-ide/scratch/madeby/tool/webtest/node_modules/playwright');
import fs from 'node:fs';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 200, height: 200 } });
const data = 'data:image/png;base64,' + fs.readFileSync('public/images/completion_stamp.png').toString('base64');
const b64 = await page.evaluate(async (url) => {
  const img = new Image();
  img.src = url;
  await img.decode();
  const W = 440;
  const c = document.createElement('canvas');
  c.width = W; c.height = W;
  const x = c.getContext('2d');
  x.imageSmoothingQuality = 'high';
  x.drawImage(img, 0, 0, W, W);
  // PNG, not WebP: the seal has a soft alpha edge and sits on two grounds.
  return c.toDataURL('image/png').split(',')[1];
}, data);
fs.writeFileSync('public/images/seal.png', Buffer.from(b64, 'base64'));
await browser.close();
console.log('public/images/seal.png', Math.round(fs.statSync('public/images/seal.png').size / 1024) + ' KB');
