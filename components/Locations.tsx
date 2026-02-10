import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const locations = [
  {
    city: 'Paris',
    address: '1234 Lamar Avenue, Paris, TX',
    phone: '(903) 555-0101',
    hours: 'Mon-Sun: 7am - 8pm',
    image: 'https://images.unsplash.com/photo-1552934526-c820637d7211?auto=format&fit=crop&q=80&w=800',
  },
  {
    city: 'Texarkana',
    address: '5678 Summerhill Road, Texarkana, TX',
    phone: '(903) 555-0102',
    hours: 'Mon-Sun: 7am - 8pm',
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=800',
  },
  {
    city: 'Longview',
    address: '9101 Gilmer Road, Longview, TX',
    phone: '(903) 555-0103',
    hours: 'Mon-Sun: 7am - 8pm',
    image: 'https://images.unsplash.com/photo-1605164599901-f8a1464a2c87?auto=format&fit=crop&q=80&w=800',
  },
];

export const Locations: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-cwCyan font-bold tracking-widest uppercase mb-4 text-lg">Our Locations</h2>
          <h3 className="text-5xl md:text-7xl font-extrabold text-slate-900">Find Us Near You</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {locations.map((loc, index) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[2rem] shadow-xl border border-slate-100 hover:shadow-2xl transition-all"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
                <img 
                  src={loc.image} 
                  alt={loc.city} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <h3 className="absolute bottom-6 left-6 text-4xl font-bold text-white z-20">{loc.city}</h3>
              </div>
              
              <div className="p-8 bg-white space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cwPink/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-cwPink" />
                  </div>
                  <span className="text-slate-600 font-medium text-lg pt-1">{loc.address}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-cwCyan/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-cwCyan" />
                  </div>
                  <span className="text-slate-600 font-medium text-lg">{loc.phone}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-slate-500" />
                  </div>
                  <span className="text-slate-500 text-base font-medium">{loc.hours}</span>
                </div>

                <button className="w-full mt-6 py-3 border-2 border-cwCyan text-cwCyan font-bold rounded-xl hover:bg-cwCyan hover:text-white transition-colors text-lg">
                  Get Directions
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};