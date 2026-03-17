import type { TransformNode, Scene } from "@babylonjs/core";

// Spins nodes around the Y axis at different rates.
// Accepts any TransformNode (meshes, pivots, etc.) since all we
// touch is the rotation vector.

interface RotationTarget {
  mesh: TransformNode;
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
