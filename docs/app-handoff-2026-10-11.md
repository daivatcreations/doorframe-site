# From the app side: 1.0 goes live tonight (App Store ID), builds 12–13

Written 2026-10-11 by the Doorframe app agent (session `doorframe-6d`). The
owner is releasing **Doorframe 1.0 on the App Store tonight**. Media:
`docs/app-handoff-2026-10-11/screens/` (en_GB, metric, 9:41, iPhone 17 Pro
Max, light, `.webp`, 1320 × 2868 unless noted).

Report back to `doorframe-6d` when it's ready (see section 6).

## 1. The App Store link (the main job)

- **App Store ID: `6819159306`**
- **URL: https://apps.apple.com/app/id6819159306**
- Set `APP_STORE_ID = '6819159306'` in `src/lib/constants/app.ts`. As your
  comment there says, that turns "Coming soon" into the App Store button and
  adds the Smart App Banner (`apple-itunes-app`). Please also check:
  - Every CTA and "Download" mention links to the App Store URL. Use Apple's
    official "Download on the App Store" badge, from Apple's marketing
    resources, with Apple's usage rules.
  - JSON-LD `SoftwareApplication`/`MobileApplication`: add the App Store URL
    (`url`/`installUrl`/`downloadUrl` as you see fit), `offers` price 0,
    `operatingSystem` iOS 26 or later, `applicationCategory`
    LifestyleApplication, `contentRating` 4+.
  - Open Graph / Twitter text, if it says "coming soon".
  - Support and FAQ answers that say "not yet available" or point to
    TestFlight.
- **Timing:** the App Store page only works once Apple approves the app and it
  goes live. That's tonight, automatic release after approval. Get everything
  ready and verified (preview deploy, Lighthouse) **now**. Deploy to
  production **only on the owner's go**, after
  https://apps.apple.com/app/id6819159306 opens. Until then the banner and
  links would land on a "not available" page.

## 2. Store facts (for copy and structured data)

- Name **Doorframe: Height Tracker** (home screen: Doorframe). Subtitle
  **Kids’ Growth Chart & Trends** (changed from the earlier draft).
- Free. No in-app purchases, no ads, no account. Privacy label: **Data Not
  Collected**.
- iPhone only, iOS 26 or later. Live measuring needs LiDAR (iPhone 12 Pro and
  later Pro / Pro Max); typed heights work on any iPhone.
- Category Lifestyle. Age rating 4+. 174 countries and regions (all except
  China mainland).
- Promo text: "Point your iPhone at them and hold still. Doorframe measures
  height by itself, keeps the whole family on one door, and charts how your
  kids grow."
- New line in the App Store description (MEASURE LIVE): "It waits until
  they're standing up straight, and checks a new height against their last
  one."

## 3. What changed in the app (builds 12–13, true of what ships tonight)

### Measuring waits for them to stand up (build 13)

The owner's 2-year-old kept sitting down between tries, and Doorframe would
capture his sitting height. Now:

- Doorframe reads the **body's pose** (hips, knees, ankles) on the iPhone and
  only captures automatically when the person is **standing up straight**.
  While they sit, squat or kneel, the tip says **"Ask them to stand up
  straight"** (`stand-up.webp`).
- If they sit down or stand up mid-measure, it starts the reading over, so a
  sitting height never mixes with a standing one.
- **"Shorter than last time"**: when a new height is clearly below that
  person's last one, the save screen asks "Were they standing up?" before
  saving (`check-card.webp`).
- On device, using Apple's own on-device vision. Nothing leaves the iPhone.

Site impact:

- Measuring copy, coaching points and the FAQ ("How accurate is it?", "How
  do I measure my child's height at home?") can say it waits until they're
  standing up straight. That's the fix for wriggly toddlers. "A wobbly
  toddler is fine" is true again, with this.
- Keep it plain: no "AI", no "computer vision", no "pose estimation" jargon.
  "Doorframe checks they're standing up straight" is the line.

### Save for someone new, or for no one yet (build 12)

On the save screen, the name is a menu: anyone in the family, **New Person…**
(add them right there), or **No One Yet** (choose later: the measurement
shows "Who is this?" with a Choose Person button). Possible FAQ: "Can I
measure someone who isn't in the app yet?" Yes.

### First run and Help (build 12)

- An empty Library leads with **"Make the first mark"** and Measure Now, then
  "Ways to measure" (`empty-library.webp`). A one-time tip points at the
  Measure button.
- **Settings → Help** answers how to measure and how each number is worked
  out, in short plain sentences (`help.webp`). The site FAQ remains the long
  version; no need to mirror it.

### Unchanged

Privacy (nothing leaves the iPhone; no account, no analytics), units, CSV
export, reminders, Take Photo with LiDAR, typed heights, growth charts, the
full-screen measurement pages, Moments. "Save Measuring Data" is TestFlight
only: **don't mention it**.

## 4. Screens

| File                           | What                                                                                                                                                        | Use                                                                                                                                                                               |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `measure-live.webp`            | **Measure, live**: the real Measure screen over a photo-real scene (a toddler standing in a living room), reading 91.0 cm ±0.9 cm, "Hold still. Capturing…" | **The owner asked for this one on the site: the site doesn't show the live Measure view yet.** Use it as the Measure section's main visual, and replace the old `confirm-*` shot. |
| `measure-scene-ai.webp`        | The scene alone (941 × 1672), no app UI                                                                                                                     | Only if you build your own phone or HUD composition                                                                                                                               |
| `appstore-card-1-measure.webp` | App Store screenshot 1 as published (caption card)                                                                                                          | Reference for matching the store look; don't put captioned store cards on the site as screenshots                                                                                 |
| `stand-up.webp`                | "Ask them to stand up straight" over the demo camera (a grey figure stands in for the camera picture)                                                       | Optional, beside the standing-check copy                                                                                                                                          |
| `check-card.webp`              | Save screen: "Were they standing up? 28.3 cm shorter than earlier today…"                                                                                   | The new feature block or the FAQ                                                                                                                                                  |
| `empty-library.webp`           | First run: "Make the first mark", Measure tip                                                                                                               | Optional                                                                                                                                                                          |
| `help.webp`                    | Settings → Help                                                                                                                                             | Optional                                                                                                                                                                          |

**About the toddler in `measure-live` / `measure-scene-ai`:** the scene is
**AI-generated** (no real child), placed behind the app's real Measure
screen. That's fine for illustration, the same as the App Store screenshot.
Don't caption it as a real customer or a real measurement. Alt text along
the lines of: "Doorframe's Measure screen: a toddler standing on a wooden
floor, measured live at 91.0 cm ±0.9 cm, high confidence."

## 5. SEO touches for launch

- Titles and descriptions can now say "on the App Store" / "Download free".
- Sitemap `lastmod`. Re-run Lighthouse (it was 100 / 100 / 100 / 100;
  keep it there with the badge and banner).
- Optional: a short "What's new" or launch note isn't needed; 1.0 is the
  first version.

## 6. When you're done

Message `doorframe-6d` with: the preview URL, what changed, Lighthouse, and
that production is waiting for the owner's go (or live, if the owner has
already said go). Commit and deploy per your own rules and the owner's
go-ahead.
