# From the app side: builds 10–11 (accurate measuring, full-screen pages) + an SEO pass

Written 2026-10-10 by the Doorframe app agent. The app's `main` is **1.0 (11)**
(PR #12), on TestFlight; the App Store submission comes next. Media:
`docs/app-handoff-2026-10-10/screens/` (en_GB, metric, 9:41, iPhone 17 Pro
Max, light and dark, `.webp`).

Please update the site for what changed, then do a thorough SEO pass
(section 4). Report back to the app agent (session `doorframe-6d`) when done.

## 1. What changed in the app (true of build 11)

### Measuring is more accurate and consistent

Family testing found one grown-up reading anywhere from 4′10″ to 5′8″ across
runs. Fixed in build 10:

- Doorframe now **captures only when several readings agree** (they must sit
  within a few millimetres of each other), so the same person measures the
  same height run after run. On the owner's recordings, three automatic runs
  of one adult landed within 1.3 cm of each other.
- It measures from **the floor right under their feet**, and it won't capture
  until it can see their head and feet and the floor.
- The edges of the body are read properly (the sensor used to blend the wall
  behind into the outline and add height).

Site impact:

- FAQ "How accurate is it?": add that it waits until several readings agree
  and needs head, feet and floor in view. Keep the range example. Don't quote
  a guaranteed accuracy; "usually within about a centimetre between runs" is
  true of testing so far, but keep it soft ("in our testing").
- The Measure section's coaching points can mention "It waits for a steady,
  agreeing reading" in plain words. No jargon (no "sigma", "planes").

### Each measurement opens full screen

Tapping a measurement now opens the **photo full screen** (Apple Music / App
Store style), with the height, its ± range, confidence and when on a blur
tinted from the photo. Tap the photo to see it whole. Scrolling down shows
**cards that explain the number**, each with a small animated picture:

- **Percentile**: a marker on a shorter-to-taller track, "Taller than about 56
  in 100 children the same age and sex." (children only)
- **Since last**: then-and-now bars. For grown-ups, a tiny change reads
  "Within the measuring range: the same height."
- **Accuracy**: the ± and the confidence bars.
- **Method**: LiDAR, the distance, standing or lying.
- **When**: the day and time, and a child's age then.
- Tap any card with an ⓘ for a one-line explanation.

Screens: `entry-*.webp` (hero, no photo in the sample family so it shows
the person's colour) and `entry-cards-*.webp`.

### Person pages: same full-screen header, then cards

`person-*.webp`, `person-cards-*.webp`, `chart-*.webp` (the sample family's grown-ups have no measurements, so no grown-up screen):

- Children: Percentile, Latest, Pace (per year), Measured (dots on a timeline),
  **Grown-up height** (an estimate, with a bar from today's height to the
  range), and milestones like "Arlo passes Maya in height · Age 14". Then the
  growth chart and history.
- Grown-ups: Height (average of the last 5), Measured, **Consistency** (their
  last measurements as dots around the average, the ± spread), and "Family
  yardstick". No chart (they don't grow).

The site's current `chart-*.webp` shows the old "Looking Ahead" text block;
swap it for the new `chart-*.webp` (Grown-up height card, Milestone card and
the chart). Alt text: describe the cards as they read.

### Smarter dates

Dates read "Today", "Yesterday", a weekday this past week, "Oct 9" this year,
"Oct 9, 2025" before. Several measurements on one day show their times.
Children's history shows their age at the time; grown-ups never show an age.
(Only matters if the site shows dates in copy.)

### Moments look like Photos Memories

`moments-*.webp`: each moment card shows the person's latest photo (framed on
their head, drifting slowly), darkened toward the text, or their colour when
there's no photo. The site's `MomentsShowcase.svelte` can echo this: a
deep person-colour card, white text, the moment's symbol large and faint in
the top-right corner.

### New Measure button icon

The tab bar's round Measure button now shows a **door frame with three pencil
marks** (custom symbol), not a shutter. If the site draws or describes the tab
bar, update it. `library-*.webp` shows it bottom right.

### Unchanged

Privacy (nothing leaves the iPhone, no account, no analytics), units, CSV
export, reminders, Take Photo with LiDAR, typed heights, the Doorframe drawing.
"Save Measuring Data" exists only in TestFlight builds; **don't mention it**.

## 2. Screens to swap

| Site file today           | Replace with                                  | Notes                                          |
| ------------------------- | --------------------------------------------- | ---------------------------------------------- |
| `chart-light/dark.webp`   | `chart-*.webp`                                | new cards above the chart                      |
| `library-light/dark.webp` | `library-*.webp`                              | new Measure icon in the tab bar                |
| (new)                     | `entry-cards-*.webp` or `person-cards-*.webp` | worth a feature block: "Every mark, explained" |
| `confirm-*`, `wall-*`     | keep                                          | unchanged                                      |

The sample family has no photos, so the full-screen headers show a colour.
Real-looking photo versions may follow (the owner may make AI scene images
for the App Store); use the colour versions for now.

## 3. App Store wording to match

The listing (not live yet) will use:

- Name: **Doorframe: Height Tracker**
- Subtitle (recommended): **Kids' Growth Chart, No Pencil**
- Promo: "Point your iPhone at them and hold still. Doorframe measures height
  by itself, keeps the whole family on one door, and charts how your kids grow."
- Keywords: measure, lidar, toddler, baby, child, percentile, family, ruler,
  stature, inches, cm, parent, tall, infant, mark.
- Category: Lifestyle. Free. All regions.

Keep the site's title and description in step with these.

## 4. SEO pass: please take it as far as it goes

The aim: parents searching for a **kids' height / growth tracker**, "measure
child height with iPhone", "LiDAR height app", "growth chart app",
"percentile calculator for kids", "doorframe height marks" find
doorframefamily.com. Suggestions, use your judgement:

- **Titles and meta descriptions** per page (home, support, privacy, terms):
  unique, ~55–60 / ~150–160 chars, leading with the intent words above.
- **Structured data**: `SoftwareApplication` / `MobileApplication` JSON-LD
  (name, operatingSystem iOS 26+, applicationCategory LifestyleApplication,
  offers price 0, the App Store URL once live), `FAQPage` for the FAQ,
  `Organization` (Daivat Creations), `BreadcrumbList` on sub-pages.
- **Open Graph / Twitter cards**: a fresh `og-image.png` (1200 × 630) with the
  line door and the new pages; `og:type`, `og:url`, `twitter:card`
  summary_large_image.
- **Apple Smart App Banner** (`<meta name="apple-itunes-app" ...>`): add when
  the App Store ID exists (the app agent will send it after approval); leave
  a ready-to-fill constant now.
- **Headings and copy**: one H1, descriptive H2s that carry the search words
  naturally ("Measure your child's height with your iPhone", "Growth charts
  and percentiles for kids", "Track the whole family's height"). Don't stuff.
- **Image alt text** for every screenshot (already good; extend to new ones),
  explicit `width`/`height`, `loading="lazy"` below the fold, modern formats.
- **Performance / Core Web Vitals**: LCP image preloaded, fonts `swap`, no
  layout shift from the phone frames, Lighthouse 100s where possible.
- **sitemap.xml / robots.txt**: all pages, `lastmod` current; canonical URLs;
  the old `doorframe-site.vercel.app` keeps redirecting (301).
- **FAQ content** is search gold: consider adding questions people actually
  search ("How do I measure my child's height at home?", "Can an iPhone
  measure height?", "What iPhones have LiDAR?", "What is a height percentile?",
  "How tall will my child be?"). Answers must stay true to the app (see
  section 1) and say growth figures are information, not medical advice.
- Search Console / Bing Webmaster: the owner can verify the domain if you
  give him the DNS TXT steps (DNS is at Porkbun).

## 5. When you're done

Message the app agent (`doorframe-6d`) with: what changed, the deploy URL,
Lighthouse scores, and anything you need from the app (e.g. the App Store ID
later). Commit and deploy per your own rules and the owner's go-ahead.
