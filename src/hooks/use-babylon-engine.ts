"use client";

// Hook for bootstrapping BabylonJS engine onto a <canvas> element.
//
// Uses a React 19 ref callback instead of useEffect — the engine gets
// created the moment the canvas mounts into the DOM, and torn down when
// the returned cleanup function fires on unmount. No timing races, no
// stale refs, no double-init in Strict Mode.
//
// Usage:
//   const { canvasRef, isReady } = useBabylonEngine((engine, scene) => {
//     // set up cameras, lights, meshes here
//     // return a cleanup fn if you need to dispose anything you created
//   });
//
//   <canvas ref={canvasRef} />

import { useState } from "react";
import { Engine, Scene } from "@babylonjs/core";
import type { SceneConfig } from "@/types/earth";

const DEFAULT_CONFIG: SceneConfig = {
  antialias: true,
  engineOptions: {
    preserveDrawingBuffer: false,
    stencil: true,
  },
  adaptToDeviceRatio: true,
};

type CleanupFn = () => void;
type OnSceneReady = (engine: Engine, scene: Scene) => CleanupFn | undefined;

interface UseBabylonEngineReturn {
  canvasRef: (node: HTMLCanvasElement | null) => (() => void) | undefined;
  isReady: boolean;
}

export function useBabylonEngine(
  onSceneReady: OnSceneReady,
  config: Partial<SceneConfig> = {},
): UseBabylonEngineReturn {
  const [isReady, setIsReady] = useState(false);

  const { antialias, engineOptions, adaptToDeviceRatio } = {
    ...DEFAULT_CONFIG,
    ...config,
  };

  function canvasRef(canvas: HTMLCanvasElement | null) {
    if (!canvas) {
      setIsReady(false);
      return;
    }

    const engine = new Engine(
      canvas,
      antialias,
      engineOptions,
      adaptToDeviceRatio,
    );

    const scene = new Scene(engine);
    scene.clearColor.set(0.114, 0.125, 0.129, 1);

    const sceneCleanup = onSceneReady(engine, scene);

    engine.runRenderLoop(() => {
      scene.render();
    });

    setIsReady(true);

    function handleResize() {
      engine.resize();
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      sceneCleanup?.();
      engine.stopRenderLoop();
      scene.dispose();
      engine.dispose();
      setIsReady(false);
    };
  }

  return { canvasRef, isReady };
}
