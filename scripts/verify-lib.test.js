import { describe, it, expect } from 'vitest';
import { findCopyViolations, findForeignOrigins, findForeignOriginsInAsset } from './verify-lib.js';

const SITE = 'https://doorframe.example';

describe('findCopyViolations', () => {
	it('flags an em dash in body text', () => {
		expect(findCopyViolations('<p>Tall — always</p>')).toEqual(['em dash: "Tall — always"']);
	});
	it('flags banned words in visible text, case-insensitively', () => {
		const hits = findCopyViolations('<p>Normal height.</p><p>A bit BEHIND.</p>');
		expect(hits).toHaveLength(2);
	});
	it('flags banned words in alt, aria-label, title and meta content', () => {
		const html =
			'<img alt="normal growth"><a aria-label="behind you"></a><title>Failed</title><meta name="description" content="accurate to 1 mm">';
		expect(findCopyViolations(html)).toHaveLength(4);
	});
	it('matches whole words, so "abnormally" and "behindhand" pass the word checks', () => {
		expect(findCopyViolations('<p>Paranormal. Behindhand.</p>')).toEqual([]);
	});
	it('catches every form of diagnose and the medical phrases', () => {
		const hits = findCopyViolations(
			'<p>Not a diagnosis.</p><p>We diagnose.</p><p>Healthy growth.</p><p>Below average.</p>'
		);
		expect(hits).toHaveLength(4);
	});
	it('allows the words the app itself uses', () => {
		expect(
			findCopyViolations('<p>Only you can share. Just hold still. How accurate is it?</p>')
		).toEqual([]);
	});
	it('ignores scripts and styles', () => {
		expect(findCopyViolations('<script>const only = 1; // —</script><style>a{}</style>')).toEqual(
			[]
		);
	});
	it('passes clean copy', () => {
		expect(findCopyViolations('<p>Point. Hold still. Done.</p>')).toEqual([]);
	});
});

describe('findForeignOrigins', () => {
	it('flags a third-party script, stylesheet, image or font', () => {
		const html =
			'<script src="https://cdn.x.com/a.js"></script><link rel="stylesheet" href="https://fonts.googleapis.com/css"><img src="//img.y.com/a.png"><style>@font-face{src:url(https://f.z.com/a.woff2)}</style>';
		expect(findForeignOrigins(html, SITE)).toHaveLength(4);
	});
	it('allows canonical and og links to the site, outbound anchors and mailto', () => {
		const html = `<link rel="canonical" href="${SITE}/"><meta property="og:image" content="${SITE}/og.png"><a href="https://www.apple.com/">Apple</a><a href="mailto:a@b.c">Mail</a><img src="/images/a.webp">`;
		expect(findForeignOrigins(html, SITE)).toEqual([]);
	});
});

describe('review findings: copy check gaps', () => {
	it('decodes hex and named dash entities', () => {
		expect(findCopyViolations('<p>Calm &#x2014; always</p>')).toHaveLength(1);
	});
	it('reads single-quoted attributes', () => {
		expect(findCopyViolations("<img alt='a normal door'>")).toHaveLength(1);
	});
	it('checks the text inside JSON-LD, which search results show', () => {
		const html =
			'<script type="application/ld+json">{"description":"A normal tap \u2014 then done"}</script>';
		expect(findCopyViolations(html).length).toBeGreaterThanOrEqual(2);
	});
	it('still ignores ordinary scripts', () => {
		expect(findCopyViolations('<script>const only = 1;</script>')).toEqual([]);
	});
});

describe('review findings: origin check gaps', () => {
	it('rejects a lookalike host that starts with the site url', () => {
		expect(
			findForeignOrigins('<img src="https://doorframe.example.evil.net/a.png">', SITE)
		).toHaveLength(1);
	});
	it('checks src even when srcset follows it', () => {
		expect(
			findForeignOrigins('<img src="https://evil.net/a.png" srcset="/a.webp">', SITE)
		).toHaveLength(1);
	});
	it('checks every srcset candidate', () => {
		expect(
			findForeignOrigins('<img srcset="/a.webp 1x, https://evil.net/b.webp 2x">', SITE)
		).toHaveLength(1);
	});
	it('reads single-quoted src, and media tags, poster and object data', () => {
		const html =
			'<img src=\'https://e.net/a.png\'><video poster="https://e.net/p.jpg"></video><audio src="https://e.net/a.mp3"></audio><object data="https://e.net/o"></object>';
		expect(findForeignOrigins(html, SITE)).toHaveLength(4);
	});
	it('catches entity-quoted css urls and bare @import', () => {
		const html =
			'<div style="background:url(&quot;https://e.net/a.png&quot;)"></div><style>@import "https://e.net/x.css";</style>';
		expect(findForeignOrigins(html, SITE)).toHaveLength(2);
	});
});

describe('findForeignOriginsInAsset', () => {
	it('flags remote imports and fetches in bundled css and js', () => {
		expect(
			findForeignOriginsInAsset('@import url(https://fonts.googleapis.com/css);', SITE)
		).toHaveLength(1);
		expect(findForeignOriginsInAsset('fetch("https://api.evil.net/x")', SITE)).toHaveLength(1);
	});
	it('allows outbound anchor links in compiled templates', () => {
		const js = '`<a href="https://www.apple.com/legal/eula/" target="_blank">Apple</a>`';
		expect(findForeignOriginsInAsset(js, SITE)).toEqual([]);
	});
	it('allows the site itself, svg namespaces and w3 references', () => {
		const js =
			'const a="http://www.w3.org/2000/svg"; fetch("/local"); const b="https://doorframe.example/x";';
		expect(findForeignOriginsInAsset(js, SITE)).toEqual([]);
	});
});
