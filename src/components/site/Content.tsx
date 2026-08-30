import { Link } from "@tanstack/react-router";
import type { Block, Entry, SectionKey } from "@/data/content";
import { resolveRelated } from "@/data/content";
import { AdSlot } from "./AdSlot";

export function SectionHeading({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title: string;
  action?: { to: string; label: string };
}) {
  return (
    <div className="flex items-end justify-between border-b border-line pb-3">
      <div>
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-neon">{eyebrow}</span>
        <h2 className="mt-2 text-balance font-display text-4xl uppercase tracking-tight">{title}</h2>
      </div>
      {action && (
        <Link
          to={action.to}
          className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-chrome"
        >
          {action.label} →
        </Link>
      )}
    </div>
  );
}

export function EntryCard({ section, entry }: { section: SectionKey; entry: Entry }) {
  return (
    <article className="group relative overflow-hidden border border-line bg-panel transition-colors duration-300 hover:-translate-y-1 hover:border-neon/60">
      {entry.image && (
        <img
          src={entry.image}
          alt={entry.imageAlt ?? entry.title}
          loading="lazy"
          width={1024}
          height={1024}
          className="aspect-[5/6] w-full object-cover"
        />
      )}
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-2xl uppercase tracking-tight">{entry.title}</h3>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-neon">{entry.label}</span>
        </div>
        <p className="mt-2 text-pretty text-sm text-muted">{entry.summary}</p>
        <Link
          to={`/${section}/$slug`}
          params={{ slug: entry.slug }}
          className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-chrome transition-all group-hover:gap-3"
        >
          Read →<span className="sr-only">{entry.title}</span>
        </Link>
      </div>
    </article>
  );
}

export function TextCard({ section, entry }: { section: SectionKey; entry: Entry }) {
  return (
    <article className="group border border-line bg-panel p-5 transition-colors duration-300 hover:-translate-y-1 hover:border-neon/50">
      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-chrome">
        {formatDate(entry.date)}
      </span>
      <h3 className="mt-3 text-pretty text-lg font-semibold leading-snug">
        <Link to={`/${section}/$slug`} params={{ slug: entry.slug }} className="transition-colors hover:text-chrome">
          {entry.title}
        </Link>
      </h3>
      <p className="mt-2 text-pretty text-sm text-muted">{entry.summary}</p>
    </article>
  );
}

export function ListRow({ index, section, entry }: { index: number; section: SectionKey; entry: Entry }) {
  return (
    <li className="group -mx-2 flex items-center gap-4 px-2 py-4 transition-colors hover:bg-panel/60">
      <span className="w-8 font-mono text-xs text-neon">{String(index + 1).padStart(2, "0")}</span>
      <div className="flex-1">
        <h3 className="text-pretty font-semibold">
          <Link to={`/${section}/$slug`} params={{ slug: entry.slug }} className="transition-colors hover:text-chrome">
            {entry.title}
          </Link>
        </h3>
        <p className="text-sm text-muted">{entry.summary}</p>
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted transition-colors group-hover:text-chrome">
        Read →
      </span>
    </li>
  );
}

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        if (block.kind === "h2")
          return (
            <h2 key={i} className="pt-4 font-display text-3xl uppercase tracking-tight">
              {block.text}
            </h2>
          );
        if (block.kind === "list")
          return (
            <ul key={i} className="space-y-2 border-l border-line pl-5">
              {block.items.map((item) => (
                <li key={item} className="text-pretty text-muted">
                  {item}
                </li>
              ))}
            </ul>
          );
        if (block.kind === "quote")
          return (
            <blockquote key={i} className="border-l-2 border-neon bg-panel/60 p-5 text-pretty text-lg text-ink">
              {block.text}
            </blockquote>
          );
        return (
          <p key={i} className="text-pretty leading-relaxed text-muted">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

export function EntryPage({ section, entry }: { section: SectionKey; entry: Entry }) {
  const related = (entry.related ?? []).map(resolveRelated).filter(Boolean) as {
    href: string;
    entry: Entry;
  }[];

  return (
    <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-8 px-5 py-14 sm:px-8">
      <main className="col-span-12 lg:col-span-8">
        <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-chrome">
          <Link to={`/${section}`} className="transition-colors hover:text-ink">
            {section}
          </Link>
          <span className="px-2 text-muted">/</span>
          <span className="text-muted">{formatDate(entry.date)}</span>
        </div>
        <h1 className="mt-4 text-balance font-display text-5xl uppercase leading-[0.92] tracking-tight md:text-7xl">
          {entry.title}
        </h1>
        <p className="mt-5 max-w-[60ch] text-pretty text-lg text-muted">{entry.summary}</p>

        {entry.image && (
          <img
            src={entry.image}
            alt={entry.imageAlt ?? entry.title}
            loading="lazy"
            width={1600}
            height={900}
            className="mt-8 w-full border border-line object-cover"
          />
        )}

        {entry.facts && (
          <dl className="mt-8 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
            {entry.facts.map((fact) => (
              <div key={fact.label} className="bg-panel p-4">
                <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">{fact.label}</dt>
                <dd className="mt-1 text-sm font-semibold">{fact.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-10">
          <Blocks blocks={entry.body} />
        </div>

        <div className="mt-12 border-y border-dashed border-line py-6">
          <AdSlot size="728 × 90" ratio="h-24" />
        </div>

        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="border-b border-line pb-3 font-display text-3xl uppercase tracking-tight">
              Keep reading
            </h2>
            <ul className="mt-4 divide-y divide-line">
              {related.map((r) => (
                <li key={r.href} className="py-3">
                  <Link to={r.href} className="text-pretty font-semibold transition-colors hover:text-chrome">
                    {r.entry.title}
                  </Link>
                  <p className="text-sm text-muted">{r.entry.summary}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>

      <aside className="col-span-12 lg:col-span-4">
        <div className="space-y-5 lg:sticky lg:top-24">
          <AdSlot />
        </div>
      </aside>
    </div>
  );
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
