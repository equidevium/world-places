// Stylized earth renderer — flat Gruvbox-colored globe with a wireframe
// overlay for a clean, data-visualization aesthetic. No photorealistic
// textures here; the look is intentionally minimal and technical.
//
// The wireframe sits on a slightly larger sphere so it doesn't z-fight
// with the solid base. Both spheres share the same rotation parent so
// they stay in sync when the scene rotates them.

import { Color3, MeshBuilder, StandardMaterial } from "@babylonjs/core";
import type { Mesh, Scene } from "@babylonjs/core";

const EARTH_RADIUS = 1;
const WIREFRAME_RADIUS = EARTH_RADIUS * 1.005;
const SEGMENTS = 48;

const GRUVBOX = {
  aqua: Color3.FromHexString("#689d6a"),
  aquaLight: Color3.FromHexString("#8ec07c"),
  bgSoft: Color3.FromHexString("#32302f"),
  bg1: Color3.FromHexString("#3c3836"),
  blue: Color3.FromHexString("#458588"),
} as const;

interface StylizedEarthHandle {
  earthMesh: Mesh;
  wireframeMesh: Mesh;
  dispose: () => void;
}

// Only a stylized earth with a solid color and wireframe overlay, no textures or lighting
//
export function createStylizedEarth(scene: Scene): StylizedEarthHandle {
  // -- Solid base sphere --
  const earthMesh = MeshBuilder.CreateSphere(
    "stylizedEarth",
    { diameter: EARTH_RADIUS * 2, segments: SEGMENTS },
    scene,
  );

  const baseMaterial = new StandardMaterial("stylizedBase", scene);
  baseMaterial.emissiveColor = GRUVBOX.aqua;
  baseMaterial.diffuseColor = GRUVBOX.bgSoft;
  baseMaterial.specularColor = Color3.Black();
  baseMaterial.backFaceCulling = true;
  earthMesh.material = baseMaterial;

  // -- Wireframe overlay --
  const wireframeMesh = MeshBuilder.CreateSphere(
    "stylizedWireframe",
    { diameter: WIREFRAME_RADIUS * 2, segments: 24 },
    scene,
  );

  const wireMaterial = new StandardMaterial("stylizedWire", scene);
  wireMaterial.emissiveColor = GRUVBOX.bg1;
  wireMaterial.diffuseColor = Color3.Black();
  wireMaterial.specularColor = Color3.Black();
  wireMaterial.wireframe = true;
  wireMaterial.backFaceCulling = false;
  wireframeMesh.material = wireMaterial;

  const ambientTint = new StandardMaterial("stylizedAmbient", scene);
  // ambientTint.emissiveColor = new Color3(0.08, 0.12, 0.1);
  // ambientTint.alpha = 0.15;

  function dispose() {
    wireframeMesh.dispose();
    wireMaterial.dispose();
    earthMesh.dispose();
    baseMaterial.dispose();
    ambientTint.dispose();
  }

  return { earthMesh, wireframeMesh, dispose };
}
