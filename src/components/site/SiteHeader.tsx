import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/characters", label: "Characters" },
  { to: "/features", label: "Features" },
  { to: "/news", label: "News" },
  { to: "/guides", label: "Guides" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-void/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-6 px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2 font-display text-2xl leading-none tracking-tight">
          VICE<span className="text-neon">BASE</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "px-3 py-2 text-ink bg-neon/10 ring-1 ring-neon/40" }}
              inactiveProps={{ className: "px-3 py-2 hover:text-ink transition-colors" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="ml-auto font-mono text-[11px] uppercase tracking-[0.18em] text-muted lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-line lg:hidden">
          <ul className="mx-auto max-w-[1440px] divide-y divide-line px-5 sm:px-8">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "block py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-neon" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
