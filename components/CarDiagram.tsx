import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, ScanLine } from 'lucide-react';

interface TechPoint {
  id: string;
  label: string;
  top: string;
  left: string;
  title: string;
  description: string;
  icon: string;
}

const points: TechPoint[] = [
  {
    id: 'wheels',
    label: 'Wheel Tech',
    top: '66%',
    left: '18%',
    title: 'Ceramic Wheel Blaster',
    description: 'Our high-pressure orbital spinners remove 99% of brake dust, followed by a ceramic coating that keeps rims shiny and repels dirt for weeks.',
    icon: '🛞'
  },
  {
    id: 'body',
    label: 'Paint Protection',
    top: '45%',
    left: '45%',
    title: 'Graphene Wax Shield',
    description: 'More durable than Carnauba, our Graphene infusion bonds to your clear coat, providing a hydrophobic layer that sheds water instantly.',
    icon: '✨'
  },
  {
    id: 'glass',
    label: 'Vision Clear',
    top: '25%',
    left: '48%',
    title: 'Rain Repellent Bonding',
    description: 'A molecular bond created on your windshield that causes rain to bead up and roll off, improving visibility during storms by over 50%.',
    icon: '🌧️'
  },
  {
    id: 'chassis',
    label: 'Underbody',
    top: '78%',
    left: '45%',
    title: 'Rust Inhibitor Spray',
    description: 'We wash where you can\'t see. Our high-pressure undercarriage flush removes road salts and grime to prevent corrosion.',
    icon: '🛡️'
  },
];

export const CarDiagram: React.FC = () => {
  const [activePoint, setActivePoint] = useState<TechPoint | null>(null);

  return (
    <section id="tech-specs" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#001f3f] to-[#003366] w-full">
      {/* Background Grid Pattern - Made subtle */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="w-full relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 px-4">
          <h2 className="text-cwCyan font-bold tracking-widest uppercase text-lg">Cave Tech</h2>
          <h3 className="text-5xl md:text-7xl font-extrabold text-white mt-2 drop-shadow-lg">
            Advanced Cleaning Tech
          </h3>
        </div>

        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] flex items-center justify-center">
          {/* The Car Image - Full Width Feel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Glow effect behind car - Subtle */}
            <div className="absolute inset-0 bg-cwCyan/10 blur-3xl rounded-full opacity-20 pointer-events-none select-none"></div>

            <img
              src="/car-diagram.png"
              alt="Vehicle Schematic"
              className="w-full h-auto object-contain drop-shadow-2xl opacity-100 mix-blend-normal hover:scale-[1.01] transition-transform duration-500"
            />
          </motion.div>

          {/* Interactive Points */}
          <AnimatePresence>
            {points.map((point) => (
              <div
                key={point.id}
                className="absolute"
                style={{ top: point.top, left: point.left }}
              >
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActivePoint(activePoint === point.id ? null : point.id)}
                  className={`relative w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(6,217,245,0.6)] transition-colors duration-300 z-20 ${activePoint === point.id ? 'bg-cwPink text-white ring-4 ring-cwPink/30' : 'bg-cwCyan text-slate-900 animate-pulse'
                    }`}
                >
                  <div className="absolute inset-0 rounded-full bg-current opacity-75 animate-ping"></div>
                  <span className="relative z-10 text-xs md:text-sm font-bold">+</span>
                </motion.button>

                <AnimatePresence>
                  {activePoint === point.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className="fixed left-4 right-4 bottom-4 md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-auto md:mt-4 w-auto md:w-80 bg-slate-900/95 backdrop-blur-xl p-6 rounded-2xl border border-cwCyan/30 shadow-2xl z-[100] text-left max-h-[60vh] overflow-y-auto"
                    >
                      <button
                        onClick={(e) => { e.stopPropagation(); setActivePoint(null); }}
                        className="absolute top-4 right-4 p-1 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>

                      <div className="flex items-center gap-3 mb-3 pr-8">
                        <div className="text-2xl">{point.icon}</div>
                        <div>
                          <h4 className="text-cwCyan font-bold text-lg leading-none">{point.title}</h4>
                          <span className="text-xs text-slate-400 uppercase tracking-wider">{point.label}</span>
                        </div>
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">{point.description}</p>

                      {/* Decorative Corner */}
                      <div className="absolute top-0 right-0 p-2 pointer-events-none">
                        <div className="w-2 h-2 bg-cwCyan rounded-full opacity-50"></div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};