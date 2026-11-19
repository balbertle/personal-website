import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const folderId = ({ entry }: { entry: string }) => entry.split("/")[0];

const projects = defineCollection({
  loader: glob({ pattern: "*/index.md", base: "./src/content/projects", generateId: folderId }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number().default(0),
      summary: z.string().optional(),
      cover: image(),
      tags: z.array(z.string()).default([]),
      stack: z.string().optional(),
      role: z.string().optional(),
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

// A journal item is a photo, a video file, or a YouTube link, plus one short caption.
const journal = defineCollection({
  loader: glob({ pattern: "*/index.md", base: "./src/content/journal", generateId: folderId }),
  schema: ({ image }) =>
    z
      .object({
        date: z.coerce.date(),
        caption: z.string().optional(),
        photo: image().optional(),
        video: z.string().optional(), // path under /journal-media/
        youtube: z.string().url().optional(),
        draft: z.boolean().default(false),
      })
      .refine((d) => d.photo || d.video || d.youtube, {
        message: "A journal item needs a photo, a video, or a YouTube link.",
      }),
});

export const collections = { projects, journal };
