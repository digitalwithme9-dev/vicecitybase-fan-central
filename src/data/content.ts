import heroImg from "@/assets/hero-vice-city.jpg";
import jasonImg from "@/assets/jason-duval.jpg";
import luciaImg from "@/assets/lucia-caminos.jpg";
import viceCityImg from "@/assets/vice-city.jpg";
import gameplayImg from "@/assets/gameplay.jpg";

export const heroImage = heroImg;

/** A block of body copy on a content page. */
export type Block =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "quote"; text: string };

/** One content entry. Add new objects to the arrays below to publish a page. */
export interface Entry {
  slug: string;
  title: string;
  /** Short tag shown on cards, e.g. "Protagonist" or "Location". */
  label: string;
  /** Meta description + card summary. Keep under 160 characters. */
  summary: string;
  /** Page <title> — keep under 60 characters including the suffix. */
  metaTitle: string;
  date: string;
  image?: string;
  imageAlt?: string;
  facts?: { label: string; value: string }[];
  body: Block[];
  /** Slugs of related entries, formatted as "section/slug". */
  related?: string[];
}

export const characters: Entry[] = [
  {
    slug: "jason-duval",
    title: "Jason Duval",
    label: "Protagonist",
    metaTitle: "Jason Duval — GTA VI Character Profile | ViceBase",
    summary:
      "Everything known about Jason Duval, one of the two playable protagonists in Grand Theft Auto VI: background, role in the story and confirmed details.",
    date: "2026-08-12",
    image: jasonImg,
    imageAlt: "Neon-lit portrait of Jason Duval at night in Vice City",
    facts: [
      { label: "Role", value: "Playable protagonist" },
      { label: "Home", value: "Leonida Keys" },
      { label: "Partner", value: "Lucia Caminos" },
      { label: "Status", value: "Confirmed by Rockstar" },
    ],
    body: [
      {
        kind: "p",
        text: "Jason Duval is one of the two playable leads in Grand Theft Auto VI. He grew up around hustlers, drifted through the army, and washed up in the Leonida Keys looking for the kind of easy money that never stays easy for long.",
      },
      { kind: "h2", text: "Background" },
      {
        kind: "p",
        text: "Trailer footage places Jason in the Keys, running low-level work for local operators. He is presented as the steadier half of the duo — pragmatic, tired of the life, and repeatedly pulled back into it by circumstance rather than ambition.",
      },
      { kind: "h2", text: "Role in the story" },
      {
        kind: "p",
        text: "Jason and Lucia are framed as a pair whose fortunes are tied together. Rockstar has described their relationship as the centre of the story, which suggests missions that switch between the two of them rather than keeping them apart.",
      },
      { kind: "h2", text: "What we still do not know" },
      {
        kind: "list",
        items: [
          "How player switching between Jason and Lucia is triggered",
          "Whether Jason has unique skills or a personal ability",
          "How much of the map opens up during his early chapters",
        ],
      },
    ],
    related: ["characters/lucia-caminos", "features/vice-city", "guides/gta-vi-gameplay"],
  },
  {
    slug: "lucia-caminos",
    title: "Lucia Caminos",
    label: "Protagonist",
    metaTitle: "Lucia Caminos — GTA VI Character Profile | ViceBase",
    summary:
      "A full profile of Lucia Caminos, the first female protagonist in a modern Grand Theft Auto: her story, her partnership with Jason and confirmed details.",
    date: "2026-08-14",
    image: luciaImg,
    imageAlt: "Neon-lit portrait of Lucia Caminos on a Vice City street",
    facts: [
      { label: "Role", value: "Playable protagonist" },
      { label: "Notable", value: "First female GTA lead in decades" },
      { label: "Partner", value: "Jason Duval" },
      { label: "Status", value: "Confirmed by Rockstar" },
    ],
    body: [
      {
        kind: "p",
        text: "Lucia Caminos is the other half of Grand Theft Auto VI's dual-protagonist story and the first female playable lead in the series in over twenty years. She is introduced fresh out of custody, with a plan and very little patience.",
      },
      { kind: "h2", text: "Background" },
      {
        kind: "p",
        text: "The reveal footage opens on Lucia in a correctional facility before cutting to her on the road with Jason. Her family, her sentence, and the deal that got her out are all left deliberately vague — which is exactly the sort of thread Rockstar tends to pull on later.",
      },
      { kind: "h2", text: "Why she matters" },
      {
        kind: "quote",
        text: "The story is built around Jason and Lucia together, not two separate campaigns running in parallel.",
      },
      {
        kind: "p",
        text: "Lucia reads as the driver of the plot: she escalates, Jason absorbs. If the switching system works the way the trailer implies, expect missions where the pair split up and the player chooses which side of a job to run.",
      },
    ],
    related: ["characters/jason-duval", "features/vice-city", "news/leonida-map-details"],
  },
];

