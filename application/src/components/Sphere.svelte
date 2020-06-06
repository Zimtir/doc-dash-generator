<script>
  import Line from './Line.svelte'

  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  let isVisible = true

  const clickSphere = () => {
    dispatch('click')

    isVisible = !isVisible
  }
</script>

<style>
  .sphere-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }

  .sphere {
    background: #2b6ed1;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  .center-sphere {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<div class="sphere-container">
  <Line orientation="height" position="top" />
  <div class="center-sphere">
    {#if isVisible}
      <Line orientation="width" position="left" />
    {/if}
    <div class="sphere" on:click={clickSphere} />
    {#if isVisible}
      <Line orientation="width" position="right" />
    {/if}
  </div>
  <Line orientation="height" position="bottom" />
</div>
