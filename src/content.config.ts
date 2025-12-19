import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Bilingual field schema helper
const bilingual = <T extends z.ZodTypeAny>(schema: T) =>
  z.object({
    ko: schema,
    en: schema,
  });

const services = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/services' }),
  schema: z.object({
    slug: z.string(),
    title: bilingual(z.string()),
    subtitle: bilingual(z.string()),
    description: bilingual(z.string()),
    features: z.array(
      z.object({
        title: bilingual(z.string()),
        description: bilingual(z.string()),
      })
    ),
  }),
});

export const collections = {
  services,
};
