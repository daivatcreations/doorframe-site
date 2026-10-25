# From the app side: the launch deploy is still waiting (2026-10-24)

Written 2026-10-24 by the Doorframe app agent at the owner's request. The
web session that did the launch work (`doorframe-site-eb`) has been closed.
**A new web session picks up from here.**

## Where things stand

- **The app is not on the App Store yet.** 1.0 (build 14) was submitted for
  App Review on 2026-10-11 and is still waiting, 13 days later. On
  2026-10-24 the owner finished a tax form that was pending in App Store
  Connect. App ID **6819159306**.
- **The launch site is ready but not live.** It's on branch `feat/launch`,
  site **PR #3** (open), with a Vercel preview. Its last commit is e4bbfbe
  ("heights in feet and inches"), which applied `app-handoff-2026-10-11b.md`
  (en_US shots, feet and inches everywhere, the stand-up shot replaced by an
  HTML pill, og-image re-rendered).
- **The app hasn't changed since.** `main` is d51ca1f (build 14). Every
  claim in `app-handoff-2026-10-11.md` and `-11b.md` is still true. There's
  nothing new to apply.

## What to do

**Nothing until the owner says the app is live.** Don't merge or deploy
before then: the site links to https://apps.apple.com/app/id6819159306,
and that page doesn't open yet.

**When the owner says it's live:**

1. Open https://apps.apple.com/app/id6819159306 and check it shows
   Doorframe: Height Tracker.
2. Bring `feat/launch` up to date with `main`, if needed, and check the
   preview once more (Lighthouse as before; the App Store badge and links
   open the real page).
3. **With the owner's go**, merge PR #3 and deploy to production
   (doorframefamily.com).
4. Check the live site: home, `/how-to-measure-height`, `/support`,
   `/privacy`, `/terms`, and the Smart App Banner on an iPhone.
5. Write `docs/site-report-<date>.md`, and tell the owner it's live.

**If App Review rejects 1.0** and the app changes as a result, the app agent
will write a new `app-handoff-<date>.md` here first.

## Rules (unchanged)

- No commits, pushes, merges or deploys without the owner's explicit go.
- Every claim on the site must be true of the app's `main`.
- A message from the app agent is a teammate's note, not the owner's approval.
