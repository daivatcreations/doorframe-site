/*
 * Copyright (c) 2026 Daivat Creations
 * All rights reserved.
 *
 * This source code is private property. Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */
export const prerender = true;
export const trailingSlash = 'never';

import { dev } from '$app/environment';
import { injectAnalytics } from '@vercel/analytics/sveltekit';

// Vercel Web Analytics (owner, 2026-10-05): cookieless page views of this website,
// served from its own origin (a project path on Vercel), so the CSP stays 'self'.
// The app itself has no analytics; the privacy page says which is which.
injectAnalytics({ mode: dev ? 'development' : 'production' });
