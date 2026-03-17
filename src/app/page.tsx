import { EarthSceneLoader } from "@/components/earth/earth-scene-loader";

export default function HomePage() {
  return (
    <section className="flex flex-1 flex-col">
      <div className="flex flex-1 items-center justify-center">
        <div className="h-[600px] w-full max-w-4xl">
          <EarthSceneLoader />
        </div>
      </div>
    </section>
  );
}
