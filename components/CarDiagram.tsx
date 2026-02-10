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
    top: '62%',
    left: '21%',
    title: 'Ceramic Wheel Blaster',
    description: 'Our high-pressure orbital spinners remove 99% of brake dust, followed by a ceramic coating that keeps rims shiny and repels dirt for weeks.',
    icon: '🛞'
  },
  {
    id: 'body',
    label: 'Paint Protection',
    top: '45%',
    left: '50%',
    title: 'Graphene Wax Shield',
    description: 'More durable than Carnauba, our Graphene infusion bonds to your clear coat, providing a hydrophobic layer that sheds water instantly.',
    icon: '✨'
  },
  {
    id: 'glass',
    label: 'Vision Clear',
    top: '28%',
    left: '52%',
    title: 'Rain Repellent Bonding',
    description: 'A molecular bond created on your windshield that causes rain to bead up and roll off, improving visibility during storms by over 50%.',
    icon: '🌧️'
  },
  {
    id: 'chassis',
    label: 'Underbody',
    top: '75%',
    left: '50%',
    title: 'Rust Inhibitor Spray',
    description: 'We wash where you can\'t see. Our high-pressure undercarriage flush removes road salts and grime to prevent corrosion.',
    icon: '🛡️'
  },
];

export const CarDiagram: React.FC = () => {
  const [activePoint, setActivePoint] = useState<TechPoint | null>(null);

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden" id="tech-specs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ScanLine className="w-5 h-5 text-cwCyan animate-pulse" />
            <h2 className="text-cwCyan font-bold tracking-widest uppercase text-lg">System Analysis</h2>
          </div>
          <h3 className="text-5xl md:text-7xl font-extrabold text-white">
            Precision Tech Specs
          </h3>
          <p className="mt-4 text-slate-400 text-xl max-w-2xl mx-auto">
            Interactive diagnostic of our advanced cleaning technology.
          </p>
        </div>

        {/* Diagram Container */}
        <div className="relative w-full rounded-3xl bg-[#0f1623] border border-slate-800 shadow-2xl overflow-hidden">
            
          {/* Background Grid - Technical feel */}
          <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(10,1fr)] opacity-[0.1] pointer-events-none">
              {Array.from({ length: 200 }).map((_, i) => (
                  <div key={i} className="border-[0.5px] border-cwCyan/30"></div>
              ))}
          </div>

          <div className="relative w-full aspect-[16/9] md:aspect-[2.2/1] flex items-center justify-center p-8 md:p-12">
            
            {/* Main Car Image - Sleek Side Profile */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10 w-full max-w-5xl"
            >
               {/* Scanning Laser Effect */}
               <motion.div 
                 className="absolute top-[-20%] bottom-[-20%] w-1 bg-cwCyan/50 shadow-[0_0_30px_3px_rgba(6,217,245,0.6)] z-20 pointer-events-none"
                 animate={{ left: ['0%', '100%', '0%'] }}
                 transition={{ duration: 6, ease: "linear", repeat: Infinity }}
               />
               <motion.div 
                 className="absolute top-[-20%] bottom-[-20%] w-32 bg-gradient-to-r from-transparent via-cwCyan/10 to-transparent z-10 pointer-events-none mix-blend-screen"
                 animate={{ left: ['-5%', '95%', '-5%'] }}
                 transition={{ duration: 6, ease: "linear", repeat: Infinity }}
               />

               <img 
                 src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=1200" 
                 alt="Vehicle Schematic" 
                 className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] opacity-90 mix-blend-screen"
               />
            </motion.div>
            
            {/* Interactive Points */}
            {points.map((point) => (
              <motion.button
                key={point.id}
                style={{ top: point.top, left: point.left }}
                className="absolute z-30 group"
                onClick={() => setActivePoint(point)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-slate-900/80 backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(6,217,245,0.5)] border border-cwCyan cursor-pointer">
                  <Plus className={`w-4 h-4 md:w-6 md:h-6 text-cwCyan transition-transform duration-300 ${activePoint?.id === point.id ? 'rotate-45' : ''}`} />
                  <span className="absolute inset-0 rounded-full border border-cwCyan animate-ping opacity-50"></span>
                </div>
                {/* Tooltip Label */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-4 py-1.5 bg-black/80 backdrop-blur-md border border-slate-700 text-cwCyan text-xs md:text-sm font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none tracking-wider">
                  {point.label}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Info Card Overlay */}
          <AnimatePresence>
            {activePoint && (
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                className="absolute bottom-6 left-6 right-6 md:left-auto md:right-8 md:bottom-8 md:w-96 bg-slate-900/95 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-cwCyan/30 z-40"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl filter drop-shadow-[0_0_10px_rgba(253,23,247,0.5)]">{activePoint.icon}</span>
                    <h4 className="text-xl font-bold text-white">{activePoint.title}</h4>
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); setActivePoint(null); }}
                    className="p-1 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {activePoint.description}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
                   <span className="text-[10px] font-bold text-cwCyan uppercase tracking-widest">Analysis Complete</span>
                   <button className="text-xs font-bold text-cwPink hover:text-white transition-colors uppercase tracking-wider">Full Specs +</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};