// Slices a tall full-page screenshot into reviewable chunks.
//   node tools/slice.mjs <shot.png> <outDir> [chunks]
import { createRequire } from 'node:module';
const require_ = createRequire(import.meta.url);
const { chromium } = require_('C:/Users/houss/.gemini/antigravity-ide/scratch/madeby/tool/webtest/node_modules/playwright');
import fs from 'node:fs';
import path from 'node:path';

const [src, outDir, n = '4'] = process.argv.slice(2);
fs.mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 200, height: 200 } });
const data = 'data:image/png;base64,' + fs.readFileSync(src).toString('base64');
const parts = await page.evaluate(async ([url, count]) => {
  const img = new Image();
  img.src = url;
  await img.decode();
  const W = img.naturalWidth, H = img.naturalHeight;
  const slice = Math.ceil(H / count);
  const out = [];
  for (let i = 0; i < count; i++) {
    const h = Math.min(slice, H - i * slice);
    if (h <= 0) break;
    const c = document.createElement('canvas');
    c.width = W; c.height = h;
    c.getContext('2d').drawImage(img, 0, -i * slice);
    out.push(c.toDataURL('image/png').split(',')[1]);
  }
  return out;
}, [data, Number(n)]);
parts.forEach((b, i) => fs.writeFileSync(path.join(outDir, `part${i + 1}.png`), Buffer.from(b, 'base64')));
await browser.close();
console.log(`${parts.length} slices in ${outDir}`);
