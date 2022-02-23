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
          <p class={`headlinerBox__category ${(data.categoryId === 1) ? 's-borderRed' : ((data.categoryId === 2) ? 's-borderBlue' : 's-borderGreen') }`}>
            { data.category }
          </p>
        </figcaption>
      </figure>
    {/if}

    {#if (data.categoryId === 1)}
      <p class="headlinerBox__category s-borderRed">
        { data.category }
      </p>
    {/if}

    <h3 class="headlinerBox__title">{ data.title }</h3>
  </a>
{/if}

<style lang="scss">
  .headlinerBox {
    color: var(--c-black);
    transition: color .12s linear;

    &__figure {}

    &__imgBox {
      border-radius: 10px;
      display: flex;
      flex-direction: row;
      height: 190px;
      overflow: hidden;

      img {
        object-fit: cover;
      }
    }

    &__imgInfo {}

    &__category,
    &__title {
      color: var(--c-black);
      font-weight: var(--fw-bold);
    }

    &__category {
      font-size: var(--f-xsl);
      margin: 16px auto 8px;
    }

    &__title {
      --full-title: var(--f-sml);
      font-size: var(--full-title);

      @media(min-width: 1024px) {
        font-size: var(--f-md);
      }
    }

    &:visited {
      color: var(--c-black);
    }

    &:hover,
    &:focus {
      color: rgba(0, 0, 0, .75);
    }

    &--full {
      @extend .headlinerBox;

      .headlinerBox__category {
        margin-top: 0;
      }

      .headlinerBox__title {
        font-size: var(--f-mdl);
      }

      @media(min-width: 568px) {
        .headlinerBox__title {
          font-size: var(--f-lg);
        }
      }

      @media(min-width: 1280px) {
        .headlinerBox__title {
          font-size: 48px;
        }
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
