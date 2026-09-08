import { defineCollection } from "astro:content"
import { z } from "astro/zod"
import { glob } from "astro/loaders"

// Mirrors the legacy collection rules: md/mdx entries, skipping files or folders prefixed with "_"
const content = (dir: string) =>
  glob({ pattern: ["**/*.{md,mdx}", "!**/_*", "!**/_*/**"], base: `./src/content/${dir}` })

const work = defineCollection({
  loader: content("work"),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
})

const blog = defineCollection({
  loader: content("blog"),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
  }),
})

const projects = defineCollection({
  loader: content("projects"),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
    demoUrl: z.string().optional(),
    repoUrl: z.string().optional(),
  }),
})

const legal = defineCollection({
  loader: content("legal"),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
})

export const collections = { work, blog, projects, legal }
