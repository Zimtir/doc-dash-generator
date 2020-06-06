<script>
  import UserRoleList from './UserRoleList.svelte'
  import { fade } from 'svelte/transition'
  import { text } from '../tools/store.ts'

  const user = {
    role: 'Software Development Engineer',
    showRole: true
  }

  $: console.log($text)
</script>

<style>
  .user-logo {
    background: #c4c4c4;
    border: 3px solid #2b6ed1;
    box-sizing: border-box;
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-role {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 24px;
    line-height: 27px;
    color: #4e5f68;
    margin-left: 15px;
    max-width: 260px;
  }

  .user {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    cursor: pointer;
  }
</style>

<div
  class="user"
  on:click={() => {
    user.showRole = !user.showRole
  }}>
  <div class="user-logo" />
  <div class="user-role">{user.role}</div>
</div>

{#if user.showRole}
  <div transition:fade>
    <UserRoleList rotation="left" />
    <UserRoleList rotation="left" />

    <UserRoleList rotation="left" />
    <UserRoleList rotation="left" />
  </div>
{/if}
