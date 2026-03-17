"use client";

// Hook for bootstrapping BabylonJS engine onto a <canvas> element.
//
// Uses a React 19 ref callback instead of useEffect — the engine gets
// created the moment the canvas mounts into the DOM, and torn down when
// the returned cleanup function fires on unmount. No timing races, no
// stale refs, no double-init in Strict Mode.
//
// The ref callback is stored behind useRef so React doesn't see a new
// function on every render and re-mount the canvas.
//
// Usage:
//   const { canvasRef, isReady } = useBabylonEngine((engine, scene) => {
//     // set up cameras, lights, meshes here
//     // return a cleanup fn if you need to dispose anything you created
//   });
//
//   <canvas ref={canvasRef} />

import { useRef, useState } from "react";
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

  // Keep the cleanup function from the previous mount so we can call it
  // if the canvas unmounts (React passes null to the ref callback).
  const cleanupRef = useRef<CleanupFn | null>(null);

  // Stable ref callback — stored in a ref so React doesn't see a new
  // function identity on re-renders, which would cause it to unmount
  // and remount the canvas (destroying the entire WebGL context).
  const callbackRef = useRef<
    (node: HTMLCanvasElement | null) => (() => void) | undefined
  >(null);

  if (!callbackRef.current) {
    callbackRef.current = (canvas: HTMLCanvasElement | null) => {
      // Cleanup path — canvas unmounted
      if (!canvas) {
        cleanupRef.current?.();
        cleanupRef.current = null;
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

      const cleanup = () => {
        window.removeEventListener("resize", handleResize);
        sceneCleanup?.();
        engine.stopRenderLoop();
        scene.dispose();
        engine.dispose();
        setIsReady(false);
      };

      cleanupRef.current = cleanup;
      return cleanup;
    };
  }

  return { canvasRef: callbackRef.current, isReady };
}
