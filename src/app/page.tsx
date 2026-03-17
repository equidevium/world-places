import { EarthSceneLoader } from "@/components/earth/earth-scene-loader";
import { PlaceList } from "@/components/features/place-list";
import { StatsPanel } from "@/components/features/stats-panel";
import { PLACES } from "@/lib/places-data";

export default function HomePage() {
  const featured = PLACES.filter((p) => p.featured);

  return (
    <div className="flex flex-1 flex-col">
      <section className="relative flex items-center justify-center py-8">
        <div className="h-150 w-full max-w-4xl">
          <EarthSceneLoader />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-xl font-semibold text-fg">Featured Places</h2>
            <p className="mt-1 text-sm text-fg3">
              A handful of places worth knowing about.
            </p>
          </div>
          <StatsPanel places={PLACES} />
        </div>
        <PlaceList places={featured} />
      </section>
    </div>
  );
}
