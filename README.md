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

## The design

Porcelain paper with panels of cloth laid on it and stitched down. Every
coloured block on the page is one construct — `.patch` in `src/index.css` — a
panel with a running stitch set in from its edge, and the thread runs between
them so the page reads as pieced together. Do not add a second border
treatment; the patch is the whole idea.

Palette and faces come from the app's own store pages. Two tokens exist only
because of contrast: `--sage #5C7359` is deeper than the store pages' `#78907A`
because these panels carry body text, and `--honey-l` is honey light enough to
be *type* on that sage — plain `--honey` measures 2.8:1 there and is for
backgrounds only.

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

## The two screen recordings

`public/videos/hats.mp4` and `feed.mp4` are real captures of the prod app, not
mockups. The pipeline, run from the app repo:

1. Serve the prod web build and sign in, saving the session:
   `node tool/webtest/serve.js build/webprod 8091`, then `drive.js … --savestate`.
2. Record with the harness: `drive.js --state <state.json> --video <dir>,412,915`
   followed by the clicks to perform. Record at the viewport size — asking for a
   larger video pads the frame instead of scaling it.
3. The harness writes variable-framerate WebM, and seeking into VFR by frame
   does not line up. So `promo/src/SiteClip.tsx` renders in two passes: a full
   re-encode to constant 30fps (`SiteHatsFull`), then a trim of that
   (`SiteHats`). Remotion carries its own encoder; there is no ffmpeg here.

Re-shoot whenever the screens change. The old `theme.mp4` and `hero-app.mp4`
were deleted because they predated the wardrobe and showed a Theme tab with no
costume card.

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
