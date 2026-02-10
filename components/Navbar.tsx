import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Locations', href: '#locations' },
  {
    label: 'Packages',
    href: '#packages',
    isDropdown: true,
    dropdownItems: ['Basic Wave', 'Splash Wave', 'Mega Wave', 'Tidal Wave']
  },
  { label: 'FastPass', href: '#fastpass' },
  { label: 'Tech Specs', href: '#tech-specs' },
  { label: 'Careers', href: '#careers' },
  { label: 'Buy Now', href: '#buy-now', isButton: true },
  { label: 'Manage Membership', href: '#manage', isButton: true, secondary: true },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed w-full z-50 top-0 left-0">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 px-4 sm:px-6 lg:px-12 text-sm font-medium flex justify-between items-center relative z-50 border-b border-white/10">
        <div className="flex items-center gap-4">
          <a href="tel:+19035550101" className="flex items-center gap-2 hover:text-cwCyan transition-colors">
            <Phone className="w-3 h-3" />
            <span className="hidden sm:inline">(903) 555-0101</span>
            <span className="sm:hidden">Call Us</span>
          </a>
          <span className="hidden sm:inline text-slate-400">|</span>
          <span className="hidden sm:inline text-slate-300">Open Daily 7am - 8pm</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-slate-300">Follow the Wave:</span>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-cwPink transition-colors"><Facebook className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 relative ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
          }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer mr-4" onClick={() => window.scrollTo(0, 0)}>
              <img
                src="/logo.png"
                alt="Cave Wave Car Wash"
                className={`transition-all duration-300 object-contain ${scrolled ? 'h-10 w-auto' : 'w-32 md:w-40 lg:w-48 mt-4'}`}
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden xl:flex items-center space-x-6">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => link.isDropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => link.isDropdown && setActiveDropdown(null)}
                >
                  {link.isButton ? (
                    <a
                      href={link.href}
                      className={`px-5 py-2 rounded-full font-bold transition-all shadow-md active:scale-95 hover:shadow-lg ${link.secondary
                        ? scrolled
                          ? 'bg-transparent text-slate-900 border-2 border-slate-900 hover:bg-slate-900 hover:text-white'
                          : 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-slate-900'
                        : 'bg-gradient-to-r from-cwCyan via-cwPink to-cwCyan bg-[length:200%_auto] hover:bg-right transition-[background-position] duration-500 text-white'
                        }`}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      className={`${scrolled ? 'text-slate-800 hover:text-cwPink' : 'text-white hover:text-cwCyan'} font-semibold flex items-center gap-1 transition-colors drop-shadow-sm`}
                    >
                      {link.label}
                      {link.isDropdown && <ChevronDown className="w-4 h-4" />}
                    </a>
                  )}

                  {/* Dropdown Menu */}
                  {link.isDropdown && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-lg overflow-hidden py-2 mt-2 border-t-4 border-cwCyan ring-1 ring-black/5"
                    >
                      {link.dropdownItems?.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-cwPink transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${scrolled && !isOpen ? 'text-slate-900' : 'text-white'} hover:text-cwCyan focus:outline-none transition-colors z-50`}
              >
                {isOpen ? <X className="w-8 h-8 relative z-50 text-cwPink" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="xl:hidden bg-slate-900 shadow-xl overflow-hidden border-t border-white/10"
            >
              <div className="px-4 pt-2 pb-8 space-y-1 max-h-[70vh] overflow-y-auto">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.isDropdown ? (
                      <div className="space-y-1">
                        <div className="px-3 py-2 text-base font-bold text-white">{link.label}</div>
                        <div className="pl-6 space-y-1 border-l-2 border-cwCyan ml-3">
                          {link.dropdownItems?.map(item => (
                            <a key={item} href="#" className="block px-3 py-2 text-base font-medium text-slate-400 hover:text-cwPink">
                              {item}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        href={link.href}
                        className={`block px-3 py-2 text-base font-medium rounded-md ${link.isButton
                          ? 'bg-gradient-to-r from-cwCyan to-cwPink text-white text-center mt-4'
                          : 'text-slate-300 hover:text-cwCyan hover:bg-white/5'
                          }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};