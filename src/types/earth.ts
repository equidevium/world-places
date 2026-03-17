export type RenderMode = "realistic" | "stylized";

export interface EarthTextures {
  diffuse: string;
  night: string;
  bump: string;
  specular: string;
  clouds: string;
}

export interface MarkerData {
  id: string;
  label: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  category: string;
}

export interface CameraState {
  alpha: number;
  beta: number;
  radius: number;
  target: { x: number; y: number; z: number };
}

export interface SceneConfig {
  antialias: boolean;
  engineOptions: {
    preserveDrawingBuffer: boolean;
    stencil: boolean;
  };
  adaptToDeviceRatio: boolean;
}
