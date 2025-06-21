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

    if (req.method == 'GET') {

        try {

            const database = client.db("riley");
            const collection = database.collection("data");
            const data = await collection.findOne({ name: "Riley"});
            res.json(data);

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
