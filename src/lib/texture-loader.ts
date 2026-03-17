// NASA Blue Marble texture set for the realistic earth.
// Filenames must match what's on disk in /public/textures.
// Specular map kept around even though we killed the shininess — handy
// if ocean glint ever comes back.

import type { EarthTextures } from "@/types/earth";

export const EARTH_TEXTURES: EarthTextures = {
  diffuse: "/textures/earth_daymap.jpg",
  night: "/textures/earth_nightmap.jpg",
  bump: "/textures/earth_normal_map.jpg",
  specular: "/textures/earth_specular_map.jpg",
  clouds: "/textures/earth_clouds.jpg",
};
