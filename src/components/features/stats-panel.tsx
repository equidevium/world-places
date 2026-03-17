import type { Place } from "@/types/places";

interface StatsPanelProps {
  places: Place[];
}

export function StatsPanel({ places }: StatsPanelProps) {
  const continents = new Set(places.map((p) => p.continent)).size;
  const categories = new Set(places.map((p) => p.category)).size;

  const stats = [
    { label: "Places", value: places.length },
    { label: "Continents", value: continents },
    { label: "Categories", value: categories },
  ];

  return (
    <div className="flex gap-6">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="font-mono text-2xl font-semibold text-fg">
            {stat.value}
          </p>
          <p className="text-xs text-fg4">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
