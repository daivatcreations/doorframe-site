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
  last, since a picture can't be tapped.
-->
<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	const moments = [
		{ title: 'Arlo grew 2.1 cm', detail: 'Since 5 Jul', from: '#2f9e63', to: '#1d6e43' },
		{
			title: 'Arlo passes Maya at about 14',
			detail: 'If they stay on their growth curve.',
			from: '#7a5ae0',
			to: '#5236b4'
		},
		{
			title: 'Arlo may grow to 178.2 cm',
			detail: "Likely 170.9 cm – 185.4 cm. From their growth curve and both parents' heights.",
			from: '#1e86a8',
			to: '#125f7a'
		},
		{
			title: 'Time to measure Arlo',
			detail: 'Last measured 46 days ago.',
			from: '#d0463a',
			to: '#a12a22'
		}
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
					class="flex min-h-36 flex-col rounded-2xl p-5 text-white"
					style:background="linear-gradient(160deg, {m.from}, {m.to})"
				>
					<p class="font-rounded text-lg leading-snug font-bold">{m.title}</p>
					<p class="mt-2 text-sm leading-snug text-white/85">{m.detail}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>
