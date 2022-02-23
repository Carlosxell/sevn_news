<script>
	import AdBox from '$lib/PublicityBox.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { api } from '../../http/_api.js';

	let title = 'Carregando';
	let article = null;
	let paragraphs = [];
	let articleDate = null;

	let getDate = (date) => {
		// eslint-disable-next-line no-unused-vars
		let [ initDate, acronym, time] = date.split(' ');

		initDate = initDate.split('/').reverse().join('-').replace(/\//g, '-');
		return `${initDate}T${time.replace(/[H|h]/, ':')}:00`
	};

	async function getArticle() {
		await api('GET', `news/articles/${$page.params.id}`).then(res => res.json()).then(res => {
			article = res;
			title = `${article.category} - ${article.title}`;
			articleDate = getDate(article.date);
			paragraphs = article.article.split('<br><br>');
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
		<p class="articlePage__category">{article.category}</p>
		<h2 class="articlePage__title">{article.title}</h2>
		<h3 class="articlePage__subtitle">{article.subtitle}</h3>

		{#if articleDate}
			<time class="articlePage__date" datetime={articleDate}>{article.date}</time>
		{/if}

		<AdBox />

		{#each paragraphs  as paragraph}
			<p class="articlePage__subtitle">{paragraph}</p>
		{/each}
	</div>
{/if}

<style lang="scss">
	.articlePage {
		margin: auto;
		max-width: 980px;
		padding: var(--gap-mdl) 0;
	}
</style>
