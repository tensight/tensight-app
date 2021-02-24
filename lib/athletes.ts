// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

export async function getAllAthleteSlugs(prisma) {
  const athletes = await prisma.athlete.findMany();
  return athletes.map(athlete => {
    return {
      params: {
        slug: athlete.slug
      }
    }
  })
};

export async function getAthleteData(prisma, athleteSlug) {
  const athlete = await prisma.athlete.findUnique({
    where: {
      slug: athleteSlug,
    }
  });
  return athlete;
}

export async function getSortedAthletesData(prisma) {
  const athletes = await prisma.athlete.findMany();
  return athletes;
};

export function getEspnLeague(sportId: string) {
  switch (sportId) {
    case 'BAS':
      return 'nba';
    case 'TEN':
      return 'tennis';
    case 'AFB':
      return 'nfl';
    case 'BSB':
      return 'mlb';
    case 'HOK':
      return 'nhl';
    case 'GOL':
      return 'golf'
    default:
      return '';
  }
};

const availableLeagues = ['BAS', 'TEN', 'AFB', 'BSB', 'HOK', 'GOL'];
const workaroundLeagues = ['FTB'];
export function getAthleteHeadshot(espnId: number, sportId: string) {
  if (espnId !== null && availableLeagues.some(l => l === sportId)) {
    return `https://a.espncdn.com/combiner/i?img=/i/headshots/${getEspnLeague(sportId)}/players/full/${espnId}.png`
  } else if (espnId == 149945) {
    return 'https://www.futwiz.com/assets/img/fifa20/careerfaces/200104.png'
  } 
  else {
    return './athlete.png';
  }
}
