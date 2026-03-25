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
        isDraft: z.boolean().default(false),
    })
})

const authorCollection = defineCollection({
    type: 'data',
    schema: ({ image }) => z.object({
        name: z.string(),
        avatar: image(),
        twitter: z.string().optional(),
        linkedIn: z.string().optional(),
        github: z.string().optional(),
        bio: z.string().optional(),
        subtitle: z.string().optional(),
    })
})

export const collections = {
    blog: blogCollection,
    author: authorCollection,
}