<script>
  export let data = null;
</script>

{#if data}
  <a class="{(data.categoryId === 1) ? 'headlinerBox--full' : 'headlinerBox'}"
     href={`/article/${data.id}`}
     sveltekit:prefetch>

    {#if (data.categoryId !== 1)}
      <figure class="headlinerBox__figure">
        <div class="headlinerBox__imgBox">
          <img src={ data.poster } alt={`${data.category} - ${data.title}`} />
        </div>
        <figcaption class="headlinerBox__imgInfo">
          <p class="headlinerBox__category">{ data.category }</p>
        </figcaption>
      </figure>
    {/if}

    <h3 class="headlinerBox">{ data.title }</h3>
  </a>
{/if}

<style lang="scss">
  .headlinerBox {
    color: var(--c-black);
    transition: color .12s linear;

    &:visited {
      color: var(--c-black);
    }

    &:hover,
    &:focus {
      color: rgba(0, 0, 0, .75);
    }

    &--full {
      @extend .headlinerBox;
    }
  }
</style>
