const MeiliSearch = require('meilisearch');
import { PrismaClient } from '@prisma/client';

export default async (req, res) => {
    const {
        query: { q }
    } = req;

    const client = new MeiliSearch({
        host: process.env.MEILISEARCH_HOST,
        // apiKey: process.env.MEILISEARCH_API_KEY,
    });

    if (!client)
        return res.status(500).json({
            error: new Error('Missing MeiliSearch environment variables'),
        });

    if (req.method === 'POST') {
        try {
            const prisma = new PrismaClient();
            const athletes = await prisma.athlete.findMany();
            const index = await client.getOrCreateIndex('athletes');
            index.addDocuments(athletes).then((res) => console.log(res));
            res.status(201).json({'index':'athletes'});
        } catch (error) {
            console.log(error);
            res.status(500).json({ error });
        }
    } else {
        try {
            const index = await client.getOrCreateIndex('athletes');
            const search = await index.search(q);

            res.json(search);
            
        } catch (error) {
            console.log(error);
            res.status(500).json({ error });
        }
    }
};