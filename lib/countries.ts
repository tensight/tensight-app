import { countries } from '../data/countries';

const getFlags = (countryIds: string[]): string[] => {
  const flags = countryIds.map((cId) => countries[cId].flag)
  return flags
}

export default getFlags