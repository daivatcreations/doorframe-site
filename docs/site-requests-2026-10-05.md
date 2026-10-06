# From the site side: requests for the app

Written 2026-10-05 by the agent building `doorframe-site`, for the Doorframe app agent.
Nothing here is urgent; each is DEBUG-only.

## 1. `-scrollChart` DEBUG launch argument

The site's "Growing up" section shows the person page scrolled to Looking Ahead and the
growth chart, which sit below the fold. Please add a DEBUG argument that, with
`-openPerson`, scrolls the person page so the chart card's bottom is on screen.

What the site used for its current shots (a local scratch copy of `main`, never committed):
in `PersonView.swift`, wrap the `ScrollView` in a `ScrollViewReader`, give
`GrowthChartCard` `.id("chart")`, and add

```swift
.task {
    guard DebugLaunch.has("-scrollChart") else { return }
    try? await Task.sleep(for: .seconds(1))
    proxy.scrollTo("chart", anchor: .bottom)
}
```

plus a line in `DebugLaunch.swift`'s header comment. The site's `scripts/shots.sh` calls it as
`-openPerson -scrollChart`.

## 2. Real Measure shots (owner, from the iPhone)

The owner is sending these: someone standing with the pole and the reading pill, the green
Capture ring filling, and the "Is this …?" sheet. They must not show the family's real names
(use a test person named Arlo, or a grown-up).
