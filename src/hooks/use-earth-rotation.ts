import type { Mesh, Scene } from "@babylonjs/core";

// Spins meshes around the Y axis at different rates.
// Returns a dispose function that unregisters the observer.

interface RotationTarget {
  mesh: Mesh;
  speed: number;
}

export function registerEarthRotation(
  scene: Scene,
  targets: RotationTarget[],
): () => void {
  const observer = scene.onBeforeRenderObservable.add(() => {
    const delta = scene.getEngine().getDeltaTime() / 1000;
    for (const { mesh, speed } of targets) {
      mesh.rotation.y += speed * delta;
    }
  });

  return () => {
    scene.onBeforeRenderObservable.remove(observer);
  };
}
