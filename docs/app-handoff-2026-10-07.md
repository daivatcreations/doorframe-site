# From the app side: the Doorframe is now drawn like the icon

Written 2026-10-07 by the Doorframe app agent. The app work is on branch
`fix/testflight-8-feedback` (build 9, about to merge). Media for this note
is in `docs/app-handoff-2026-10-07/`.

The site's hero `DoorScene.svelte` and four screenshots still show the old
painted door (wall gradient, wood floor, teal leaf, pencil marks on the left
casing). **The app no longer draws it.** Please redraw the hero door and swap
the screenshots.

## 1. The new Doorframe drawing (replace `DoorScene.svelte`)

The same picture as the app icon (`door.svg` + `mark.svg`), at true scale:
a **heavy line door frame on a full-width floor line**, and **each person's
latest height as the icon's mark** (a bar ending in a dot) in their colour.
There's no wall paint, wood, door leaf, knob or pencil.

See `app-handoff-2026-10-07/screens/library-*.webp` (the card) and
`wall-*.webp` (full screen), plus `door-animation-light.mp4` (the motion).
The video is in feet and inches; the screenshots are in cm.

### Geometry (from the app's `DoorLayout`, in metres; S = px per metre)

| Piece                        | Rule                                                                                                                                                                                                                                                          |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Door                         | 2.03 m tall, 0.82 m wide (inside the frame)                                                                                                                                                                                                                   |
| Line weight `c` (the casing) | `0.075 × S`                                                                                                                                                                                                                                                   |
| Frame                        | One stroked path, centre line: up the left leg from the floor, across the head, down the right leg. Round caps and joins, top corners rounded with radius `1.2c`.                                                                                             |
| Floor                        | A capsule `0.9c` thick, the **full width of the drawing** (bleeds past both edges, like the icon)                                                                                                                                                             |
| Mark bar                     | Capsule `0.82c` thick, from **38% of the way into the opening** to **0.3 m past the right casing**                                                                                                                                                            |
| Mark dot                     | Circle radius `0.95c`, centred on the bar's end                                                                                                                                                                                                               |
| Label                        | Right of the dot, gap of one dot radius + 8 px: **name in the person's colour**, then the height in the secondary text colour (`Sam 180.0 cm`). Semibold, small (iOS caption2). If two labels would collide, nudge the upper one up so they're ≥ 16 px apart. |
| Fit                          | Leave room above the tallest mark: top of drawing = `max(2.25 m, tallest × 1.06)`                                                                                                                                                                             |
| Placement                    | The frame's left edge sits at ~14% of the width; the labels need ~96 px to its right                                                                                                                                                                          |

**Full-screen version only** (`wall-*.webp`; optional on the site): a ruler
up the left of the left leg (a tick every 10 cm, longer and labelled every
50 cm), and the kids' older heights as **faint short ticks across the right
casing**. The hero is the card version: no ruler, latest marks only.

### Colours

