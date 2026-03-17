"use client";

import { useEffect } from "react";
import { ArcRotateCamera, Vector3, HemisphericLight } from "@babylonjs/core";
import { useBabylonEngine } from "@/hooks/use-babylon-engine";

export function EarthScene() {
  const { canvasRef, scene, isReady } = useBabylonEngine();

  useEffect(() => {
    if (!scene || !isReady) return;

    const camera = new ArcRotateCamera(
      "mainCamera",
      Math.PI / 2,
      Math.PI / 2.5,
      4,
      Vector3.Zero(),
      scene,
    );
    camera.lowerRadiusLimit = 2.5;
    camera.upperRadiusLimit = 10;
    camera.wheelDeltaPercentage = 0.01;
    camera.attachControl(scene.getEngine().getRenderingCanvas(), true);

    const ambientLight = new HemisphericLight(
      "ambientLight",
      new Vector3(0, 1, 0),
      scene,
    );
    ambientLight.intensity = 0.4;

    return () => {
      camera.dispose();
      ambientLight.dispose();
    };
  }, [scene, isReady]);

  return (
    <div className="relative h-full w-full">
      <canvas
        ref={canvasRef}
        className="h-full w-full outline-none"
        touch-action="none"
      />
      {!isReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-bg-hard">
          <p className="font-mono text-sm text-fg4">Initializing scene...</p>
        </div>
      )}
    </div>
  );
}
