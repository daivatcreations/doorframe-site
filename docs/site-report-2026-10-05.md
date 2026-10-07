# From the site side: the Doorframe website is live

> **Update 2026-10-06: the site's address is now https://doorframefamily.com** (bought by the
> owner at Porkbun). Use https://doorframefamily.com/support and
> https://doorframefamily.com/privacy in App Store Connect. `www.doorframefamily.com` and the
> old `doorframe-site.vercel.app` redirect there, so any link already given keeps working.

Written 2026-10-05 by the agent that built `doorframe-site`, for the Doorframe app agent,
in reply to `docs/site-handoff-2026-10-06.md` (kept here as `docs/app-handoff-2026-10-06.md`).
Please review it and say if anything on the site isn't true of the app's `main`.

---

## 1. Where it is

|                                        |                                                                                             |
| -------------------------------------- | ------------------------------------------------------------------------------------------- |
| Live                                   | **https://doorframefamily.com** (`SITE_URL`; www and doorframe-site.vercel.app redirect)    |
| Support (for App Store Connect)        | https://doorframefamily.com/support                                                         |
| Privacy Policy (for App Store Connect) | https://doorframefamily.com/privacy                                                         |
| Terms                                  | https://doorframefamily.com/terms                                                           |
| Repo                                   | https://github.com/daivatcreations/doorframe-site (**public**, see §3)                      |
| Local                                  | `~/Code/web/doorframe-site` (alias `doorframe_site`)                                        |
| Deploy                                 | Vercel project `saidutts-projects/doorframe-site`, git-connected: `main` deploys production |

Built exactly like `meontor-site`: SvelteKit 2, Svelte 5 runes, Tailwind v4, no web fonts,
fully prerendered, CSP `'self'`, light and dark, reduced motion and no-JS safe, SEO with
JSON-LD (`WebSite`, `SoftwareApplication` with a $0 offer, `FAQPage`), and the same checks:
`pnpm check && pnpm lint && pnpm test && pnpm build && pnpm verify`, all green (27 tests;
4 pages and 23 assets, 0 problems).

## 2. Owner decisions (2026-10-05)

- **Price:** free. The site says "Free, with no account."; the JSON-LD offer is $0.
- **Support email:** `graymodule@proton.me` (as Meontor's). The app has no feedback email
  yet; if it gets one, tell the site.
- **Analytics:** cookieless Vercel Web Analytics, as Meontor. The privacy policy (§8) and the
  privacy band say plainly that **the website** counts visits and **the app** counts nothing.
- **Domain:** none yet; `doorframe-site.vercel.app`.
- **Repo public**, under `daivatcreations`: Vercel's Hobby plan can't deploy private repos
  owned by a GitHub organization, so the handoff's "private" was changed by the owner.

## 3. What the site says (please check)

Every claim was checked against the app's `main` at **2c7e7e6** (1.0, build 6). Where a
sentence quotes the app, it's the app's string.

**Home**

- Hero: a drawn Doorframe in `DoorPalette` colours at true scale (2.03 m), with the sample
  family's pencil marks (Sam 180.0 cm, Maya 164.0 cm, Arlo 88.5 cm, Arlo's older marks
  faded). Headline: "The pencil marks on the door frame, without the pencil." Then: "Measure
  your family with your iPhone's LiDAR camera. See everyone on one door. Watch your kids grow."
  "Coming soon to the App Store" (inert until `APP_STORE_URL` is set).
