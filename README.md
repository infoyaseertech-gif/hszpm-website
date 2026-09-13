# HSZPM Website

Public website for the Halima Suleiman Zakari Progressive Movement (HSZPM),
built with Next.js 14 (App Router), React, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

- `app/` — one route per page (home, about, leadership, programmes, news,
  gallery, events, contact, plus placeholder `/join` and `/donate` routes)
- `components/` — shared components, grouped by page (`Leadership/`,
  `Programmes/`, `News/`, `Events/`, `Gallery/`), plus `UI/` and `icons/`
  for shared primitives
- `lib/data.js` — content for programmes, leadership, news, and events, so
  the home page previews reuse the same data as their full pages
- `public/images/` — drop real photography here and swap it in for the
  `ImagePlaceholder` components when ready

## Notes for the next phase

- The "Join now" and "Donate" buttons link to placeholder `/join` and
  `/donate` pages — wire these up to real registration/payment flows later.
- The contact form on `/contact` is visual only; it isn't connected to a
  backend yet.
- `ImagePlaceholder` (`components/UI/ImagePlaceholder.jsx`) stands in for
  real photography across the site — replace it with `next/image` once
  photos are available.
