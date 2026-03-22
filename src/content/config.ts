import { defineCollection, z } from "astro:content";
import { date } from "astro:schema";

const blogCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        date: date(),
        description: z.string(),
        image: image(),
        author: z.string(),
        tags: z.array(z.string()),
    })
})

export const collections = {
    blog: blogCollection
}