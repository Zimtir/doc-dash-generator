import {
  TextAnalyticsClient,
  AzureKeyCredential,
} from '@azure/ai-text-analytics'

const key = process.env.AZURE_API_KEY!
const endpoint = process.env.AZURE_API_ENDPOINT!

const textAnalyticsClient = new TextAnalyticsClient(
  endpoint,
  new AzureKeyCredential(key)
)

const keyPhraseExtraction = async (client: TextAnalyticsClient) => {
  const keyPhrasesInput = ['My cat might need to see a veterinarian.']
  const keyPhraseResult = await client.extractKeyPhrases(keyPhrasesInput)

  keyPhraseResult.forEach((document) => {
    console.log(`ID: ${document.id}`)
    console.log(document)
    // console.log(`\tDocument Key Phrases: ${document.keyPhrases}`)
  })
}
await keyPhraseExtraction(textAnalyticsClient)
