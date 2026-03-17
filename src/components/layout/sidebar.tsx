import type { Place } from "@/types/places";

interface SidebarProps {
  recommendedPlaces: Place[];
}

export function Sidebar({ recommendedPlaces }: SidebarProps) {
  return (
    <aside className="flex w-72 shrink-0 flex-col border-r border-bg1 bg-bg">
      <div className="border-b border-bg1 px-4 py-5">
        <h2 className="font-mono text-sm font-semibold text-fg2">
          Recommended
        </h2>
        <ul className="mt-3 space-y-2">
          {recommendedPlaces.map((place) => (
            <li key={place.slug}>
              <a
                href={`/places/${place.slug}`}
                className="group flex flex-col gap-0.5 rounded-md px-2 py-2 transition-colors hover:bg-bg-soft"
              >
                <span className="text-sm font-medium text-fg transition-colors group-hover:text-yellow-light">
                  {place.name}
                </span>
                <span className="text-xs text-fg4">
                  {place.country}, {place.continent}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-4 py-5">
        <h2 className="font-mono text-sm font-semibold text-fg2">Bookmarked</h2>
        <p className="mt-3 text-xs text-fg4">
          Mark places as interesting while exploring the globe and they will
          appear here ( we will save them in your local storage - so yours is
          yours ).
        </p>
      </div>
    </aside>
  );
}
