<!--
  Copyright (c) 2026 Daivat Creations
  All rights reserved.

  This source code is private property. Unauthorized copying of this file, via any medium is strictly prohibited.
  Proprietary and confidential.
-->
<!--
  The mark: the app icon (Doorframe/AppIcon.icon, from docs/design/icon/final/door.svg
  and mark.svg) without its background. The door frame and floor take the parent's text
  colour (text-icon-ink matches the icon); the newest mark is the brand red.
-->
<script lang="ts">
	let { size = 120, label }: { size?: number; label?: string } = $props();
</script>

<svg
	width={size}
	height={size}
	viewBox="200 170 630 670"
	role={label ? 'img' : undefined}
	aria-label={label}
	aria-hidden={label ? undefined : 'true'}
	style:width="{(size * 630) / 670}px"
>
	<path
		fill="currentColor"
		d="M260,788 V236 A52,52 0 0 1 312,184 H588 A52,52 0 0 1 640,236 V788 H596 V242 A14,14 0 0 0 582,228 H318 A14,14 0 0 0 304,242 V788 Z M200,788 H830 V828 H200 Z"
	/>
	<path
		fill="var(--brand)"
		d="M450,382 H710 A18,18 0 0 1 728,400 A18,18 0 0 1 710,418 H450 A18,18 0 0 1 432,400 A18,18 0 0 1 450,382 Z M686,400 A42,42 0 1 1 770,400 A42,42 0 1 1 686,400 Z"
	/>
</svg>
