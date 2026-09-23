import React, { useState } from 'react';
import { HOLIDAY_PACKAGES } from '../data/mockData';
import { Compass, CheckCircle, Phone, Sparkles, Calendar, Heart, MapPin, Send, ShieldCheck } from 'lucide-react';

export default function HolidayPackagesPage() {
  const [selectedPkg, setSelectedPkg] = useState(null);
  const [inquirySent, setInquirySent] = useState(false);

  return (
    <div className="bg-[#FAF5FF] min-h-screen pb-16">
      
      {/* FULL HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#F3E8FF] via-[#FAF5FF] to-[#F3E8FF] text-[#4C1D95] overflow-hidden py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#C084FC]/30">
        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#7E22CE] text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-md">
            <Compass className="w-4 h-4 text-white" /> Seychelles All-Inclusive Vacations
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#4C1D95] leading-none">
            Curated Seychelles <br className="hidden sm:inline" />
            <span className="text-[#7E22CE]">Holiday & Island Experiences</span>
          </h1>

          <p className="text-[#581C87] max-w-3xl mx-auto text-base sm:text-xl font-medium leading-relaxed">
            Complete vacation packages including roundtrip international flights, 5-star oceanfront resort stays, inter-island ferry transfers, and private guided excursions.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-4 text-xs font-bold text-[#7E22CE]">
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#C084FC]/30 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#7E22CE]" /> All Flights & Transfers Included
            </span>
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#C084FC]/30 shadow-sm">
              <Calendar className="w-4 h-4 text-[#7E22CE]" /> Flexible Travel Dates
            </span>
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#C084FC]/30 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#7E22CE]" /> 24/7 Dedicated Concierge
            </span>
          </div>
        </div>
      </section>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#C084FC]/30">
          <h2 className="text-2xl font-black text-[#4C1D95]">
            Featured All-Inclusive Packages
          </h2>
          <span className="text-xs text-gray-500 font-bold hidden sm:inline">Save Up to $600 Per Couple</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOLIDAY_PACKAGES.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#C084FC]/30 flex flex-col justify-between group">
              <div className="relative h-64 overflow-hidden">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-[#7E22CE] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase flex items-center gap-1 shadow-sm">
                  <Sparkles className="w-3 h-3 text-[#E9D5FF]" /> {pkg.badge}
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-[#7E22CE]">
                    <Calendar className="w-4 h-4" /> {pkg.duration}
                  </div>
                  <h3 className="text-2xl font-black text-[#4C1D95] leading-snug">{pkg.title}</h3>
                  
                  {/* Islands Included */}
                  <div className="text-xs font-semibold text-[#581C87] bg-[#F3E8FF] p-3 rounded-xl border border-[#C084FC]/20">
                    <span className="text-[#4C1D95] font-black block mb-1">Islands Covered:</span>
                    {pkg.destinationsIncluded.join(' • ')}
                  </div>

                  {/* Inclusions list */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[11px] font-extrabold text-[#4C1D95] uppercase tracking-wider block">Package Inclusions:</span>
                    {pkg.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#581C87] font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-[#7E22CE] flex-shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & Call CTA */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-extrabold text-gray-400 block line-through">${pkg.originalPrice}</span>
                    <span className="text-2xl font-black text-[#7E22CE]">${pkg.price} <span className="text-xs font-normal text-gray-500">/ person</span></span>
                  </div>

                  <a 
                    href="tel:+18882109189" 
                    className="bg-[#7E22CE] hover:bg-[#581C87] text-white font-black text-xs px-5 py-2.5 rounded-2xl shadow-md transition-all flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" /> Book Package
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
