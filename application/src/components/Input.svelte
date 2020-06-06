<script>
  let inputText = ''

  import { text } from '../tools/store.ts'

  const processData = async () => {
    const fetchResponse = await fetch(`/api/getKeywords?text=${$text}`)
    const fetchBody = await fetchResponse.json()
    console.log(fetchBody)
  }
</script>

<textarea bind:value={$text} label="Text" />
<button on:click={processData}>process</button>
