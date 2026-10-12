<!--
  Copyright (c) 2026 Daivat Creations
  All rights reserved.

  This source code is private property. Unauthorized copying of this file, via any medium is strictly prohibited.
  Proprietary and confidential.
-->
<script lang="ts">
	import SeoHead from '$lib/components/SeoHead.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Feature from '$lib/components/Feature.svelte';
	import PhoneFrame from '$lib/components/PhoneFrame.svelte';
	import Screenshot from '$lib/components/Screenshot.svelte';
	import MomentsShowcase from '$lib/components/MomentsShowcase.svelte';
	import PrivacyBand from '$lib/components/PrivacyBand.svelte';
	import AppStoreCta from '$lib/components/AppStoreCta.svelte';
	import Mark from '$lib/components/Mark.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { APP_STORE_URL, COMPANY, SITE_NAME, SITE_URL, STORE_NAME } from '$lib/constants/app';

	const organization = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: COMPANY,
		url: SITE_URL,
		logo: `${SITE_URL}/icon-512.png`
	};

	// Measure's coaching, in the app's words (LiveQuality.swift); the steady reading is
	// LiveStabilizer.isConsistent (app main 2431dbc, build 11); standing up straight is
	// StanceCheck (build 13, app PR #14).
	const measurePoints = [
		{ icon: 'stand', title: 'Standing or lying down', body: 'Lying is for babies.' },
		{
			icon: 'hint',
			title: 'Plain coaching',
			body: '"Show the top of their head." "Ask them to stand up straight."'
		},
		{
			icon: 'target',
			title: 'It waits for a steady reading',
			body: 'Several readings must agree before it captures.'
		},
		{
			icon: 'gauge',
			title: 'Every height shows its range',
			body: 'Like ± 0.9 cm, and how sure it is.'
		}
	];

	const also = [
		{ icon: 'bell', title: 'Reminders to measure', body: 'Per person, scheduled on your iPhone.' },
		{ icon: 'ruler', title: 'Your units', body: 'Feet and inches or centimetres, by region.' },
		{ icon: 'share', title: 'Export to CSV', body: 'Every measurement, in a file you share.' },
		{ icon: 'stand', title: 'Any age', body: 'Kids, grown-ups, and friends measuring for fun.' }
	];
</script>

