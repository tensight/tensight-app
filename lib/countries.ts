import { countries } from '../data/countries';

export function getFlags(countryIds: string[]): string[] {
  const flags = countryIds.map((cId) => {
    return countries[cId].flag
  })
  return flags
}