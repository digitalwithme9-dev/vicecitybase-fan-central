import type { SectionKey } from "@/data/content";
import { sections } from "@/data/content";
import { AdSlot } from "./AdSlot";
import { EntryCard, TextCard } from "./Content";

export function SectionIndexPage({
  section,
  eyebrow,
  heading,
  intro,
  layout = "cards",
}: {
  section: SectionKey;
  eyebrow: string;
  heading: string;
  intro: string;
  layout?: "cards" | "text";
}) {
  const items = sections[section].items;

  return (
    <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-8 px-5 py-14 sm:px-8">
      <main className="col-span-12 lg:col-span-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-neon">{eyebrow}</span>
        <h1 className="mt-3 text-balance font-display text-5xl uppercase leading-[0.92] tracking-tight md:text-7xl">
          {heading}
        </h1>
        <p className="mt-5 max-w-[55ch] text-pretty text-lg text-muted">{intro}</p>

        <div
          className={
            layout === "cards"
              ? "mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2"
              : "mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2"
          }
        >
          {items.map((entry) =>
            layout === "cards" && entry.image ? (
              <EntryCard key={entry.slug} section={section} entry={entry} />
            ) : (
              <TextCard key={entry.slug} section={section} entry={entry} />
            ),
          )}
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