<SeoHead
	title="Doorframe: Height Measuring App for Kids and Family, iPhone"
	description="Measure your child's height, or anyone's, with your iPhone's LiDAR camera. Track kids' growth on WHO and CDC percentile charts, the whole family on one door. Free."
	path="/"
	structuredData={[
		{ '@context': 'https://schema.org', '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
		organization,
		{
			'@context': 'https://schema.org',
			'@type': 'MobileApplication',
			name: STORE_NAME,
			alternateName: SITE_NAME,
			url: SITE_URL,
			...(APP_STORE_URL
				? { downloadUrl: APP_STORE_URL, installUrl: APP_STORE_URL, sameAs: APP_STORE_URL }
				: {}),
			image: `${SITE_URL}/icon-512.png`,
			screenshot: ['measure-live', 'library', 'entry-cards', 'chart'].map(
				(n) => `${SITE_URL}/images/screens/${n}-light.webp`
			),
			operatingSystem: 'iOS 26.0 or later',
			applicationCategory: 'LifestyleApplication',
			contentRating: '4+',
			isAccessibleForFree: true,
			offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
			description:
				'Point your iPhone at them and hold still. Doorframe measures height by itself, keeps the whole family on one door, and charts how your kids grow.',
			featureList: [
				'Measure height live with the LiDAR camera',
				'Waits until they stand up straight',
				'Lying mode for babies',
				'WHO and CDC growth charts with percentiles',
				'Estimated grown-up height',
				'The whole family on one door, any age',
				'Reminders to measure',
				'CSV export',
				'No account, data stays on your iPhone'
			],
			publisher: organization,
			author: organization
		}
	]}
/>

<Hero />

<div id="features">
	<Feature id="measure" eyebrow="Measure" title="Measure your child's height with your iPhone.">
		<p>Point, hold still, done. It captures by itself from 1.2 to 3.5 m away.</p>
		<p class="text-base text-label-3">
			Live measuring needs LiDAR (iPhone 12 Pro and later Pro models). Any iPhone can type a height.
			<a href="/how-to-measure-height" class="text-accent underline underline-offset-2"
				>How to measure height at home</a
			>
		</p>
		{#snippet media()}
			<PhoneFrame>
				<!-- The app's real Measure screen over an AI-generated scene (no real child), as on the App Store. -->
				<Screenshot
					name="measure-live"
					dark={false}
					alt="Doorframe's Measure screen: a toddler standing on a wooden floor, measured live at 91.0 cm, plus or minus 0.9 cm, high confidence, while it says Hold still. Capturing"
				/>
			</PhoneFrame>
		{/snippet}
	</Feature>

	<section class="mx-auto max-w-6xl px-5 pb-12">
		<div class="fade-in grid gap-10 sm:grid-cols-2 lg:grid-cols-4" use:reveal>
			{#each measurePoints as point (point.title)}
				<div>
					<span class="text-accent"><Icon name={point.icon} class="size-7" /></span>
					<h3 class="mt-3 text-lg font-semibold">{point.title}</h3>
					<p class="mt-2 leading-relaxed text-label-2">{point.body}</p>
				</div>
			{/each}
		</div>
		<div class="fade-in mt-14 flex justify-center" use:reveal>
			<!-- A reading as the app shows it: the height, its range, and the confidence. -->
			<div
				class="inline-flex items-center gap-4 rounded-full bg-grouped py-3 pr-6 pl-7"
				role="img"
				aria-label="A reading: 91.2 cm, plus or minus 0.9 cm, high confidence"
			>
				<span class="font-rounded text-3xl font-bold tabular-nums">91.2 cm</span>
				<span class="text-sm leading-tight text-label-2">± 0.9 cm<br />High confidence</span>
				<span class="flex items-end gap-0.5 text-go" aria-hidden="true">
					<span class="h-2 w-1.5 rounded-sm bg-current"></span>
					<span class="h-3 w-1.5 rounded-sm bg-current"></span>
					<span class="h-4 w-1.5 rounded-sm bg-current"></span>
				</span>
			</div>
		</div>
	</section>

	<Feature
		id="standing"
		eyebrow="Wriggly toddlers"
		title="It waits until they stand up straight."
		flip
	>
		<p>Sitting, squatting or kneeling? It waits.</p>
		<p>Shorter than last time? It asks "Were they standing up?" before you save.</p>
		{#snippet media()}
			<div class="flex items-start gap-4 sm:gap-6">
				<PhoneFrame width="min(240px, 42vw)">
					<Screenshot
						name="stand-up"
						dark={false}
						alt="Measure, with the tip Ask them to stand up straight above a figure in the camera view"
					/>
				</PhoneFrame>
				<div class="mt-16">
					<PhoneFrame width="min(240px, 42vw)">
						<Screenshot
							name="check-card"
							dark={false}
							alt="Save for Arlo? 60.2 cm, plus or minus 0.9 cm, with a card: Were they standing up? 28.3 cm shorter than earlier today, and they looked like they were sitting or bending. If so, retake it. Retake and Save below"
						/>
					</PhoneFrame>
				</div>
			</div>
		{/snippet}
	</Feature>

	<Feature eyebrow="The Doorframe" title="Track the whole family's height on one door.">
		<p>
			Everyone's latest mark in their own colour, at true scale. Turn on history for the kids' older
			marks.
		</p>
		{#snippet media()}
			<div class="flex items-start gap-4 sm:gap-6">
				<PhoneFrame width="min(240px, 42vw)">
					<Screenshot
						name="library"
						alt="The Library: Your Family, with the Doorframe card showing Sam, Maya and Arlo's marks on a line-drawn door, then Arlo's card, then Recent measurements; bottom right, the Measure button, a door frame with three pencil marks"
					/>
				</PhoneFrame>
				<div class="mt-16">
					<PhoneFrame width="min(240px, 42vw)">
						<Screenshot
							name="wall"
							alt="The full Doorframe: a line-drawn door frame with a ruler; Sam 180.0 cm, Maya 164.0 cm and Arlo 88.5 cm as coloured marks, Arlo's older heights as faint ticks"
						/>
					</PhoneFrame>
				</div>
			</div>
		{/snippet}
	</Feature>

	<Feature id="explained" eyebrow="Measurements" title="Every mark, explained." flip>
		<p>Cards explain each height: percentile, growth since last time, accuracy, method and age.</p>
		{#snippet media()}
			<PhoneFrame>
				<Screenshot
					name="entry-cards"
					alt="Arlo's measurement: 88.5 cm, plus or minus 1.2 cm, high confidence, today at 12:37; below, cards for Percentile (56th, taller than about 56 in 100 children the same age and sex), Since last (+0.9 cm since 10 Aug), Accuracy (±1.2 cm), Method (LiDAR, 1.9 m away, standing) and When (today, age 2 yrs 2 mos)"
				/>
			</PhoneFrame>
		{/snippet}
	</Feature>

	<Feature id="growth" eyebrow="Growing up" title="Growth charts and percentiles for kids.">
		<p>WHO charts to age 2, CDC to 20. Percentile, growth pace and an estimated grown-up height.</p>
		<p class="text-base text-label-3">Estimates, not promises. Information, not medical advice.</p>
		{#snippet media()}
			<PhoneFrame>
				<Screenshot
					name="chart"
					alt="Arlo's page: a Grown-up height card, 170.9 cm to 185.4 cm, an estimate from CDC data and parents' heights, not a promise; a Milestone card, Age 14, Arlo passes Maya in height; then his growth chart, his measurements rising along the shaded percentile bands"
				/>
			</PhoneFrame>
		{/snippet}
	</Feature>

	<MomentsShowcase />

	<section class="mx-auto max-w-6xl px-5 py-16 sm:py-20">
		<div class="fade-in grid gap-10 sm:grid-cols-2 lg:grid-cols-4" use:reveal>
			{#each also as item (item.title)}
				<div>
					<span class="text-label-2"><Icon name={item.icon} class="size-7" /></span>
					<h3 class="mt-3 text-lg font-semibold">{item.title}</h3>
					<p class="mt-2 leading-relaxed text-label-2">{item.body}</p>
				</div>
			{/each}
		</div>
	</section>

	<PrivacyBand />
</div>

<section class="px-5 py-24 sm:py-32">
	<div class="fade-in flex flex-col items-center text-center" use:reveal>
		<span class="text-icon-ink"><Mark size={72} /></span>
		<h2 class="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">Start your door frame.</h2>
		<div class="mt-8"><AppStoreCta /></div>
	</div>
</section>
