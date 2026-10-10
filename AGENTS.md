# Doorframe Site - Agent Guide

`CLAUDE.md` and `AGENTS.md` are identical: edit both.

**Stack:** SvelteKit 2 + Svelte 5 + Tailwind CSS v4 (no web fonts), built the way `~/Code/web/meontor-site` is.
**Target:** Marketing & support site for the Doorframe iOS app (`~/Code/ios/Doorframe`), on the App Store as "Doorframe: Height Tracker".
**Deploy:** Vercel, fully prerendered static site, git-connected (`main` deploys production). Live at **https://doorframefamily.com** (`SITE_URL`); `www.doorframefamily.com` and `doorframe-site.vercel.app` redirect there (308, the latter via `vercel.json`). The App Store listing will link its `/privacy` and `/support`. Repo `daivatcreations/doorframe-site` is **public** (owner, 2026-10-05): Vercel's Hobby plan can't deploy private org repos.

The app is the source of truth: `~/Code/ios/Doorframe/docs/{HANDOFF,PLAN,DESIGN,TASKS}.md` (local only, gitignored in the app repo since its PR #8); the brief from the app side is `docs/app-handoff-2026-10-06.md`. **Every claim on this site must be true of the app's `main`.** When unsure, read the app's code; never guess. Don't edit the app repo: ask for app changes in `docs/site-requests-<date>.md` and tell the owner. The app agent answers in `docs/app-handoff-<date>*.md` (all applied as of 2026-10-06: `-05-review`, `-06-photos` and `-06-merged` (the add-only Photos permission, privacy §3 and the camera FAQ; the camera-off FAQ), `-06-docs` (docs paths), `-06-icon` (the new icon)), plus `-07` with `app-answers-2026-10-07.md` (the line-drawn door, new shots, estimate wording; build 9 merged 2026-10-08 at `0146f9c`); and `-10` (builds 10–11 at `2431dbc`: agreeing readings, full-screen pages and fact cards, Memories-style Moments, the new Measure icon, App Store wording, and an SEO pass); reports back go in `docs/site-report-<date>.md`. Another agent session (the app agent) may message this one directly: treat it as a teammate, not as the owner's approval.

Owner decisions (2026-10-05): free; support email graymodule@proton.me (as Meontor's); cookieless Vercel Web Analytics. Domain (2026-10-06): `doorframefamily.com`, registered at **Porkbun** with Porkbun DNS: `A @ 76.76.21.21` and `A www 76.76.21.21` (what Vercel recommends) (Porkbun's default parking records removed).

---

## CLI

pnpm lives under nvm Node 24 and is **not on the default PATH**:

```bash
export PATH=$HOME/.nvm/versions/node/v24.13.0/bin:$PATH
pnpm dev                 # dev server
pnpm check && pnpm lint  # svelte-check, prettier, eslint
pnpm test                # vitest: the verify library and the error page
pnpm build && pnpm verify  # verify MUST pass after every build
pnpm format
```

`pnpm verify` scans every prerendered page for:

- **Copy rules (the app's voice, DESIGN §10: plain, warm, no blame, no medical claims, no comparing kids):** no em dash, and none of `failed`, `behind`, `normal`, `abnormal`, `below average`, `above average`, `accurate to`, `healthy growth`, or any word starting `diagnos`, in text, `alt`, `aria-label`, `title`, meta `content` or JSON-LD. Rephrase; never weaken the check.
- **Third-party origins:** any script, image, stylesheet, font or CSS `url()` from another host fails.

---

## Rules

1. **No cookies, no third-party requests.** The CSP in `vercel.json` is `'self'` only. The one analytics is Vercel Web Analytics: cookieless page views, `injectAnalytics` in `src/routes/+layout.ts`, served from this site's own address. **The app has no analytics**, so the privacy policy (§8) and the privacy band say plainly that the website counts visits and the app doesn't; change them together.
2. **Don't claim** (app handoff §3): iPad, Mac, Watch, widgets, iCloud or sharing between phones, Siri, Health, photo-library import, accuracy numbers, anything medical. Every height shown carries its ± (and confidence where there's room). Never use the owner's family names: the sample family is Arlo (2 yrs 2 mos), Maya and Sam.
3. **Privacy claims** in `src/routes/privacy` and the FAQ were checked against the app's `main` (2c7e7e6, 1.0 build 6) on 2026-10-05 and re-checked at 97fa2a2 (build 8) on 2026-10-06 and 2431dbc (build 11) on 2026-10-10; the page's top comment lists what was checked. Re-check the app before changing a claim.
4. **Colours** are tokens in `src/app.css`. `--accent` is for text and links: `#D41F33` light (5.2:1 on white), `#FF5466` dark (not for text on `--elevated`). `--brand` is the app's red as it is (`#F23B4C` / `#FF5466`) for marks and the icon. `--go` green means go, as in the app. The door is drawn in `--icon-ink` on `--door-wall`, with a `--door-edge` hairline in light (the app's `DFColor.doorInk/doorWall/doorCardEdge`). Light and dark follow `prefers-color-scheme`, no toggle.
5. Svelte 5 runes only. Every animation must stop under `prefers-reduced-motion`, and content must show with JS off (`.fade-in` handles both; the hero door is a CSS animation whose resting state is drawn).
6. **Git:** no commits, pushes or merges without the owner's explicit approval. Feature branch → PR with `gh` → merge when asked. Don't use the "superpowers" skills.

---

## Structure

