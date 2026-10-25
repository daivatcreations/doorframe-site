# From the app side: show heights in feet and inches (before launch)

Written 2026-10-11 by the Doorframe app agent (session `doorframe-6d`), at
the owner's request. **This must be done before the production deploy** (the
deploy still waits for the owner's go once the App Store page opens).

## Why

Every height on the site is in centimetres: the screenshots were taken in
en_GB and the HTML copies those numbers. Most visitors are in the US, and
the App Store listing and screenshots are en_US. The owner wants **feet and
inches everywhere**, so the numbers make sense to a US parent.

The app does this by itself: units follow the iPhone's region (US = feet
and inches), or a setting. All values below come from the app's own
formatter (`HeightFormatter`), so the site and the app match exactly.

## 1. New screenshots (en_US, feet and inches)

Folder: `docs/app-handoff-2026-10-11b/screens/` (1320 × 2868, `.webp`, the
same scenes as the ones you have). **Replace** the files in
`static/images/screens/` with the same names. Your current files are
780 × 1696, so resize them to match.

| File                     | Shows                                                                                                                                | Was              |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------- |
| `measure-live-light`     | The AI toddler scene, reading **2′ 11.8″ ±0.4″ · 5.9 ft away**, "Hold still. Capturing…"                                             | 91.0 cm          |
| `check-card-light`       | Save for Arlo? **1′ 11.7″ ±0.4″**; "Were they standing up? **11.2″ shorter** than earlier today…"                                    | 60.2 cm, 28.3 cm |
| `library-light/dark`     | Doorframe card: Sam **5′ 10.9″**, Maya **5′ 4.6″**, Arlo **2′ 10.9″**; Recent 2′ 10.9″ (Today), 2′ 10.5″ (Aug 11), 2′ 10.1″ (Jun 11) | cm               |
| `wall-light/dark`        | Full-screen Doorframe, ruler in **feet** (1′–6′), the same three marks                                                               | ruler in cm      |
| `entry-cards-light/dark` | Arlo **2′ 10.9″ ±0.5″**, 56th, Since last **+0.4″ since Aug 11**, Accuracy **±0.5″**, LiDAR **6.2 ft away**, Today, age 2 yrs 2 mos  | 88.5 cm          |
| `chart-light/dark`       | Grown-up height **5′ 7.3″ – 6′ 1.0″**, Age 14 milestone, chart axis in **inches**                                                    | cm               |

## 2. The "stand up" screen (`stand-up-light`): drop the picture

It shows the demo's grey stand-in figure and a sitting reading of 60.2 cm.
To a visitor that looks like a debug screen. **Remove that screenshot.**
If the "Wriggly toddlers" block needs a visual next to the check card, show
the tip as a small HTML pill, like your 91.2 cm reading card: a person
symbol and **"Ask them to stand up straight"**, with no number.
`check-card-light` stays as the main visual for that block.

## 3. Heights written in the HTML and text

Change each one (alt text too):

| Where                                              | Now                                                                    | Make it                                                                                                         |
| -------------------------------------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `+page.svelte` reading card                        | 91.2 cm, ± 0.9 cm                                                      | **2′ 11.8″**, **± 0.4″**, High confidence (the same as the measure-live shot)                                   |
| `+page.svelte` coaching                            | "Like ± 0.9 cm, and how sure it is."                                   | "Like ± 0.4″, and how sure it is."                                                                              |
| `+page.svelte` measure-live alt                    | 91.0 cm, plus or minus 0.9 cm                                          | 2 feet 11.8 inches, plus or minus 0.4 inches                                                                    |
| `+page.svelte` check-card alt                      | 60.2 cm … 28.3 cm shorter                                              | 1 foot 11.7 inches … 11.2 inches shorter                                                                        |
| `+page.svelte` wall / library / entry / chart alts | cm values                                                              | the values in the table in section 1 (dates: **Aug 11**, 6.2 ft away; no clock time needed)                     |
| `DoorScene.svelte` labels                          | 88.5 cm, 164.0 cm, 180.0 cm                                            | **2′ 10.9″**, **5′ 4.6″**, **5′ 10.9″** (keep `m` as is for the drawing; if it draws a ruler, label it in feet) |
| `MomentsShowcase.svelte`                           | "Arlo grew 0.9 cm" · "Since 10 Aug"                                    | "Arlo grew **0.4″**" · "Since **Aug 11**"                                                                       |
| `MomentsShowcase.svelte`                           | "may grow to 170.9 cm – 185.4 cm"                                      | "may grow to **5′ 7.3″ – 6′ 1.0″**"                                                                             |
| `faq.ts` accuracy answer                           | "(for example 91.2 cm ± 0.9 cm)" … "usually within about a centimetre" | "(for example 2′ 11.8″ ± 0.4″)" … "usually within about half an inch"                                           |
| `how-to-measure-height`                            | "like 91.0 cm ± 0.9 cm", and the alt                                   | "like 2′ 11.8″ ± 0.4″", and the alt as above                                                                    |

Format: use the app's characters, the prime **′** and the double prime **″**
(not ' and "), with a space after the feet: `2′ 11.8″`. Ranges use an en dash
with spaces: `5′ 7.3″ – 6′ 1.0″`.

**Keep metric where it is a fact, not an example.** Say once (the FAQ or
the features list) that Doorframe shows **feet and inches or centimetres**,
following the iPhone's region, or chosen in Settings. Leave alone any
distances in the measuring guide that are already in feet, and anything
that quotes a standard (WHO/CDC).

## 4. Check

- Search `src/` for "cm" and " m " afterwards. Only the units sentence, and
  anything you deliberately left metric, should remain.
- Lighthouse as before. Image weight should stay about the same after the
  resize.
- Update the preview (site PR #3) and tell `doorframe-6d`: the preview URL,
  and anything you left in metric and why. **Production stays waiting for
  the owner's go** (once https://apps.apple.com/app/id6819159306 opens).
