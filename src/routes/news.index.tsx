import { createFileRoute } from "@tanstack/react-router";
import { SectionIndexPage } from "@/components/site/IndexPage";

export const Route = createFileRoute("/news/")({
  head: () => ({
    meta: [
      { title: "GTA VI News — Latest Updates | ViceBase" },
      { name: "description", content: "The latest confirmed GTA VI news: trailer breakdowns, map details, gameplay systems and Rockstar announcements." },
      { property: "og:title", content: "GTA VI News — Latest Updates | ViceBase" },
      { property: "og:description", content: "The latest confirmed GTA VI news: trailer breakdowns, map details, gameplay systems and Rockstar announcements." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SectionIndexPage
      section="news"
      eyebrow="(c) Dispatches"
      heading="News"
      intro="Every confirmed GTA VI update, with speculation clearly marked as speculation."
      layout="text"
    />
  );
}
