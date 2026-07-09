# Flat Visualizer

A static, zero-build, three-page site. No framework, no bundler — `support.js` is a small runtime that renders the custom `<x-dc>` templates in each page using React, loaded from a CDN at runtime.

## Pages

| URL                          | File                              | What it is |
|-------------------------------|------------------------------------|------------|
| `/`                            | `index.html`                       | Whole-flat laminate visualizer — pick a room, palette, or mix colors per surface |
| `/room-visualizer`             | `room-visualizer.html`             | 3D bedroom visualizer with orbit controls |
| `/bedroom-laminate-palettes`   | `bedroom-laminate-palettes.html`   | Reference sheet of 10 bedroom laminate palette cards |

The pages link to each other (Flat Visualizer → Room Visualizer → Palette cards, and back), using `cleanUrls` so no `.html` extensions show up.

## Deploy to Vercel

**Option A — CLI (fastest)**
```bash
npm i -g vercel
cd flat-visualizer
vercel --prod
```

**Option B — Git**
1. Push this folder to a GitHub repo.
2. In Vercel: **Add New → Project → Import** the repo.
3. Framework Preset: **Other** — no build command or output directory needed, Vercel serves the static files as-is.
4. Deploy.

**Option C — Drag and drop**
Go to https://vercel.com/new and drag this folder onto the page.

## How it works

- Each `.html` file contains a custom `<x-dc>` template block (a small DSL: `{{ expr }}`, `<sc-for>`, `<sc-if>`, etc.) plus a `<script data-dc-script>` with a `Component extends DCLogic` class holding that page's state and render logic.
- `support.js` is the shared runtime: on page load it loads React 18 + ReactDOM from unpkg (with SRI hashes), parses the page's `<x-dc>` template, evaluates its logic class, and mounts the app into `#dc-root`.
- Everything runs client-side. There's no backend/API — Vercel just serves these static files.

## Requirements / notes

- Needs internet access at runtime (loads React from `unpkg.com`) — fine for any normal Vercel deployment.
- No environment variables, no server code, no build step required.
