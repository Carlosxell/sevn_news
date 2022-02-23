<script context="module">
	import AdBox from '$lib/PublicityBox.svelte';
	import HeadlinerBox from '$lib/HeadlinerBox.svelte';
	import SubArticles from '$lib/SubArticles.svelte';

	export const prerender = true;
</script>

<script>
	import { api } from '../http/_api.js';

	async function getHeadliners() {
		const response = await api('GET', 'news/headlines');
		return response.json();
	}

	async function getArticles() {
		const response = await api('GET', 'news/others');
		return response.json();
	}

	let promiseHeadliners = getHeadliners();
	let promiseArticles = getArticles();
</script>

<svelte:head>
	<title>Página inicial</title>
</svelte:head>

<section class="page homePage">
	<AdBox />

	{#await promiseHeadliners}
		<p>Teste</p>
	{:then headliners}
		<section class="homePage__headliners">
			{#each headliners as item}
				<HeadlinerBox data={item} />
			{/each}
		</section>
	{/await}

	{#await promiseArticles}
		<p>Teste Artigos</p>
	{:then headliners}
		<section class="homePage__subNews">
			{#each headliners as item}
				<SubArticles data={item} />
			{/each}
		</section>
	{/await}
</section>

<style lang="scss" global>
	.page {
		margin: auto;
		max-width: 1180px;
		padding: var(--gap-mdl) 0;
	}

	.homePage {
		&__headliners,
		&__subNews {
			display: grid;
			grid-gap: var(--gap-sml);
			width: 100%;
		}

		&__headliners {
			margin-top: 84px;

			@media(min-width: 568px) and (max-width: 1023px){
				grid-template-areas:  "topo topo"
															"esquerda direita";

				.headlinerBox--full {
					grid-area: topo;
				}

				.headlinerBox--full:nth-child(2) {
					grid-area: esquerda;
				}

				.headlinerBox--full:nth-child(3) {
					grid-area: direita;
				}
			}

			@media(min-width: 1024px) {
				grid-template-columns: 1fr 280px 280px;
			}
		}

		&__subNews {
			margin-top: 70px;

			@media(min-width: 468px) {
				grid-template-columns: repeat(2, 1fr);
			}

			@media(min-width: 768px) {
				grid-template-columns: repeat(3, 1fr);
			}

			@media(min-width: 1024px) {
				grid-template-columns: repeat(4, 1fr);
			}
		}
	}
</style>
