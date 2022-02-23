<script>
  export let data = null;
</script>

{#if data}
  <a class={`subArticle ${(data.categoryId === 1) ? 's-borderRed' : ((data.categoryId === 2) ? 's-borderBlue' : 's-borderGreen') }`}
       href={`/article/${data.id}`}
       sveltekit:prefetch>
    <h4 class="subArticle__title">{ data.title }</h4>
  </a>
{/if}

<style lang="scss">
  .subArticle {
    align-items: center;
    border-left: 6px solid var(--c-gray--rgb);
    display: flex;
    padding: 4px 0 4px var(--gap-xs);

    &:visited {
      color: var(--c-black);
    }

    &:hover,
    &:focus {
      color: rgba(0, 0, 0, .75);
    }

    &__title {
      color: var(--c-black);
      font-size: var(--f-sm);
      font-weight: var(--fw-bold);
    }
  }

  .s-borderRed {
    border-color: var(--c-red-01);
  }

  .s-borderBlue {
    border-color: var(--c-blue);
  }

  .s-borderGreen {
    border-color: var(--c-green);
  }
</style>
