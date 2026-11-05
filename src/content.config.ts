import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Posts live in src/content/blog/<lang>/<slug>.md.
// The same file name in en/ and vi/ links the two translations.
const blog = defineCollection({
  loader: glob({ pattern: "{en,vi}/**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// One file per language: src/content/now/en.md and vi.md.
const now = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/now" }),
  schema: z.object({
    updated: z.coerce.date(),
  }),
});

export const collections = { blog, now };
