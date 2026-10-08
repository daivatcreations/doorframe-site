<!--
  Copyright (c) 2026 Daivat Creations
  All rights reserved.

  This source code is private property. Unauthorized copying of this file, via any medium is strictly prohibited.
  Proprietary and confidential.
-->
<!--
  The Doorframe card from the app's Library (DoorScene in DoorframeWall.swift,
  build 9), drawn like the app icon at true scale: a 2.03 m by 0.82 m frame on a
  floor line, and each person's latest height as the icon's mark in their colour.
  The geometry is the app's DoorLayout on a 3:4 card with the floor at 70%.

  Motion, as in the app: the frame draws up and over while the floor grows out
  (0.9 s), then the marks slide out shortest to tallest (0.14 s apart). It plays
  once, on load or when scrolled into view (reveal). Reduced motion (app.css) and
  no JS show the finished drawing.
-->
<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	// The card, in the app's points: 3:4, the floor line at 70%.
	const W = 276;
	const H = 368;
	const FLOOR = 0.7 * H;
	const LABEL_ROOM = 96;

	// The app's sample family (SampleData.swift), shortest first; colours are the palette's `solid`.
	const family = [
		{ name: 'Arlo', m: 0.885, label: '88.5 cm', colour: '#6fcf97' },
		{ name: 'Maya', m: 1.64, label: '164.0 cm', colour: '#5ac8fa' },
		{ name: 'Sam', m: 1.8, label: '180.0 cm', colour: '#5e5ce6' }
	];

	// DoorLayout: px per metre is whichever of height and width runs out first.
	const top = Math.max(2.25, Math.max(...family.map((p) => p.m)) * 1.06);
	const S = Math.min((FLOOR - 0.06 * H) / top, (W * (1 - 0.14) - LABEL_ROOM) / (0.82 + 0.3 + 0.2));
	const c = Math.max(3, 0.075 * S);
	const y = (m: number) => FLOOR - m * S;

	const left = 0.14 * W + c / 2;
	const right = left + c + 0.82 * S;
	const head = FLOOR - 2.03 * S - c / 2;
	const r = 1.2 * c;
	const frame = `M${left} ${FLOOR} V${head + r} A${r} ${r} 0 0 1 ${left + r} ${head} H${right - r} A${r} ${r} 0 0 1 ${right} ${head + r} V${FLOOR}`;

	const markStart = left + (right - left) * 0.38;
	const markEnd = right + c / 2 + 0.3 * S;
	const dot = 0.95 * c;
	const labelX = markEnd + dot + 8;

	// Labels sit on their marks, nudged up so none is within 16 px of the one below.
	let below = Infinity;
	const marks = family.map((p, i) => {
		const labelY = Math.min(y(p.m), below - 16);
		below = labelY;
		return { ...p, labelY, delay: 0.9 + i * 0.14 };
	});

	const summary =
		'Doorframe: ' +
		[...family]
			.reverse()
			.map((p) => `${p.name} ${p.label}`)
			.join(', ');
</script>

<div use:reveal class="door">
	<svg viewBox="0 0 {W} {H}" class="block h-auto w-full" role="img" aria-label={summary}>
		<defs>
			<clipPath id="door-card">
				<rect width={W} height={H} rx="22" />
			</clipPath>
		</defs>

		<g clip-path="url(#door-card)">
			<rect width={W} height={H} fill="var(--grouped)" />
			<rect width={W} height={FLOOR + 0.45 * c} fill="var(--door-wall)" />

			<rect
				class="floor"
				x={-c}
				y={FLOOR}
				width={W + 2 * c}
				height={0.9 * c}
				rx={0.45 * c}
				fill="var(--icon-ink)"
			/>
			<path
				class="frame"
				d={frame}
				pathLength="1"
				fill="none"
				stroke="var(--icon-ink)"
				stroke-width={c}
				stroke-linecap="round"
				stroke-linejoin="round"
			/>

			{#each marks as p (p.name)}
				<g fill={p.colour}>
					<rect
						class="bar"
						style:animation-delay="{p.delay}s"
						x={markStart}
						y={y(p.m) - 0.41 * c}
						width={markEnd - markStart}
						height={0.82 * c}
						rx={0.41 * c}
					/>
					<circle class="dot" style:animation-delay="{p.delay}s" cx={markEnd} cy={y(p.m)} r={dot} />
				</g>
				<text
					class="label"
					style:animation-delay="{p.delay}s"
					x={labelX}
					y={p.labelY}
					dominant-baseline="central"
					font-size="11"
					font-weight="600"
				>
					<tspan fill={p.colour}>{p.name}</tspan><tspan dx="3" fill="var(--label-2)"
						>{p.label}</tspan
					>
				</text>
			{/each}

			<g transform="translate(16 {H - 16})">
				<text y="-49" font-size="13" font-weight="600" fill="var(--label-2)">THE DOORFRAME</text>
				<text y="-25" font-size="22" font-weight="700" class="font-rounded" fill="var(--label)">
					Sam is the tallest
				</text>
				<text y="-4" font-size="15" font-weight="500" fill="var(--label-2)">
					Everyone, side by side
				</text>
			</g>
		</g>
		<rect
			x="0.5"
			y="0.5"
			width={W - 1}
			height={H - 1}
			rx="21.5"
			fill="none"
			stroke="var(--door-edge)"
		/>
	</svg>
</div>

<style>
	.frame {
		stroke-dasharray: 1;
		animation: draw 0.9s ease-in-out both;
	}
	.floor,
	.bar,
	.dot {
		transform-box: fill-box;
	}
	.floor {
		transform-origin: center;
		animation: grow 0.9s ease-in-out both;
	}
	.bar {
		transform-origin: left;
		animation: grow 0.55s cubic-bezier(0.34, 1.4, 0.64, 1) both;
	}
	.dot {
		transform-origin: center;
		animation: pop 0.55s cubic-bezier(0.34, 1.4, 0.64, 1) both;
	}
	.label {
		animation: appear 0.55s ease-out both;
	}
	/* Scrolled in from below the fold (reveal): wait, then play from the start. */
	.door:global(.armed:not(.visible)) :is(.frame, .floor, .bar, .dot, .label) {
		animation: none;
		visibility: hidden;
	}
	@keyframes draw {
		from {
			stroke-dashoffset: 1;
		}
		to {
			stroke-dashoffset: 0;
		}
	}
	@keyframes grow {
		from {
			transform: scaleX(0);
		}
	}
	@keyframes pop {
		from {
			transform: scale(0);
		}
	}
	@keyframes appear {
		from {
			opacity: 0;
		}
	}
</style>
