import { createEvent } from '../supabaseClient';

export const getExplanation = async (query) => {
    const result = await createEvent('chatgpt_request', {
        prompt: `Explain the following: ${query}`,
        response_type: 'text'
    });
    return result;
};

export const getExplanationFile = async (query) => {
    const result = await createEvent('chatgpt_request', {
        prompt: `Provide a detailed file explaining: ${query}`,
        response_type: 'text'
    });
    return result;
};