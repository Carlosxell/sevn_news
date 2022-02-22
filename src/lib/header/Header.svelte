<script>
	import { page } from '$app/stores';
</script>

<header class="header">
	<div class="header__content">
		{#if $page.url.pathname !== '/'}
			<a sveltekit:prefetch href="/" class="header__link" title="Voltar">
				<img src="./static/icons/ic--arrow-left.svg" alt="" />
			</a>
		{/if}
		<h1 class="header__title">sevn news</h1>
	</div>
</header>

<style global lang="scss">
	.header {
		position: fixed;
		background-color: var(--c-yellow);
		height: 54px;
		left: 0;
		right: 0;
		top: 0;

		&__content {
			display: flex;
			height: 100%;
			position: relative;
			width: 100%;
		}

		&__link {
			align-items: center;
			background-color: var(--c-black);
			display: flex;
			height: 100%;
			justify-content: center;
			left: 0;
			position: absolute;
			width: 54px;

			img {
				height: 32px;
				width: 32px;
			}
		}

		&__title {
			color: var(--c-black);
			font-size: var(--gap-md);
			font-weight: var(--fw-bold);
			line-height: 30px;
			margin: auto;
			text-transform: uppercase;
		}
	}
</style>
