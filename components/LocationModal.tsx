import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin } from 'lucide-react';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LocationModal: React.FC<LocationModalProps> = ({ isOpen, onClose }) => {
  const handleLocationClick = () => {
    onClose();
    const element = document.getElementById('locations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white rounded-[2.5rem] p-8 md:p-10 max-w-[500px] w-full shadow-2xl border-[5px] border-cwCyan overflow-hidden"
          >
            {/* Decorative Background Elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-cwCyan/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cwPink/10 rounded-full blur-3xl pointer-events-none" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center relative z-10 flex flex-col items-center">
              {/* Logo representation */}
              <div className="flex items-center justify-center mb-6">
                <img src="/logo.png" alt="Cave Wave" className="w-48 h-auto object-contain drop-shadow-lg" />
              </div>

              <h2 className="text-2xl md:text-3xl font-medium uppercase text-slate-900 mb-4 leading-tight">
                Save money by signing up for one of our monthly packages!
              </h2>

              <p className="text-sm font-extrabold text-slate-500 italic uppercase tracking-wider mb-8">
                Click your location below to learn more.
              </p>

              <div className="space-y-4 w-full">
                <button
                  onClick={handleLocationClick}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-cwPink to-[#d90bd5] text-white font-extrabold text-lg shadow-lg shadow-cwPink/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group uppercase tracking-wide"
                >
                  <MapPin className="w-5 h-5 group-hover:animate-bounce" />
                  Paris Location
                </button>

                <button
                  onClick={handleLocationClick}
                  className="w-full py-4 px-6 rounded-2xl bg-white border-2 border-cwCyan text-cwCyan font-extrabold text-lg hover:bg-cwCyan hover:text-white hover:shadow-lg hover:shadow-cwCyan/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group uppercase tracking-wide"
                >
                  <MapPin className="w-5 h-5 group-hover:animate-bounce" />
                  Texarkana Location
                </button>

                <button
                  onClick={handleLocationClick}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-cwPink to-[#d90bd5] text-white font-extrabold text-lg shadow-lg shadow-cwPink/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group uppercase tracking-wide"
                >
                  <MapPin className="w-5 h-5 group-hover:animate-bounce" />
                  Longview Location
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};