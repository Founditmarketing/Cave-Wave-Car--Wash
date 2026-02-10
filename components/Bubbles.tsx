import React from 'react';
import { motion } from 'framer-motion';

export const Bubbles: React.FC = () => {
  // Generate random bubbles
  const bubbles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 40 + 10,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full border border-cwCyan/30 bg-cwCyan/10 backdrop-blur-[1px]"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            bottom: -50,
          }}
          animate={{
            y: -1200,
            opacity: [0, 0.8, 0],
            x: [0, Math.sin(bubble.id) * 50, 0], // Slight horizontal wobble
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};