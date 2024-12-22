import React from 'react';

const BubbleLoader = () => {
    return (
        <div className="relative w-40 h-40 flex items-center justify-center">
            <div className="absolute w-32 h-32 bg-blue-400 rounded-full animate-bubble opacity-80"></div>
            <div className="absolute w-24 h-24 bg-blue-300 rounded-full animate-bubble opacity-70"></div>
            <div className="absolute w-16 h-16 bg-blue-200 rounded-full animate-bubble opacity-60"></div>
        </div>
    )
};

export default BubbleLoader;
