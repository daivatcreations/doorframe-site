<!--
  Copyright (c) 2026 Daivat Creations
  All rights reserved.

  This source code is private property. Unauthorized copying of this file, via any medium is strictly prohibited.
  Proprietary and confidential.
-->
<!--
  The Library's Moments shelf, drawn rather than photographed. Every title and
  detail is a sentence the app writes (Moment.title/detail in HomeCards.swift)
  about the sample family, in centimetres; "Tap to measure." is left off the
  last, since a picture can't be tapped. Styled like the app's cards (build 11,
  Photos Memories): with no photo, the person's colour deepened toward the text,
  white words, and the moment's symbol large and faint in the corner. Every
  moment here is Arlo's, so every card is his green.
-->
<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import Icon from './Icon.svelte';

	const moments = [
		{ icon: 'grew', title: 'Arlo grew 0.9 cm', detail: 'Since 10 Aug' },
		{
			icon: 'will-pass',
			title: 'Arlo passes Maya at about 14',
			detail: 'If they stay on their growth curve.'
		},
		{
			icon: 'sparkles',
			title: 'Arlo may grow to 170.9 cm – 185.4 cm',
			detail: "An estimate from CDC data and parents' heights, not a promise."
		},
		{ icon: 'ruler', title: 'Time to measure Arlo', detail: 'Last measured 46 days ago.' }
	];
</script>

<section class="mx-auto max-w-6xl px-5 py-20 sm:py-28">
	<div class="fade-in" use:reveal>
		<div class="max-w-2xl">
			<p class="text-sm font-semibold tracking-wide text-accent">Moments</p>
			<h2 class="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
				Small things worth noticing.
			</h2>
			<p class="mt-5 text-lg leading-relaxed text-label-2 sm:text-xl">
				Doorframe notices how much they've grown, who they'll pass next, and when it's been a while
				since you measured.
			</p>
		</div>
		<ul class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{#each moments as m (m.title)}
				<li
					class="moment relative flex min-h-36 flex-col justify-end overflow-hidden rounded-2xl p-5"
				>
					<span class="absolute -top-3 -right-3 text-white/15">
						<Icon name={m.icon} class="size-28" />
					</span>
					<p class="relative font-rounded text-lg leading-snug font-bold text-white">{m.title}</p>
					<p class="relative mt-1 text-sm leading-snug text-white/90">{m.detail}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	/* Arlo's palette green (#6FCF97), deepened as the app does toward its text. */
	.moment {
		background: linear-gradient(160deg, #3a8a5b, #1e5536);
	}
</style>
