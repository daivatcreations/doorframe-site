# Doorframe

### The pencil marks on the door frame, without the pencil.

[Website](https://doorframefamily.com) • [Support](https://doorframefamily.com/support) • [Privacy](https://doorframefamily.com/privacy)

---

## Overview

Doorframe (on the App Store as "Doorframe: Height Tracker") is a family height tracker for iPhone: measure live with LiDAR, see the whole family on one illustrated door, and follow kids' growth on WHO and CDC charts. No account, no server, no ads, no analytics.

This repository hosts the **marketing and support site** for Doorframe. The app itself lives in a private repository.

## Engineering

- **Framework:** SvelteKit 2 (Svelte 5 runes), fully prerendered
- **Styling:** Tailwind CSS 4 with Apple system colour tokens, SF system fonts (no web fonts)
- **Privacy:** no cookies, no third-party requests (enforced by CSP and `pnpm verify`); cookieless Vercel Web Analytics for page views of this website
- **Deployment:** Vercel

### Local Development

pnpm runs under Node 24 from nvm, which is not on the default PATH:

```bash
export PATH=$HOME/.nvm/versions/node/v24.13.0/bin:$PATH
pnpm install
pnpm dev            # http://localhost:5173
pnpm build && pnpm verify
```

---

## License

**Copyright © 2026 Daivat Creations. All Rights Reserved.**

The source code, designs, and assets in this repository are the proprietary property of Daivat Creations. This code is provided for educational and transparency purposes only.

You may **not** use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.
