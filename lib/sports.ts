import prisma from '../lib/prisma';

export async function getSportOfAthlete(athleteSlug: string) {
  const sport = await prisma.athlete.findUnique(
    { 
      where: { slug: athleteSlug },
      select: {
        Sport: {
          select: {
            id: true,
            sport: true,
            gender: true,
            olympic: true
          }
        }
      }
    }
  );
  return sport['Sport'];
};