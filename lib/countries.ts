import { countries } from '@/data/countries'

export const getFlag = (countryId: string): string => {
  return countries[countryId].flag
}

export const getFlags = (countryIds: string[]): string[] => {
  const flags = countryIds.map((cId) => countries[cId].flag)
  return flags
}

export const getCountryName = (countryId: string): string => {
  return countries[countryId].name
}
