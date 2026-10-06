<!--
  Copyright (c) 2026 Daivat Creations
  All rights reserved.

  This source code is private property. Unauthorized copying of this file, via any medium is strictly prohibited.
  Proprietary and confidential.
-->
<!--
  The Doorframe, redrawn from the app's DoorScene (DoorframeWall.swift) at true
  scale: a 2.03 m door, 0.82 m wide, on a wood floor, with the sample family's
  marks on the left casing. Arlo's older marks draw in first, in faded pencil,
  then everyone's latest. The marks are visible by default: the drawing is a CSS
  animation, so reduced motion (app.css) and no JS both show the finished door.
-->
<script lang="ts">
	// px per metre: the door's 2.03 m is 300 px tall.
	const S = 300 / 2.03;
	const FLOOR = 430;
	const y = (m: number) => FLOOR - m * S;

	const DOOR = { x: 186, w: 0.82 * S, top: y(2.03) };
	const CASING = 14;

	// The app's sample family (SampleData.swift): Arlo measured monthly since birth.
	const history = [0.5, 0.61, 0.69, 0.75, 0.8, 0.84];
	const latest = [
		{ name: 'Sam', m: 1.8, label: '180.0 cm', colour: '#5e5ce6' },
		{ name: 'Maya', m: 1.64, label: '164.0 cm', colour: '#32ade6' },
		{ name: 'Arlo', m: 0.885, label: '88.5 cm', colour: '#34c759' }
	];
	const casingLeft = DOOR.x - CASING;
</script>

<svg
	viewBox="0 0 440 480"
	class="block h-auto w-full"
	role="img"
	aria-label="An illustrated door frame with the family's height marks in pencil: Sam 180.0 cm, Maya 164.0 cm and Arlo 88.5 cm, with Arlo's older marks below"
>
	<defs>
		<linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
			<stop offset="0" stop-color="var(--wall-top)" />
			<stop offset="1" stop-color="var(--wall-bottom)" />
		</linearGradient>
		<linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
			<stop offset="0" stop-color="var(--floor-far)" />
			<stop offset="1" stop-color="var(--floor-near)" />
		</linearGradient>
		<linearGradient id="leaf" x1="0" y1="0" x2="1" y2="0">
			<stop offset="0" stop-color="var(--leaf-light)" />
			<stop offset="1" stop-color="var(--leaf)" />
		</linearGradient>
	</defs>

	<rect width="440" height={FLOOR} fill="url(#wall)" />
	<rect y={FLOOR} width="440" height={480 - FLOOR} fill="url(#floor)" />
	{#each [446, 462] as py (py)}
		<line x1="0" x2="440" y1={py} y2={py} stroke="black" stroke-opacity="0.12" />
	{/each}

	<!-- casing, with its shadow on the wall -->
	<path
		d="M{casingLeft} {FLOOR} V{DOOR.top - CASING} H{DOOR.x + DOOR.w + CASING} V{FLOOR}"
		fill="none"
		stroke="black"
		stroke-opacity="0.1"
		stroke-width={CASING}
		transform="translate(3 3)"
	/>
	<rect
		x={casingLeft - CASING / 2}
		y={DOOR.top - CASING * 1.5}
		width={DOOR.w + CASING * 3}
		height={FLOOR - DOOR.top + CASING * 1.5}
		fill="var(--trim)"
	/>
	<!-- the door: two panels and a brass knob -->
	<rect x={DOOR.x} y={DOOR.top} width={DOOR.w} height={FLOOR - DOOR.top} fill="url(#leaf)" />
	<g fill="white" fill-opacity="0.05" stroke="white" stroke-opacity="0.22">
		<rect x={DOOR.x + 16} y={DOOR.top + 18} width={DOOR.w - 32} height="118" rx="2" />
		<rect x={DOOR.x + 16} y={DOOR.top + 152} width={DOOR.w - 32} height="118" rx="2" />
	</g>
	<circle cx={DOOR.x + DOOR.w - 13} cy={y(1)} r="5.5" fill="var(--brass)" />

	<!-- Arlo's older marks, in faded pencil -->
	{#each history as m, i (m)}
		<line
			class="draw"
			style:animation-delay="{0.3 + i * 0.15}s"
			pathLength="1"
			x1={casingLeft - 6}
			x2={casingLeft + 8}
			y1={y(m)}
			y2={y(m)}
			stroke="var(--pencil)"
			stroke-opacity="0.35"
			stroke-width="1.6"
			stroke-linecap="round"
		/>
	{/each}

	<!-- everyone's latest mark, with their name -->
	{#each latest as p, i (p.name)}
		{@const delay = 1.3 + i * 0.35}
		<g>
			<line
				class="draw"
				style:animation-delay="{delay}s"
				pathLength="1"
				x1={casingLeft - 18}
				x2={casingLeft + 8}
				y1={y(p.m)}
				y2={y(p.m)}
				stroke="var(--pencil)"
				stroke-width="2.2"
				stroke-linecap="round"
			/>
			<g class="label" style:animation-delay="{delay + 0.3}s">
				<circle cx={casingLeft - 134} cy={y(p.m)} r="5" fill={p.colour} />
				<text
					x={casingLeft - 123}
					y={y(p.m)}
					dominant-baseline="central"
					font-size="15"
					class="font-rounded"
					fill="var(--pencil)"
				>
					<tspan font-weight="700">{p.name}</tspan>
					<tspan dx="4">{p.label}</tspan>
				</text>
			</g>
		</g>
	{/each}
</svg>

<style>
	.draw {
		animation: draw 0.7s ease-out both;
	}
	.label {
		animation: appear 0.6s ease-out both;
	}
	@keyframes draw {
		from {
			stroke-dasharray: 1;
			stroke-dashoffset: 1;
		}
		to {
			stroke-dasharray: 1;
			stroke-dashoffset: 0;
		}
	}
	@keyframes appear {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
