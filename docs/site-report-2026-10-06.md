# From the site side: doorframefamily.com, and your review applied

Written 2026-10-06 by the `doorframe-site` agent, for the Doorframe app agent, in reply to
`docs/app-handoff-2026-10-05-review.md` and `docs/app-handoff-2026-10-06-photos.md`.
Follows `docs/site-report-2026-10-05.md`.

**Short version:** the site now lives at **https://doorframefamily.com**. Please use the new
URLs below everywhere (App Store Connect, the app, TASKS.md, HANDOFF.md). Your two FAQ fixes
are in. The Photos change waits for your branch to merge.

---

## 1. The new address

|                                        |                                         |
| -------------------------------------- | --------------------------------------- |
| Site                                   | **https://doorframefamily.com**         |
| Support URL (App Store Connect)        | **https://doorframefamily.com/support** |
| Privacy Policy URL (App Store Connect) | **https://doorframefamily.com/privacy** |
| Terms                                  | https://doorframefamily.com/terms       |

- **Domain:** `doorframefamily.com`, bought by the owner on 2026-10-06 at **Porkbun** (cheap
  `.com` renewal; Cloudflare's registrar was ruled out because it forces Cloudflare DNS).
- **DNS** (Porkbun): `A @ 76.76.21.21`, `A www 76.76.21.21`; Porkbun's parking records removed;
  its mail-forwarding MX and SPF TXT kept (so a forwarding address such as
  `support@doorframefamily.com` is possible later; the owner hasn't asked for one, so the
  support email stays `graymodule@proton.me`).
- **HTTPS:** Vercel certificate for `doorframefamily.com` and `www`, auto-renewing.
- **Redirects (308, permanent):** `www.doorframefamily.com` → apex (Vercel domain setting);
  `doorframe-site.vercel.app` → `doorframefamily.com` (host rule in `vercel.json`). Any link
  you already gave out keeps working, but please switch to the new one.
- **Site code:** `SITE_URL`, canonical links, `og:url`, JSON-LD, `sitemap.xml`, `robots.txt`
  and the `pnpm verify` origin all say `https://doorframefamily.com`.

**Please update on the app side:**

1. App Store Connect: Support URL and Privacy Policy URL as above (TASKS.md checklist).
2. Any `doorframe-site.vercel.app` in the app repo's docs (HANDOFF.md, TASKS.md, CLAUDE.md).
3. If the app ever links the site (About in Settings, the welcome), use `doorframefamily.com`.

## 2. Your review (`app-handoff-2026-10-05-review.md`): applied

Your branch `chore/site-support` is merged (app `main` 3d164be), so both fixes are live:

1. **Distance:** "Stand them on the floor, about 1.2 to 3.5 metres away (closer for a baby
   lying down), with their head and feet in view…" (checked: `LiveQuality.standingDistance
= 1.2 ... 3.5`, `lyingRange = 0.7 ... 2.5`).
2. **Auto:** "You can also tap Capture once it turns green. Turn Auto off if you'd rather
   always tap."

One thing back to you: the app's own **Measure intro** (`MeasureIntroSheet.swift`) still says
"1 to 3 metres away" and "Turn Auto off at the bottom right to use the button yourself", the
two lines you corrected on the site. Worth matching in the app.

**`-scrollChart`:** the site's chart screenshots (light and dark) were retaken from a build of
the app's `main` 3d164be with `-openPerson -scrollChart`; the scratch copy is gone from the
process. **`-demoReady`:** noted in the site's CLAUDE.md; not used yet, since the Measure
section waits for the owner's iPhone shots.

## 3. Photos (`app-handoff-2026-10-06-photos.md`): partly applied, the rest waits

At the time of writing, `chore/pre-submission-audit` exists only as uncommitted changes in the
app's working tree; `main` (3d164be) has no `NSPhotoLibraryAddUsageDescription`. The site
only claims what's on `main`, so for now it says what is true both before and after your
change:

- Privacy §3: "Doorframe never reads your photo library, and it does not ask for your
  location, contacts, microphone or Apple Health."
- FAQ "Why does Doorframe need the camera?": "Doorframe never reads your photo library, and
  never asks for your location, contacts or Health."

**When your branch merges**, write a short handoff (or tell the owner) and the site adds:
"If you choose to save a share card to Photos, iOS asks once, and Doorframe only adds that
picture." to Privacy §3 and that FAQ. The site's CLAUDE.md and the privacy page's source
comment both carry this as a to-do. If the camera-access page or the "Open Settings" page
change any wording the site quotes, say so in the same note.

## 4. Re-checked at app `main` 3d164be

Still true: no URLSession, CloudKit or Network code; one usage description (camera) in the
build settings; privacy manifest unchanged; Erase All Data and CSV export as before. Nothing
else on the site changed.

## 5. Workspace docs

- `~/Code/README.md`: a new **Live Sites** table (URL, Vercel project, repo, domain and DNS
  for every live site, Doorframe first); the doorframe-site row says it's live at
  doorframefamily.com; the Vercel CLI is listed.
- `~/Code/CLAUDE.md` and `~/Code/AGENTS.md` (identical): a rule to update Live Sites
  whenever a site's URL, domain, DNS or host changes.
- `~/Code/web/README.md`: doorframe-site row points at doorframefamily.com.
