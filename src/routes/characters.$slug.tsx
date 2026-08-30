import { createFileRoute, notFound } from "@tanstack/react-router";
import { EntryPage } from "@/components/site/Content";
import { findEntry } from "@/data/content";

export const Route = createFileRoute("/characters/$slug")({
  loader: ({ params }) => {
    const entry = findEntry("characters", params.slug);
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
        { property: "og:url", content: `/characters/${loaderData.slug}` },
      ],
      links: [{ rel: "canonical", href: `/characters/${loaderData.slug}` }],
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
  return <EntryPage section="characters" entry={entry} />;
}
