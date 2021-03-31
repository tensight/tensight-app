const MeiliSearch = require('meilisearch')
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { countries } from '@/data/countries'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { q }
  } = req

  const client = new MeiliSearch({ // TODO: Is it computationally expensive to keep creating new clients?
    host: process.env.MEILISEARCH_HOST,
    // apiKey: process.env.MEILISEARCH_API_KEY,
  })

  if (!client)
    return res.status(500).json({
      error: new Error('Missing MeiliSearch environment variables'),
    })

  if (req.method === 'POST') {
    try {
      const athletes = await prisma.athlete.findMany({
        include: {
          Sport: {
            select: {
              sport: true
            }
          }
        }
      })
      const athletesWithCountry = athletes.map((athlete) => {
        return {
          ...athlete,
          countryNames: athlete.heritage.map((countryId => countries[countryId].name)),
        }
      })
      const index = await client.getOrCreateIndex('athletes')
      console.log(athletesWithCountry)
      index.addDocuments(athletesWithCountry).then((res) => console.log(res))
      res.status(201).json({ 'index': 'athletes' })
    } catch (error) {
      console.log(error)
      res.status(500).json({ error })
    }
  } else {
    try {
      const index = await client.getOrCreateIndex('athletes')
      const search = await index.search(q)
      res.json(search)

    } catch (error) {
      console.log(error)
      res.status(500).json({ error })
    }
  }
}