<!--
  Copyright (c) 2026 Daivat Creations
  All rights reserved.

  This source code is private property. Unauthorized copying of this file, via any medium is strictly prohibited.
  Proprietary and confidential.
-->
<script lang="ts">
	import Wordmark from './Wordmark.svelte';
	import DoorScene from './DoorScene.svelte';
	import AppStoreCta from './AppStoreCta.svelte';
</script>

<section class="overflow-hidden px-5 pt-16 pb-10 sm:pt-24">
	<div class="mx-auto flex max-w-3xl flex-col items-center text-center">
		<Wordmark class="h-9 text-label sm:h-11" />
		<h1 class="mt-8 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
			The pencil marks on the door frame, without the pencil.
		</h1>
		<p class="mt-6 max-w-2xl text-lg leading-relaxed text-label-2 sm:text-xl">
			Measure your family with your iPhone's LiDAR camera. See everyone on one door. Watch your kids
			grow.
		</p>
		<div class="mt-10 flex flex-col items-center gap-3">
			<AppStoreCta />
			<p class="text-sm text-label-3">Free, with no account.</p>
		</div>
	</div>
	<div
		class="mx-auto mt-14 max-w-sm rounded-[8%/6%] shadow-[0_30px_60px_-30px_rgb(0_0_0/0.35)] sm:mt-20"
	>
		<DoorScene />
	</div>
</section>
