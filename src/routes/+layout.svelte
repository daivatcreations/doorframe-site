<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<a href="#main" class="skip">Skip to content</a>
<Navbar />
<main id="main" class="pt-14" tabindex="-1">{@render children()}</main>
<Footer />

<style>
	/* Hidden until a keyboard reaches it, then the first thing on the page. */
	.skip {
		position: fixed;
		top: 0.5rem;
		left: 0.5rem;
		z-index: 60;
		padding: 0.6rem 1rem;
		border-radius: 999px;
		background: var(--label);
		color: var(--canvas);
		font-weight: 500;
		transform: translateY(-200%);
	}
	.skip:focus-visible {
		transform: none;
		outline: 2px solid var(--accent);
		outline-offset: 2px;
	}
	main:focus {
		outline: none;
	}
</style>
