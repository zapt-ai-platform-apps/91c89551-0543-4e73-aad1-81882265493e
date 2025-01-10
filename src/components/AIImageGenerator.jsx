import React, { useState } from 'react';
import { createEvent } from '../supabaseClient';

export default function AIImageGenerator() {
    const [prompt, setPrompt] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const handleGenerateImage = async (e) => {
        e.preventDefault();
        setLoading(true);
        setImageUrl('');

        try {
            const result = await createEvent('generate_image', {
                prompt: prompt
            });

            setImageUrl(result);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md">
            <form onSubmit={handleGenerateImage} className="flex flex-col space-y-4">
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="border rounded p-2 box-border"
                    placeholder="Describe the image you want..."
                    required
                />
                <button
                    type="submit"
                    className="bg-purple-500 text-white py-2 rounded cursor-pointer disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? 'Generating...' : 'Generate Image'}
                </button>
            </form>
            {imageUrl && (
                <div className="mt-4">
                    <img src={imageUrl} alt="Generated AI" className="w-full h-auto rounded" />
                </div>
            )}
        </div>
    );
}