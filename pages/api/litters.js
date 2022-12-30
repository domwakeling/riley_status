import { BASE_NAME, LITTERS_KEY } from "../../lib/constants";

const handler = async (req, res) => {

    res.json({ key: LITTERS_KEY });
    return;

    const url = `https://database.deta.sh/v1/${process.env.DETA_ID}/${BASE_NAME}/items/${LITTERS_KEY}`;


    if (req.method == 'GET') {

        try {
            const call_result = await fetch(url, {
                method: 'GET',
                headers: {
                    'X-API-Key': process.env.DETA_KEY,
                    'Content-Type': 'application/json'
                }
            });

            const data = await call_result.json();
            res.json(data);
            return;

        } catch (err) {
            res.status(RESPONSE_ERROR).json({ message: err.message });
            return;
        }
    }

    res.status(RESPONSE_ERROR).json({ message: 'Method not supported' });
};

export default handler;
