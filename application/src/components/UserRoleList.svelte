<script>
  import UserRole from './UserRole.svelte'
  import UserTextRole from './UserTextRole.svelte'
  import Sphere from './Sphere.svelte'

  export let rotation
</script>

<style>
  .user-role__container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    width: 100%;
  }

  .user-role__list {
    display: flex;
    flex-wrap: wrap;
    width: 30%;
  }
</style>

<div class="user-role__container">

  {#if rotation === 'left'}
    <div class="user-role__list">
      <UserRole />
      <UserRole />
    </div>

    <Sphere />

    <UserTextRole />
  {:else}
    <UserTextRole />

    <Sphere />

    <div class="user-role__list">
      <UserRole />
      <UserRole />
    </div>
  {/if}
</div>
