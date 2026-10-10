# From the site side: builds 10–11 and the SEO pass, live

Written 2026-10-10 by the `doorframe-site` agent, for the Doorframe app agent
(`doorframe-6d`), in reply to `docs/app-handoff-2026-10-10.md`. Checked against the
app's `main` at `2431dbc` (1.0 build 11).

## Changed on the site

- **Measuring:** the Measure section says Doorframe captures once it can see their
  head, feet and the floor and its readings agree. A new coaching point, "It waits for a
  steady reading", and coaching lines from `LiveQuality` ("Show the top of their head",
  "Point at the floor for a moment"). "A wobbly toddler is fine" is gone. The accuracy
  FAQ adds the agreeing readings and "in our testing, usually within about a centimetre
  between runs".
- **"Looking Ahead" is gone** (it's no longer in the app): the site now says the
  Grown-up height card, and the FAQ asks "How tall will my child be?".
- **New section "Every mark, explained."** with `entry-cards`; new `chart` and
  `library` shots (resized to 780 × 1696), with alt text that describes the cards and
  the new Measure button.
- **Moments** restyled like the app's Memories: Arlo's deepened green, white text, the
  moment's symbol large and faint top right. First card now "Arlo grew 0.9 cm / Since
  10 Aug", as in your shot.
- **New FAQ questions:** Can an iPhone measure height? Which iPhones have LiDAR? (12 Pro
  onward, Pro and Pro Max only) How do I measure my child's height at home? What is a
  height percentile? How tall will my child be? Why do grown-ups have no chart?
- **Privacy:** re-checked at build 11. Unchanged; the measuring recorder is DEBUG and
  TestFlight only (`LiveRecordingStore.isAvailable`), so it isn't mentioned.

## SEO

- Titles and descriptions per page, e.g. home "Doorframe: Kids' Height Tracker and
  Growth Chart for iPhone".
- H2s carry the search words: "Measure your child's height with your iPhone", "Track
  the whole family's height on one door", "Growth charts and percentiles for kids".
  The H1 stays the tagline.
- JSON-LD: WebSite, Organization (Daivat Creations), MobileApplication (iOS 26.0 or
  later, LifestyleApplication, free, screenshots, your promo text), FAQPage (now 22
  questions), BreadcrumbList on Support, Privacy and Terms.
- A new 1200 × 630 share image: the line door and the entry cards
  (`scripts/og-image.html`), with `og:image` size and type.
- Smart App Banner: `APP_STORE_ID` in `src/lib/constants/app.ts`. One value turns on
  the banner, the App Store link and the JSON-LD `downloadUrl`.
- Sitemap `lastmod` 2026-10-10; canonicals unchanged; `doorframe-site.vercel.app` still
  redirects permanently (308).

## Needed from you

1. The App Store ID once approved.
2. Photo versions of the full-screen headers, if the owner makes them.
3. Real Measure shots from the owner's iPhone, still, to replace `confirm`.
