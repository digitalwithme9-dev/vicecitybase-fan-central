import { Link } from "@tanstack/react-router";

export function Disclaimer() {
  return (
    <div className="border-y border-line bg-panel/40">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.15em] text-muted sm:flex-row sm:items-center sm:px-8">
        <span className="text-neon">Disclaimer</span>
        <span>
          ViceBase is an unofficial fan site. Not affiliated with, endorsed by, or connected to Rockstar
          Games or Take-Two Interactive.
        </span>
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-void">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-8 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="font-display text-2xl tracking-tight">
            VICE<span className="text-neon">BASE</span>
          </Link>
          <p className="mt-3 max-w-[22ch] text-pretty text-sm text-muted">
            A fan-built encyclopedia for the next Vice City.
          </p>
        </div>
        <div>
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Explore</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/characters" className="transition-colors hover:text-chrome">Characters</Link></li>
            <li><Link to="/features" className="transition-colors hover:text-chrome">Features</Link></li>
            <li><Link to="/news" className="transition-colors hover:text-chrome">News</Link></li>
            <li><Link to="/guides" className="transition-colors hover:text-chrome">Guides</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Project</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/about" className="transition-colors hover:text-chrome">About</Link></li>
            <li>
              <a href="/sitemap.xml" className="transition-colors hover:text-chrome">Sitemap</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Start here</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/characters/$slug" params={{ slug: "jason-duval" }} className="transition-colors hover:text-chrome">
                Jason Duval
              </Link>
            </li>
            <li>
              <Link to="/characters/$slug" params={{ slug: "lucia-caminos" }} className="transition-colors hover:text-chrome">
                Lucia Caminos
              </Link>
            </li>
            <li>
              <Link to="/features/$slug" params={{ slug: "vice-city" }} className="transition-colors hover:text-chrome">
                Vice City
              </Link>
            </li>
            <li>
              <Link to="/guides/$slug" params={{ slug: "gta-vi-gameplay" }} className="transition-colors hover:text-chrome">
                GTA VI gameplay
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-2 px-5 py-5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted sm:flex-row sm:items-center sm:px-8">
          <span>© {new Date().getFullYear()} ViceBase — fan project</span>
          <span>All game names and marks belong to their owners.</span>
        </div>
      </div>
    </footer>
  );
}
