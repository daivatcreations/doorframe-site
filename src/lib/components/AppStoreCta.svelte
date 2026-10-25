<!--
  Copyright (c) 2026 Daivat Creations
  All rights reserved.

  This source code is private property. Unauthorized copying of this file, via any medium is strictly prohibited.
  Proprietary and confidential.
-->
<!--
  The App Store call to action: Apple's "Download on the App Store" badge, unaltered
  (toolbox.marketingtools.apple.com, US-UK; black, or white in dark mode), at least
  40 px tall with clear space around it. A quiet, inert pill until there's an App Store ID.
-->
<script lang="ts">
	import { APP_STORE_URL } from '$lib/constants/app';
</script>

{#if APP_STORE_URL}
	<a href={APP_STORE_URL} class="inline-block p-1 transition-opacity hover:opacity-85">
		<picture>
			<source srcset="/images/badges/app-store-white.svg" media="(prefers-color-scheme: dark)" />
			<img
				src="/images/badges/app-store-black.svg"
				alt="Download on the App Store"
				width="150"
				height="50"
				class="block h-[50px] w-auto"
			/>
		</picture>
	</a>
{:else}
	<span class="inline-flex h-12 items-center rounded-full bg-label px-7 font-medium text-canvas"
		>Coming soon to the App Store</span
	>
{/if}
