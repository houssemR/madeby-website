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
