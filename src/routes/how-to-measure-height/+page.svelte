<!--
  Copyright (c) 2026 Daivat Creations
  All rights reserved.

  This source code is private property. Unauthorized copying of this file, via any medium is strictly prohibited.
  Proprietary and confidential.
-->
<!--
  The guide for the search "how to measure a child's height at home": the pencil-and-wall way,
  then Doorframe's. Doorframe's steps are the app's (LiveQuality.standingDistance, StanceCheck,
  the Lying mode, reminders); the rest is general home measuring, with no medical claims.
-->
<script lang="ts">
	import SeoHead from '$lib/components/SeoHead.svelte';
	import PhoneFrame from '$lib/components/PhoneFrame.svelte';
	import Screenshot from '$lib/components/Screenshot.svelte';
	import AppStoreCta from '$lib/components/AppStoreCta.svelte';
	import { SITE_URL } from '$lib/constants/app';

	const byHand = [
		'Shoes, hats and hair clips off.',
		'Stand them on a hard floor, back to a wall, heels together and touching it.',
		'Head level, looking straight ahead.',
		'Rest a flat book on their head, square to the wall, and mark under it in pencil.',
		'Measure from the floor to the mark with a tape measure. Write down the date.'
	];

	const withDoorframe = [
		'Shoes off. Stand them on the floor, 1.2 to 3.5\u00a0m from your iPhone.',
		'Open Measure. Keep their head and feet in view.',
		'Hold still. Doorframe captures once they stand up straight and its readings agree.',
		'It asks who it is, and the height goes on their page and the family door.'
	];

	const howTo = {
		'@context': 'https://schema.org',
		'@type': 'HowTo',
		name: "How to measure your child's height at home with an iPhone",
		description:
			"Measure a child's height at home with an iPhone's LiDAR camera and Doorframe, in under a minute.",
		totalTime: 'PT1M',
		tool: [
			{ '@type': 'HowToTool', name: 'An iPhone with LiDAR (iPhone 12 Pro or later Pro model)' },
			{ '@type': 'HowToTool', name: 'Doorframe: Height Tracker (free)' }
		],
		step: withDoorframe.map((text, i) => ({
			'@type': 'HowToStep',
			position: i + 1,
			text
		})),
		image: `${SITE_URL}/images/screens/measure-live-light.webp`
	};
</script>

<SeoHead
	title="How to Measure Your Child's Height at Home (2 Ways)"
	description="Measure a child's height at home: the pencil-and-wall way, or in seconds with your iPhone's LiDAR camera. Tips for babies, toddlers who won't stand still, and grown-ups."
	path="/how-to-measure-height"
	breadcrumb="How to measure height"
	structuredData={howTo}
/>

<article class="px-5 pt-16 pb-24 sm:pt-24">
	<div class="mx-auto max-w-3xl">
		<p class="mb-4 text-sm font-medium tracking-widest text-label-3 uppercase">Guide</p>
		<h1 class="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
			How to measure your child's height at home
		</h1>
		<p class="mt-6 text-lg leading-relaxed text-label-2 sm:text-xl">
			Two ways: a pencil and a wall, or your iPhone. Both work for grown-ups too.
		</p>

		<section class="mt-16">
			<h2 class="text-2xl font-semibold tracking-tight">1. With a pencil and a wall</h2>
			<ol class="mt-5 list-decimal space-y-3 pl-6 leading-relaxed text-label-2 marker:text-label-3">
				{#each byHand as step (step)}<li>{step}</li>{/each}
			</ol>
			<p class="mt-5 leading-relaxed text-label-3">
				Easiest with two people: one to hold the book, one to keep them still.
			</p>
		</section>

		<section class="mt-16">
			<h2 class="text-2xl font-semibold tracking-tight">2. With your iPhone</h2>
			<div class="mt-5 flex flex-col gap-10 sm:flex-row sm:items-start">
				<div class="flex-1">
					<ol class="list-decimal space-y-3 pl-6 leading-relaxed text-label-2 marker:text-label-3">
						{#each withDoorframe as step (step)}<li>{step}</li>{/each}
					</ol>
					<p class="mt-5 leading-relaxed text-label-2">
						Every height shows its range, like 91.0 cm ± 0.9 cm. No pencil on the wall, and no book
						on their head.
					</p>
					<p class="mt-3 text-base text-label-3">
						Needs an iPhone with LiDAR: iPhone 12 Pro or a later Pro or Pro Max. On any iPhone, you
						can type in a height you measured by hand.
					</p>
				</div>
				<div class="self-center sm:self-start">
					<PhoneFrame width="min(220px, 60vw)">
						<Screenshot
							name="measure-live"
							dark={false}
							alt="Doorframe's Measure screen: a toddler standing on a wooden floor, measured live at 91.0 cm, plus or minus 0.9 cm"
						/>
					</PhoneFrame>
				</div>
			</div>
		</section>

		<section class="mt-16">
			<h2 class="text-2xl font-semibold tracking-tight">Tips</h2>
			<dl class="mt-5 space-y-6">
				<div>
					<dt class="font-semibold">Toddlers who won't stand still</dt>
					<dd class="mt-1 leading-relaxed text-label-2">
						Doorframe waits while they sit, squat or kneel, and asks "Were they standing up?" if a
						height is clearly shorter than last time.
					</dd>
				</div>
				<div>
					<dt class="font-semibold">Babies</dt>
					<dd class="mt-1 leading-relaxed text-label-2">
						Under two, children are usually measured lying down. In Doorframe, switch to Lying and
						lay them flat on the floor.
					</dd>
				</div>
				<div>
					<dt class="font-semibold">Same time of day</dt>
					<dd class="mt-1 leading-relaxed text-label-2">
						People are a little taller in the morning, so measure at about the same time each time.
					</dd>
				</div>
				<div>
					<dt class="font-semibold">How often</dt>
					<dd class="mt-1 leading-relaxed text-label-2">
						Every few months is plenty for growing kids. Doorframe can remind you every month, 3
						months or 6 months.
					</dd>
				</div>
				<div>
					<dt class="font-semibold">Grown-ups and friends</dt>
					<dd class="mt-1 leading-relaxed text-label-2">
						It measures anyone. Grown-ups get a steady height, the average of their last
						measurements. Measuring each other for fun works too.
					</dd>
				</div>
			</dl>
		</section>

		<section class="mt-16">
			<h2 class="text-2xl font-semibold tracking-tight">Then watch them grow</h2>
			<p class="mt-4 leading-relaxed text-label-2">
				Doorframe puts each child's height on a WHO or CDC growth chart with their percentile, and
				the whole family on one door. <a
					href="/support"
					class="text-accent underline underline-offset-2">More answers</a
				>.
			</p>
			<div class="mt-8"><AppStoreCta /></div>
		</section>
	</div>
</article>
