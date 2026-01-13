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

const notices = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/notices' }),
  schema: z.object({
    slug: z.string(),
    date: z.string(),
    active: z.boolean().optional().default(false),
    title: bilingual(z.string()),
    bannerSubtitle: bilingual(z.string()).optional(),
    intro: bilingual(z.string()),
    items: z.array(
      z.object({
        label: bilingual(z.string()),
        value: bilingual(z.string()),
      })
    ),
    dateDisplay: bilingual(z.string()),
    signature: bilingual(z.string()),
  }),
});

export const collections = {
  services,
  notices,
};
