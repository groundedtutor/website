import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const teamCollection = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/team",
    }),
    schema: z.object({
        draft: z.boolean(),
        name: z.string(),
        title: z.string(),
        avatar: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        publishDate: z.string().transform((str) => new Date(str)),
    }),
});

export const collections = {
    team: teamCollection,
};
