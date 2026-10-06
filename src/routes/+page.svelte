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
	import { COMPANY, SITE_URL, STORE_NAME } from '$lib/constants/app';

	// Measure's coaching, in the app's words (LiveQuality.swift).
	const measurePoints = [
		{ icon: 'stand', title: 'Standing or lying down', body: 'Switch to Lying for babies.' },
		{
			icon: 'hint',
			title: 'Plain coaching',
			body: '"Step back a little." "Show their feet." "Too dark to see. Turn on a light."'
		},
		{
			icon: 'gauge',
			title: 'Every height shows its range',
			body: 'And how sure Doorframe is, so you know when to measure again.'
		}
	];

	const also = [
		{ icon: 'bell', title: 'Reminders to measure', body: 'Per person, scheduled on your iPhone.' },
		{ icon: 'ruler', title: 'Your units', body: 'Feet and inches or centimetres, by region.' },
		{ icon: 'share', title: 'Export to CSV', body: 'Every measurement, in a file you share.' },
		{ icon: 'half-circle', title: 'Light and dark', body: 'And larger text, with Dynamic Type.' }
	];
</script>

<SeoHead
	title="Doorframe · The family height tracker for iPhone"
	description="Doorframe measures your family's height live with your iPhone's LiDAR camera, puts everyone on one illustrated door, and follows your kids on WHO and CDC growth charts. Free, with no account. Everything stays on your iPhone."
	path="/"
	imageAlt="The Doorframe icon: a door frame with pencil height marks, on red"
	structuredData={[
		{ '@context': 'https://schema.org', '@type': 'WebSite', name: 'Doorframe', url: SITE_URL },
		{
			'@context': 'https://schema.org',
			'@type': 'SoftwareApplication',
			name: STORE_NAME,
			url: SITE_URL,
			operatingSystem: 'iOS 26 or later',
			applicationCategory: 'LifestyleApplication',
			offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
			description:
				"Measure your family's height live with LiDAR, see everyone on one illustrated door, and follow your kids on WHO and CDC growth charts.",
			author: { '@type': 'Organization', name: COMPANY, url: SITE_URL }
		}
	]}
/>

<Hero />

<div id="features">
	<Feature id="measure" eyebrow="Measure" title="Point. Hold still. Done.">
		<p>
			Point your iPhone at someone standing on the floor. A measuring pole appears beside them, and
			when they hold roughly still, Doorframe captures by itself. A wobbly toddler is fine.
		</p>
		<p>Then it asks "Is this Arlo?", so the height lands on the right person.</p>
		<p class="text-base text-label-3">
			Measuring live needs an iPhone with LiDAR: the Pro and Pro Max models. On any iPhone, you can
			enter a height from a check-up.
		</p>
		{#snippet media()}
			<PhoneFrame>
				<Screenshot
					name="confirm"
					alt="Save measurement: Is this Arlo? 91.4 cm, plus or minus 0.9 cm, high confidence, standing, with Retake and Save"
				/>
			</PhoneFrame>
		{/snippet}
	</Feature>

	<section class="mx-auto max-w-6xl px-5 pb-12">
		<div class="fade-in grid gap-10 sm:grid-cols-3" use:reveal>
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

	<Feature eyebrow="The Doorframe" title="The whole family, on one door." flip>
		<p>
			Everyone's latest mark, in pencil, on a door drawn to true scale. Tap it for the full door,
			and turn on history for the kids' older marks in faded pencil.
		</p>
		<p>Then a card for each person, and every measurement in a library you can browse.</p>
		{#snippet media()}
			<div class="flex items-start gap-4 sm:gap-6">
				<PhoneFrame width="min(240px, 42vw)">
					<Screenshot
						name="library"
						alt="The Library: Your Family, with the Doorframe card showing Sam, Maya and Arlo's marks on a door, then Arlo's card, then Recent measurements"
					/>
				</PhoneFrame>
				<div class="mt-16">
					<PhoneFrame width="min(240px, 42vw)">
						<Screenshot
							name="wall"
							alt="The full Doorframe: a teal door with Sam at 180.0 cm, Maya at 164.0 cm and Arlo at 88.5 cm marked on the casing"
						/>
					</PhoneFrame>
				</div>
			</div>
		{/snippet}
	</Feature>

	<Feature id="growth" eyebrow="Growing up" title="Watch them grow.">
		<p>
			Babies, children and teens get growth charts from the WHO (to age two) and the CDC (to 20),
			with their percentile and how fast they're growing.
		</p>
		<p>
			Looking Ahead predicts their grown-up height from their own growth curve, their parents'
			heights, or both. You choose who the parents are; Doorframe never guesses.
		</p>
		<p>Grown-ups get a steady height card instead of a chart.</p>
		<p class="text-base text-label-3">Percentiles are information, not medical advice.</p>
		{#snippet media()}
			<PhoneFrame>
				<Screenshot
					name="chart"
					alt="Arlo's page: Looking Ahead predicts 170.9 cm to 185.4 cm and says Arlo passes Maya at about 14; below, his measurements rise along the shaded percentile bands of a growth chart"
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
		<span class="text-brand"><Mark size={72} /></span>
		<h2 class="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">Start your door frame.</h2>
		<div class="mt-8"><AppStoreCta /></div>
	</div>
</section>
