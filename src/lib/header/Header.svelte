<script>
	import { page } from '$app/stores';
	import { onMount, afterUpdate } from 'svelte';

	onMount(() => {
		console.info($page, 'Dados da página no carregamento');
	});

	afterUpdate(() => {
		console.info($page, 'Dados da página no update');
	});
</script>

<header class="header">
	<div class="header__content">
		<a sveltekit:prefetch href="/" class="header__link" title="Voltar">
			<img src="./static/icons/ic--arrow-left.svg" alt="" />
		</a>
		<h1 class="header__title">SEVN NEWS</h1>
	</div>
</header>

<style lang="scss">
</style>
