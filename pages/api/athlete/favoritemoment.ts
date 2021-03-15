import { FavoriteMoment } from '@prisma/client'
import { FavoriteMomentNoDateWithUser } from '../../../lib/athletes'
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma, { Prisma } from '../../../lib/prisma'


/**
 * Handles POST and GET requests to /api/athlete/favoritemoment.
 * On POST, `req.body` must include the following: `description`, `url`, `athleteId`, and `userId`.
 * ON GET, `req.query` can optionally have an `id` that specifies an athlete.
 * @param {NextApiRequest}   req - A request object from Next.js API
 * @param {NextApiResponse}  res - A result object from Next.js API
 */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { body, query } = req

  if (req.method === 'POST') {
    const favoriteMoment: Prisma.FavoriteMomentCreateInput = {
      createdAt: new Date(),
      description: body.description,
      url: body.url,
      Athlete: {
        connect: { id: body.athleteId }
      },
      User: {
        connect: { id: body.userId }
      }
    }

    const update: FavoriteMoment = await prisma.favoriteMoment.create({
      data: favoriteMoment
    })

    res.status(201).json(update)

  } else if (req.method === 'GET') {
    let moments: FavoriteMomentNoDateWithUser[]
    if (query?.id) {
      const athleteId: string = query.id as string
      moments = await prisma.favoriteMoment.findMany({
        select: {
          id: true,
          userId: true,
          athleteId: true,
          description: true,
          url: true,
          User: {
            select: {
              name: true,
              image: true,
            }
          }
        },
        where: {
          athleteId: parseInt(athleteId)
        },
      })
    } else {
      res.status(404).json({ message: "This operation will be functional at a later time" })
    }

    res.status(200).json(moments)

  } else {
    res.status(500).json({
      error: new Error('Request method is invalid for this endpoint.')
    })
  }
}