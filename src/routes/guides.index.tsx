import { createFileRoute } from "@tanstack/react-router";
import { SectionIndexPage } from "@/components/site/IndexPage";

export const Route = createFileRoute("/guides/")({
  head: () => ({
    meta: [
      { title: "GTA VI Guides — Gameplay & Tips | ViceBase" },
      { name: "description", content: "Practical GTA VI guides covering gameplay systems, getting started in Leonida and everything confirmed so far." },
      { property: "og:title", content: "GTA VI Guides — Gameplay & Tips | ViceBase" },
      { property: "og:description", content: "Practical GTA VI guides covering gameplay systems, getting started in Leonida and everything confirmed so far." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/guides" },
    ],
    links: [{ rel: "canonical", href: "/guides" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SectionIndexPage
      section="guides"
      eyebrow="(d) Field Notes"
      heading="Guides"
      intro="Practical guides to GTA VI gameplay, updated as systems are confirmed."
      layout="text"
    />
  );
}
