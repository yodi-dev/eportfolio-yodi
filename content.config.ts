import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    artefak: defineCollection({
      type: 'page',
      source: 'artefak/*.md'
    })
  }
})