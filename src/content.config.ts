import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "*/index.md", base: "./src/content/projects", generateId: ({ entry }) => entry.split("/")[0] }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number().default(0),
      summary: z.string().optional(),
      cover: image(),
      description: z.string().optional(),
      github: z.string().url().optional(),
      demo: z.string().url().optional(),
      sections: z
        .array(
          z.object({
            images: z.array(image()).default([]),
            text: z.string().optional(),
          }),
        )
        .default([]),
      draft: z.boolean().default(false),
    }),
});

const journal = defineCollection({
  loader: glob({ pattern: "*/index.md", base: "./src/content/journal", generateId: ({ entry }) => entry.split("/")[0] }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      caption: z.string().optional(),
      photo: image(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects, journal };
