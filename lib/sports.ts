// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

export async function getSportOfAthlete(prisma, athleteSlug) {
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
  console.log(sport);
  return sport['Sport'];
};