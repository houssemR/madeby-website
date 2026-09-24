# Craft MadeBy — Website

Static marketing website for the **Craft MadeBy** app, built with React + Vite.

## One-time setup (before deploying)

The images need to be copied from local sources into `public/images/` before building. Run:

```bash
node copy-assets.cjs
```

This populates `public/images/` with all the craft photos, the handmade stamp, and the app logo.

> ⚠️ The `copy-assets.cjs` script reads from local paths on this machine. After running it once, commit the `public/images/` folder to your repo so Netlify can use them.

## Development

```bash
npm install
node copy-assets.cjs   # only needed once
npm run dev
```

## Deploy to Netlify

1. Run `node copy-assets.cjs` locally
2. Commit everything (including `public/images/`) to Git
3. Push to GitHub and connect the repo to Netlify
4. Netlify will auto-detect the `netlify.toml` and run `npm run build`

The build command is: `npm run build`  
The publish directory is: `dist`

## App screens, hats and the social card

The screens on the page are real prod captures, taken for the store listings
and kept in the app repo under `promo/public/shots`. Two scripts pull them
across; both drive the Playwright that already lives in the app repo, because
there is no sharp or ImageMagick on this machine.

```
node tools/resize-screens.mjs   # promo shots  -> public/images/app/*.webp
node tools/make-og.mjs          # Play feature -> public/images/og-card.jpg
```

The forty hats in the Your-corner shelf are the app's own art, copied from
`assets/images/hats` and retightened so each hat fills its tile:

```
node tools/crop-hats.mjs        # rewrites each viewBox to the drawing's bounds
```

`src/components/hats.js` lists the eight collections in the app's own order
(`lib/data/studio_rewards.dart`). If a hat is added there, add it here too.

## Reviewing a change

```
npm run build && npx vite preview --port 4173
node tools/shoot.mjs desktop shot.png     # or: mobile
node tools/slice.mjs shot.png ./slices 6  # tall page -> readable chunks
```

`shoot.mjs` forces lazy images eager and fires every scroll reveal before it
captures, so a screenshot shows the finished page rather than a half-loaded one.

## Favicons

Search engines want a square icon sized in multiples of 48, and Bing still
looks for `/favicon.ico` at the root. Both are generated from
`public/images/logo_app.png` — the sage brand tile:

```
node tools/make-favicons.mjs
```

No dependencies. Rerun it if the brand mark changes, and commit the output.
