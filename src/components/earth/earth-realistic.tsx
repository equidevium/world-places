// Realistic earth renderer: textured globe with day map, bump mapping
// for terrain relief, specular highlights on oceans, a cloud layer,
// and a GlowLayer for the atmospheric rim effect.

import {
  Color3,
  DirectionalLight,
  GlowLayer,
  MeshBuilder,
  StandardMaterial,
  Texture,
  Vector3,
} from "@babylonjs/core";
import type { Mesh, Scene } from "@babylonjs/core";
import { EARTH_TEXTURES } from "@/lib/texture-loader";

const EARTH_RADIUS = 1;
const CLOUD_RADIUS = EARTH_RADIUS * 1.01;
const SEGMENTS = 64;

interface RealisticEarthHandle {
  earthMesh: Mesh;
  cloudMesh: Mesh;
  sunLight: DirectionalLight;
  dispose: () => void;
}

function flipTexture(path: string, scene: Scene): Texture {
  const tex = new Texture(path, scene);
  tex.uScale = -1;
  tex.vScale = -1;
  return tex;
}

export function createRealisticEarth(scene: Scene): RealisticEarthHandle {
  const sunLight = new DirectionalLight(
    "sunLight",
    new Vector3(1, 0.3, -1).normalize(),
    scene,
  );
  sunLight.intensity = 1.8;

  // -- Earth sphere --
  const earthMesh = MeshBuilder.CreateSphere(
    "earth",
    { diameter: EARTH_RADIUS * 2, segments: SEGMENTS },
    scene,
  );

  const earthMaterial = new StandardMaterial("earthMaterial", scene);
  earthMaterial.diffuseTexture = flipTexture(EARTH_TEXTURES.diffuse, scene);
  earthMaterial.bumpTexture = flipTexture(EARTH_TEXTURES.bump, scene);
  earthMaterial.specularColor = Color3.Black();
  earthMesh.material = earthMaterial;

  // -- Cloud layer --
  const cloudMesh = MeshBuilder.CreateSphere(
    "clouds",
    { diameter: CLOUD_RADIUS * 2, segments: SEGMENTS },
    scene,
  );

  const cloudMaterial = new StandardMaterial("cloudMaterial", scene);
  const cloudTexture = flipTexture(EARTH_TEXTURES.clouds, scene);
  cloudMaterial.diffuseTexture = cloudTexture;
  cloudMaterial.opacityTexture = cloudTexture;
  cloudMaterial.specularColor = Color3.Black();
  cloudMaterial.alpha = 0.3;
  cloudMaterial.backFaceCulling = true;
  cloudMesh.material = cloudMaterial;

  // -- Atmospheric glow via GlowLayer --
  const glowLayer = new GlowLayer("atmosphereGlow", scene, {
    blurKernelSize: 32,
  });
  glowLayer.intensity = 0.3;
  glowLayer.customEmissiveColorSelector = (
    mesh,
    _subMesh,
    _material,
    result,
  ) => {
    if (mesh === earthMesh) {
      result.set(0.2, 0.4, 0.8, 1.0);
    } else {
      result.set(0, 0, 0, 0);
    }
  };

  function dispose() {
    glowLayer.dispose();
    cloudMesh.dispose();
    cloudMaterial.dispose();
    cloudTexture.dispose();
    earthMesh.dispose();
    earthMaterial.dispose();
    sunLight.dispose();
  }

  return { earthMesh, cloudMesh, sunLight, dispose };
}