|                                                                 | Light                                   | Dark      |
| --------------------------------------------------------------- | --------------------------------------- | --------- |
| Frame + floor ("door ink")                                      | `#2C2C30`                               | `#E7E7EC` |
| Wall (behind the door, above the floor line)                    | `#FFFFFF`                               | `#1C1C1E` |
| Below the floor line (the card's info area)                     | iOS secondarySystemBackground `#F2F2F7` | `#1C1C1E` |
| Card edge, light only (the white wall needs it on a white page) | 1 px `#D9D9DB`                          | none      |

Person colours (the app's palette, `solid` values): **Arlo `#6FCF97`**,
**Maya `#5AC8FA`**, **Sam `#5E5CE6`** (sample family indices 0, 1, 2).
Brand red stays the accent only. The door is never red.

### Motion (the app's, cheap and event-driven; replicate in CSS)

1. **The frame draws itself** from the bottom of the left leg, over the top, down
   to the bottom of the right leg (`stroke-dashoffset` 1 → 0 with
   `pathLength="1"`), **0.9 s ease-in-out**. At the same time **the floor grows out
   from its centre** (`scaleX` 0 → 1, origin centre), same duration.
   History ticks and the ruler fade in alongside.
2. Then **the marks slide out, shortest to tallest** (the family "grows"): each
   bar scales from its left end (`scaleX` 0 → 1, origin left), its dot pops
   in (scale 0 → 1), and its label fades in. Spring of ~0.55 s with a little
   bounce (CSS: `cubic-bezier(0.34, 1.4, 0.64, 1)` over 0.55 s is close).
   Stagger **0.14 s**, starting right after the frame (0.9 s).
3. **Reduced motion and no JS: show the finished drawing.** Keep the current
   approach (a CSS animation that ends in the visible state; your `app.css`
   reduced-motion rule turns it off).

No looping, no idle animation. It plays once when it comes into view (your
`reveal` action is right for this).

### Accessibility

`role="img"` with a label listing the latest heights tallest first, as the app
does: "Doorframe: Sam 180.0 cm, Maya 164.0 cm, Arlo 88.5 cm".

## 2. Swap the screenshots

Fresh simulator shots, metric, 780 px wide, light and dark, same names as
`static/images/screens/` so they drop straight in:

| File                        | Shows                                                                                             | Update the alt text                                                                                                                                                                                        |
| --------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `library-{light,dark}.webp` | Library: the new line-drawn Doorframe card ("Sam is the tallest")                                 | "…the Doorframe card showing Sam, Maya and Arlo's marks on a line-drawn door…"                                                                                                                             |
| `wall-{light,dark}.webp`    | Full-screen Doorframe with ruler and Arlo's older ticks                                           | The current alt says "a teal door … marked on the casing": now "a line-drawn door frame with a ruler; Sam 180.0 cm, Maya 164.0 cm and Arlo 88.5 cm as coloured marks, Arlo's older heights as faint ticks" |
| `chart-{light,dark}.webp`   | Arlo's page: **"Estimated grown-up height"**, 170.9 cm – 185.4 cm, the new caveat, then the chart | see §3                                                                                                                                                                                                     |
| `confirm-{light,dark}.webp` | Save measurement sheet ("Is this Arlo?", 91.4 cm ±0.9 cm), now with a ✕ top right                 | unchanged apart from the ✕                                                                                                                                                                                 |

## 3. Copy that's now out of date

- **Pencil wording** (`+page.svelte` ~L120): "Everyone's latest mark, in
  pencil, on a door drawn to true scale… the kids' older marks in faded
  pencil." Suggested: "Everyone's latest mark, in their own colour, on a door
  drawn to true scale. Tap it for the full door, and turn on history for the
  kids' older marks." Also the meta/OG description's "one illustrated door"
  could be "one door". **Keep the tagline** "The pencil marks on the door
  frame, without the pencil." The app still uses it.
- **Predictions are now worded as estimates.** The owner asked to make it
  plain that a grown-up height is advisory, from CDC data, not a final answer:
  - Person page: the heading is now **"Estimated grown-up height"**, with
    "An estimate from CDC data and parents' heights, not a promise. Every
    child grows in their own way; their doctor can tell you more."
  - Moment card: **"Arlo may grow to 170.9 cm – 185.4 cm"** / "An estimate
    from CDC data and parents' heights, not a promise." (it used to say
    "may grow to 178.2 cm" with "Likely …" below).
  - So: `MomentsShowcase.svelte` third card → that title and detail.
    `+page.svelte` ~L150 "Looking Ahead predicts their grown-up height…" →
    "Looking Ahead estimates…", plus a short "an estimate, not a promise".
    FAQ "How does Looking Ahead predict a grown-up height?" → "estimate", and
    end the answer with "It's an estimate, not a promise." The "not medical
    advice" lines stay as they are.
  - The source phrase varies: "CDC growth data" (their own curve only),
    "parents' heights" (parents only), "CDC data and parents' heights" (both).
- **Measure: choosing who first** (optional, only if it reads well). The
  Measure screen's person menu now starts on **"Anyone"**: Doorframe matches
  the height to your family and asks "Is this Arlo?". You can pick a person
  first and every capture saves to them. "Then it asks 'Is this Arlo?'"
  (~L75) is still true.

## 4. Unchanged / not for the site yet

Icon, colours, URLs, privacy, permissions. **Importing past heights (CSV)** is
planned for after 1.0; don't mention it yet.
