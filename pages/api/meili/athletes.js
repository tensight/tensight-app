const MeiliSearch = require('meilisearch');
import { PrismaClient } from '@prisma/client';

export default async (req, res) => {
    try {
        const prisma = new PrismaClient();
        const athletes = await prisma.athlete.findMany();

        const client = new MeiliSearch({
            host: process.env.MEILISEARCH_HOST,
            apiKey: process.env.MEILISEARCH_API_KEY,
        });

        if (!client)
            return res.status(500).json({
                error: new Error('Missing MeiliSearch environment variables'),
            });
            
        const index = await client.getOrCreateIndex('athletes');
        index.addDocuments(athletes).then((res) => console.log(res));

        const query = 'jp'; // search query, in this case we want all athletes with the letter n
        const search = await index.search(query);

        res.json(search);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
};