import React from 'react';
import AIHelper from './components/AIHelper';
import MadeOnZaptBadge from './components/MadeOnZaptBadge';

export default function App(){
    return (
        <div className="min-h-screen h-full flex flex-col">
            <AIHelper />
            <MadeOnZaptBadge />
        </div>
    )
}