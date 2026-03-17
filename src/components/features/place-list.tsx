import type { Place } from "@/types/places";
import { PlaceCard } from "@/components/features/place-card";

interface PlaceListProps {
  places: Place[];
}

export function PlaceList({ places }: PlaceListProps) {
  if (places.length === 0) {
    return (
      <p className="py-12 text-center text-sm text-fg4">
        No places to show.
      </p>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {places.map((place) => (
        <PlaceCard key={place.slug} place={place} />
      ))}
    </div>
  );
}
