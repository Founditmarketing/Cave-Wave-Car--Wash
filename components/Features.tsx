import React from 'react';
import { Wind, Zap, Heart, Droplet, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Wind,
    title: 'Free Vacuums',
    description: 'Powerful vacuums available for free with every wash to clean your interior.',
  },
  {
    icon: Zap,
    title: 'Advanced Tech',
    description: 'State-of-the-art tunnels that clean effectively without damaging your finish.',
  },
  {
    icon: Heart,
    title: 'Community First',
    description: 'We love our locals! Active in community fundraising and local events.',
  },
  {
    icon: ShieldCheck,
    title: 'Ceramic Shield',
    description: 'Premium protection packages available to keep that shine longer.',
  },
  {
    icon: Droplet,
    title: 'Eco-Friendly',
    description: 'We reclaim and filter our water, using biodegradable soaps.',
  },
  {
    icon: Clock,
    title: 'Lightning Fast',
    description: 'Get a premium clean in under 3 minutes. FastPass gets you in faster.',
  },
];

export const Features: React.FC = () => {
  // Bubbles for background effect - using styles matching the global Bubbles component
  const bubbles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 80 + 20,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Background Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-[#111827] to-slate-900 z-0" />

      {/* Bubbles Layer - Positioned between base and content */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="absolute rounded-full border border-cwCyan/30 bg-cwCyan/10 backdrop-blur-sm"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.left,
              bottom: -150,
            }}
            animate={{
              y: -1000,
              opacity: [0, 0.6, 0],
              x: [0, Math.sin(bubble.id) * 40, 0],
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cwCyan font-bold tracking-widest uppercase mb-4 text-lg"
          >
            Why Choose Us
          </motion.h2>
          <motion.h3 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6"
          >
            The Cave Wave Advantage
          </motion.h3>
          <div className="w-32 h-2 bg-gradient-to-r from-cwCyan to-cwPink mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ 
                y: -10, 
                backgroundColor: 'rgba(30, 41, 59, 0.9)',
              }}
              className="p-10 rounded-3xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cwCyan/50 transition-all group cursor-default relative overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-cwCyan/20 rounded-full blur-3xl group-hover:bg-cwCyan/30 transition-colors duration-500" />
              
              <motion.div 
                className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 shadow-lg flex items-center justify-center mb-8 relative z-10 group-hover:border-cwPink/50 transition-colors"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <feature.icon className="w-8 h-8 text-cwPink" />
              </motion.div>
              
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-cwCyan transition-colors relative z-10">
                {feature.title}
              </h4>
              <p className="text-slate-400 text-lg leading-relaxed relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};