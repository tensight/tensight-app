import prisma from '@/lib/prisma'
import { Athlete, FavoriteMoment } from '@prisma/client'

export const getAllAthleteSlugs = async () => {
  const athletes = await prisma.athlete.findMany();
  return athletes.map(athlete => {
    return {
      params: {
        slug: athlete.slug
      }
    }
  })
}

export const getAthleteData = async (athleteSlug: string) => {
  const athlete = await prisma.athlete.findUnique({
    where: {
      slug: athleteSlug,
    }
  })
  return athlete
}

export const getSortedAthletesData = async () => {
  const athletes = await prisma.athlete.findMany()
  return athletes
}

export const getEspnLeague = (sportId: string) : string => {
  switch (sportId) {
    case 'BAS':
      return 'nba'
    case 'TEN':
      return 'tennis'
    case 'AFB':
      return 'nfl'
    case 'BSB':
      return 'mlb'
    case 'HOK':
      return 'nhl'
    case 'GOL':
      return 'golf'
    default:
      return ''
  }
}

/* Favorite Moments */

export type FavoriteMomentNoDateWithUser = {
  id: number,
  userId: number,
  athleteId: number,
  description: string,
  url: string,
  redirectUrl: string,
  User: {
    name: string,
    image: string
  }
}

export const getAthleteFavMoments = async (athleteId: number) => {
  const athletes = await prisma.favoriteMoment.findMany({
    select: {
      id: true,
      userId: true,
      athleteId: true,
      description: true,
      url: true,
      redirectUrl: true,
      User: {
        select: {
          name: true,
          image: true,
        }
      }
    },
    where: {
      athleteId: athleteId
    },
  })
  console.log(athletes)
  return athletes
}

/* Athlete Headshot Logic */

const availableLeagues: string[] = ['BAS', 'TEN', 'AFB', 'BSB', 'HOK', 'GOL']
const workaroundLeagues: string[] = ['FTB', 'SWI']
export const getAthleteHeadshot = (headshotUrl: string|null, espnId: number, sportId: string) : string  => {
  if (headshotUrl !== null) {
    return headshotUrl
  } else if (espnId !== null && availableLeagues.some(l => l === sportId)) {
    return `https://a.espncdn.com/combiner/i?img=/i/headshots/${getEspnLeague(sportId)}/players/full/${espnId}.png`
  } else if (espnId == 149945) {
    return 'https://www.futwiz.com/assets/img/fifa20/careerfaces/200104.png'
  } 
  else {
    return '/athlete.png'
  }
}