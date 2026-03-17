"use client";

import { useCallback, useState } from "react";
import type { Place } from "@/types/places";
import { SearchBar } from "@/components/features/search-bar";
import { PlaceList } from "@/components/features/place-list";

interface PlacesExplorerProps {
  places: Place[];
}

function filterPlaces(places: Place[], query: string): Place[] {
  if (!query) return places;

  const lower = query.toLowerCase();
  return places.filter(
    (p) =>
      p.name.toLowerCase().includes(lower) ||
      p.country.toLowerCase().includes(lower) ||
      p.continent.toLowerCase().includes(lower) ||
      p.category.toLowerCase().includes(lower),
  );
}

export function PlacesExplorer({ places }: PlacesExplorerProps) {
  const [filtered, setFiltered] = useState(places);

  const handleSearch = useCallback(
    (query: string) => {
      setFiltered(filterPlaces(places, query));
    },
    [places],
  );

  return (
    <div className="space-y-6">
      <SearchBar onSearch={handleSearch} placeholder="Search by name, country, continent, or category..." />
      <PlaceList places={filtered} />
    </div>
  );
}
