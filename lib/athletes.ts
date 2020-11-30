import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export function getSortedAthletesData() {
  const athletes = prisma.athlete.findMany();
  return athletes
}