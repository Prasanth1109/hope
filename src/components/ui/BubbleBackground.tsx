// components/Bubble.tsx
import React from 'react';

interface BubbleProps {
    size: number;
    left: string;
    delay: number;
}

const BubbleBackground = () => {
    const bubbles = Array.from({ length: 20 }, () => ({
        size: Math.random() * 40 + 10,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
    }));

    const Bubble: React.FC<BubbleProps> = ({ size, left, delay }) => {
        return (
            <div
                className={`absolute bottom-0 bg-blue-300 rounded-full animate-bubble`}
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    left,
                    animationDelay: `${delay}s`,
                }}
            ></div>
        )
    }

    return (
        <div className="relative h-screen w-full bg-blue-500 overflow-hidden bottom-0">
            {bubbles.map((bubble, index) => (
                <Bubble
                    key={index}
                    size={bubble.size}
                    left={bubble.left}
                    delay={bubble.delay}
                />
            ))}
        </div>
    );
};

export default BubbleBackground;
