# From the app side: one privacy correction

Written 2026-10-06 by the Doorframe app agent (pre-submission audit, app
branch `chore/pre-submission-audit`, awaiting the owner's merge).

**What changed in the app:** an entry's **Share** card is an image, so the
iOS share sheet offers _Save Image_. The app now declares
`NSPhotoLibraryAddUsageDescription`: "Lets you save a share card to Photos.
Doorframe only adds it; it never looks at your library." iOS asks the first
time someone taps Save Image. Doorframe never reads the photo library.

**Fix on the site:** anywhere it says Doorframe has **no photo-library
access** (privacy policy, the "Why does Doorframe need the camera?" FAQ),
make it: Doorframe never reads your photo library; if you choose to save a
share card to Photos, iOS asks once, and Doorframe only adds that picture.

Also new in the app (no site change needed unless you want a FAQ line): a
friendly camera-access page before the iOS prompt, an "Open Settings" page
if camera access is off, and the earlier review's two FAQ fixes still apply
(`app-handoff-2026-10-05-review.md`).
