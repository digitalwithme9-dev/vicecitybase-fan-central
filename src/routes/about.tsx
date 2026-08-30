import { createFileRoute, Link } from "@tanstack/react-router";
import { AdSlot } from "@/components/site/AdSlot";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ViceBase — Unofficial GTA VI Fan Site" },
      {
        name: "description",
        content:
          "ViceBase is an independent, unofficial GTA VI fan site. Learn how we source information and why we are not affiliated with Rockstar Games.",
      },
      { property: "og:title", content: "About ViceBase — Unofficial GTA VI Fan Site" },
      {
        property: "og:description",
        content: "How ViceBase sources GTA VI information, and our unofficial fan-site status.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-8 px-5 py-14 sm:px-8">
      <main className="col-span-12 lg:col-span-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-neon">(d) Colophon</span>
        <h1 className="mt-3 text-balance font-display text-5xl uppercase leading-[0.92] tracking-tight md:text-7xl">
          About ViceBase
        </h1>
        <p className="mt-5 max-w-[55ch] text-pretty text-lg text-muted">
          ViceBase is a fan-built reference for Grand Theft Auto VI. We collect what has actually been shown
          or stated, keep speculation labelled as speculation, and update pages when new material lands.
        </p>

        <div className="mt-10 space-y-5">
          <h2 className="font-display text-3xl uppercase tracking-tight">How we source things</h2>
          <p className="text-pretty leading-relaxed text-muted">
            Official trailers, Rockstar's own posts and press materials come first. Anything from leaks or
            community datamining is marked clearly and never presented as confirmed.
          </p>
          <h2 className="font-display text-3xl uppercase tracking-tight">What you'll find here</h2>
          <ul className="space-y-2 border-l border-line pl-5 text-muted">
            <li>
              <Link to="/characters" className="hover:text-chrome">Character profiles</Link> for the cast of Leonida
            </li>
            <li>
              <Link to="/features" className="hover:text-chrome">Features</Link> on locations and world design
            </li>
            <li>
              <Link to="/news" className="hover:text-chrome">News</Link> covering every confirmed update
            </li>
            <li>
              <Link to="/guides" className="hover:text-chrome">Guides</Link> to gameplay systems as they are revealed
            </li>
          </ul>
          <h2 className="font-display text-3xl uppercase tracking-tight">Unofficial status</h2>
          <p className="text-pretty leading-relaxed text-muted">
            ViceBase is an unofficial fan website. It is not affiliated with, endorsed by, sponsored by or
            connected to Rockstar Games, Take-Two Interactive or any of their subsidiaries. Grand Theft Auto
            and all related names, marks and imagery are the property of their respective owners. Any images
            on this site are original illustrations made for editorial purposes and are not game assets.
          </p>
          <h2 className="font-display text-3xl uppercase tracking-tight">Advertising</h2>
          <p className="text-pretty leading-relaxed text-muted">
            Space on this site is reserved for future advertising. No ad network, tracking script or
            third-party cookie is currently loaded — the slots you see are placeholders only.
          </p>
        </div>
      </main>

      <aside className="col-span-12 lg:col-span-4">
        <div className="lg:sticky lg:top-24">
          <AdSlot />
        </div>
      </aside>
    </div>
  );
}
