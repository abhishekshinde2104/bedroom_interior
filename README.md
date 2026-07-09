# Bedroom Palette Visualizer

A standalone, static web app for previewing laminate/color palettes on your
bedroom render. No build step, no dependencies beyond a browser — just three
files:

```
Bedroom_Interior/
├── index.html   ← open this file (or serve the folder)
├── styles.css
└── app.js
```

## What it does

- **14 palette chips** — click any chip to repaint the whole room (closet,
  bed-wall panel, fluted accent band, loft cabinet, study/desk).
- **4 views** — Bed wall (front), Window side, Wardrobe wall, and a draggable
  3D room (click-and-drag to orbit).
- **Color mixer** — pick any individual surface's color from *any* palette
  and mix-and-match across templates; "Reset" restores the current palette's
  original colors.
- **Surface legend** — a live description of what's applied to each surface.
- Fully responsive: the stage scales to fit its container width.

## Run it locally (simplest)

Just double-click `index.html` — it opens directly in any modern browser
(Chrome, Edge, Firefox, Safari). Everything runs client-side; there's no
server or build process required.

> Note: the `color-mix()` CSS function used for the fluted-band shading
> requires a recent browser (Chrome/Edge 111+, Firefox 113+, Safari 16.2+).
> If you see flat colors instead of a subtle darker stripe, update your
> browser.

## Deploying it for others to view

Because it's a plain static site, you can host it anywhere that serves
static files, with zero configuration:

- **GitHub Pages**: push this folder to a repo and enable Pages on the
  branch/folder.
- **Netlify / Vercel**: drag-and-drop this folder into their web dashboard,
  or connect a repo.
- **Any web server** (Nginx, Apache, IIS, etc.): copy the three files into
  the server's web root.
- **Quick local server** (useful if double-clicking gives file:// restrictions
  in your browser for the Google Fonts stylesheet):
  ```
  # from inside this folder
  python -m http.server 8000
  # then open http://localhost:8000
  ```

## Customizing

- **Palettes**: edit the `PALETTES` array at the top of `app.js` — each
  entry is a palette id, name, and the six surface colors plus their
  descriptions.
- **Starting palette**: change `selId: '1c'` in the `state` object near the
  bottom of `app.js`.
- **Styling** (fonts, spacing, chip/button look): edit `styles.css`.
