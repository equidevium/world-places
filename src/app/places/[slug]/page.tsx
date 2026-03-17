import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { CATEGORY_VARIANTS } from "@/lib/constants";
import { PLACES } from "@/lib/places-data";

interface PlacePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PLACES.map((place) => ({ slug: place.slug }));
}

export async function generateMetadata({
  params,
}: PlacePageProps): Promise<Metadata> {
  const { slug } = await params;
  const place = PLACES.find((p) => p.slug === slug);
  if (!place) return { title: "Not Found" };

  return {
    title: place.name,
    description: place.description,
  };
}

export default async function PlacePage({ params }: PlacePageProps) {
  const { slug } = await params;
  const place = PLACES.find((p) => p.slug === slug);

  if (!place) notFound();

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-10">
      <div className="mb-6 flex items-center gap-3">
        <h1 className="text-2xl font-semibold text-fg">{place.name}</h1>
        <Badge
          label={place.category}
          variant={CATEGORY_VARIANTS[place.category] ?? "default"}
        />
      </div>

      <p className="text-sm text-fg3">
        {place.country}, {place.continent}
      </p>

      <p className="mt-6 leading-relaxed text-fg2">{place.description}</p>

      <div className="mt-8">
        <h2 className="mb-3 font-mono text-sm font-medium text-fg4">Facts</h2>
        <ul className="space-y-3">
          {place.facts.map((fact, i) => (
            <li
              key={i}
              className="border-l-2 border-bg2 pl-4 text-sm text-fg3"
            >
              {fact}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex gap-6 border-t border-bg1 pt-6 font-mono text-sm text-fg4">
        <span>{place.coordinates.lat.toFixed(4)}°N</span>
        <span>{place.coordinates.lng.toFixed(4)}°E</span>
      </div>
    </div>
  );
}
