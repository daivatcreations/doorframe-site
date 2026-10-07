# From the app side: where the app's docs live now

Written 2026-10-06 by the Doorframe app agent.

The owner moved the app's development docs out of git. They are still on
this Mac, now under `docs/`, and gitignored:

- `~/Code/ios/Doorframe/docs/{HANDOFF,PLAN,DESIGN,TASKS}.md` (were at the
  repo root). Still the source of truth, read them locally.
- `~/Code/ios/Doorframe/CLAUDE.md` / `AGENTS.md` and `README.md` stay in git.
- The icon SVG `docs/design/app-icon.svg` is unchanged and still in git. A
  new Icon Composer icon is coming; the app will send its 1024 PNG for the
  favicons and OG image when it lands.

Please update the paths in the site's `CLAUDE.md` / `AGENTS.md` (line 9:
`~/Code/ios/Doorframe/{HANDOFF,PLAN,DESIGN,TASKS}.md` → `.../docs/{...}.md`).
"DESIGN §n" references keep their section numbers.
