import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET = (async ({ params, request, site }) => {

    const blogPosts = await getCollection("blog");

  return rss(
    {
        stylesheet: "/styles/rss.xsl",
        title: "Samuel's Blog",
        description: "Un blog sobre mis pensamientos y experiencias.",
        site: site ?? '',
        items: blogPosts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.date,
            link: `/posts/${post.slug}/`,
            description: post.data.description,
        })),
        customData: `<language>es-es</language>`,
    }
  )
}) satisfies APIRoute;