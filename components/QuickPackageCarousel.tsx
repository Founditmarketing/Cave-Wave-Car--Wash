import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Check } from 'lucide-react';

const packages = [
  {
    id: 'basic',
    name: 'Basic',
    price: '$10',
    desc: 'Essential Clean',
    features: 'Wash & Dry',
    details: 'Power Wash • Spot Free Rinse',
    isPremium: false
  },
  {
    id: 'splash',
    name: 'Splash',
    price: '$16',
    desc: 'Triple Foam',
    features: '+ Wheel Cleaning',
    details: 'Triple Foam • Wheel Blaster',
    isPremium: false
  },
  {
    id: 'mega',
    name: 'Mega',
    price: '$22',
    desc: 'Hot Wax Shine',
    features: '+ Rain Repellent',
    details: 'Carnauba Wax • Tire Shine',
    isPremium: false
  },
  {
    id: 'tidal',
    name: 'Tidal',
    price: '$30',
    desc: 'Ceramic Shield',
    features: '+ Everything',
    details: 'Ceramic Sealant • Lava Shield',
    isPremium: true
  },
];

export const QuickPackageCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  const nextPackage = () => {
    setIndex((prev) => (prev + 1) % packages.length);
  };

  const prevPackage = () => {
    setIndex((prev) => (prev - 1 + packages.length) % packages.length);
  };

  // Logic to determine visible cards centered around 'index'
  // We want to show: Left (-1), Center (0), Right (1)
  const getVisiblePackages = () => {
    const total = packages.length;
    const centerIndex = index;
    const leftIndex = (index - 1 + total) % total;
    const rightIndex = (index + 1) % total;

    return [
      { ...packages[leftIndex], position: -1 },
      { ...packages[centerIndex], position: 0 },
      { ...packages[rightIndex], position: 1 },
    ];
  };

  const visiblePackages = getVisiblePackages();
  const cardWidth = 340; // Slightly wider for bigger text
  const gap = 24;

  return (
    <div className="w-full relative flex flex-col items-center">
      {/* Container with ample height to prevent cut-off shadows */}
      <div className="relative w-full h-[200px] flex items-center justify-center overflow-visible">

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between px-4 md:px-12 pointer-events-none z-40 max-w-5xl mx-auto">
          <button
            onClick={prevPackage}
            className="pointer-events-auto p-3 rounded-full bg-white/40 hover:bg-white backdrop-blur-md shadow-lg border border-white/50 text-slate-700 hover:text-cwCyan hover:scale-110 active:scale-95 transition-all mt-32 md:mt-0"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextPackage}
            className="pointer-events-auto p-3 rounded-full bg-white/40 hover:bg-white backdrop-blur-md shadow-lg border border-white/50 text-slate-700 hover:text-cwCyan hover:scale-110 active:scale-95 transition-all mt-32 md:mt-0"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel Track */}
        <div className="absolute w-full h-full flex items-center justify-center">
          {visiblePackages.map((pkg) => {
            const isActive = pkg.position === 0;
            const isPremium = pkg.isPremium;

            return (
              <motion.div
                key={`${pkg.id}-${pkg.position}`} // Stable key
                initial={false}
                animate={{
                  x: pkg.position * (cardWidth + gap),
                  scale: isActive ? 1 : 0.85,
                  opacity: isActive ? 1 : 0.6,
                  zIndex: isActive ? 30 : 10,
                  filter: isActive ? 'blur(0px)' : 'blur(2px)',
                }}
                transition={{
                  type: "spring",
                  stiffness: 200, // Softer spring for more visible movement
                  damping: 25,
                  mass: 2 // Heavier mass to make movement slower/more deliberate
                }}
                className={`
                    absolute top-1/2 -translate-y-1/2
                    flex items-center
                    h-[140px] w-[340px]
                    rounded-2xl cursor-pointer overflow-hidden
                    transition-shadow duration-300 will-change-transform
                    ${isActive
                    ? 'shadow-xl ring-4 ring-white/50'
                    : 'shadow-md hover:opacity-80'}
                    ${isPremium && isActive ? 'bg-slate-900 text-white' : 'bg-white/95 border border-white/40 text-slate-800'}
                  `}
                onClick={() => {
                  if (pkg.position === -1) prevPackage();
                  if (pkg.position === 1) nextPackage();
                }}
              >
                {/* Compact Card Content */}
                <div className="flex w-full h-full divide-x divide-current/10">
                  {/* Left: Price & Name */}
                  <div className="w-[35%] flex flex-col justify-center items-center p-3 bg-current/5">
                    <span className={`text-xs font-black uppercase tracking-wider mb-1 opacity-70`}>
                      {pkg.name}
                    </span>
                    <span className="text-4xl font-black leading-none tracking-tight">
                      {pkg.price}
                    </span>
                  </div>

                  {/* Right: Info */}
                  <div className="w-[65%] flex flex-col justify-center px-6 relative">
                    {/* Premium Badge */}
                    {isPremium && (
                      <div className="absolute top-2 right-2">
                        <Star className="w-4 h-4 text-cwPink fill-current" />
                      </div>
                    )}

                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-lg font-bold leading-tight">{pkg.features}</span>
                    </div>
                    <span className="text-sm font-medium opacity-80 block leading-snug">
                      {pkg.desc}
                    </span>
                    <span className="text-xs opacity-60 mt-1 block">
                      {pkg.details}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};