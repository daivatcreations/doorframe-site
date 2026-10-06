<!--
  Copyright (c) 2026 Daivat Creations
  All rights reserved.

  This source code is private property. Unauthorized copying of this file, via any medium is strictly prohibited.
  Proprietary and confidential.
-->
<!--
  The mark, redrawn from the app icon (docs/design/app-icon.svg) without its red
  square: the door frame, three pencil marks and the newest one with its dot.
  Colour comes from the parent's text colour.
-->
<script lang="ts">
	let { size = 120, label }: { size?: number; label?: string } = $props();
</script>

<svg
	width={size}
	height={size}
	viewBox="240 140 600 884"
	role={label ? 'img' : undefined}
	aria-label={label}
	aria-hidden={label ? undefined : 'true'}
	style:width="{(size * 600) / 884}px"
>
	<path
		d="M300 1024 V190 a28 28 0 0 1 28 -28 H696 a28 28 0 0 1 28 28 V1024"
		fill="none"
		stroke="currentColor"
		stroke-width="56"
		stroke-linejoin="round"
	/>
	<path d="M356 1024 V218 H668 V1024 Z" fill="currentColor" opacity="0.14" />
	<g stroke="currentColor" stroke-width="20" stroke-linecap="round" opacity="0.55">
		<line x1="636" y1="780" x2="760" y2="780" />
		<line x1="636" y1="640" x2="760" y2="640" />
		<line x1="636" y1="500" x2="760" y2="500" />
	</g>
	<line
		x1="600"
		y1="370"
		x2="780"
		y2="370"
		stroke="currentColor"
		stroke-width="26"
		stroke-linecap="round"
	/>
	<circle cx="780" cy="370" r="34" fill="currentColor" />
</svg>
