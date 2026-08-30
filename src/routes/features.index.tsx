import { createFileRoute } from "@tanstack/react-router";
import { SectionIndexPage } from "@/components/site/IndexPage";

export const Route = createFileRoute("/features/")({
  head: () => ({
    meta: [
      { title: "GTA VI Features — Vice City & Leonida | ViceBase" },
      { name: "description", content: "Long-form features on the world of GTA VI: Vice City districts, the state of Leonida and how the map fits together." },
      { property: "og:title", content: "GTA VI Features — Vice City & Leonida | ViceBase" },
      { property: "og:description", content: "Long-form features on the world of GTA VI: Vice City districts, the state of Leonida and how the map fits together." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/features" },
    ],
    links: [{ rel: "canonical", href: "/features" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SectionIndexPage
      section="features"
      eyebrow="(b) World"
      heading="Features"
      intro="Long-form pieces on the world of GTA VI — the city, the state around it, and how the map is built."
      layout="cards"
    />
  );
}
