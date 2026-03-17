export type PlaceCategory =
  | "natural-wonder"
  | "historical"
  | "cultural"
  | "urban"
  | "remote";

export type Continent =
  | "Africa"
  | "Antarctica"
  | "Asia"
  | "Europe"
  | "North America"
  | "Oceania"
  | "South America";

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Place {
  slug: string;
  name: string;
  country: string;
  continent: Continent;
  coordinates: Coordinates;
  description: string;
  facts: string[];
  category: PlaceCategory;
  imageUrl: string;
  featured: boolean;
}
