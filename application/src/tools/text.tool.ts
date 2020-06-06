import { TextAnalyticsClient } from '@azure/cognitiveservices-textanalytics'
import { ApiKeyCredentials } from '@azure/ms-rest-js'

const creds = new ApiKeyCredentials({
  inHeader: { 'Ocp-Apim-Subscription-Key': 'API_KEY_HERE' },
})

const textAnalyticsClient = new TextAnalyticsClient(creds, 'API_ENDPOINT_HERE')

export const keyPhraseExtraction = async (input: string) => {
  const keyPhrasesInput = {
    documents: [{ language: 'ru', id: '1', text: input }],
  }

  const keyPhraseResult = await textAnalyticsClient.keyPhrases({
    multiLanguageBatchInput: keyPhrasesInput,
  })

  return keyPhraseResult
}
