import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        artefak: defineCollection({
            type: 'page',
            source: 'artefak/**/*.md',
            schema: z.object({
                title: z.string(),
                description: z.string(),
                category: z.string(),
                date: z.string(),
                badge: z.string().optional(),
                color: z.string().optional(),
            })
        })
    }
})