// Renders the website's three legal pages from the app's single source of
// truth (lib/screens/legal_screens.dart), so the site and the app never drift.
//   node gen_legal_pages.js <app repo> <website repo>
const fs = require('fs');
const path = require('path');
const [appDir, siteDir] = process.argv.slice(2);
const src = fs.readFileSync(path.join(appDir, 'lib/screens/legal_screens.dart'), 'utf8');

// ── parse the Dart constants ────────────────────────────────────────────────
const dartString = (s) => s.replace(/\\'/g, "'").replace(/\\n/g, '\n').replace(/\\\\/g, '\\').replace(/\$_kContactEmail/g, 'support@craftmadeby.com');
function constOf(name) {
  const m = new RegExp(`const String ${name} = '([^']*)';`).exec(src);
  if (!m) throw new Error(name + ' not found');
  return m[1];
}
function listOf(name) {
  const start = src.indexOf(`const List<(String, String)> ${name} = [`);
  if (start < 0) throw new Error(name + ' not found');
  const end = src.indexOf('\n];', start);
  const body = src.slice(start, end);
  // Each entry: ('Title', 'part' 'part' ...),  — adjacent string literals concatenate.
  const entries = [];
  const re = /\(\s*'((?:[^'\\]|\\.)*)'\s*,\s*((?:'(?:[^'\\]|\\.)*'\s*)+)\)/g;
  let m;
  while ((m = re.exec(body))) {
    const parts = [...m[2].matchAll(/'((?:[^'\\]|\\.)*)'/g)].map((x) => x[1]).join('');
    entries.push({ title: dartString(m[1]), body: dartString(parts) });
  }
  if (!entries.length) throw new Error(name + ' parsed empty');
  return entries;
}

// ── render ──────────────────────────────────────────────────────────────────
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&ldquo;').replace(/’/g, '&rsquo;');
const link = (s) => esc(s).replace(/support@craftmadeby\.com/g, '<a href="mailto:support@craftmadeby.com">support@craftmadeby.com</a>')
  .replace(/&ldquo;as is&ldquo;/g, '&ldquo;as is&rdquo;').replace(/&ldquo;we&ldquo;, &ldquo;us&ldquo;/g, '&ldquo;we&rdquo;, &ldquo;us&rdquo;');

function renderBody(body) {
  const out = [];
  for (const para of body.split('\n\n')) {
    const lines = para.split('\n');
    let buf = [];
    const flushText = () => { if (buf.length) { out.push(`<p>${buf.map(link).join('<br />')}</p>`); buf = []; } };
    let items = [];
    const flushItems = () => { if (items.length) { out.push(`<ul>${items.map((i) => `<li>${link(i)}</li>`).join('')}</ul>`); items = []; } };
    for (const line of lines) {
      const bullet = /^•\s+(.*)$/.exec(line);
      if (bullet) { flushText(); items.push(bullet[1]); } else { flushItems(); buf.push(line); }
    }
    flushText(); flushItems();
  }
  return out.join('\n      ');
}

const PAGES = [
  { file: 'privacy.html', list: '_privacy', version: '_kPrivacyVersion', title: 'Privacy Policy',
    desc: 'How Craft MadeBy collects, uses and protects your information.' },
  { file: 'terms.html', list: '_terms', version: '_kTermsVersion', title: 'Terms of Service',
    desc: 'The terms that govern your use of Craft MadeBy.' },
  { file: 'community-guidelines.html', list: '_guidelines', version: '_kGuidelinesVersion', title: 'Community Guidelines',
    desc: 'How we keep Craft MadeBy kind, safe and respectful.' },
];

const template = (p, version, sections) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${p.title} · Craft MadeBy</title>
  <meta name="description" content="${p.desc}" />
  <link rel="icon" href="/favicon.ico" sizes="48x48" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Hanken+Grotesk:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    :root{
      --bg:#CFDCC8; --card:#FBF6EC; --ink:#26221C; --muted:#6E7268;
      --pine:#1F3326; --sage:#78907A; --honey:#E3B964; --line:rgba(31,51,38,.12);
    }
    *{box-sizing:border-box}
    body{margin:0;background:var(--bg);color:var(--ink);
      font-family:'Hanken Grotesk',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
      line-height:1.65;-webkit-font-smoothing:antialiased}
    .wrap{max-width:760px;margin:0 auto;padding:32px 22px 72px}
    header{display:flex;align-items:center;gap:12px;padding:8px 0 28px}
    .logo-wrap{width:40px;height:40px;display:flex}
    .logo-img{width:40px;height:40px;border-radius:22%}
    .brand{font-family:'Playfair Display',Georgia,serif;font-weight:700;font-size:19px;letter-spacing:-.01em;color:var(--pine)}
    h1{font-family:'Playfair Display',Georgia,serif;font-size:40px;line-height:1.05;margin:8px 0 6px;font-weight:700;letter-spacing:-.015em;color:var(--pine)}
    .updated{color:var(--muted);font-size:14px;margin-bottom:28px}
    h2{font-family:'Playfair Display',Georgia,serif;font-size:22px;margin:34px 0 8px;font-weight:700;color:var(--pine)}
    p{margin:0 0 14px}
    ul{margin:0 0 14px;padding-left:22px}
    li{margin:4px 0}
    a{color:var(--pine);font-weight:600;text-decoration:underline;text-underline-offset:2px}
    .card{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:26px 26px 10px;
      box-shadow:0 10px 30px rgba(28,34,24,.08)}
    .accent{height:0;border-top:2px dashed rgba(31,51,38,.28);width:84px;margin:0 0 22px}
    .version{color:var(--muted);font-size:13px;margin-top:34px}
    nav.docs{display:flex;flex-wrap:wrap;gap:14px;margin-top:22px;padding-top:22px;border-top:1px solid var(--line)}
    nav.docs a{font-size:14px}
    footer{color:var(--muted);font-size:13px;margin-top:26px}
  </style>
</head>
<body>
  <div class="wrap">
    <header><div class="logo-wrap"><img src="/logo.svg" alt="Craft MadeBy" class="logo-img" /></div><div class="brand">Craft MadeBy</div></header>
    <h1>${p.title}</h1>
    <div class="updated">${esc(version)}</div>
    <div class="card">
      <div class="accent"></div>
${sections.map((s) => (s.title ? `\n      <h2>${esc(s.title)}</h2>\n      ` : '      ') + renderBody(s.body)).join('\n')}

      <div class="version">${p.title} — ${esc(version)}</div>
      <nav class="docs">
        <a href="privacy.html">Privacy Policy</a>
        <a href="terms.html">Terms of Service</a>
        <a href="community-guidelines.html">Community Guidelines</a>
      </nav>
      <footer>Questions? Contact us at <a href="mailto:support@craftmadeby.com">support@craftmadeby.com</a> · © Craft MadeBy</footer>
    </div>
  </div>
</body>
</html>
`;

for (const p of PAGES) {
  const html = template(p, constOf(p.version), listOf(p.list));
  fs.writeFileSync(path.join(siteDir, 'public', p.file), html);
  console.log('wrote', p.file, html.length, 'bytes,', listOf(p.list).length, 'sections');
}
