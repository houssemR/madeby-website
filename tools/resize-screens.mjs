// Pulls the prod app screenshots out of the promo project and writes them at
// web size. No sharp / ImageMagick on this machine, so the resampling runs in
// Chromium's canvas — the same trick the promo page tools use.
//
//   node tools/resize-screens.mjs
import { createRequire } from 'node:module';
const require_ = createRequire(import.meta.url);
const { chromium } = require_('C:/Users/houss/.gemini/antigravity-ide/scratch/madeby/tool/webtest/node_modules/playwright');
import fs from 'node:fs';
import path from 'node:path';

const SHOTS = 'C:/Users/houss/.gemini/antigravity-ide/scratch/madeby/promo/public/shots';
const OUT = path.join(process.cwd(), 'public/images/app');

// Every screen the site shows, with the width it is served at. Phones render
// at ~320px wide at most, so 640 covers a 2x display without waste.
const JOBS = [
  ['k_workshop.png',    'workshop.webp',   640],
  ['k_details.png',     'project.webp',    640],
  ['k_record.png',      'record.webp',     640],
  ['k_counting.png',    'counting.webp',   640],
  ['k_widget_tile.png', 'widget.webp',     760],
  ['k_theme.png',       'theme.webp',      640],
  ['k_hats.png',        'hats.webp',       640],
  ['k_cloth.png',       'cloth.webp',      640],
  ['k_portfolio.png',   'portfolio.webp',  640],
  ['k_discover.png',    'discover.webp',   640],
  ['k_giveaway.png',    'giveaway.webp',   640],
  ['k_giftreview.png',  'gift.webp',       640],
];

fs.mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 200, height: 200 } });

for (const [src, dst, w] of JOBS) {
  const file = path.join(SHOTS, src);
  if (!fs.existsSync(file)) { console.error('missing', src); continue; }
  const data = 'data:image/png;base64,' + fs.readFileSync(file).toString('base64');
  const b64 = await page.evaluate(async ([url, width]) => {
    const img = new Image();
    img.src = url;
    await img.decode();
    const h = Math.round((img.naturalHeight / img.naturalWidth) * width);
    const c = document.createElement('canvas');
    c.width = width; c.height = h;
    const x = c.getContext('2d');
    x.imageSmoothingQuality = 'high';
    x.drawImage(img, 0, 0, width, h);
    return c.toDataURL('image/webp', 0.88).split(',')[1];
  }, [data, w]);
  const buf = Buffer.from(b64, 'base64');
  fs.writeFileSync(path.join(OUT, dst), buf);
  console.log(String(Math.round(buf.length / 1024)).padStart(5) + ' KB  ' + dst);
}

await browser.close();
