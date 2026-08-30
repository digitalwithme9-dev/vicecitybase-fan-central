import { createFileRoute, Link } from "@tanstack/react-router";

import { AdSlot } from "@/components/site/AdSlot";
import { EntryCard, ListRow, SectionHeading, TextCard } from "@/components/site/Content";
import { characters, guides, heroImage, news } from "@/data/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ViceBase — GTA VI News, Characters & Guides" },
      {
        name: "description",
        content:
          "ViceBase is an unofficial GTA VI fan database: character profiles, Vice City features, news and gameplay guides, updated as Rockstar reveals more.",
      },
      { property: "og:title", content: "ViceBase — GTA VI News, Characters & Guides" },
      {
        property: "og:description",
        content: "An unofficial GTA VI fan database of characters, locations, news and guides.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "ViceBase",
          description: "Unofficial GTA VI fan database of characters, locations, news and guides.",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <img
          src={heroImage}
          alt="Two silhouetted figures against a neon Vice City skyline at dusk"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="scanline pointer-events-none absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-void to-transparent" />

        <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 md:py-28">
          <div className="max-w-3xl">
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-chrome animate-[rise_500ms_var(--ease-cinematic)_both]">
              <span className="size-1.5 bg-chrome" /> Unofficial fan database
            </p>
            <h1 className="mt-5 text-balance font-display text-[15vw] uppercase leading-[0.86] animate-[cut_650ms_var(--ease-cinematic)_both] sm:text-8xl md:text-[9rem]">
              Welcome to
              <br />
              <span className="text-neon">Vice City</span>
            </h1>
            <p className="mt-6 max-w-[46ch] text-pretty text-base text-muted animate-[rise_500ms_var(--ease-cinematic)_both] [animation-delay:120ms] md:text-lg">
              Everything we know about GTA VI — characters, maps, mechanics and leaks — tracked by fans,
              updated as Rockstar reveals more.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-[rise_500ms_var(--ease-cinematic)_both] [animation-delay:200ms]">
              <Link
                to="/characters"
                className="bg-neon px-5 py-3 text-sm font-semibold text-void transition-transform hover:-translate-y-0.5"
              >
                Explore characters
              </Link>
              <Link
                to="/news"
                className="border border-line px-5 py-3 text-sm text-ink transition-colors hover:border-chrome hover:text-chrome"
              >
                Read the news
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-8 px-5 py-14 sm:px-8">
        <main className="col-span-12 space-y-16 lg:col-span-8">
          <section>
            <SectionHeading
              eyebrow="(a) Cast"
              title="Principal Characters"
              action={{ to: "/characters", label: "View all" }}
            />
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {characters.map((entry) => (
                <EntryCard key={entry.slug} section="characters" entry={entry} />
              ))}
            </div>
          </section>

          <section>
            <SectionHeading eyebrow="(b) Dispatches" title="Latest News" action={{ to: "/news", label: "View all" }} />
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {news.map((entry) => (
                <TextCard key={entry.slug} section="news" entry={entry} />
              ))}
            </div>
          </section>

          <section>
            <SectionHeading eyebrow="(c) Field Notes" title="Guides" action={{ to: "/guides", label: "View all" }} />
            <ul className="mt-4 divide-y divide-line">
              {guides.map((entry, i) => (
                <ListRow key={entry.slug} index={i} section="guides" entry={entry} />
              ))}
            </ul>
          </section>
        </main>

        <aside className="col-span-12 lg:col-span-4">
          <div className="space-y-5 lg:sticky lg:top-24">
            <AdSlot />
            <div className="border border-line bg-panel p-5">
              <h2 className="font-display text-xl uppercase tracking-tight">Start here</h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link to="/features/$slug" params={{ slug: "vice-city" }} className="hover:text-chrome">
                    The Vice City map explained
                  </Link>
                </li>
                <li>
                  <Link to="/guides/$slug" params={{ slug: "gta-vi-gameplay" }} className="hover:text-chrome">
                    GTA VI gameplay, everything confirmed
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-chrome">
                    What ViceBase is (and isn't)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
