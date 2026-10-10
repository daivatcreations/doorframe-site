<!--
  Copyright (c) 2026 Daivat Creations
  All rights reserved.

  This source code is private property. Unauthorized copying of this file, via any medium is strictly prohibited.
  Proprietary and confidential.
-->
<!-- Line glyphs in the spirit of SF Symbols. Decoration only: the text beside each carries the meaning. -->
<script lang="ts">
	let { name, class: className = 'size-6' }: { name: string; class?: string } = $props();

	const paths: Record<string, string> = {
		lock: 'M7 11V8a5 5 0 0 1 10 0v3M6 11h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z',
		mail: 'M4 6h16v12H4zM4 7l8 6 8-6',
		'chevron-down': 'M6 9l6 6 6-6',
		menu: 'M4 7h16M4 12h16M4 17h16',
		close: 'M6 6l12 12M18 6 6 18',
		// figure.stand, figure lying down, the coaching capsule (Measure)
		stand:
			'M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8 9h8M12 9v6M12 15l-2.5 6.5M12 15l2.5 6.5M8 9l-1 5M16 9l1 5',
		lying: 'M5 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8 11h9.5l3.5-1.5M8 11v3M13 11l2 3M3 17h18',
		hint: 'M5 5h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7l-4 4v-4H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2ZM8 10.5h8',
		target:
			'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM12 3v3M12 18v3M3 12h3M18 12h3',
		gauge: 'M4 18a8 8 0 1 1 16 0M12 18l4-5M8 18h0M16 18h0',
		// the Also row
		bell: 'M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15L6 16ZM10 20.5a2 2 0 0 0 4 0',
		ruler: 'M3 16 16 3l5 5L8 21l-5-5ZM7 12l2 2M10 9l2 2M13 6l2 2',
		share: 'M12 3v12M8 7l4-4 4 4M6 11H5v10h14V11h-1',
		'half-circle': 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 3v18',
		// the privacy band
		'person-x': 'M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM3 21a7 7 0 0 1 11-5.7M16 16l5 5M21 16l-5 5',
		iphone: 'M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2ZM10.5 4.5h3',
		'eye-slash':
			'M3 3l18 18M10.6 6.1A9.6 9.6 0 0 1 12 6c5 0 9 6 9 6a17 17 0 0 1-2.6 3.2M6.6 6.6C4.4 8.1 3 12 3 12s4 6 9 6a8.6 8.6 0 0 0 4.4-1.2M9.9 9.9a3 3 0 0 0 4.2 4.2',
		trash: 'M4 6h16M9 6V4h6v2M6 6l1 14h10l1-14M10 10v6M14 10v6',
		// Moments: the app's SF Symbols, redrawn
		grew: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM9 15l6-6M10 9h5v5',
		'will-pass':
			'M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17 10a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2ZM8 9v6M8 15l-2 6M8 15l2 6M8 10.5l9 2M17 12v4M17 16l-1.5 5M17 16l1.5 5',
		sparkles:
			'M10 3l1.6 4.4L16 9l-4.4 1.6L10 15l-1.6-4.4L4 9l4.4-1.6L10 3ZM17.5 14l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z'
	};
</script>

<svg
	viewBox="0 0 24 24"
	class={className}
	fill="none"
	stroke="currentColor"
	stroke-width="1.75"
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden="true"
>
	<path d={paths[name]} />
</svg>
