import { countries } from '../data/countries';

export function getFlags(countryIds) {
  const flags = countryIds.map((cId) => {
    return countries[cId].flag
  })
  return flags
}