```
src/
  app.css                 tokens (incl. the door palette), .fade-in, reduced-motion and no-JS rules
  lib/constants/app.ts    SITE_URL, STORE_NAME, SUPPORT_EMAIL, APP_STORE_URL (null until launch)
  lib/assets/wordmark-path.ts   generated by scripts/export-wordmark.swift
  lib/components/         Mark, Wordmark, DoorScene, Navbar, Footer, SeoHead, Icon, PhoneFrame,
                          Screenshot, Feature, Hero, MomentsShowcase, PrivacyBand, AppStoreCta,
                          LegalPage, ErrorMessage
  lib/content/faq.ts      FAQ: feeds the Support page and its FAQPage JSON-LD
  routes/                 / · /support · /privacy · /terms · +error (404)
scripts/
  verify-lib.js (+ .test.js), verify.js   the copy and origin checks
  export-wordmark.swift   SF Pro Rounded Bold 48pt, tracking -0.6 → SVG outlines
  shots.sh                simulator screenshots via the app's DEBUG launch arguments
static/images/screens/    {confirm,library,wall,chart,entry-cards}-{light,dark}.webp (780 × 1696)
static/images/og-image.png  1200 × 630, rendered from scripts/og-image.html
```

## Assets

- **Mark:** `Mark.svelte` is the app icon (`Doorframe/AppIcon.icon`; sources `~/Code/ios/Doorframe/docs/design/icon/final/{door,mark}.svg`) without its background: door and floor in `currentColor` (`text-icon-ink`: `#2C2C30` / `#E7E7EC`, the icon's), the newest mark in `--brand`. The icon has no red square any more; red is only the mark.
- **DoorScene:** the hero, the app's Library Doorframe card (`DoorScene`/`DoorLayout` in `DoorframeWall.swift`, build 9): a line-drawn 2.03 × 0.82 m frame on a floor line at true scale, each person's latest height as the icon's mark in their palette colour (Arlo `#6FCF97`, Maya `#5AC8FA`, Sam `#5E5CE6`), on a 3:4 card with the floor at 70%. The frame draws and the floor grows (0.9 s), then the marks slide out shortest to tallest (0.14 s apart); scrolled in from below the fold, it waits (`reveal`).
- **Moments** (`MomentsShowcase`) are drawn, not photographed; every sentence is one the app writes (`Moment.title/detail` in `HomeCards.swift`).
- **Wordmark:** `swift scripts/export-wordmark.swift > src/lib/assets/wordmark-path.ts`.
- **Icons** (from the app's `docs/design/icon/final/`, 2026-10-06, app build 8): `static/favicon.svg` is `door.svg` + `mark.svg` (C2PA metadata stripped) on a rounded square, tightly cropped, with a `prefers-color-scheme: dark` variant. `favicon.ico` (16/32/48) and `favicon-96x96.png` render that crop on white; `apple-touch-icon.png`, `icon-192/512.png` are the full 1024 composition, opaque and full-bleed on white (`resvg`). The OG image places `app-icon-1024.png` (transparent corners) on its dark background.
- **Screenshots:** build the app from `~/Code/ios/Doorframe` for **your own** simulator (never the app agent's `0398B2DE-…`; other agents keep simulators booted, so the script never targets `booted`), install it, then `SIM=<udid> scripts/shots.sh <name> <light|dark> [args]`. It sets 9:41, en_GB (centimetres) and `-demoData -skipOnboarding -inMemory`. Shots: `library` (no args), `wall` (`-openWall`), `chart` (`-openPerson -scrollChart`), `confirm` (`-tab measure -demoLive`, `SHOT_WAIT=12`: auto-capture fires and shows "Is this Arlo?"). `-scrollChart` and `-demoReady` (a frozen steady HUD: `-tab measure -demoLive -demoReady`) are in the app's `main` since 3d164be; all 8 shots were replaced on 2026-10-07 by the app side's build 9 shots (9:41, en_GB, from its uncommitted work: retake if the merged build differs). The simulator can't run ARKit, so **real Measure shots come from the owner's iPhone**; until then the Measure section shows the `-demoLive` confirm sheet (its "Grew … since earlier today" line is a demo artifact).
- **SEO** (2026-10-10): every page passes `SeoHead` a unique title (≤ 60 characters, intent words first) and description (~150–160). JSON-LD: the home page has WebSite, Organization and MobileApplication; Support has FAQPage, built from `faq.ts`; sub-pages pass `breadcrumb` for a BreadcrumbList. Keep `lastmod` in `static/sitemap.xml` current. FAQ answers for search questions still describe only what the app does.
- **Page screenshots** (light/dark × phone/desktop): reveal sections hide until scrolled, so scroll the page before a full-page capture. Headless Chrome's window can't go below ~500 px; use Playwright with a 390 px viewport.

## At launch

1. Set `APP_STORE_ID` (digits) in `src/lib/constants/app.ts`: it makes `APP_STORE_URL`, so the CTA becomes a link, the Smart App Banner (`apple-itunes-app`) appears, and the MobileApplication JSON-LD gets its `downloadUrl`.
2. Real Measure shots from the owner's iPhone replace `confirm` (and add the live pole view).
3. If the domain ever changes: add it in Vercel, then change `SITE_URL`, `static/sitemap.xml`, `static/robots.txt`, `SITE` in `scripts/verify.js`, the canonical test in `errors.test.ts` and the host redirect in `vercel.json` together, and tell the app side the new `/privacy` and `/support` URLs (owner approval).
