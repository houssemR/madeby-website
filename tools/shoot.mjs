// Screenshots the built site so the design can be reviewed without a browser.
//   node tools/shoot.mjs [desktop|mobile] [outfile]
import { createRequire } from 'node:module';
const require_ = createRequire(import.meta.url);
const { chromium } = require_('C:/Users/houss/.gemini/antigravity-ide/scratch/madeby/tool/webtest/node_modules/playwright');

const mode = process.argv[2] || 'desktop';
const out = process.argv[3] || `shot-${mode}.png`;
const vp = mode === 'mobile' ? { width: 390, height: 844 } : { width: 1440, height: 900 };

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: vp, deviceScaleFactor: 1 });
await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' });
// Reveal animations are scroll-triggered. Walk the page to fire them, then
// force any the walk outran — a stitched full-page capture is not a real
// reading pass, and a half-revealed screenshot hides real layout problems.
// Lazy images never load during a scripted walk, and a stitched full-page
// capture does not trigger them either — so they are forced eager first.
await page.evaluate(() => {
  document.querySelectorAll('img[loading="lazy"]').forEach((i) => { i.loading = 'eager'; });
});
await page.evaluate(() => Promise.all(
  [...document.images].filter((i) => !i.complete).map((i) => i.decode().catch(() => {}))
));
await page.evaluate(async () => {
  const step = window.innerHeight * 0.6;
  for (let y = 0; y < document.body.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 70));
  }
  document.querySelectorAll('.reveal, .sew, .pop, .press').forEach((e) => e.classList.add('visible'));
  document.querySelectorAll('.hero-in').forEach((e) => e.classList.add('is-in'));
  window.scrollTo(0, 0);
  await new Promise((r) => setTimeout(r, 900));
});
await page.screenshot({ path: out, fullPage: true });
const h = await page.evaluate(() => document.body.scrollHeight);
const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
await browser.close();
console.log(`${out}  page height ${h}px  horizontal overflow: ${overflow}`);
