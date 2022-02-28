<script context="module">
	import AdBox from '$lib/PublicityBox.svelte';
	import HeadlinerBox from '$lib/HeadlinerBox.svelte';
	import SubArticles from '$lib/SubArticles.svelte';

	export const prerender = true;
</script>

<script>
	import { api } from '../http/_api.js';
	import loader from '../stores/stores.js';

	let title = 'Carregando';

	const resetLoader = () =>  loader.reset();
	const showLoader = (val) => loader.set(val);

	async function getHeadliners() {
		const response = await api('GET', 'news/headlines');
		await showLoader({ active: true, text: 'Carregando' });
		return response.json();
	}

	async function getArticles() {
		const response = await api('GET', 'news/others');
		title = 'Página inicial';
		await resetLoader();
		return response.json();
	}

	let promiseHeadliners = getHeadliners();
	let promiseArticles = getArticles();
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<section class="page homePage">
	<AdBox />

	{#await promiseHeadliners}
	{:then headliners}
		<section class="homePage__headliners">
			{#each headliners as item}
				<HeadlinerBox data={item} />
			{/each}
		</section>
	{/await}

	{#await promiseArticles}
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

			@media(min-width: 568px) and (max-width: 1023px) {
				grid-template-areas:  "topo topo"
															"esquerda direita";
				grid-template-columns: 1fr 1fr;

				.headlinerBox--full {
					//grid-area: topo;
					grid-column: 1 / 3;
					grid-row: 1 / 2;
				}

				.headlinerBox:nth-child(2) {
					//grid-area: esquerda;
					grid-column: 1 / 2;
				}

				.headlinerBox:nth-child(3) {
					//grid-area: direita;
					grid-column: 2 / 3;
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
