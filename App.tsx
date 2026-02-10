import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { CarDiagram } from './components/CarDiagram';
import { Pricing } from './components/Pricing';
import { Locations } from './components/Locations';
import { Footer } from './components/Footer';
import { Bubbles } from './components/Bubbles';
import { LoadingScreen } from './components/LoadingScreen';
import { LocationModal } from './components/LocationModal';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Ticket } from 'lucide-react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showExplosion, setShowExplosion] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);

      // Show modal shortly after loading finishes
      setTimeout(() => {
        setShowLocationModal(true);
      }, 500);

    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleModalClose = () => {
    setShowLocationModal(false);
    setShowExplosion(true);
    // Hide explosion after animation
    setTimeout(() => setShowExplosion(false), 1500);
  };

  return (
    <div className="font-sans text-slate-800 bg-white min-h-screen relative selection:bg-cwPink selection:text-white">
      <AnimatePresence>
        {loading && <LoadingScreen />}
        {showLocationModal && <LocationModal onClose={handleModalClose} />}
        {showExplosion && <BubbleExplosion />}
      </AnimatePresence>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cwCyan to-cwPink origin-left z-[60]"
        style={{ scaleX }}
      />
      <Bubbles />
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>
        <Features />
        <CarDiagram />
        <div id="packages">
          <Pricing />
        </div>
        <div id="locations">
          <Locations />
        </div>
      </main>
      <Footer />

      {/* Floating Action Button */}
      {!loading && (
        <motion.a
          href="#packages"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-40 px-6 py-4 rounded-full bg-gradient-to-r from-cwCyan via-cwPink to-cwCyan bg-[length:200%_auto] hover:bg-right transition-[background-position] duration-500 shadow-2xl shadow-cwCyan/40 flex items-center gap-3 text-white font-bold cursor-pointer group"
        >
          <div className="relative">
            <Ticket className="w-6 h-6 fill-current" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
          </div>
          <span className="hidden sm:inline">Join Club</span>
        </motion.a>
      )}
    </div>
  );
};

export default App;