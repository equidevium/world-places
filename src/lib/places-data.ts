// Static dataset of featured places rendered on the globe and in the
// places listing pages. Every entry uses real coordinates and real facts.
// No API calls — this is the single source of truth for the demo.

import type { Place } from "@/types/places";

export const PLACES: Place[] = [
  {
    slug: "athens",
    name: "Athens",
    country: "Greece",
    continent: "Europe",
    coordinates: { lat: 37.9838, lng: 23.7275 },
    description:
      "Birthplace of democracy and Western philosophy. The city has been continuously inhabited for over 3,400 years, with the Acropolis standing as a reminder that civic life once revolved around open-air debate and marble columns.",
    facts: [
      "The Parthenon was completed in 432 BC and served as a treasury before it was a temple.",
      "Athens hosted the first modern Olympic Games in 1896.",
      "The city sits in a basin surrounded by mountains on three sides, which traps heat in summer and smog in winter.",
    ],
    category: "historical",
    imageUrl: "/images/athens.jpg",
    featured: true,
  },
  {
    slug: "rome",
    name: "Rome",
    country: "Italy",
    continent: "Europe",
    coordinates: { lat: 41.9028, lng: 12.4964 },
    description:
      "Two thousand years of empire, papacy, and espresso. Rome layers its history vertically — dig beneath any construction site and you hit an ancient floor. The city treats its ruins the way other cities treat lampposts: they are just part of the scenery.",
    facts: [
      "The Colosseum could seat around 50,000 spectators and had a retractable awning system.",
      "Rome has more than 2,000 fountains, more than any other city in the world.",
      "The Pantheon's unreinforced concrete dome is still the largest of its kind after nearly 1,900 years.",
    ],
    category: "historical",
    imageUrl: "/images/rome.jpg",
    featured: true,
  },
  {
    slug: "cairo",
    name: "Cairo",
    country: "Egypt",
    continent: "Africa",
    coordinates: { lat: 30.0444, lng: 31.2357 },
    description:
      "A megacity of over 20 million people built at the point where the Nile Delta begins. The Giza pyramids sit on the western edge of the metro area — you can see them from a Pizza Hut parking lot, which says more about urban sprawl than about ancient Egypt.",
    facts: [
      "The Great Pyramid of Giza was the tallest structure on Earth for over 3,800 years.",
      "Cairo's Al-Azhar University, founded in 970 AD, is one of the oldest continuously operating universities.",
      "The city's name in Arabic, al-Qāhirah, means 'the vanquisher.'",
    ],
    category: "historical",
    imageUrl: "/images/cairo.jpg",
    featured: true,
  },
  {
    slug: "berlin",
    name: "Berlin",
    country: "Germany",
    continent: "Europe",
    coordinates: { lat: 52.52, lng: 13.405 },
    description:
      "A city that has been leveled, divided by a wall, and rebuilt twice in a single century. Berlin's identity is defined by reinvention — every neighbourhood tells a different story depending on which decade you look at.",
    facts: [
      "The Berlin Wall stood for 28 years, from 1961 to 1989, dividing the city into East and West.",
      "Berlin has more bridges than Venice — around 960 compared to Venice's 400.",
      "The city's Tempelhof Airport, once one of Europe's busiest, is now a public park where people kite-surf on the old runways.",
    ],
    category: "cultural",
    imageUrl: "/images/berlin.jpg",
    featured: true,
  },
  {
    slug: "tokyo",
    name: "Tokyo",
    country: "Japan",
    continent: "Asia",
    coordinates: { lat: 35.6762, lng: 139.6503 },
    description:
      "The largest metropolitan economy on the planet, running on punctuality and vending machines. Tokyo manages to be both hyper-modern and deeply traditional — a Shinto shrine can sit comfortably between two glass towers without anyone finding it odd.",
    facts: [
      "Tokyo's rail network moves over 13 million passengers per day, more than most countries' entire systems.",
      "The Tsukiji outer market still operates despite the inner wholesale market relocating to Toyosu in 2018.",
      "Tokyo was known as Edo until 1868, when the Emperor moved the capital from Kyoto.",
    ],
    category: "urban",
    imageUrl: "/images/tokyo.jpg",
    featured: true,
  },
];
