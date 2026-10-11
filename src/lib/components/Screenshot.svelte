<!--
  Copyright (c) 2026 Daivat Creations
  All rights reserved.

  This source code is private property. Unauthorized copying of this file, via any medium is strictly prohibited.
  Proprietary and confidential.
-->
<!--
  An app screenshot with its dark-mode twin, chosen by the viewer's own setting.
  `dark={false}` for a shot that has no twin (the camera view looks the same in both).
-->
<script lang="ts">
	let {
		name,
		alt,
		eager = false,
		dark = true
	}: { name: string; alt: string; eager?: boolean; dark?: boolean } = $props();
</script>

<picture>
	{#if dark}
		<source srcset="/images/screens/{name}-dark.webp" media="(prefers-color-scheme: dark)" />
	{/if}
	<img
		src="/images/screens/{name}-light.webp"
		{alt}
		width="780"
		height="1696"
		loading={eager ? 'eager' : 'lazy'}
		fetchpriority={eager ? 'high' : undefined}
		decoding="async"
	/>
</picture>
