import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { Callbacks, InitOptions } from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters, { Adapter } from 'next-auth/adapters'
import prisma from '../../../lib/prisma'

const providers = [
  Providers.Discord({
    clientId: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET
  }),
]

const callbacks: Callbacks = {}

const adapter: Adapter = Adapters.Prisma.Adapter({ prisma })

const database = process.env.DATABASE_URL

const options: InitOptions = {
  providers,
  callbacks,
  adapter,
  database,
}

export default (
  req: NextApiRequest,
  res: NextApiResponse) => NextAuth(req, res, options)