import { authenticateUser } from './_apiUtils.js';
import { Resend } from 'resend';

const resend = new Resend('re_123456789');

export default async function handler(req, res) {
    try {
        const user = await authenticateUser(req);
        const { prompt, response_type } = req.body;

        let responseData;

        if (response_type === 'text') {
            // Call ChatGPT API for text response
            const aiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'gpt-4',
                    messages: [{ role: 'user', content: prompt }],
                }),
            });

            const aiData = await aiResponse.json();
            responseData = aiData.choices[0].message.content;
        }

        // Additional handling for other response types can be added here

        res.status(200).json(responseData);
    } catch (error) {
        Sentry.captureException(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}