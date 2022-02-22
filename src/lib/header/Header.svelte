<script>
	import { page } from '$app/stores';
</script>

<header class="header">
	<div class="header__content">
		{#if $page.url.pathname !== '/'}
			<a sveltekit:prefetch href="/" class="header__link" title="Voltar">
				<svg viewBox="-5 -5 24 24" preserveAspectRatio="xMinYMin" fill="#fff">
					<path d='M3.414 7.657l3.95 3.95A1 1 0 0 1 5.95 13.02L.293 7.364a.997.997 0 0 1 0-1.414L5.95.293a1 1 0 1 1 1.414 1.414l-3.95 3.95H13a1 1 0 0 1 0 2H3.414z' />
				</svg>
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

			svg {
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
