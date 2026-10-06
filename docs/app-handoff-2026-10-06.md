# From the app side: the Doorframe website

Written 2026-10-06 by the agent working on the Doorframe app, for the agent
who builds the site. The site doesn't exist yet. Build it **exactly the way
`~/Code/web/meontor-site` is built** (same stack, structure, scripts, checks,
deploy), with Doorframe's content, screenshots and brand.

The app stays the source of truth: `~/Code/ios/Doorframe/{HANDOFF,PLAN,DESIGN,TASKS}.md`.
**Every claim on the site must be true of the app's `main`.** When unsure,
read the app's code; never guess. Copy this file into the site repo as
`docs/app-handoff-2026-10-06.md` so the site keeps its own record.

---

## 1. The app in one breath

**Doorframe: Height Tracker** (home-screen name _Doorframe_). The pencil
marks on the door frame, without the pencil. A simple, private family height
tracker for iPhone: **measure live with LiDAR** (the hero), see the whole
family on one illustrated Doorframe, and follow kids' growth on WHO/CDC
charts. Built for a toddler; works for any age.

- iPhone only, iOS 26 and later. Portrait. Bundle `com.daivatcreations.Doorframe`.
- In TestFlight (1.0, build 6). Not on the App Store yet; no App Store URL or ID.
- Developer / brand: **Daivat Creations** (GitHub org `daivatcreations`).
- Price: **ask the owner** (don't claim "free" until confirmed).

## 2. What's true today (claim these)

**Measure live (the hero).** On an iPhone with LiDAR (the Pro and Pro Max
models), point the camera at someone standing on the floor. A 3D measuring
pole appears beside them with 10 cm ticks; hold roughly still and it
captures by itself (auto-capture forgives a wobbly toddler), then asks "Is
this Arlo?" based on who it's most likely to be. Standing or lying down
(babies). Plain coaching on screen: step back, show their feet, hold still,
too dark, "Is something covering the camera?". A green Capture button when
the reading is steady.

**Every number shows its range and confidence** (e.g. 91.2 cm ± 0.9 cm,
high confidence). This is a product rule; the site should show it too.

**Other ways to add a height:** _Take Photo with LiDAR_ (a still photo that
keeps depth) and _Enter a height_ (e.g. a check-up number). Entering a height
works on any iPhone. Library photo import was removed: don't mention it.

**The Library.** Opens with "Your Family": the **Doorframe** card (an
illustrated door at true scale, 2.03 m, with everyone's latest pencil mark
and name on the casing; tap for the full-screen door with older marks in
faded pencil), then one card per person. Then Recent, Moments, a shelf per
person, Favorites. Apple Music-style library.

**Kids (babies, children, teens).** WHO (0–2 years) and CDC (2–20 years)
growth charts with percentile bands, the current percentile, growth pace,
and **Looking Ahead**: a predicted grown-up height (from their own growth
curve from age two, and/or both parents' heights; the family chooses who
the parents are, Doorframe never guesses) and "passes Mum at about 13".
**Grown-ups** get a steady height card, no chart.

**Moments:** small, warm facts: "Arlo grew 2.1 cm since July", "Passes Mum
at about 13", "Arlo may grow to 1.78 m", "Time to measure Arlo".

**Also:** reminders to measure (local notifications, per person); units
follow the region (ft/in in the US, cm elsewhere) or Settings; CSV export;
erase everything in Settings; light and dark; Dynamic Type; a short
three-page welcome.

## 3. Don't claim (not true, or not yet)

iPad, Mac, Apple Watch, widgets, iCloud / sharing between parents' phones,
Siri, Health, family sharing, photo-library import, accuracy numbers
("accurate to 1 mm"), medical anything (no diagnosis, no "healthy growth",
no advice). Growth percentiles are information, not medical advice: say so
in the Terms and FAQ. Don't name the owner's family.

## 4. Privacy (checked against the app's code, 2026-10-06)

- **No networking code** in the app (no URLSession, no CloudKit). No account,
  no sign-up, no server, no analytics, no ads, no tracking, no third-party
  SDKs (zero dependencies).
- Everything (people, heights, photos, notes) is stored on the iPhone only
  (SwiftData, the app's own container). Nothing leaves unless the user shares
  it (CSV export, share sheet).
- **Camera**: used to measure ("Doorframe uses the camera and LiDAR to measure
  height live. Nothing leaves this iPhone."). **Notifications**: optional
  measuring reminders, scheduled on device. No photo-library access, no
  location, no contacts, no HealthKit.
- Privacy manifest: only `UserDefaults` (CA92.1). App Store label will be
  **Data Not Collected**.
- Erase All Data in Settings deletes everything.
- The welcome's promise, in the app's words: "No account, no sign-up ·
  Measured and stored on this iPhone · No ads, no tracking, no analytics ·
  Never shared or sold. Only you can share, when you choose · Erase
  everything any time in Settings."

Site analytics: Meontor's site uses cookieless Vercel Web Analytics. **Ask the
owner** whether Doorframe's site should too. The app's own promise is "no
analytics", so if the site measures visits, its privacy page must say plainly
that this is the website, not the app.

## 5. Brand

- **Accent: Apple News red.** App values: light `#F23B4C` (0.95/0.23/0.30),
  dark `#FF5466` (1.0/0.33/0.40). `#F23B4C` is about 3.7:1 on white, so pick
  a darker red for text and links to reach 4.5:1 (as Meontor did with its
  accent). The red stays for marks, buttons and the icon.
- Everything else: Apple-like neutrals, light and dark via
  `prefers-color-scheme`, system font stack (no web fonts), SF Symbols-style
  icons drawn as inline SVG.
- **Green means "go"** in the app (the Capture button, high confidence), not
  brand.
- **Icon:** `~/Code/ios/Doorframe/Doorframe/Assets.xcassets/AppIcon.appiconset/AppIcon.png`
  (1024 px, red). Source SVG `docs/design/app-icon.svg` (render with the
  app's `swift scripts/render-icon.swift`; ImageMagick mangles it). Use it for
  favicons, the apple-touch-icon and the OG image.
- **Illustration:** the Doorframe palette (cream wall, white casing, teal
  panelled door, brass knob, wood floor) is in the app's DESIGN §2 and
  `Doorframe/Features/Family/DoorframeWall.swift`. A drawn SVG door with
  rising pencil marks (like onboarding page 1) is the natural hero for the
  site, the way Meontor redraws its mark.
- **Voice** (app DESIGN §10): plain, warm, no blame; always say what to do
  next; no medical claims; no comparison between kids. Short sentences.
  Every height shows ±.

## 6. Pages (mirror Meontor)

`/` (home) · `/support` (FAQ + contact) · `/privacy` · `/terms` · 404.
Home, roughly: hero (Doorframe door + "The pencil marks on the door frame,
without the pencil") → Measure live (screens) → the family Doorframe →
growth charts and Looking Ahead → moments → privacy band → App Store CTA
(disabled "Coming soon" until launch). The App Store listing will link
`/privacy` and `/support`, so those must be solid.

FAQ seeds: Which iPhones can measure live? (LiDAR: the Pro and Pro Max
models; others can enter heights.) How accurate is it? (Every reading shows
its range and confidence; hold still, stand them on the floor, show head
and feet.) Does it work for babies? (Lying-down mode.) Where's my data? (On
this iPhone only.) Can both parents use it? (Not yet: each iPhone keeps its
own family.) Is it medical advice? (No.) How do I export or erase? (Settings.)

## 7. Screenshots

The simulator can't run ARKit or person detection, so **real Measure shots
must come from the owner's iPhone** (ask for them: standing child with the
pole, the reading pill, the green Capture ring, the "Is this …?" sheet).
Everything else can be shot from the simulator with the app's DEBUG launch
arguments (see the app's CLAUDE.md §5):

```bash
# build the app (from ~/Code/ios/Doorframe) for your OWN simulator (create one;
# don't use 0398B2DE-…, the app agent's), then:
xcrun simctl launch <sim> com.daivatcreations.Doorframe -demoData -skipOnboarding -inMemory [args]
```

- Library (carousel + Doorframe): no extra args. `-openWall` full-screen
  Doorframe. `-openPerson` a child's page (charts are below the fold).
  `-tab settings`. `-onboarding 0|1|2` the welcome pages. `-addPerson` /
  `-editPerson` the editor. `-tab measure -demoLive` the Measure HUD on a fake
  backdrop (fine for a HUD detail, not as a hero).
- Light and dark for every shot; set the clock to 9:41
  (`xcrun simctl status_bar <sim> override --time 9:41 ...`).
- The sample family is **Arlo** (a boy, 2 years 2 months), **Maya** and
  **Sam**. Never use the owner's real family names.
- If a shot needs a new DEBUG argument (e.g. scrolled to the chart), ask the
  owner to have the app agent add it. **Don't edit the app repo.**

Write a `scripts/shots.sh` like Meontor's.

## 8. Repo, deploy, rules

- New project at `~/Code/web/doorframe-site`. **Private** GitHub repo
  `daivatcreations/doorframe-site` (like the app's private
  `daivatcreations/Doorframe`), not public like meontor-site.
- Vercel: a new project, git-connected (`main` deploys production), fully
  prerendered static, CSP `'self'`. `SITE_URL` = the `*.vercel.app` address
  until the owner buys a domain (ask). Check the Vercel GitHub app can see
  the `daivatcreations` org.
- Support email: **ask the owner** (the app has no feedback email yet).
- Same checks as Meontor: `pnpm check && pnpm lint && pnpm test && pnpm build && pnpm verify`
  (copy rules + no third-party origins). Adapt the banned-words list to
  Doorframe's voice, and add "accurate to", "diagnos", "healthy growth".
- Git: feature branch → PR (`gh`) → merge only with the owner's go-ahead;
  never push straight to `main`. No commits or pushes without approval.
- Don't use the "superpowers" skills (owner preference).
- Workspace docs: follow the New Project Checklist in `~/Code/README.md`
  (alias, `~/Code/web/README.md`, Active Projects table, the site's own
  `CLAUDE.md` + identical `AGENTS.md`).

## 9. Talking to the app side

- App changes the site needs (DEBUG args, copy facts): write
  `docs/site-requests-<date>.md` in the site repo and tell the owner.
- When the app changes, the app agent writes a new
  `docs/app-handoff-<date>.md` into the site repo.
