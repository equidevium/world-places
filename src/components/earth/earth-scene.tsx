"use client";

import { useCallback } from "react";
import { ArcRotateCamera, HemisphericLight, Vector3 } from "@babylonjs/core";
import type { Engine, Scene } from "@babylonjs/core";
import { useBabylonEngine } from "@/hooks/use-babylon-engine";
import { createRealisticEarth } from "@/components/earth/earth-realistic";
import { registerEarthRotation } from "@/hooks/use-earth-rotation";

export function EarthScene() {
  const setupScene = useCallback((engine: Engine, scene: Scene) => {
    const canvas = engine.getRenderingCanvas();

    const camera = new ArcRotateCamera(
      "mainCamera",
      Math.PI / 2,
      Math.PI / 2.5,
      3.5,
      Vector3.Zero(),
      scene,
    );
    camera.lowerRadiusLimit = 2;
    camera.upperRadiusLimit = 8;
    camera.wheelDeltaPercentage = 0.01;
    camera.panningSensibility = 0;
    camera.attachControl(canvas, true);

    const ambientLight = new HemisphericLight(
      "ambientLight",
      new Vector3(0, 1, 0),
      scene,
    );
    ambientLight.intensity = 0.4;

    const earth = createRealisticEarth(scene);

    const stopRotation = registerEarthRotation(scene, [
      { mesh: earth.earthMesh, speed: 0.05 },
      { mesh: earth.cloudMesh, speed: 0.03 },
    ]);

    return () => {
      stopRotation();
      earth.dispose();
      camera.dispose();
      ambientLight.dispose();
    };
  }, []);

  const { canvasRef, isReady } = useBabylonEngine(setupScene);

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
