import { createFileRoute } from "@tanstack/react-router";
import { SectionIndexPage } from "@/components/site/IndexPage";

export const Route = createFileRoute("/characters/")({
  head: () => ({
    meta: [
      { title: "GTA VI Characters — Profiles & Cast | ViceBase" },
      { name: "description", content: "Profiles for every confirmed GTA VI character, including protagonists Jason Duval and Lucia Caminos." },
      { property: "og:title", content: "GTA VI Characters — Profiles & Cast | ViceBase" },
      { property: "og:description", content: "Profiles for every confirmed GTA VI character, including protagonists Jason Duval and Lucia Caminos." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/characters" },
    ],
    links: [{ rel: "canonical", href: "/characters" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SectionIndexPage
      section="characters"
      eyebrow="(a) Cast"
      heading="Characters"
      intro="Profiles for the confirmed cast of Grand Theft Auto VI, starting with the two playable leads."
      layout="cards"
    />
  );
}
