<script>
  export let position
  export let orientation

  import { fade } from 'svelte/transition'
</script>

<style>
  .line {
    background: #2b6ed1;
  }

  .top-line,
  .bottom-line {
    width: 5px;
    height: 100%;
  }

  .right-line,
  .left-line {
    width: 100%;
    height: 5px;
  }

  .height-line__container {
    display: flex;
    width: 100%;
    justify-content: center;
    height: 200px;
  }

  .width-line__container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 200px;
  }
</style>

<div transition:fade class={`${orientation}-line__container`}>
  <div class={`line ${position}-line`} />
</div>
