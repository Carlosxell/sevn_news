<script>
	import AdBox from '$lib/PublicityBox.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { api } from '../../http/_api.js';

	let title = 'Carregando';
	let article = null;

	async function getArticle() {
		await api('GET', `news/articles/${$page.params.id}`).then(res => res.json()).then(res => {
			article = res;
			title = article.title;
		});
	}

	onMount(() => {
		getArticle();
	});
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

{#if article}
	<div class="articlePage">
		Articles

		<AdBox />
	</div>
{/if}

<style lang="scss">
	.articlePage {
		margin: auto;
		max-width: 980px;
		padding: var(--gap-mdl) 0;
	}
</style>
