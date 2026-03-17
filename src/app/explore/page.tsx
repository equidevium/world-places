import type { Metadata } from "next";
import { EarthSceneLoader } from "@/components/earth/earth-scene-loader";

export const metadata: Metadata = {
  title: "Explore",
  description: "Spin the globe and explore places around the world in 3D.",
};

export default function ExplorePage() {
  return (
    <div className="flex flex-1">
      <div className="h-[calc(100dvh-8rem)] w-full">
        <EarthSceneLoader />
      </div>
    </div>
  );
}
