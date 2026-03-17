// Main scene wrapper — owns the BabylonJS engine, camera, lights, and
// delegates earth creation to whichever mode is active. Markers are
// created once and persist across mode toggles since they represent
// the same data regardless of render style.

"use client";

import { useCallback, useRef, useState } from "react";
import {
  ArcRotateCamera,
  HemisphericLight,
  TransformNode,
  Vector3,
} from "@babylonjs/core";
import type { Engine, Scene } from "@babylonjs/core";

import { useBabylonEngine } from "@/hooks/use-babylon-engine";
import { registerEarthRotation } from "@/hooks/use-earth-rotation";
import { createRealisticEarth } from "@/components/earth/earth-realistic";
import { createStylizedEarth } from "@/components/earth/earth-stylized";
import { createMarkers } from "@/components/earth/earth-markers";
import { RenderToggle } from "@/components/earth/render-toggle";
import { PLACES } from "@/lib/places-data";
import type { RenderMode, MarkerData } from "@/types/earth";

// Convert places data into the format the marker system expects
const MARKER_DATA: MarkerData[] = PLACES.map((place) => ({
  id: place.slug,
  label: place.name,
  coordinates: place.coordinates,
  category: place.category,
}));

interface EarthHandle {
  dispose: () => void;
}

function buildEarth(
  scene: Scene,
  renderMode: RenderMode,
  pivot: TransformNode,
): { handle: EarthHandle; stopRotation: () => void } {
  if (renderMode === "realistic") {
    const earth = createRealisticEarth(scene);
    earth.earthMesh.parent = pivot;
    earth.cloudMesh.parent = pivot;

    const stopRotation = registerEarthRotation(scene, [
      { mesh: pivot, speed: 0.05 },
    ]);
    return { handle: earth, stopRotation };
  }

  const earth = createStylizedEarth(scene);
  earth.earthMesh.parent = pivot;
  earth.wireframeMesh.parent = pivot;

  const stopRotation = registerEarthRotation(scene, [
    { mesh: pivot, speed: 0.04 },
  ]);
  return { handle: earth, stopRotation };
}

export function EarthScene() {
  const [mode, setMode] = useState<RenderMode>("realistic");

  const sceneRef = useRef<Scene | null>(null);
  const earthRef = useRef<EarthHandle | null>(null);
  const rotationCleanupRef = useRef<(() => void) | null>(null);
  const modeRef = useRef<RenderMode>("realistic");
  const pivotRef = useRef<TransformNode | null>(null);

  function teardownEarth() {
    rotationCleanupRef.current?.();
    rotationCleanupRef.current = null;
    earthRef.current?.dispose();
    earthRef.current = null;
  }

  function swapEarth(nextMode: RenderMode) {
    const scene = sceneRef.current;
    const pivot = pivotRef.current;
    if (!scene || !pivot) return;

    teardownEarth();
    const { handle, stopRotation } = buildEarth(scene, nextMode, pivot);
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
    camera.lowerRadiusLimit = 2.5;
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

    // Shared pivot node — earth meshes and markers are children of this
    // so they all rotate together. When we swap render modes, only the
    // earth meshes are disposed; the pivot and markers survive.
    const pivot = new TransformNode("earthPivot", scene);
    pivotRef.current = pivot;

    // Markers are mode-independent — same dots on both earths
    const markers = createMarkers(scene, MARKER_DATA);
    for (const mesh of markers.meshes) {
      mesh.parent = pivot;
    }

    const { handle, stopRotation } = buildEarth(scene, "realistic", pivot);
    earthRef.current = handle;
    rotationCleanupRef.current = stopRotation;
    modeRef.current = "realistic";

    return () => {
      teardownEarth();
      markers.dispose();
      pivot.dispose();
      camera.dispose();
      ambientLight.dispose();
      sceneRef.current = null;
      pivotRef.current = null;
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