export const features: Entry[] = [
  {
    slug: "vice-city",
    title: "Vice City",
    label: "Location",
    metaTitle: "Vice City in GTA VI — Districts & Map Guide | ViceBase",
    summary:
      "A breakdown of Vice City in GTA VI: the districts confirmed so far, how the surrounding state of Leonida fits together, and what the map looks like.",
    date: "2026-08-20",
    image: viceCityImg,
    imageAlt: "Aerial night view of a neon-lit Vice City coastline",
    facts: [
      { label: "State", value: "Leonida" },
      { label: "Inspiration", value: "Modern-day Florida" },
      { label: "Returning", value: "First seen in GTA: Vice City (2002)" },
    ],
    body: [
      {
        kind: "p",
        text: "Vice City returns as the beating centre of Leonida, a fictional state modelled on modern Florida. Where the 2002 original was a compact neon strip, the new version is one city inside a much larger region of beaches, swamp, highway and small towns.",
      },
      { kind: "h2", text: "Confirmed areas" },
      {
        kind: "list",
        items: [
          "Vice Beach — the dense strip of hotels, clubs and boardwalk",
          "Downtown Vice City — high-rises, finance and nightlife",
          "The Keys — island chains and marinas to the south",
          "Grassrivers — wetlands, airboats and back-country roads",
          "Port Gellhorn — a worn-out coastal town further north",
        ],
      },
      { kind: "h2", text: "How the map feels" },
      {
        kind: "p",
        text: "Footage suggests heavy use of water as connective tissue: causeways, canals and open sea between districts. Expect boats and aircraft to matter more than in previous entries, and expect travel times between the city and the outer state to be genuinely long.",
      },
    ],
    related: ["guides/gta-vi-gameplay", "characters/jason-duval", "news/leonida-map-details"],
  },
];

export const news: Entry[] = [
  {
    slug: "leonida-map-details",
    title: "New Leonida district surfaces in updated footage",
    label: "News",
    metaTitle: "New Leonida District in GTA VI Footage | ViceBase",
    summary:
      "A fresh stretch of coastal highway and a downtown grid appear in the newest Grand Theft Auto VI footage. Here is what changed and what it implies for the map.",
    date: "2026-08-26",
    body: [
      {
        kind: "p",
        text: "A new sequence in the latest footage shows a coastal highway running north out of Vice City into a district that had not previously been named, with a compact downtown grid at the end of it.",
      },
      { kind: "h2", text: "What is new" },
      {
        kind: "list",
        items: [
          "A long causeway shot that does not match any known area",
          "Signage suggesting a separate municipality, not a Vice City suburb",
          "Dense low-rise blocks rather than the beachfront towers",
        ],
      },
      {
        kind: "p",
        text: "Read it with caution — trailer geography is edited for pace, not accuracy. Still, the scale of the drive implies the state of Leonida stretches well beyond the city itself.",
      },
    ],
    related: ["features/vice-city", "guides/gta-vi-gameplay"],
  },
  {
    slug: "dual-protagonist-switching",
    title: "How dual-protagonist switching is shaping up",
    label: "News",
    metaTitle: "GTA VI Protagonist Switching Explained | ViceBase",
    summary:
      "What has actually been shown about switching between Jason and Lucia in GTA VI, and how it compares to the three-character system in GTA V.",
    date: "2026-08-18",
    body: [
      {
        kind: "p",
        text: "Rockstar has confirmed two playable characters but has not detailed the switching system. The safest read is that GTA V's mechanic returns in a narrower, story-driven form.",
      },
      { kind: "h2", text: "What that could mean" },
      {
        kind: "p",
        text: "Two leads instead of three means fewer free-roam switch targets and more scripted hand-offs inside missions. That would suit a story Rockstar has repeatedly described as being about the pair rather than about either of them alone.",
      },
    ],
    related: ["characters/jason-duval", "characters/lucia-caminos"],
  },
  {
    slug: "weather-system-confirmed",
    title: "Dynamic weather confirmed for the open world",
    label: "News",
    metaTitle: "GTA VI Dynamic Weather System | ViceBase",
    summary:
      "Storms, heat haze and flooding appear across GTA VI footage, pointing to a weather system that meaningfully reshapes the Leonida map.",
    date: "2026-08-09",
    body: [
      {
        kind: "p",
        text: "Multiple shots show heavy rain, standing water and storm-lit skies over the same locations that appear clear elsewhere, which points to a full dynamic weather cycle rather than scripted set pieces.",
      },
      { kind: "h2", text: "Why it matters" },
      {
        kind: "p",
        text: "In a state built on wetlands and coastline, weather is not just lighting. Flooded roads, rough water and reduced visibility all change how you move through the map — and how easily you get away.",
      },
    ],
    related: ["features/vice-city"],
  },
];

