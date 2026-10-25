import { describe, it, expect } from 'vitest';
import { render } from 'svelte/server';
import ErrorMessage from './ErrorMessage.svelte';
import SeoHead from './SeoHead.svelte';
import { findCopyViolations } from '../../../scripts/verify-lib.js';
import { APP_STORE_ID } from '$lib/constants/app';

// The error page is never prerendered, so `pnpm verify` cannot see it; these do.
describe('ErrorMessage', () => {
	it('says a missing page is missing', () => {
		const { body } = render(ErrorMessage, { props: { status: 404 } });
		expect(body).toContain("This page isn't here.");
	});
	it('does not call a server error a missing page', () => {
		const { body } = render(ErrorMessage, { props: { status: 500 } });
		expect(body).not.toContain("isn't here");
		expect(body).toContain('Something went wrong.');
	});
	it('follows the copy rules for every status', () => {
		for (const status of [404, 500]) {
			const { body } = render(ErrorMessage, { props: { status } });
			expect(findCopyViolations(body)).toEqual([]);
		}
	});
});

describe('SeoHead', () => {
	it('gives a noindex page no canonical link', () => {
		const { head } = render(SeoHead, {
			props: { title: 'Not found', description: 'x', path: '/404', noindex: true }
		});
		expect(head).not.toContain('rel="canonical"');
		expect(head).toContain('noindex');
	});
	it('keeps the canonical on an indexed page', () => {
		const { head } = render(SeoHead, { props: { title: 'x', description: 'x', path: '/support' } });
		expect(head).toContain('href="https://doorframefamily.com/support"');
	});
	it('adds a Home › page breadcrumb on a sub-page', () => {
		const { head } = render(SeoHead, {
			props: { title: 'x', description: 'x', path: '/support', breadcrumb: 'Support' }
		});
		expect(head).toContain('"@type":"BreadcrumbList"');
		expect(head).toContain('"item":"https://doorframefamily.com/support"');
	});
	it('has a Smart App Banner exactly when there is an App Store ID', () => {
		const { head } = render(SeoHead, { props: { title: 'x', description: 'x', path: '/' } });
		if (APP_STORE_ID) {
			expect(APP_STORE_ID).toMatch(/^\d+$/);
			expect(head).toContain(`<meta name="apple-itunes-app" content="app-id=${APP_STORE_ID}"/>`);
		} else {
			expect(head).not.toContain('apple-itunes-app');
		}
	});
});
