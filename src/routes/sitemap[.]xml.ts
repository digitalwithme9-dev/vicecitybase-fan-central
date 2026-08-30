import { createFileRoute } from "@tanstack/react-router";
import { allEntryPaths } from "@/data/content";

const staticPaths = ["/", "/characters", "/features", "/news", "/guides", "/about"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const url = new URL(request.url);
        const forwardedHost =
          url.hostname === "localhost" ? request.headers.get("x-forwarded-host") : null;
        const origin = forwardedHost ? `https://${forwardedHost}` : url.origin;

        const urls = [...staticPaths, ...allEntryPaths]
          .map((path) => `  <url><loc>${origin}${path}</loc></url>`)
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

        return new Response(xml, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
