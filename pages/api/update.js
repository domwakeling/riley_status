import { RESPONSE_ERROR } from "../../lib/constants";
import { MongoClient, ServerApiVersion } from"mongodb";

const handler = async (req, res) => {

    const client = new MongoClient(process.env.MONGO_URI, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    if (req.method == 'POST') {

        const date = new Date().toLocaleString('en-GB', { timeZone: 'UTC' });
        const changed = JSON.parse(req.body).changed;

        const updatingField = {};
        updatingField[changed] = date;

        const updateFilter = { name: 'Riley' };
        const updateDoc = { $set: updatingField };

        try {
            const database = client.db("riley");
            const collection = database.collection("data");

            const post_result = await collection.updateOne(updateFilter, updateDoc, { upsert: true })
            res.json({ modified: post_result.modifiedCount });

        } catch (err) {
            res.status(RESPONSE_ERROR).json({ message: err.message });

        } finally {
            // close client and return from handler
            await client.close();
            return;
        }
    }


    client.close();
    res.status(RESPONSE_ERROR).json({ message: 'Method not supported' });
};

export default handler;
