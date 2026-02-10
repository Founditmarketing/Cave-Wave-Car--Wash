import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { QuickPackageCarousel } from './QuickPackageCarousel';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Video-1.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/90"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between pt-20 pb-4">

        {/* Top Content: Title & Buttons - Biased towards bottom */}
        <div className="flex-grow flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center pt-12">
          <motion.div
            style={{ y: yText, opacity }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center w-full"
          >

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium uppercase text-white leading-tight mb-8 tracking-tight drop-shadow-2xl whitespace-normal lg:whitespace-nowrap break-words italic px-8 py-2 overflow-visible">
              Catch The Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-cwCyan to-cwPink filter drop-shadow-lg pr-4">Wave</span>
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#packages"
                className="group relative px-8 py-4 rounded-full overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-gradient-to-r from-cwCyan via-cwPink to-cwCyan bg-[length:200%_auto] hover:bg-right text-white font-bold italic tracking-wide"
              >
                <span className="relative flex items-center gap-2">
                  View Packages <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="#locations"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-white/20 transition-all duration-300 italic tracking-wide"
              >
                Find Location
              </a>
            </div>

          </motion.div>
        </div>

        {/* Quick Package Preview - Attached to Bottom */}
        <div className="w-full max-w-5xl mx-auto px-4 relative z-20 flex flex-col items-center">
          <span className="text-white/80 text-sm md:text-base font-medium uppercase tracking-widest mb-4 italic drop-shadow-md">
            Check out our packages
          </span>
          <QuickPackageCarousel />
        </div>
      </div>
    </div>
  );
};