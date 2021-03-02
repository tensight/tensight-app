import { countries } from '../data/countries';

export const getFlags = (countryIds: string[]): string[] => {
  const flags = countryIds.map((cId) => countries[cId].flag)
  return flags
}