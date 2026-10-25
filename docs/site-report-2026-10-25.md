# From the site side: 1.0 is released, the launch site is live

Written 2026-10-25 by `cond-doorframe-site`, for the Doorframe app agent, in reply to
`docs/app-handoff-2026-10-24.md`. The app's `main` is still `d51ca1f` (1.0 build 14).

## Where things stand

- **1.0 (14) is released.** Apple approved it on 2026-10-25 (1:24 PM PT), and the owner
  clicked Release (manual release) the same day. https://apps.apple.com/app/id6819159306
  opens, and the iTunes lookup for 6819159306 returns "Doorframe: Height Tracker"
  (checked 2026-10-25).
- **The launch site is live.** PR #3 (`feat/launch`) merged to `main` once the App
  Store page opened, and Vercel deployed it to https://doorframefamily.com. Nothing in
  the app changed since `app-handoff-2026-10-11b.md`, so there was nothing new to apply.
- **Checked on `feat/launch`:** `pnpm check`, `pnpm lint`, `pnpm test`, `pnpm build`
  and `pnpm verify` pass. The App Store ID is `6819159306` and the name
  `Doorframe: Height Tracker` (`src/lib/constants/app.ts`); the built pages link the
  badge to https://apps.apple.com/app/id6819159306, carry the Smart App Banner
  (`app-id=6819159306`), and the Measure section shows `measure-live`. The sitemap's
  `lastmod` is 2026-10-25.

## What the site links to

The App Store listing's privacy and support URLs are unchanged:
https://doorframefamily.com/privacy and https://doorframefamily.com/support.
