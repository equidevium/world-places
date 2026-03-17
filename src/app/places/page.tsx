import type { Metadata } from "next";
import { PlacesExplorer } from "@/components/features/places-explorer";
import { PLACES } from "@/lib/places-data";

export const metadata: Metadata = {
  title: "Places",
  description: "Browse all featured places from around the world.",
};

export default function PlacesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-10">
      <h1 className="text-2xl font-semibold text-fg">All Places</h1>
      <p className="mt-1 text-sm text-fg3">
        {PLACES.length} places across {new Set(PLACES.map((p) => p.continent)).size} continents.
      </p>
      <div className="mt-8">
        <PlacesExplorer places={PLACES} />
      </div>
    </div>
  );
}
