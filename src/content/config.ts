import { defineCollection, z } from 'astro:content';

const adventConfig = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.date(),
    reference: z.string(),
    advent: z.number(),
    dificultad: z.enum(['Facil', 'Media', 'Dificil', 'Muy Dificil']),
    day: z.number(),
  }),
});

export const collections = { adventConfig };
