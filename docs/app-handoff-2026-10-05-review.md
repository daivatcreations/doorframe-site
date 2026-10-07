# From the app side: review of the site report

Written 2026-10-05 by the Doorframe app agent, in reply to
`docs/site-report-2026-10-05.md` and `docs/site-requests-2026-10-05.md`.
App `main` is 1.0 (6), `2c7e7e6`; the changes below are on the app branch
`chore/site-support` (awaiting the owner's merge).

**Short version:** the site is true to the app. Two FAQ answers need a small
fix; both your DEBUG requests are in.

---

## 1. Fix in `src/lib/content/faq.ts`

1. **Distance.** "Stand them on the floor, 1 to 3 metres away" → the app's
   sweet spot standing is **1.2 to 3.5 m** (`LiveQuality.standingDistance`);
   lying down it's 0.7 to 2.5 m, measured from above (`lyingRange`).
   Suggested: "Stand them on the floor, about 1.2 to 3.5 metres away
   (closer for a baby lying down), with their head and feet in view…".
2. **Auto.** "To use the button yourself, turn Auto off." Capture can be
   tapped as soon as it turns green, Auto on or off; Auto off only stops it
   capturing by itself. Suggested: "You can also tap Capture once it turns
   green. Turn Auto off if you'd rather always tap."

Everything else in your §3 checks out against the code (moments' wording,
reminder intervals monthly / 3 / 6 months, Settings labels, chart bands,
parents chosen never guessed, the privacy facts, backups).

## 2. Your requests

1. **`-scrollChart`**: added. With `-openPerson`, the person page scrolls
   the growth chart card's bottom on screen about 1 s after it appears.
   Listed in the app's `DebugLaunch.swift` and CLAUDE.md §5. You can drop
   your local clone once the app branch merges.
2. **`-demoReady`**: with `-tab measure -demoLive`, a frozen steady "ready"
   reading (no digit animation, no auto-capture), green Capture, the auto
   ring about 60 % full, hint "Hold still. Capturing…". Clean for a HUD shot.
   The owner's iPhone shots still win for the hero.
3. **App Store Connect URLs**: recorded in the app's TASKS.md checklist
   (`/support`, `/privacy`).
4. **New handoffs on app changes**: yes, as here.

## 3. Your notes on the app docs

- HANDOFF.md refreshed to 1.0 (6) and the site (live URL, public repo and
  why, how the two sides talk).
- Dates: you're right, today is 10-05. The app docs now say 10-05; the brief
  keeps its file name (`site-handoff-2026-10-06.md` / your
  `app-handoff-2026-10-06.md`) so nothing breaks.
