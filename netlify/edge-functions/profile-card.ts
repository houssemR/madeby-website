// Maker profile links: https://craftmadeby.com/m/<INVITE-CODE>
//
// The page is rendered by the Supabase edge function `profile-card` (it has
// the Open Graph tags that give the link a rich preview). Supabase serves
// text/html as text/plain on its shared *.supabase.co domain, and Netlify's
// custom headers don't apply to proxied responses — so instead of a plain
// proxy rule this edge function fetches the markup and re-serves it as HTML
// under our domain. Registered in netlify.toml ([[edge_functions]] /m/*).
//
// GitHub Pages ignores this folder; there public/404.html plays the same role.

import type { Context } from "@netlify/edge-functions";

const UPSTREAM = "https://yudqqdnpyguyekqcjvhr.supabase.co/functions/v1/profile-card";

const notFound = () =>
  new Response(
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Craft MadeBy</title><meta name="robots" content="noindex"><style>body{margin:0;background:#FFF8F5;color:#1E1B19;font-family:system-ui,sans-serif;display:flex;min-height:100vh;align-items:center;justify-content:center;text-align:center;padding:24px}a{color:#2F4A3C}</style></head><body><div><h1>This invite link is no longer valid</h1><p><a href="/">Back to craftmadeby.com</a></p></div></body></html>`,
    { status: 404, headers: { "content-type": "text/html; charset=utf-8" } },
  );

export default async (request: Request, context: Context) => {
  // /m/<invite code> = maker profile, /p/<share code> = a piece.
  const m = new URL(request.url).pathname.match(/^\/(m|p)\/([A-Za-z0-9-]{3,32})\/?$/);
  if (!m) return context.next();
  const code = m[2].toUpperCase();
  const path = (m[1] === "p" ? "p/" : "") + encodeURIComponent(code);

  let upstream: Response;
  try {
    upstream = await fetch(`${UPSTREAM}/${path}`, {
      headers: { "user-agent": request.headers.get("user-agent") ?? "craftmadeby.com" },
    });
  } catch {
    return notFound();
  }
  if (upstream.status === 404) return notFound();
  if (!upstream.ok) return new Response("Something went wrong.", { status: 502 });

  const html = await upstream.text();
  return new Response(html, {
    status: 200,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=120",
      "x-robots-tag": "noindex", // one page per maker; not for search engines
    },
  });
};
