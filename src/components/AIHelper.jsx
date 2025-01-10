import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import AuthComponent from './Auth';
import AIExplanation from './AIExplanation';
import AIImageGenerator from './AIImageGenerator';

export default function AIHelper() {
    const [session, setSession] = useState(null);

    React.useEffect(() => {
        const getSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setSession(session);
        };

        getSession();

        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            setSession(session);
        });

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    if (!session) {
        return <AuthComponent />;
    }

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <h1 className="text-2xl mb-6">AI Assistant</h1>
            <AIExplanation />
            <AIImageGenerator />
        </div>
    );
}