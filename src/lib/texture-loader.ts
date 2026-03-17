// Paths to the textures we use for the Earth. We export them as constants here so they can be easily imported and used across the app, and so we have a single source of truth for the texture paths.
//
// All images sit in /public/textures and get served as static assets by
// Next.js. The filenames here must match what's actually on disk
//
// TODO: The specular map is kept around even though the current material doesn't
// apply it ( killed the shininess due to wrong setup values ).

import type { EarthTextures } from "@/types/earth";

export const EARTH_TEXTURES: EarthTextures = {
  diffuse: "/textures/earth_daymap.jpg",
  night: "/textures/earth_nightmap.jpg",
  bump: "/textures/earth_normal_map.jpg",
  specular: "/textures/earth_specular_map.jpg",
  clouds: "/textures/earth_clouds.jpg",
};
