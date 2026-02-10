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
    isPremium: false
  },
  { 
    id: 'splash',
    name: 'Splash', 
    price: '$16', 
    desc: 'Triple Foam',
    features: '+ Wheel Cleaning',
    isPremium: false
  },
  { 
    id: 'mega',
    name: 'Mega', 
    price: '$22', 
    desc: 'Hot Wax Shine',
    features: '+ Rain Repellent',
    isPremium: false
  },
  { 
    id: 'tidal',
    name: 'Tidal', 
    price: '$30', 
    desc: 'Ceramic Shield',
    features: '+ Everything',
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
  const cardWidth = 320;
  const gap = 24;

  return (
    <div className="w-full relative flex flex-col items-center">
      {/* Container with ample height to prevent cut-off shadows */}
      <div className="relative w-full h-[180px] flex items-center justify-center overflow-visible">
        
        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between px-4 md:px-12 pointer-events-none z-40 max-w-5xl mx-auto">
          <button 
            onClick={prevPackage}
            className="pointer-events-auto p-3 rounded-full bg-white/40 hover:bg-white backdrop-blur-md shadow-lg border border-white/50 text-slate-700 hover:text-cwCyan hover:scale-110 active:scale-95 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextPackage}
            className="pointer-events-auto p-3 rounded-full bg-white/40 hover:bg-white backdrop-blur-md shadow-lg border border-white/50 text-slate-700 hover:text-cwCyan hover:scale-110 active:scale-95 transition-all"
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
                  key={pkg.id} // Use stable ID
                  layout // Smooth layout transitions
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
                    stiffness: 350,
                    damping: 30
                  }}
                  className={`
                    absolute top-1/2 -translate-y-1/2
                    flex items-center
                    h-[120px] w-[320px]
                    rounded-2xl cursor-pointer overflow-hidden
                    transition-shadow duration-300
                    ${isActive 
                        ? 'shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] ring-4 ring-white/50' 
                        : 'shadow-none hover:opacity-80'
                    }
                    ${isPremium && isActive ? 'bg-slate-900 text-white' : 'bg-white/80 backdrop-blur-xl border border-white/40 text-slate-800'}
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
                            <span className={`text-[10px] font-black uppercase tracking-wider mb-1 opacity-60`}>
                                {pkg.name}
                            </span>
                            <span className="text-3xl font-black leading-none tracking-tight">
                                {pkg.price}
                            </span>
                        </div>

                        {/* Right: Info */}
                        <div className="w-[65%] flex flex-col justify-center px-5 relative">
                             {/* Premium Badge */}
                            {isPremium && (
                                <div className="absolute top-2 right-2">
                                    <Star className="w-3 h-3 text-cwPink fill-current" />
                                </div>
                            )}
                            
                            <div className="flex items-center gap-2 mb-1">
                                <div className={`p-0.5 rounded-full flex-shrink-0 ${isPremium ? 'bg-cwCyan text-slate-900' : 'bg-cwCyan/20 text-cwCyan'}`}>
                                    <Check className="w-3 h-3" />
                                </div>
                                <span className="text-sm font-bold leading-tight">{pkg.features}</span>
                            </div>
                            <span className="text-xs font-medium opacity-60 pl-6">
                                {pkg.desc}
                            </span>
                        </div>
                    </div>
                    
                    {/* Active Indicator Tag */}
                    {isActive && (
                        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-cwCyan to-cwPink" />
                    )}
                </motion.div>
              );
            })}
        </div>
      </div>
    </div>
  );
};