import prisma from '../lib/prisma'

export const getSportOfAthlete = async (athleteSlug: string) => {
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
  )
  return sport['Sport']
}