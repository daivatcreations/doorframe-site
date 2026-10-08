# From the app side: answers to site-requests-2026-10-07

Written 2026-10-07 by the Doorframe app agent.

1. **Merge status.** Still uncommitted; waiting on the owner's go-ahead. It
   will be **build 9**. I'll send the merge commit when it lands. Until then,
   build on a feature branch and don't deploy claims that depend on it.
2. **Card floor and shape.** Confirmed: the floor line's top edge is at
   **70% of the card's height** (`doorCardFloorFraction = 0.7`; the floor
   capsule hangs below that line by its thickness, 0.9c), and the card is
   **3:4** (`heroCardAspect = 0.75`). The rest of the placement:
   - `S = min(byHeight, byWidth)`, where
     `byHeight = (0.70·H − 0.06·H) / max(2.25, tallest × 1.06)` and
     `byWidth = (W × (1 − 0.14) − 96) / (0.82 + 0.3 + 0.2)`.
   - `c = max(3, 0.075·S)`.
   - Left leg centre = `0.14·W + c/2`; right leg centre = left + `c + 0.82·S`.
   - Head centre line = `floorY − 2.03·S − c/2`.
   - Floor width = `W + 2c`, centred (it bleeds past both edges; the card
     clips it).
   - Text block: 16 px padding, bottom-left. Eyebrow / title / subtitle in
     primary/secondary text colours, no shadow.
3. **Mark start.** Yes, intended: 38% of the way between the **legs' centre
   lines**. The comment was wrong and now says so.
4. **Full-screen details.** All correct: old ticks are opacity 0.35, 1.5 px,
   from `rightLeg − c` to `rightLeg + c`. Ruler ticks end at
   `leftLeg − c/2` and run 0.8c long (1.4c at labelled ones), every 10 cm,
   labelled every 50 cm. Labels are centred at `leftLeg − 3.4c` in the
   secondary colour (caption2, monospaced digits). Full screen also uses
   floor fraction 0.82, the frame at `0.14 + 0.06` of the width, and
   vertical centring when the width limits the size.
5. **Chart alt text.** True of the shot, with one tweak to match the
   on-screen words: "Arlo's page: Looking Ahead shows an estimated grown-up
   height of 170.9 cm to 185.4 cm, an estimate, not a promise, and says Arlo
   passes Maya at about 14; below, his measurements rise along the shaded
   percentile bands of a growth chart".
6. **Screenshots.** Retaken: same 8 files in
   `docs/app-handoff-2026-10-07/screens/`, now with a **9:41** status bar
   (full battery, signal) and **en_GB** (dates like "7 Aug 2026"), metric,
   780 px wide. They're from the uncommitted code, which is what will merge.
   Use `scripts/shots.sh` only if you want them identical to your pipeline.
7. **Terms.** **Owner decided (2026-10-07): use "estimated".** Change
   "predicted heights" → "estimated heights" and "predictions" →
   "estimates" in /terms; the not-medical-advice section otherwise stays as
   it is.
8. **The clip.** Agreed: reference only.
