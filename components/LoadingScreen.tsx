import React from 'react';
import { motion } from 'framer-motion';
import { Droplets } from 'lucide-react';

export const LoadingScreen: React.FC = () => {
  // Bubbles for background effect inside loading screen
  const bubbles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 10 + 5,
    delay: Math.random() * 2,
  }));

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
              y: -1000,
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

      <div className="relative mb-8 z-10">
        <motion.div
          animate={{
            y: [0, -20, 0],
            filter: ["drop-shadow(0 0 0px rgba(6, 217, 245, 0))", "drop-shadow(0 10px 20px rgba(6, 217, 245, 0.5))", "drop-shadow(0 0 0px rgba(6, 217, 245, 0))"]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src="/logo.png" alt="Cave Wave" className="w-32 h-auto object-contain" />
        </motion.div>
        {/* Splash particles */}
        <motion.div
          className="absolute -top-2 -right-4 w-4 h-4 bg-cwPink rounded-full"
          animate={{ scale: [0, 1, 0], x: [0, 20], y: [0, -20] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
        />
        <motion.div
          className="absolute top-1/2 -left-8 w-3 h-3 bg-cwCyan rounded-full"
          animate={{ scale: [0, 1, 0], x: [0, -20], y: [0, 10] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
        />
      </div>




      <div className="w-64 h-1.5 bg-slate-100 rounded-full overflow-hidden relative z-10">
        <motion.div
          className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-cwCyan to-cwPink"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
      <p className="mt-4 text-slate-400 text-sm font-medium animate-pulse z-10">Preparing the shine...</p>
    </motion.div>
  );
};