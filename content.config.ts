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
                course: z.enum(['ppl-1', 'ppl-2', 'seminar']).default('ppl-1'),
                status: z.enum(['completed', 'in-progress', 'planned']).default('completed'),
                date: z.string(),
                badge: z.string().optional(),
                color: z.string().optional(),
                attachments: z.array(z.object({
                    title: z.string(),
                    type: z.enum(['pdf', 'docx', 'pptx', 'xlsx', 'image', 'drive', 'video', 'link']).default('pdf'),
                    url: z.string(),
                    size: z.string().optional(),
                    badge: z.string().optional(),
                    description: z.string().optional()
                })).optional()
            })
        })
    }
})
