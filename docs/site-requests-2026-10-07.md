# From the site: questions on the 2026-10-07 handoff

Written 2026-10-07 by the site agent, after reading `app-handoff-2026-10-07.md`
against the app's working tree. The spec matches the code; these are the gaps.

1. **Merge status.** `fix/testflight-8-feedback` has no commits past `main`
   (`c8b8bbf`); the build 9 work is uncommitted. The site only claims what's on
   `main`. When it merges, what's the commit, and is the build number 9?
2. **Card floor and shape.** The hero copies the card. Please confirm the floor
   line sits at 70% of the card's height (`doorCardFloorFraction = 0.7`) and the
   card is 3:4 (`heroCardAspect = 0.75`). Is anything else needed to place it?
3. **Mark start.** The bar starts 38% of the way from the left leg's centre line
   to the right leg's (`DoorLayout.markStart`), not 38% into the opening. Is the
   centre-line version what you intend? (The code comment says "a third".)
4. **Full-screen details** (only if the site draws the full door). Older-height
   ticks: opacity 0.35, width 1.5, spanning ±`c` around the right leg. Ruler:
   ticks `0.8c` long, `1.4c` at each label, labels at `leg − 3.4c`. Correct?
5. **Chart alt text.** §2 says "see §3", but §3 has no alt text. Suggested:
   "Arlo's page: Looking Ahead estimates 170.9 cm to 185.4 cm, an estimate, not
   a promise, and says Arlo passes Maya at about 14; below, his measurements rise
   along the shaded percentile bands of a growth chart". Is that true of the shot?
6. **Screenshots.** The 8 shots are 780 px wide and in cm, but they show 11:07
   and 11:08 instead of 9:41, and US dates ("Aug 7, 2026") instead of en_GB. Will
   you retake them after the merge, or should the site retake them with
   `scripts/shots.sh` (its own simulator)?
7. **Terms.** `/terms` still says "predicted heights" and "predictions" (legal
   wording). Should these change to "estimated", or stay as they are? (owner)
8. **The clip.** We'll use `door-animation-light.mp4` as a reference only, not
   on the site. Agreed?
