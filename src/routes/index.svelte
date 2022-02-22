<script context="module">
	export const prerender = true;
	import AdBox from '$lib/PublicityBox.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="page">
	<AdBox />
</section>

<style lang="scss">
	.page {
		margin: auto;
		max-width: 1180px;
		padding: var(--gap-mdl) 0;
	}
</style>
