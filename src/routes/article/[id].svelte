<script>
	import { beforeUpdate, onMount } from 'svelte';
	import { page } from '$app/stores';
	import { api } from '../../http/_api.js';

	let title = 'Carregando';
	let article = null;

	async function getArticle() {
		await api('GET', `news/articles/${$page.params.id}`).then(res => res.json()).then(res => {
			article = res;
			title = article.title;
			console.info(article, 'recebido');
		});
	}

	beforeUpdate(() => {
		getArticle();
	});
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<p>Articles</p>

<style lang="scss">
</style>
