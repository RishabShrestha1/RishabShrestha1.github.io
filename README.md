# Rishab Shrestha Portfolio

Static portfolio site for Rishab Shrestha, built with Next.js, Tailwind CSS, and exported for GitHub Pages.

## Local Development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
```

The static site is generated in `out/`.

## GitHub Pages Notes

- `next.config.mjs` uses `output: "export"` so the site can run on free static hosting.
- `public/.nojekyll` is included so GitHub Pages serves the `_next` asset folder correctly.
- `public/CNAME` is included so the custom domain is preserved in the exported artifact.
- The GitHub Actions workflow deploys the `out/` folder after every push to `main`.
