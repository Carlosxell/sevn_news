<script>
	import { onDestroy } from 'svelte';

	import Header from '$lib/header/Header.svelte';
	import LoaderBox from '$lib/loaders/LoaderBox.svelte';

	import '../app.css';
	import loader from '../stores/stores.js';

	let showLoader = { active: false, text: '' };
	let unsubscribe = loader.subscribe((val) => (showLoader = val));

	onDestroy(unsubscribe);
</script>

<Header />

<main class="main">
	<slot />
	{#if showLoader.active}
		<LoaderBox />
	{/if}
</main>

<style lang="scss">
	.main {
		margin: 54px auto 0;
		padding: 0 var(--gap-xsl);

		@media(min-width: 912px) {
			padding: 0 var(--gap-sml);
		}
	}
</style>
