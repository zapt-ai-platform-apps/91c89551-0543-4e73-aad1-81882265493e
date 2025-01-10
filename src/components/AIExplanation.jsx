import React, { useState } from 'react';
import { getExplanation, getExplanationFile } from '../api/aiExplanationApi';

export default function AIExplanation() {
    const [query, setQuery] = useState('');
    const [explanation, setExplanation] = useState('');
    const [loading, setLoading] = useState(false);
    const [fileLink, setFileLink] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setExplanation('');
        setFileLink('');

        try {
            const result = await getExplanation(query);
            setExplanation(result);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleFileRequest = async () => {
        setLoading(true);
        setFileLink('');

        try {
            const result = await getExplanationFile(query);
            setFileLink(result);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md mb-6">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="border rounded p-2 box-border"
                    placeholder="Ask me anything..."
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 rounded cursor-pointer disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Get Explanation'}
                </button>
            </form>
            {explanation && (
                <div className="mt-4 p-4 border rounded bg-gray-50">
                    <p>{explanation}</p>
                </div>
            )}
            {explanation && (
                <button
                    onClick={handleFileRequest}
                    className="mt-4 bg-green-500 text-white py-2 rounded cursor-pointer disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Get Explanation File'}
                </button>
            )}
            {fileLink && (
                <a href={fileLink} target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-500">
                    Download Explanation File
                </a>
            )}
        </div>
    );
}