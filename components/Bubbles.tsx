import React from 'react';
import { motion } from 'framer-motion';

export const Bubbles: React.FC = () => {
  // Generate random bubbles
  // Generate random bubbles with reduced count for performance
  const bubbles = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    size: Math.random() * 40 + 10,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full border border-cwCyan/20 bg-cwCyan/5"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            bottom: -100,
          }}
          animate={{
            y: -1500,
            opacity: [0, 0.5, 0],
            x: [0, Math.sin(bubble.id) * 30, 0],
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