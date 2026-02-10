import React, { useState } from 'react';
import { Check, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const packages = [
  {
    name: 'Basic Wave',
    singlePrice: 10,
    monthlyPrice: 25,
    color: 'gray',
    features: ['Soft Cloth Wash', 'Spot Free Rinse', 'Free Vacuums', 'Power Dry'],
  },
  {
    name: 'Splash Wave',
    singlePrice: 16,
    monthlyPrice: 37,
    color: 'cyan',
    features: ['Basic Wave Features', 'Wheel Cleaner', 'Triple Foam Conditioner', 'Undercarriage Wash'],
  },
  {
    name: 'Mega Wave',
    singlePrice: 22,
    monthlyPrice: 49,
    color: 'pink',
    features: ['Splash Wave Features', 'Tire Shine', 'Carnauba Wax', 'Rain Repellent'],
  },
  {
    name: 'Tidal Wave',
    singlePrice: 30,
    monthlyPrice: 65,
    color: 'premium',
    isPremium: true,
    features: ['Mega Wave Features', 'Ceramic Shield', 'Bug Prep', 'Buff & Shine', '5-Day Rain Guarantee'],
  },
];

export const Pricing: React.FC = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-cwPink font-medium tracking-widest uppercase mb-4 text-lg">Wash Packages</h2>
          <h3 className="text-5xl md:text-7xl font-medium uppercase text-slate-900 mb-6">Choose Your Wave</h3>
          <p className="mt-4 text-slate-600 text-xl max-w-2xl mx-auto">Join the Monthly Unlimited Club for the price of 2 washes and keep your car shining all month long!</p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 mb-16">
          <span className={`font-bold text-lg sm:text-xl cursor-pointer transition-colors flex items-center h-12 ${!isMonthly ? 'text-slate-900' : 'text-slate-400'}`} onClick={() => setIsMonthly(false)}>Single Wash</span>
          <button
            onClick={() => setIsMonthly(!isMonthly)}
            className="relative w-24 h-12 rounded-full bg-slate-200 p-1 transition-colors duration-300 focus:outline-none shadow-inner"
            style={{ backgroundColor: isMonthly ? '#06d9f5' : '#cbd5e1' }}
          >
            <motion.div
              className="w-10 h-10 bg-white rounded-full shadow-md"
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              style={{ x: isMonthly ? 48 : 0 }}
            />
          </button>
          <span className={`font-bold text-lg sm:text-xl cursor-pointer transition-colors flex items-center h-12 ${isMonthly ? 'text-slate-900' : 'text-slate-400'}`} onClick={() => setIsMonthly(true)}>Unlimited Club</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {packages.map((pkg, index) => {
            const isPremium = pkg.isPremium;
            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className={`relative rounded-[2rem] p-8 transition-all duration-300 flex flex-col h-full ${isPremium
                  ? 'bg-slate-900 text-white shadow-2xl border-4 border-cwCyan lg:-mt-6 z-10 pb-12'
                  : 'bg-white text-slate-900 shadow-xl hover:shadow-2xl border-2 border-cwCyan/20'
                  }`}
              >
                {isPremium && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cwCyan to-cwPink text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 whitespace-nowrap">
                    <Star className="w-4 h-4 fill-white" /> BEST VALUE
                  </div>
                )}

                <div className="mb-8 text-center">
                  <h4 className={`text-2xl font-medium uppercase mb-4 ${isPremium ? 'text-cwCyan' : 'text-slate-800'}`}>
                    {pkg.name}
                  </h4>
                  <div className="flex items-baseline justify-center gap-1 h-14">
                    <span className={`text-sm font-medium opacity-60 self-center`}>
                      {isMonthly ? '/mo' : '/wash'}
                    </span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={isMonthly ? 'monthly' : 'single'}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`text-5xl font-extrabold ${isPremium ? 'text-white' : 'text-slate-900'}`}
                      >
                        ${isMonthly ? pkg.monthlyPrice : pkg.singlePrice}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <div className="mt-3 text-sm opacity-80 min-h-[1.5rem] font-medium">
                    {!isMonthly && (
                      <span>or ${pkg.monthlyPrice}/mo unlimited</span>
                    )}
                    {isMonthly && (
                      <span className="text-cwCyan font-bold tracking-wide">Save big with unlimited!</span>
                    )}
                  </div>
                </div>

                <div className="flex-grow space-y-4 mb-8">
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`mt-0.5 rounded-full p-1 ${isPremium ? 'bg-cwPink/20 text-cwPink' : 'bg-slate-100 text-slate-600'}`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className={`text-base font-medium ${isPremium ? 'text-slate-300' : 'text-slate-600'}`}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${isPremium
                    ? 'bg-gradient-to-r from-cwCyan via-cwPink to-cwCyan bg-[length:200%_auto] hover:bg-right transition-[background-position] duration-500 text-white shadow-lg shadow-cwCyan/25'
                    : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                    }`}
                >
                  Select {isMonthly ? 'Plan' : 'Wash'}
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};