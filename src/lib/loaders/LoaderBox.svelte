<script>
  import { onDestroy } from 'svelte';
  import loader from '../../stores/stores.js';

  let loaderInfo = { active: false, text: '' };
  let unsubscribe = loader.subscribe((val) => (loaderInfo = val));

  onDestroy(unsubscribe);
</script>

<div class="loaderBox">
  <div class="loaderBox__loader"></div>
  {#if loaderInfo.text}
    <p className="loaderBox__text">{ loaderInfo.text }</p>
  {/if}
</div>

<style lang="scss">
  .loaderBox {
    align-items: center;
    background-color: rgba(0, 0, 0, .5);
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;

    &__loader {
      --square: 80px;
      display: inline-block;
      height: var(--square);
      position: relative;
      width: var(--square);

      &__text {
        color: var(--c-white);
        font-size: var(--f-md);
        font-weight: var(--fw-bold);
      }

      &:after {
        animation: hourglass 1.2s infinite;
        box-sizing: border-box;
        border: var(--gap-mdl) solid transparent;
        border-color: rgba(0, 0, 0, .25) var(--c-white);
        border-radius: 50%;
        content: " ";
        display: block;
        height: 0;
        margin: var(--gap-xxs);
        width: 0;
      }
    }
  }

  @keyframes hourglass {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      transform: rotate(0);
    }
    50% {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: rotate(900deg);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
</style>
