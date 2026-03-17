"use client";

import dynamic from "next/dynamic";

const EarthScene = dynamic(
  () =>
    import("@/components/earth/earth-scene").then((mod) => ({
      default: mod.EarthScene,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-bg-hard">
        <p className="font-mono text-sm text-fg4">Loading 3D engine...</p>
      </div>
    ),
  },
);

export function EarthSceneLoader() {
  return <EarthScene />;
}
