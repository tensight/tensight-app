import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getSortedAthletesData() {
  const athletes = await prisma.athlete.findMany();
  console.log(athletes);
  return athletes;
}