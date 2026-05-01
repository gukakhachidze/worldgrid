export interface Country {
  cca2: string;
  name: {
    common: string;
    official: string;
    nativeName?: Record<string, { common: string; official: string }>;
  };
  flags: {
    png?: string;
    svg?: string;
    alt?: string;
  };
  capital?: string[];
  region: string;
  subregion?: string;
  population: number;
  area?: number;
  languages?: Record<string, string>;
  currencies?: Record<string, { name: string; symbol?: string }>;
  borders?: string[];
  idd?: { root?: string; suffixes?: string[] };
  tld?: string[];
  latlng?: [number, number];
  timezones?: string[];
  continents?: string[];
  coatOfArms?: { png?: string; svg?: string };
}

export interface SavedTrip {
  id: number;
  date: string;
  countries: Array<{ name: string; cca2: string }>;
}

export type Page = 'landing' | 'countries';
export type Continent = 'All' | 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania' | 'Antarctic';
