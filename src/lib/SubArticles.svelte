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
    --pseudo--bg: var(--c-gray--rgb);

    align-items: center;
    border-left: 6px solid transparent;
    display: flex;
    padding: 4px 0 4px var(--gap-xs);
    position: relative;

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

    &:before {
      background-color: var(--pseudo--bg);
      border-radius: 10px;
      bottom: 0;
      content: '';
      display: inline-block;
      height: 100%;
      left: -6px;
      position: absolute;
      top: 0;
      width: 6px;
    }
  }

  .s-borderRed {
    --pseudo--bg: var(--c-red-01);
  }

  .s-borderBlue {
    --pseudo--bg: var(--c-blue);
  }

  .s-borderGreen {
    --pseudo--bg: var(--c-green);
  }
</style>
