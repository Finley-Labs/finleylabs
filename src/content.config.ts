import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    categoryLabel: z.string(),
    description: z.string(),
    status: z.string(),
    featured: z.boolean().default(false),
    technologies: z.array(z.string()),
    image: z.string().optional(),
  })
});

const lab = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/lab" }),
  schema: z.object({
    id: z.string(),
    category: z.string(),
    title: z.string(),
    status: z.string(),
    date: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
  })
});

const research = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/research" }),
  schema: z.object({
    category: z.string(),
    title: z.string(),
    description: z.string(),
    date: z.string(),
    readTime: z.string(),
    author: z.string().default("Finley Labs Research"),
  })
});

export const collections = { projects, lab, research };
