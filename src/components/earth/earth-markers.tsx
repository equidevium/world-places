// Renders location markers on the globe as small glowing spheres placed
// at lat/lng positions on the earth surface. Using spheres instead of
// flat discs means they look correct from every viewing angle without
// needing billboard mode, which would fight the pivot rotation.
//
// The markers sit slightly above the earth surface (1.02x radius) so
// they don't clip into the terrain or wireframe.

import {
  Color3,
  MeshBuilder,
  StandardMaterial,
  Vector3,
} from "@babylonjs/core";
import type { Mesh, Scene } from "@babylonjs/core";
import type { MarkerData } from "@/types/earth";

const MARKER_ALTITUDE = 1.02;
const MARKER_DIAMETER = 0.04;

// Gruvbox orange-light for marker dots: high contrast against both
// the blue realistic earth and the aqua stylized one.
const MARKER_COLOR = Color3.FromHexString("#fe8019");

interface MarkersHandle {
  meshes: Mesh[];
  dispose: () => void;
}

// Geographic (lat, lng) → Cartesian (x, y, z) on a sphere.
//
// Textbook formula: x = r·cos(lat)·sin(lng), y = r·sin(lat), z = r·cos(lat)·cos(lng)
// That puts the prime meridian (lng=0°) along +Z, north pole at +Y, 90°E at +X.
//
// Two corrections to match our texture mapping on the BabylonJS sphere:
//   1) lng + 90°  : BabylonJS sphere UV starts 90° west of the prime meridian,
//                    so raw lng=0 lands in the mid-Atlantic. The offset fixes it.
//   2) negate X   : our textures use uScale=-1 (horizontal flip) which mirrors
//                    east/west. Negating X cancels that so markers stay correct.
//
// Y is untouched: vScale=-1 corrects north/south on the texture but doesn't
// affect where "37.98°N" sits in 3D space. Net result: Athens lands on Greece.
function latLngToVector3(lat: number, lng: number, radius: number): Vector3 {
  const latRad = lat * (Math.PI / 180);
  const lngRad = (lng + 90) * (Math.PI / 180);

  const x = -(radius * Math.cos(latRad) * Math.sin(lngRad));
  const y = radius * Math.sin(latRad);
  const z = radius * Math.cos(latRad) * Math.cos(lngRad);

  return new Vector3(x, y, z);
}

export function createMarkers(
  scene: Scene,
  markers: MarkerData[],
): MarkersHandle {
  const material = new StandardMaterial("markerMaterial", scene);
  material.emissiveColor = MARKER_COLOR;
  material.diffuseColor = Color3.Black();
  material.specularColor = Color3.Black();
  material.disableLighting = true;

  const meshes: Mesh[] = [];

  for (const marker of markers) {
    const dot = MeshBuilder.CreateSphere(
      `marker-${marker.id}`,
      { diameter: MARKER_DIAMETER, segments: 8 },
      scene,
    );

    dot.position = latLngToVector3(
      marker.coordinates.lat,
      marker.coordinates.lng,
      MARKER_ALTITUDE,
    );

    dot.material = material;
    meshes.push(dot);
  }

  function dispose() {
    for (const mesh of meshes) {
      mesh.dispose();
    }
    material.dispose();
  }

  return { meshes, dispose };
}