export const guides: Entry[] = [
  {
    slug: "gta-vi-gameplay",
    title: "GTA VI gameplay: everything confirmed so far",
    label: "Guide",
    metaTitle: "GTA VI Gameplay: Everything Confirmed | ViceBase",
    summary:
      "A running guide to confirmed GTA VI gameplay: driving, combat, the dual-protagonist system, wanted levels and the open world of Leonida.",
    date: "2026-08-28",
    image: gameplayImg,
    imageAlt: "Night driving through neon Vice City streets in GTA VI",
    facts: [
      { label: "Perspective", value: "Third and first person" },
      { label: "Players", value: "Single-player, two leads" },
      { label: "Setting", value: "State of Leonida" },
    ],
    body: [
      {
        kind: "p",
        text: "This guide tracks only what has been shown or stated directly. Anything unconfirmed is marked as such, and the page is updated whenever Rockstar releases new material.",
      },
      { kind: "h2", text: "Moving through the world" },
      {
        kind: "p",
        text: "Driving remains the backbone: wide highways, causeways and boat routes connect districts that are too far apart to walk. Footage shows on-foot traversal with more weight than GTA V, including climbing and swimming.",
      },
      { kind: "h2", text: "Combat and heists" },
      {
        kind: "list",
        items: [
          "Cover-based shooting returns with a tighter camera",
          "Robberies appear at small scale — stores, not just set-piece heists",
          "Police response scales with location and visibility",
        ],
      },
      { kind: "h2", text: "Playing as two people" },
      {
        kind: "p",
        text: "Jason and Lucia are both playable. Expect the story to hand control back and forth, with each lead giving you a different angle on the same job.",
      },
      { kind: "h2", text: "Still unconfirmed" },
      {
        kind: "list",
        items: [
          "Character customisation and progression systems",
          "Property ownership and businesses",
          "Any online component",
        ],
      },
    ],
    related: ["features/vice-city", "characters/lucia-caminos"],
  },
  {
    slug: "first-day-in-leonida",
    title: "Your first day in Leonida",
    label: "Guide",
    metaTitle: "GTA VI: Your First Day in Leonida | ViceBase",
    summary:
      "A starter guide for GTA VI: where to begin in Leonida, what to prioritise early, and the mistakes that cost new players the most time.",
    date: "2026-08-22",
    body: [
      {
        kind: "p",
        text: "A practical opening plan for the first few hours in Leonida, built on how previous Grand Theft Auto openings have worked. Treat it as a framework to adjust once the game is out.",
      },
      { kind: "h2", text: "Priorities" },
      {
        kind: "list",
        items: [
          "Follow the story until fast travel and the map open up",
          "Bank early money instead of spending it on the first car you like",
          "Learn one district properly before roaming the whole state",
        ],
      },
    ],
    related: ["guides/gta-vi-gameplay", "features/vice-city"],
  },
];

export const sections = {
  characters: { title: "Characters", items: characters },
  features: { title: "Features", items: features },
  news: { title: "News", items: news },
  guides: { title: "Guides", items: guides },
} as const;

export type SectionKey = keyof typeof sections;

export function findEntry(section: SectionKey, slug: string): Entry | undefined {
  return sections[section].items.find((e) => e.slug === slug);
}

export function resolveRelated(ref: string): { href: string; entry: Entry } | null {
  const [section, slug] = ref.split("/") as [SectionKey, string];
  const entry = findEntry(section, slug);
  return entry ? { href: `/${section}/${slug}`, entry } : null;
}

export const allEntryPaths = (Object.keys(sections) as SectionKey[]).flatMap((key) =>
  sections[key].items.map((e) => `/${key}/${e.slug}`),
);
