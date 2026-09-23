import React, { useState } from 'react';
import { Building2, Star, MapPin, ArrowRight, Heart } from 'lucide-react';
import { HOTELS } from '../data/mockData';

export default function HotelDeals() {
  const [activeIsland, setActiveIsland] = useState('All');

  const islands = ['All', 'Mahé Island', 'Praslin Island', 'La Digue Island'];

  const filteredHotels = activeIsland === 'All' 
    ? HOTELS 
    : HOTELS.filter(h => h.location.toLowerCase().includes(activeIsland.toLowerCase().split(' ')[0]));

  return (
    <section id="hotels" className="py-20 bg-white border-t border-[#C084FC]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E8FF] text-[#7E22CE] text-xs font-extrabold uppercase tracking-wider border border-[#C084FC]/30 shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-[#7E22CE]" />
            <span>Luxury Resort Collection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#4C1D95] tracking-tight">
            Exclusive Deals on <span className="text-[#7E22CE]">Seychelles Hotels</span>
          </h2>
          <p className="text-[#581C87] text-base font-semibold">
            Handpicked 5-star beachfront resorts, ocean villas, and boutique island retreats at guaranteed best rates.
          </p>

          {/* Island Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {islands.map((is, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIsland(is)}
                className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all ${
                  activeIsland === is
                    ? 'bg-[#7E22CE] text-white shadow-md'
                    : 'bg-[#FAF5FF] text-[#4C1D95] hover:bg-[#F3E8FF] border border-[#C084FC]/30'
                }`}
              >
                {is}
              </button>
            ))}
          </div>
        </div>

        {/* Hotel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredHotels.map((hotel) => (
            <div 
              key={hotel.id}
              className="bg-[#FAF5FF] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#C084FC]/30 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3 bg-[#7E22CE] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {hotel.stars}
                  </div>
                  
                  <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-red-500 transition-colors shadow-sm">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-1 text-[#581C87] text-xs font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-[#7E22CE]" />
                    <span className="truncate">{hotel.location}</span>
                  </div>

                  <h3 className="font-extrabold text-[#4C1D95] text-lg group-hover:text-[#7E22CE] transition-colors line-clamp-1">
                    {hotel.name}
                  </h3>

                  <div className="flex items-center gap-1 text-xs font-bold text-amber-600 pt-1">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>{hotel.rating}</span>
                    <span className="text-gray-500 font-normal">(Verified Guest Rating)</span>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between border-t border-gray-100/80 mt-2">
                <div>
                  <span className="text-xs text-gray-500 block">From</span>
                  <span className="text-xl font-black text-[#7E22CE]">${hotel.pricePerNight}<span className="text-xs font-normal text-[#581C87]"> /night</span></span>
                </div>

                <a 
                  href="tel:+18882109189"
                  className="p-2.5 rounded-xl bg-[#F3E8FF] text-[#7E22CE] group-hover:bg-[#7E22CE] group-hover:text-white transition-all shadow-sm"
                  title="Call to Reserve Resort"
                >
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
