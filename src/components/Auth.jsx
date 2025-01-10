import React from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '../supabaseClient';

export default function AuthComponent() {
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <h2 className="text-xl mb-4">Sign in with ZAPT</h2>
            <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-blue-500 mb-4">
                Visit ZAPT
            </a>
            <Auth
                supabaseClient={supabase}
                providers={['google', 'facebook', 'apple']}
                appearance={{
                    theme: 'minimal',
                }}
                theme="minimal"
            />
        </div>
    );
}