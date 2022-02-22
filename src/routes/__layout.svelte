<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main class="main">
	<slot />
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
