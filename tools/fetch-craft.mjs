// The real pieces the site shows. They belong to the account the store
// screenshots were shot from, and the same photos already ship inside those
// listings — the page just brings them out of the phone frame.
//
//   node tools/fetch-craft.mjs
import { createRequire } from 'node:module';
const require_ = createRequire(import.meta.url);
const { chromium } = require_('C:/Users/houss/.gemini/antigravity-ide/scratch/madeby/tool/webtest/node_modules/playwright');
import fs from 'node:fs';
import path from 'node:path';

const B = 'https://yudqqdnpyguyekqcjvhr.supabase.co/storage/v1/object/public/project-images/';
const PIECES = [
  ['sweater.webp',  '42bce07d-1296-4d4a-8dc5-0695f1db73cb/step_0_cam_1790002511471.jpg', 1100],
  ['jumpsuit.webp', '9dd813f4-6f2b-47a2-a2ef-29a2ea7aa41d/complete_0_1785613038607.jpg', 900],
  ['reindeer.webp', 'edde6b81-a929-44e9-bce3-dda077c5054f/update_0_1787774799937.jpg', 900],
  ['necklace.webp', 'c4f4089a-b388-4995-a502-ec81af98fa69/step_0_1787774494720.jpg', 900],
  ['socks.webp',    '52ccb2ea-d6c2-4f92-8aa4-2469c9767f5c/update_0_1787769479785.jpg', 900],
  ['dress.webp',    '26c8d496-f800-4392-a56f-337bab169b29/step_update_dff81af7-b52a-4c24-9720-2144cb7a7b1f_0_cam_1789836599011.jpg', 900],
];

const OUT = path.join(process.cwd(), 'public/images/craft');
fs.mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 200, height: 200 } });

for (const [name, key, width] of PIECES) {
  const res = await page.request.get(B + key);
  if (!res.ok()) { console.error('skip', name, res.status()); continue; }
  const data = 'data:image/jpeg;base64,' + (await res.body()).toString('base64');
  const b64 = await page.evaluate(async ([url, w]) => {
    const img = new Image();
    img.src = url;
    await img.decode();
    const h = Math.round((img.naturalHeight / img.naturalWidth) * w);
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    const x = c.getContext('2d');
    x.imageSmoothingQuality = 'high';
    x.drawImage(img, 0, 0, w, h);
    return c.toDataURL('image/webp', 0.84).split(',')[1];
  }, [data, width]);
  const buf = Buffer.from(b64, 'base64');
  fs.writeFileSync(path.join(OUT, name), buf);
  console.log(String(Math.round(buf.length / 1024)).padStart(5) + ' KB  ' + name);
}
await browser.close();
