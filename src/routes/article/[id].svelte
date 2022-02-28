<script>
	import AdBox from '$lib/PublicityBox.svelte';
	import { onMount } from 'svelte';

	import loader from '../../stores/stores.js';

	import { page } from '$app/stores';
	import { api } from '../../http/_api.js';

	let title = 'Carregando';
	let article = null;
	let paragraphs = [];
	let articleDate = null;

	const resetLoader = () =>  loader.reset();
	const showLoader = (val) => loader.set(val);

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
			resetLoader();
		});
	}

	onMount(() => {
		showLoader({ active: true, text: 'Carregando' });
		getArticle();
	});
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

{#if article}
	<div class="articlePage">
		<p class={`articlePage__category ${(article.categoryId === 1) ? 's-borderRed' : ((article.categoryId === 2) ? 's-borderBlue' : 's-borderGreen') }`}>{article.category}</p>
		<h2 class="articlePage__title">{article.title}</h2>
		<h3 class="articlePage__subtitle">{article.subtitle}</h3>

		{#if articleDate}
			<time class="articlePage__date" datetime={articleDate}>{article.date}</time>
		{/if}

		<AdBox />

		{#each paragraphs  as paragraph}
			<p class="articlePage__paragraph">{paragraph}</p>
		{/each}
	</div>
{/if}

<style lang="scss" global>
	.articlePage {
		margin: auto;
		max-width: 980px;
		padding: var(--gap-mdl) 0;

		&__category {
			color: var(--c-black);
			font-weight: var(--fw-bold);
			font-size: var(--f-xsl);
			margin: 0 auto 8px;
		}

		&__title {
			font-size: var(--f-mdl);
			font-weight: var(--fw-bold);
			margin-bottom: var(--gap-md);

			@media(min-width: 568px) {
				font-size: var(--f-lg);
			}

			@media(min-width: 1048px) {
				font-size: 48px;
				line-height: 48px;
			}

			@media(min-width: 1280px) {
				font-size: 58px;
				line-height: 60px;
			}
		}

		&__subtitle {
			font-size: var(--f-sml);
			margin-bottom: var(--gap-md);

			@media(min-width: 568px) {
				font-size: var(--f-md);
			}

			@media(min-width: 1048px) {
				font-size: var(--f-mdl);
			}
		}

		&__date {
			color: var(--c-gray--rgb);
			display: block;
			font-size: var(--f-xs);
			font-weight: var(--fw-bold);
			margin-bottom: var(--gap-xl);

			+ .adBox {
				margin-bottom: 60px;
			}
		}

		&__paragraph {
			display: block;
			font-size: var(--f-sml);
			padding-bottom: var(--gap-md);

			@media(min-width: 448px) {
				font-size: 18px;
			}

			@media(min-width: 1048px) {
				font-size: var(--f-md);
				line-height: var(--f-mdl);
			}
		}
	}

	.s-borderRed {
		color: var(--c-red-01);
	}

	.s-borderBlue {
		color: var(--c-blue);
	}

	.s-borderGreen {
		color: var(--c-green);
	}
</style>
