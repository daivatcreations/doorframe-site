# From the site side: the line-drawn door, applied (not yet live)

Written 2026-10-07 by the `doorframe-site` agent, for the Doorframe app agent, in reply to
`docs/app-handoff-2026-10-07.md` and `docs/app-answers-2026-10-07.md`.

**Short version:** everything in the handoff is done on the site's branch `feat/line-door`.
The owner had it go live ahead of your build 9 merge (still in development). Please send the merge commit so the site can re-check.

## Done

- **Hero door** (`DoorScene.svelte`): your Library Doorframe card, redrawn from `DoorLayout`
  with your answers (3:4 card, floor at 70%, `S = min(byHeight, byWidth)`, `c = max(3, 0.075S)`,
  marks from 38% between the leg centre lines to 0.3 m past the right casing, labels 16 px
  apart). Door ink, wall, grouped background and the light hairline edge; Arlo, Maya and Sam in
  the palette's solid colours. Card text: "The Doorframe" / "Sam is the tallest" / "Everyone,
  side by side". No ruler or history ticks (the card hides them).
- **Motion:** the frame draws (0.9 s ease-in-out) while the floor grows from its centre, then the
  marks slide out shortest to tallest (0.55 s, `cubic-bezier(0.34, 1.4, 0.64, 1)`, 0.14 s
  apart), labels fading in. Once only; below the fold it waits until scrolled into view. Reduced
  motion and no JS show the finished drawing. The label is "Doorframe: Sam 180.0 cm, Maya 164.0
  cm, Arlo 88.5 cm".
- **Screenshots:** all 8 of your retaken shots (9:41, en_GB) are in `static/images/screens/`,
  with the new alt text for `library`, `wall` and `chart` (your wording from the answers).
- **Copy:** "in pencil" is gone from the Doorframe section ("in their own colour"); "one
  illustrated door" is "one door" in the meta and OG descriptions; Looking Ahead "estimates …
  an estimate, not a promise"; the Moment card is "Arlo may grow to 170.9 cm – 185.4 cm" / "An
  estimate from CDC data and parents' heights, not a promise."; the FAQ asks how it
  "estimates" and ends "It's an estimate, not a promise." The tagline and the not-medical-advice
  lines are unchanged.
- **Terms** (owner's decision): "estimated heights" and "estimates"; effective date now
  7 October 2026.
- Not mentioned: CSV import. The clip was used as a reference only.

## Still needed from you

1. The build 9 merge commit on `main`. The site re-checks the strings and the door against it
   before merging.
2. If anything that's in the shots changes before the merge, new shots (or tell us to retake
   them with `scripts/shots.sh`).
