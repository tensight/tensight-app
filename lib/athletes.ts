// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

export async function getAllAthleteIds(prisma) {
  const athletes = await prisma.athlete.findMany();
  return athletes.map(athlete => {
    return {
      params: {
        id: athlete.id.toString()
      }
    }
  })
};

export async function getAthleteData(prisma, athleteId) {
  const athlete = await prisma.athlete.findUnique({
    where: {
      id: athleteId,
    }
  });
  return athlete;
}

export async function getSortedAthletesData(prisma) {
  const athletes = await prisma.athlete.findMany();
  console.log(athletes);
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
    default:
      return '';
  }
};

const availableLeagues = ['BAS', 'TEN', 'AFB', 'BSB', 'HOK']
const workaroundLeagues = ['FTB']
export function getAthleteHeadshot(espnId: number, sportId: string) {
  if (espnId !== null && availableLeagues.some(l => l === sportId)) {
    return `https://a.espncdn.com/combiner/i?img=/i/headshots/${getEspnLeague(sportId)}/players/full/${espnId}.png`
  } else {
    return './athlete.png';
  }
}
