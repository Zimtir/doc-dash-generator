<script>
  import Nav from '../components/Nav.svelte'

  export let segment
</script>

<style>
  main {
    position: relative;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
