# APM 2027 Campaign Website

Public campaign website for the Allied Peoples Movement (APM), built for
Seyi Makinde and Bala Mohammed's 2027 presidential bid. Built with Next.js
14 (App Router), React, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Important — before presenting this site

- **Photos are placeholders.** No real photos of Makinde, Bala Mohammed, or
  other party figures are included, by design (they'd need to be official
  campaign photography, not AI-generated). Drop real photos into
  `public/images/` and swap them in for the `ImagePlaceholder` components
  in `components/Leadership/LeadershipCard.jsx`, `components/News/NewsCard.jsx`,
  and `components/Gallery/GalleryGrid.jsx`.
- **All News and Leadership content is sourced from real, dated reporting.**
  Every news item on `/news` links to its original article — read each one
  before presenting, since a couple of event dates in `lib/data.js` are
  best estimates (noted in comments there) where the source article didn't
  state an exact date.
- **Contact details (address, phone, email) are placeholders.** Replace
  them in `app/contact/page.js` and `components/Footer.jsx` with the
  party's actual official contact information.
- **No claims, quotes, or events were invented.** Everything about
  Makinde, Bala Mohammed, and other named party officials reflects
  publicly reported facts, not generated content — but campaign material
  should always be fact-checked by the party before use.

## Structure

- `app/` — one route per page (home, about, leadership, policies, news,
  gallery, timeline, contact, plus placeholder `/join` and `/donate` routes)
- `components/` — shared components, grouped by page
- `lib/data.js` — leadership, policy, news, and timeline content, with
  source URLs and notes on date estimates
- `public/images/` — drop real campaign photography here

## Notes for the next phase

- The "Join the Movement" and "Donate" buttons link to placeholder `/join`
  and `/donate` pages — wire these up to real registration/payment flows
  later.
- The contact form on `/contact` is visual only; it isn't connected to a
  backend yet.
