import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-20">
        <motion.div
          style={{ y: yText, opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white leading-tight mb-8 tracking-tight drop-shadow-2xl">
            The Best Wash <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cwCyan to-cwPink filter drop-shadow-lg">
              In The Universe.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-200 font-medium max-w-2xl mx-auto mb-12 drop-shadow-md">
            Experience the future of clean with our advanced tunnel technology.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#packages"
              className="group relative px-8 py-4 rounded-full overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-gradient-to-r from-cwCyan via-cwPink to-cwCyan bg-[length:200%_auto] hover:bg-right text-white font-bold"
            >
              <span className="relative flex items-center gap-2">
                View Packages <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#locations"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-white/20 transition-all duration-300"
            >
              Find Location
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};