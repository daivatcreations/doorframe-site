/*
 * Copyright (c) 2026 Daivat Creations
 * All rights reserved.
 *
 * This source code is private property. Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */
export const SITE_NAME = 'Doorframe';
// The App Store name; "Doorframe" alone was taken. The home-screen name is Doorframe.
export const STORE_NAME = 'Doorframe: Height Tracker';
// doorframefamily.com (owner, 2026-10-06; Porkbun). www and doorframe-site.vercel.app
// redirect here. Change it with static/sitemap.xml, static/robots.txt and scripts/verify.js.
export const SITE_URL = 'https://doorframefamily.com';
export const COMPANY = 'Daivat Creations';
// The same address as Meontor's site (owner, 2026-10-05). One line to change.
export const SUPPORT_EMAIL = 'graymodule@proton.me';
// The App Store subtitle (owner, 2026-10-10). The site doesn't show it; it's here to keep in step.
export const STORE_SUBTITLE = 'Kids’ Growth Chart & Trends';
// The App Store ID (app side, 2026-10-11, 1.0). It makes the badge CTA, the Smart App Banner
// and the JSON-LD's downloadUrl; null brings back "Coming soon" with no banner.
export const APP_STORE_ID: string | null = '6819159306';
export const APP_STORE_URL: string | null = APP_STORE_ID
	? `https://apps.apple.com/app/id${APP_STORE_ID}`
	: null;
// 1200 × 630: the line-drawn door and the app's pages, made from scripts/og-image.html.
export const DEFAULT_OG_IMAGE = '/images/og-image.png';
export const DEFAULT_OG_IMAGE_ALT =
	"Doorframe, the kids' height tracker for iPhone: a line-drawn door frame with the family's height marks, beside a measurement and the cards that explain it";
