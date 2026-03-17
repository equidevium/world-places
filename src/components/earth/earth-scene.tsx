// Main scene wrapper — owns the BabylonJS engine, camera, lights, and
// delegates earth creation to whichever mode is active. When the user
// toggles modes, the current earth is disposed and the new one built
// in its place. A short CSS opacity fade covers the swap so the canvas
// doesn't flash.

"use client";

import { useCallback, useRef, useState } from "react";
import { ArcRotateCamera, HemisphericLight, Vector3 } from "@babylonjs/core";
import type { Engine, Scene } from "@babylonjs/core";

import { useBabylonEngine } from "@/hooks/use-babylon-engine";
import { registerEarthRotation } from "@/hooks/use-earth-rotation";
import { createRealisticEarth } from "@/components/earth/earth-realistic";
import { createStylizedEarth } from "@/components/earth/earth-stylized";
import { RenderToggle } from "@/components/earth/render-toggle";
import type { RenderMode } from "@/types/earth";

interface EarthHandle {
  dispose: () => void;
}

function buildEarth(
  scene: Scene,
  renderMode: RenderMode,
): { handle: EarthHandle; stopRotation: () => void } {
  if (renderMode === "realistic") {
    const earth = createRealisticEarth(scene);
    const stopRotation = registerEarthRotation(scene, [
      { mesh: earth.earthMesh, speed: 0.05 },
      { mesh: earth.cloudMesh, speed: 0.03 },
    ]);
    return { handle: earth, stopRotation };
  }

  const earth = createStylizedEarth(scene);
  const stopRotation = registerEarthRotation(scene, [
    { mesh: earth.earthMesh, speed: 0.04 },
    { mesh: earth.wireframeMesh, speed: 0.04 },
  ]);
  return { handle: earth, stopRotation };
}

export function EarthScene() {
  const [mode, setMode] = useState<RenderMode>("realistic");

  const sceneRef = useRef<Scene | null>(null);
  const earthRef = useRef<EarthHandle | null>(null);
  const rotationCleanupRef = useRef<(() => void) | null>(null);
  const modeRef = useRef<RenderMode>("realistic");

  function teardownEarth() {
    rotationCleanupRef.current?.();
    rotationCleanupRef.current = null;
    earthRef.current?.dispose();
    earthRef.current = null;
  }

  function swapEarth(nextMode: RenderMode) {
    const scene = sceneRef.current;
    if (!scene) return;

    teardownEarth();
    const { handle, stopRotation } = buildEarth(scene, nextMode);
    earthRef.current = handle;
    rotationCleanupRef.current = stopRotation;
    modeRef.current = nextMode;
    setMode(nextMode);
  }

  const handleToggle = useCallback(() => {
    const next: RenderMode =
      modeRef.current === "realistic" ? "stylized" : "realistic";
    swapEarth(next);
  }, []);

  const setupScene = useCallback((engine: Engine, scene: Scene) => {
    sceneRef.current = scene;
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

    const { handle, stopRotation } = buildEarth(scene, "realistic");
    earthRef.current = handle;
    rotationCleanupRef.current = stopRotation;
    modeRef.current = "realistic";

    return () => {
      teardownEarth();
      camera.dispose();
      ambientLight.dispose();
      sceneRef.current = null;
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

      {isReady && (
        <div className="absolute bottom-4 right-4">
          <RenderToggle
            mode={mode}
            onToggle={handleToggle}
          />
        </div>
      )}
    </div>
  );
}
