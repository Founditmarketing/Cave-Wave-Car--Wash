import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t-4 border-cwCyan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
             <span className="font-extrabold text-3xl tracking-tight block mb-4">
               Cave<span className="text-cwCyan">Wave</span>
             </span>
             <p className="text-slate-400 text-sm leading-relaxed">
               The ultimate car wash experience. Modern technology, premium soaps, and a commitment to our community.
             </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-cwPink">Quick Links</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><a href="#home" className="hover:text-cwCyan transition-colors">Home</a></li>
              <li><a href="#locations" className="hover:text-cwCyan transition-colors">Locations</a></li>
              <li><a href="#packages" className="hover:text-cwCyan transition-colors">Packages</a></li>
              <li><a href="#careers" className="hover:text-cwCyan transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-cwPink">Support</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><a href="#manage" className="hover:text-cwCyan transition-colors">Manage Membership</a></li>
              <li><a href="#contact" className="hover:text-cwCyan transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-cwCyan transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-cwCyan transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-cwPink">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cwCyan hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cwPink hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cwCyan hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <a href="mailto:info@cavewave.com" className="flex items-center gap-2 text-slate-300 hover:text-white">
              <Mail className="w-4 h-4" /> info@cavewave.com
            </a>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Cave Wave Car Wash. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Shine.</p>
        </div>
      </div>
    </footer>
  );
};