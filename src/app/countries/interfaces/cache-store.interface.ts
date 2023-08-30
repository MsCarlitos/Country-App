import { Countries } from "./countries.interface";
import { Region } from "./region.type";

export interface CacheStore {
  byCapital: TermCountries;
  byCountries: TermCountries;
  byRegion: RegionCountries;
}

export interface TermCountries {
  term: string;
  countries: Countries[];
}

export interface RegionCountries {
  region: Region;
  countries: Countries[];
}
