import prisma from '../lib/prisma'

export async function getAllAthleteSlugs() {
  const athletes = await prisma.athlete.findMany();
  return athletes.map(athlete => {
    return {
      params: {
        slug: athlete.slug
      }
    }
  })
}

export async function getAthleteData(athleteSlug: string) {
  const athlete = await prisma.athlete.findUnique({
    where: {
      slug: athleteSlug,
    }
  });
  return athlete
}

export async function getSortedAthletesData() {
  const athletes = await prisma.athlete.findMany()
  return athletes
};

export function getEspnLeague(sportId: string) : string {
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

const availableLeagues = ['BAS', 'TEN', 'AFB', 'BSB', 'HOK', 'GOL']
const workaroundLeagues = ['FTB']
export function getAthleteHeadshot(espnId: number, sportId: string) : string {
  if (espnId !== null && availableLeagues.some(l => l === sportId)) {
    return `https://a.espncdn.com/combiner/i?img=/i/headshots/${getEspnLeague(sportId)}/players/full/${espnId}.png`
  } else if (espnId == 149945) {
    return 'https://www.futwiz.com/assets/img/fifa20/careerfaces/200104.png'
  } 
  else {
    return './athlete.png'
  }
}
