import React, { useState } from 'react';
import { HOTELS } from '../data/mockData';
import { Hotel, Star, MapPin, CheckCircle, Phone, Sparkles, Filter, ShieldCheck } from 'lucide-react';

export default function HotelsPage() {
  const [selectedStar, setSelectedStar] = useState('all');

  const filteredHotels = selectedStar === 'all' 
    ? HOTELS 
    : HOTELS.filter(h => h.rating.toString() === selectedStar);

  return (
    <div className="bg-[#FAF5FF] min-h-screen pb-16">
      
      {/* FULL HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#F3E8FF] via-[#FAF5FF] to-[#F3E8FF] text-[#4C1D95] overflow-hidden py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#C084FC]/30">
        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#7E22CE] text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-md">
            <Hotel className="w-4 h-4 text-white" /> Seychelles Luxury Stays & Resorts
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#4C1D95] leading-none">
            Luxury Resorts & <br className="hidden sm:inline" />
            <span className="text-[#7E22CE]">Private Oceanfront Villas</span>
          </h1>

          <p className="text-[#581C87] max-w-3xl mx-auto text-base sm:text-xl font-medium leading-relaxed">
            Handpicked luxury sanctuaries across Mahé, Praslin, and La Digue with exclusive unpublished room upgrades, private pool villas, and resort credits.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-4 text-xs font-bold text-[#7E22CE]">
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#C084FC]/30 shadow-sm">
              <Star className="w-4 h-4 text-[#7E22CE] fill-[#7E22CE]" /> 5-Star Ultra Luxury
            </span>
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#C084FC]/30 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#7E22CE]" /> Free Breakfast & Transfers
            </span>
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#C084FC]/30 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#7E22CE]" /> Best Price Guarantee
            </span>
          </div>

          {/* Star Rating Filter */}
          <div className="pt-6">
            <div className="flex justify-center gap-3">
              <button 
                onClick={() => setSelectedStar('all')}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all shadow-sm ${
                  selectedStar === 'all' ? 'bg-[#7E22CE] text-white scale-105' : 'bg-white text-[#4C1D95] border border-[#C084FC]/30'
                }`}
              >
                All Luxury Resorts
              </button>
              <button 
                onClick={() => setSelectedStar('5')}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all shadow-sm ${
                  selectedStar === '5' ? 'bg-[#7E22CE] text-white scale-105' : 'bg-white text-[#4C1D95] border border-[#C084FC]/30'
                }`}
              >
                5-Star Flagship Resorts
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#C084FC]/30">
          <h2 className="text-2xl font-black text-[#4C1D95]">
            Showing <span className="text-[#7E22CE]">{filteredHotels.length}</span> Premier Hotels
          </h2>
          <span className="text-xs text-gray-500 font-bold hidden sm:inline">24/7 Phone Concierge Booking</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredHotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#C084FC]/30 flex flex-col justify-between group">
              <div className="relative h-72 overflow-hidden">
                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-[#7E22CE] text-white text-xs font-black px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-white" /> {hotel.stars}
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-xs text-gray-500 font-bold flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#7E22CE]" /> {hotel.location}
                  </div>
                  <h3 className="text-2xl font-black text-[#4C1D95]">{hotel.name}</h3>
                  <p className="text-xs text-[#581C87] font-medium leading-relaxed">{hotel.highlights}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-gray-100">
                  <span className="text-[11px] font-extrabold text-[#4C1D95] uppercase tracking-wider block">Resort Amenities:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {hotel.amenities.map((am, i) => (
                      <span key={i} className="text-[10px] bg-[#F3E8FF] text-[#4C1D95] px-2.5 py-1 rounded-full font-bold">
                        {am}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-extrabold text-gray-400 block">Starting From</span>
                    <span className="text-2xl font-black text-[#7E22CE]">${hotel.pricePerNight} <span className="text-xs font-normal text-gray-500">/ night</span></span>
                  </div>

                  <a 
                    href="tel:+18882109189" 
                    className="bg-[#7E22CE] hover:bg-[#581C87] text-white font-black text-xs px-6 py-3 rounded-2xl shadow-md transition-all flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" /> Book Resort
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
