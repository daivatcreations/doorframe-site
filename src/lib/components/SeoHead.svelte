<!--
  Copyright (c) 2026 Daivat Creations
  All rights reserved.

  This source code is private property. Unauthorized copying of this file, via any medium is strictly prohibited.
  Proprietary and confidential.
-->
<script lang="ts">
	import {
		APP_STORE_ID,
		COMPANY,
		DEFAULT_OG_IMAGE,
		DEFAULT_OG_IMAGE_ALT,
		SITE_NAME,
		SITE_URL
	} from '$lib/constants/app';

	type StructuredData = Record<string, unknown> | Array<Record<string, unknown>>;

	let {
		title,
		description,
		path,
		ogType = 'website',
		image = DEFAULT_OG_IMAGE,
		imageAlt = DEFAULT_OG_IMAGE_ALT,
		noindex = false,
		breadcrumb,
		structuredData
	}: {
		title: string;
		description: string;
		path: string;
		ogType?: string;
		image?: string;
		imageAlt?: string;
		noindex?: boolean;
		/** A sub-page's name: adds a Home › name BreadcrumbList. */
		breadcrumb?: string;
		structuredData?: StructuredData;
	} = $props();

	const canonicalUrl = $derived(`${SITE_URL}${path === '/' ? '' : path}`);
	const imageUrl = $derived(image.startsWith('http') ? image : `${SITE_URL}${image}`);
	const robots = $derived(noindex ? 'noindex, nofollow' : 'index, follow');
	const breadcrumbList = $derived(
		breadcrumb
			? {
					'@context': 'https://schema.org',
					'@type': 'BreadcrumbList',
					itemListElement: [
						{ '@type': 'ListItem', position: 1, name: SITE_NAME, item: SITE_URL },
						{ '@type': 'ListItem', position: 2, name: breadcrumb, item: canonicalUrl }
					]
				}
			: null
	);
	const structuredDataItems = $derived([
		...(structuredData ? (Array.isArray(structuredData) ? structuredData : [structuredData]) : []),
		...(breadcrumbList ? [breadcrumbList] : [])
	]);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="author" content={COMPANY} />
	<meta name="robots" content={robots} />
	{#if APP_STORE_ID}
		<meta name="apple-itunes-app" content={`app-id=${APP_STORE_ID}`} />
	{/if}
	{#if !noindex}
		<link rel="canonical" href={canonicalUrl} />
	{/if}

	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content={ogType} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={imageUrl} />
	{#if image === DEFAULT_OG_IMAGE}
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />
		<meta property="og:image:type" content="image/png" />
	{/if}
	<meta property="og:image:alt" content={imageAlt} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
	<meta name="twitter:image:alt" content={imageAlt} />

	{#each structuredDataItems as item, index (index)}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html `<script type="application/ld+json">${JSON.stringify(item)}</scr` + 'ipt>'}
	{/each}
</svelte:head>
