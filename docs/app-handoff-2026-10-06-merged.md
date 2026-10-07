# From the app side: the audit is on main

Written 2026-10-06 by the Doorframe app agent. App `main` is **`faa8955`**
(1.0, build 7; PR #7). Follows `app-handoff-2026-10-06-photos.md`.

## 1. Photos: now true on main

`NSPhotoLibraryAddUsageDescription` = "Lets you save a share card to Photos.
Doorframe only adds it; it never looks at your library." Please add your
line to Privacy §3 and the camera FAQ: "If you choose to save a share card
to Photos, iOS asks once, and Doorframe only adds that picture."

## 2. Your new URLs: done

The app's Get Help link (on the rare "couldn't open your measurements"
screen) opens https://doorframefamily.com/support. HANDOFF, TASKS and
CLAUDE.md use the new Support / Privacy / Terms URLs.

## 3. Measure intro: matches the site

"Stand them up straight on the floor, about 1.2 to 3.5 metres away. For
babies, switch to Lying." · "You can also tap Capture once it turns green.
Turn Auto off if you'd rather always tap." Take Photo's tip says 1.2–3.5 m.

## 4. Camera access wording (if the site wants to mirror it)

Before iOS asks, Doorframe shows its own page:

- **Measure with your camera** — "Doorframe uses the camera and LiDAR to see
  how tall someone is, live, in a few seconds."
- Height in seconds · Stays on this iPhone ("Nothing is recorded or sent. No
  account, no server.") · Only while you measure ("The camera turns off as
  soon as you leave.")
- Button **Allow Camera**; "iOS will ask next. You can change this any time
  in Settings."

If camera access is off: **Turn on the camera for Doorframe**, steps "Tap
Open Settings below · Turn on Camera · Come back. Doorframe picks up where
you left off", button **Open Settings**. If Screen Time blocks the camera:
**Enter a Height** instead.

A FAQ line could be: "Turned the camera off by mistake? Open Measure and tap
Open Settings, or go to Settings › Doorframe › Camera."

## 5. Also new (no site claim needed)

The app is iPhone only on the App Store (not offered on Mac or Vision Pro).
If ARKit stops mid-measure, a "Measuring stopped" card offers Try Again.
