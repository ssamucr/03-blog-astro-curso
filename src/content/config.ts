import { defineCollection, z } from "astro:content";
import { date } from "astro:schema";

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: date(),
        description: z.string(),
        image: z.string(),
        author: z.string(),
        tags: z.array(z.string()),
    })
})

export const collections = {
    blog: blogCollection
}