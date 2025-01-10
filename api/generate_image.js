import { authenticateUser } from './_apiUtils.js';

export default async function handler(req, res) {
    try {
        const user = await authenticateUser(req);
        const { prompt } = req.body;

        // Call AI image generation API
        const imageResponse = await fetch('https://api.openai.com/v1/images/generations', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: prompt,
                n: 1,
                size: "512x512",
            }),
        });

        const imageData = await imageResponse.json();
        const imageUrl = imageData.data[0].url;

        res.status(200).json(imageUrl);
    } catch (error) {
        Sentry.captureException(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}