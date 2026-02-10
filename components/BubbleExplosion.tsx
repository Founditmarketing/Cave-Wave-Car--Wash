import React from 'react';
import { motion } from 'framer-motion';

interface BubbleExplosionProps {
    onComplete?: () => void;
}

export const BubbleExplosion: React.FC<BubbleExplosionProps> = ({ onComplete }) => {
    // Generate particles for explosion
    const particles = Array.from({ length: 40 }).map((_, i) => {
        const angle = (i / 40) * 360;
        const velocity = 200 + Math.random() * 300; // Distance to travel
        const size = 10 + Math.random() * 30;

        return {
            id: i,
            angle: (angle * Math.PI) / 180, // Convert to radians
            velocity,
            size,
            color: i % 2 === 0 ? '#06D9F5' : '#D9048E', // Cyan or Pink
        };
    });

    return (
        <div className="fixed inset-0 pointer-events-none z-[100] flex items-center justify-center overflow-hidden">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                    animate={{
                        x: Math.cos(p.angle) * p.velocity,
                        y: Math.sin(p.angle) * p.velocity,
                        scale: [0, 1, 0],
                        opacity: [1, 1, 0],
                    }}
                    transition={{
                        duration: 0.8 + Math.random() * 0.4,
                        ease: "easeOut",
                    }}
                    onAnimationComplete={p.id === 0 ? onComplete : undefined}
                    style={{
                        width: p.size,
                        height: p.size,
                        backgroundColor: p.color,
                        borderRadius: '50%',
                        position: 'absolute',
                    }}
                    className="shadow-lg backdrop-blur-sm"
                />
            ))}
        </div>
    );
};
