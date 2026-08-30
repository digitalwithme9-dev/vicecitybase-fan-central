import { createFileRoute, notFound } from "@tanstack/react-router";
import { EntryPage } from "@/components/site/Content";
import { findEntry } from "@/data/content";

export const Route = createFileRoute("/guides/$slug")({
  loader: ({ params }) => {
    const entry = findEntry("guides", params.slug);
    if (!entry) throw notFound();
    return entry;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found — ViceBase" }, { name: "robots", content: "noindex" }] };
    }
    return {
      meta: [
        { title: loaderData.metaTitle },
        { name: "description", content: loaderData.summary },
        { property: "og:title", content: loaderData.metaTitle },
        { property: "og:description", content: loaderData.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/guides/${loaderData.slug}` },
      ],
      links: [{ rel: "canonical", href: `/guides/${loaderData.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.title,
            description: loaderData.summary,
            datePublished: loaderData.date,
            isAccessibleForFree: true,
          }),
        },
      ],
    };
  },
  component: Page,
});

function Page() {
  const entry = Route.useLoaderData();
  return <EntryPage section="guides" entry={entry} />;
}
