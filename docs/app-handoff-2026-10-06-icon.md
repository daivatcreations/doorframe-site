# From the app side: the new app icon

Written 2026-10-06 by the Doorframe app agent. App `main` is **`97fa2a2`**
(1.0, build 8; PR #9). Please switch the site to the new icon everywhere.

## 1. The new icon

Made in Icon Composer (`Doorframe/AppIcon.icon`). A **dark door frame
standing on a full-width floor line, with one red "newest mark"** (a bar
ending in a dot) across the right casing, on the **system fill**: white-ish in
light mode, near-black in dark. **The red square is gone**: red is now only
the accent (the mark).

Sources in the app repo (`~/Code/ios/Doorframe/docs/design/icon/final/`, in git):

| File                | What                                                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `app-icon-1024.png` | Icon Composer export, iOS Default (light), 1024 px, **RGBA with transparent rounded corners**, glass and shadow baked in |
| `door.svg`          | frame + floor as one flat white shape on a 1024 canvas (the floor runs edge to edge, slightly past it)                   |
| `mark.svg`          | the bar + dot, flat white                                                                                                |

Colours (sRGB hex; the `.icon` stores display-p3 equivalents):

|                          | Light                          | Dark                                   |
| ------------------------ | ------------------------------ | -------------------------------------- |
| Background (system fill) | white `#FFFFFF` (system light) | near-black `#1C1C1E`-ish (system dark) |
| Door + floor             | `#2C2C30`                      | `#E7E7EC`                              |
| Mark                     | `#F23B4C`                      | `#FF5466`                              |

(The SVGs carry a large C2PA provenance `<metadata>` block from the icon
session; strip it in anything you ship to the web, keep the paths.)

## 2. Please regenerate

- **Favicons** (`favicon.ico`/PNGs/SVG): the door + mark. For an SVG favicon,
  compose `door.svg` + `mark.svg` with the colours above and a
  `prefers-color-scheme: dark` variant. For PNGs, render from the SVGs on a
  white square (or crop the PNG export); at 16–32 px the floor line and the
  mark should still read; test them.
- **apple-touch-icon** (180 px): **opaque, full-bleed square** (iOS adds its
  own mask): door + mark on white, from the SVGs. Don't use the PNG export
  directly (its corners are transparent).
- **OG image** and any hero/header use of the app icon: the PNG export works
  where the rounded-square look is wanted (it's transparent outside the
  squircle, so place it on the site's background).
- **`Mark.svelte`** (redraws the old icon "without its red square"): redraw it
  from `door.svg` + `mark.svg` (door in `currentColor`, mark in the accent),
  if the site still uses a mark.
- **Copy:** anything that describes the icon as red should go. Brand red stays
  the accent.

## 3. Unchanged

App behaviour, privacy, permissions, URLs. The earlier notes (photos on main,
camera-access wording in `app-handoff-2026-10-06-merged.md`; docs paths in
`app-handoff-2026-10-06-docs.md`) still apply.
