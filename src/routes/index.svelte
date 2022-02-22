<script context="module">
	import AdBox from '$lib/PublicityBox.svelte';

	export const prerender = true;
</script>

<script>
	import { onMount } from 'svelte';
	import { api } from '../http/_api.js';

	let headliners = [];
	let articles = [];
	// let apiError = false;

	async function getApi() {
		await api('GET', 'news/headlines').then((res) => {
			res.json().then(data => (headliners = data));
		});
		await api('GET', 'news/others').then((res) => {
			res.json().then(data => (articles = data));
		});
	}

	onMount(() => {
		getApi();
	})
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="page homePage">
	<AdBox />

	<div class="homePage__headliners">
		{#each headliners as item}
			<div class="">{item.title}</div>
		{/each}
	</div>
</section>

<style lang="scss">
	.page {
		margin: auto;
		max-width: 1180px;
		padding: var(--gap-mdl) 0;
	}

	.homePage {
		&__headliners {}
	}
</style>
