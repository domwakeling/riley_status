import { BASE_NAME, LITTERS_KEY } from "../../lib/constants";

const handler = async (req, res) => {

    if (req.method == 'GET') {

        const url = `https://database.deta.sh/v1/${process.env.DETA_ID}/${BASE_NAME}/items/${LITTERS_KEY}`;

        try {
            const get_result = await fetch(url, {
                method: 'GET',
                headers: {
                    'X-API-Key': process.env.DETA_KEY,
                    'Content-Type': 'application/json'
                }
            });

            const data = await get_result.json();
            res.json(data);
            return;

        } catch (err) {
            res.status(RESPONSE_ERROR).json({ message: err.message });
            return;
        }
    }

    // POST only used the first time to set up the key
    if (req.method == 'POST') {

        const url = `https://database.deta.sh/v1/${process.env.DETA_ID}/${BASE_NAME}/items`;
        const date = new Date().toLocaleString('en-GB', { timeZone: 'UTC' });

        try {
            const post_result = await fetch(url, {
                method: 'POST',
                headers: {
                    'X-API-Key': process.env.DETA_KEY,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "item": {
                        "key": LITTERS_KEY,
                        "up-scoop": date,
                        "up-change": date,
                        "down-scoop": date,
                        "down-change": date
                    }
                })
            });
            const data = await post_result.json();
            res.json(data);
            return;

        } catch (err) {
            res.status(RESPONSE_ERROR).json({ message: err.message });
            return;
        }
    }

    if (req.method == 'PATCH') {

        const url = `https://database.deta.sh/v1/${process.env.DETA_ID}/${BASE_NAME}/items/${LITTERS_KEY}`;
        const date = new Date().toLocaleString('en-GB', { timeZone: 'UTC' });
        const cleaned = JSON.parse(req.body).cleaned;

        try {
            const patch_result = await fetch(url, {
                method: 'PATCH',
                headers: {
                    'X-API-Key': process.env.DETA_KEY,
                    'Content-Type': 'application/json'
                },
                body: `{"set":{"${cleaned}":"${date}"}}`
            });

            const data = await patch_result.json();
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
