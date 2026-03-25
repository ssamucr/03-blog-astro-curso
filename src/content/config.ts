import { defineCollection, reference, z } from "astro:content";
import { date } from "astro:schema";

const blogCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        date: date(),
        description: z.string(),
        image: image(),
        // author: z.string(),
        author: reference('author'),
        tags: z.array(z.string()),
    })
})

const authorCollection = defineCollection({
    type: 'data',
    schema: ({ image }) => z.object({
        name: z.string(),
        avatar: image(),
    })
})

export const collections = {
    blog: blogCollection,
    author: authorCollection,
}