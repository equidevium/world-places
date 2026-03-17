"use client";

import { useEffect, useRef, useState, useCallback } from "react";
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

interface UseBabylonEngineReturn {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  engine: Engine | null;
  scene: Scene | null;
  isReady: boolean;
}

export function useBabylonEngine(
  config: Partial<SceneConfig> = {},
): UseBabylonEngineReturn {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const engineRef = useRef<Engine | null>(null);
  const sceneRef = useRef<Scene | null>(null);
  const [isReady, setIsReady] = useState(false);

  const mergedConfig = { ...DEFAULT_CONFIG, ...config };

  const handleResize = useCallback(() => {
    engineRef.current?.resize();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const engine = new Engine(
      canvas,
      mergedConfig.antialias,
      mergedConfig.engineOptions,
      mergedConfig.adaptToDeviceRatio,
    );

    const scene = new Scene(engine);
    scene.clearColor.set(0.114, 0.125, 0.129, 1);

    engineRef.current = engine;
    sceneRef.current = scene;
    setIsReady(true);

    engine.runRenderLoop(() => {
      scene.render();
    });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      engine.stopRenderLoop();
      scene.dispose();
      engine.dispose();
      engineRef.current = null;
      sceneRef.current = null;
      setIsReady(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    canvasRef,
    engine: engineRef.current,
    scene: sceneRef.current,
    isReady,
  };
}
