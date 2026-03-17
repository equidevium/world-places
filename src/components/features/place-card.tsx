import type { Place } from "@/types/places";
import type { BadgeVariant } from "@/types/components";
import { Card, CardHeader, CardBody } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PlaceCardProps {
  place: Place;
}

const CATEGORY_VARIANTS: Record<string, BadgeVariant> = {
  "natural-wonder": "success",
  historical: "warning",
  cultural: "info",
  urban: "default",
  remote: "error",
};

export function PlaceCard({ place }: PlaceCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-fg">{place.name}</h3>
            <p className="mt-0.5 text-sm text-fg3">
              {place.country}, {place.continent}
            </p>
          </div>
          <Badge
            label={place.category}
            variant={CATEGORY_VARIANTS[place.category] ?? "default"}
          />
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-sm leading-relaxed text-fg2">
          {place.description}
        </p>
        <div className="mt-3 flex items-center gap-4 text-xs text-fg4">
          <span className="font-mono">
            {place.coordinates.lat.toFixed(2)}°N
          </span>
          <span className="font-mono">
            {place.coordinates.lng.toFixed(2)}°E
          </span>
        </div>
      </CardBody>
    </Card>
  );
}
