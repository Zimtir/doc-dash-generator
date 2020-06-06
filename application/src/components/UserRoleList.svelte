<script>
  import UserRole from './UserRole.svelte'
  import UserTextRole from './UserTextRole.svelte'
  import Sphere from './Sphere.svelte'

  export let rotation

  let isVisible = true
</script>

<style>
  .user-role__container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .user-role__list {
    display: flex;
    flex-wrap: wrap;
    width: min-content;
  }
</style>

<div class="user-role__container">

  {#if rotation === 'left'}
    {#if isVisible}
      <div class="user-role__list">
        <UserRole />
        <UserRole />
      </div>
    {/if}

    <Sphere
      on:click={() => {
        isVisible = !isVisible
      }} />

    {#if isVisible}
      <UserTextRole />
    {/if}
  {:else}
    {#if isVisible}
      <UserTextRole />
    {/if}

    <Sphere />

    {#if isVisible}
      <div class="user-role__list">
        <UserRole />
        <UserRole />
      </div>
    {/if}
  {/if}
</div>