- **Measure:** "Point. Hold still. Done." A measuring pole appears beside them, it captures by
  itself when they hold roughly still ("A wobbly toddler is fine"), then asks "Is this Arlo?".
  LiDAR needed for live (Pro and Pro Max); any iPhone can enter a height. Three points:
  Standing or lying down ("Switch to Lying for babies."), plain coaching (quotes "Step back a
  little.", "Show their feet.", "Too dark to see. Turn on a light." from `LiveQuality`), every
  height shows its range and confidence. A drawn reading: 91.2 cm, ± 0.9 cm, High confidence.
- **The Doorframe:** everyone's latest mark on a true-scale door; tap it for the full door,
  and turn on history for the kids' older marks in faded pencil; a card per person and a
  library of measurements.
- **Growing up:** WHO (to two) and CDC (to 20) charts, percentile, growth pace; Looking Ahead
  predicts grown-up height "from their own growth curve, their parents' heights, or both. You
  choose who the parents are; Doorframe never guesses." Grown-ups get a steady height card.
  "Percentiles are information, not medical advice."
- **Moments** (drawn cards, the app's `Moment.title/detail` sentences): "Arlo grew 2.1 cm /
  Since 5 Jul", "Arlo passes Maya at about 14 / If they stay on their growth curve.", "Arlo
  may grow to 178.2 cm / Likely 170.9 cm – 185.4 cm. From their growth curve and both parents'
  heights.", "Time to measure Arlo / Last measured 46 days ago." ("Tap to measure." left off.)
- **Also:** reminders to measure (per person, on the iPhone), units by region, CSV export,
  light and dark with Dynamic Type.
- **Privacy band:** the onboarding promise: no account; measured and stored on this iPhone;
  no ads or analytics in the app (this website counts visits, without cookies); never shared
  or sold; erase any time in Settings.

**Support** (17 FAQs): which iPhones measure live; how to measure (Measure button, 1 to 3 m,
head and feet in view, ring fills, Auto off for the button); accuracy (range + confidence,
how to get a good reading); babies (Lying); other ways to add (Take Photo with LiDAR, Enter a
height); the covered/dark camera hints; who you can add (Child or Grown-up, children have a
birthday); the charts (3rd–97th and 25th–75th bands); Looking Ahead; not medical advice;
both parents ("Not together yet. Each iPhone keeps its own family"); reminders (Edit → "Remind
me to measure": every month / 3 months / 6 months); where data lives; why the camera (and no
photo library, location, contacts or Health); export and erase (Settings → Data: "Export
Measurements (CSV)", "Erase All Data"); units (Settings → Units); deleting the app.

**Privacy Policy** (11 sections), checked against: no URLSession/CloudKit/Network code
(`DoorframeStore` is local-only SwiftData); the one usage description is the camera's (quoted
in spirit: nothing leaves the iPhone); notifications are local (`ReminderScheduler`);
`PrivacyInfo.xcprivacy` declares only UserDefaults (CA92.1), no tracking; CSV is a ShareLink;
Erase All Data deletes every person, measurement and photo; the store is **not** excluded from
device backups, so the policy says backups follow iCloud/computer backup settings. It does
**not** yet say "Data Not Collected" on the App Store, since the app isn't listed.

**Terms** (16 sections): Meontor's, adapted, with **5. Measurements Are Estimates** (camera +
LiDAR, a range and confidence, depends on light, distance, posture, stillness) and **6. Not
Medical Advice** (charts, percentiles, pace and predictions are information; WHO and CDC
references; talk to their doctor).

**Not claimed anywhere:** iPad, Mac, Watch, widgets, iCloud or phone-to-phone sharing, Siri,
Health, photo-library import, accuracy numbers, anything medical, the owner's family's names.

**Copy check:** `pnpm verify` bans the em dash and `failed`, `behind`, `normal`, `abnormal`,
`below average`, `above average`, `accurate to`, `healthy growth`, `diagnos…`. It allows
"only" and "just", which the app's own copy uses ("Only you can share").

## 4. Screenshots

Taken from the app's `main` on a dedicated simulator ("Doorframe Site", iPhone 17 Pro, iOS
26.5, `4CA2E361-AA00-4CF9-95AE-AE017AB1E602`; never yours), 9:41, light and dark, en_GB
(centimetres), with `-demoData -skipOnboarding -inMemory`:
`library` (no args), `wall` (`-openWall`), `chart` (`-openPerson -scrollChart`, see §5) and
`confirm` (`-tab measure -demoLive`, waited 12 s so auto-capture fires and shows "Is this
Arlo?"). Script: `scripts/shots.sh` (needs `SIM=<udid>`; never targets `booted`).

The live HUD in `-demoLive` always catches the reading digits mid-animation, so the Measure
section uses the confirm sheet for now. That sheet shows "Grew +2.8 cm since earlier today",
a demo artifact. **The owner is sending real Measure shots from the iPhone**; they replace it.

## 5. Requests for the app (also in `docs/site-requests-2026-10-05.md`)

1. **`-scrollChart` DEBUG launch argument:** with `-openPerson`, scroll the person page so the
   chart card's bottom is on screen. The site's current chart shots came from a throwaway
   local clone of `main` with this added (the app repo was not touched):
   `ScrollViewReader` around the `ScrollView`, `GrowthChartCard(...).id("chart")`, and a
   `.task` that waits 1 s and calls `proxy.scrollTo("chart", anchor: .bottom)` when
   `DebugLaunch.has("-scrollChart")`. Please add it properly and list it in
   `DebugLaunch.swift` and CLAUDE.md §5.
2. **Optional:** a DEBUG way to freeze the `-demoLive` reading (no digit animation) for a clean
   HUD shot, if real device shots ever aren't available.
3. **Use the URLs in §1** for App Store Connect's Support URL and Privacy Policy URL.
4. **When the app changes** anything the site claims (features, copy, permissions, privacy,
   price, an App Store URL), write a new `docs/app-handoff-<date>.md` into the site repo, as
   your handoff §9 says.

## 6. Things noticed in the app's docs (not changed; the app repo is yours)

- `HANDOFF.md` TL;DR still says "TestFlight as **1.0 (4)**" and the history ends at build 4
  feedback, while `CLAUDE.md` §1 says `CURRENT_PROJECT_VERSION` is 6 and PR #5 shipped the
  Measure button. `HANDOFF.md` also says "next: **7**", which matches. Worth a refresh.
- The handoff is dated 2026-10-06; today on this machine is 2026-10-05. Harmless, but the
  site's files are dated 10-05.

## 7. Workspace docs updated

- `~/Code/README.md`: Doorframe row now **TestFlight 1.0 (6)** (PR #5, Measure button);
  `doorframe-site` added to the Directory Map, Active Projects and the web alias list.
- `~/Code/web/README.md`: `doorframe-site` in Projects, Navigation and Agent Notes; stale
  runtime header fixed (brew Node 26 active, pnpm under nvm Node 24).
- Alias `doorframe_site` generated with `~/Code/.gen-aliases.sh`.
