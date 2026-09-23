import React from 'react';
import { Car, MapPin, DollarSign, Layers } from 'lucide-react';

export default function CarRentals() {
  const cards = [
    {
      icon: <MapPin className="w-8 h-8 text-[#7E22CE]" />,
      title: "Flexible Pick-up & Drop-off",
      desc: "Choose convenient airport terminals, ferry harbors, or downtown hotel hubs with 24-hour drop-off flexibility."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#7E22CE]" />,
      title: "Clear Pricing, No Hidden Fees",
      desc: "Upfront rate quotes including comprehensive basic collision coverage, unlimited mileage, and local taxes included."
    },
    {
      icon: <Layers className="w-8 h-8 text-[#7E22CE]" />,
      title: "Variety of Vehicles & Flexible Dates",
      desc: "From compact fuel-efficient sedans and convertible sports cars to 4x4 island SUVs and luxury passenger vans."
    }
  ];

  return (
    <section className="py-20 bg-[#F3E8FF] text-[#4C1D95] relative overflow-hidden border-t border-[#C084FC]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#7E22CE] text-xs font-bold uppercase tracking-wider border border-[#C084FC]/40 shadow-sm">
            <Car className="w-3.5 h-3.5 text-[#7E22CE]" />
            <span>On-Demand Ground Mobility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#4C1D95] tracking-tight">
            Car Rental Deals to <span className="text-[#7E22CE]">Match Your Itinerary</span>
          </h2>
          <p className="text-[#581C87] text-base font-semibold">
            Rent cars from top global providers at competitive rates with transparent terms and flexible pick-up locations.
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-8 border border-[#C084FC]/30 hover:border-[#7E22CE] transition-all shadow-md hover:shadow-xl group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#F3E8FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-[#C084FC]/30">
                {c.icon}
              </div>
              <h3 className="text-xl font-extrabold text-[#4C1D95] mb-3 group-hover:text-[#7E22CE] transition-colors">
                {c.title}
              </h3>
              <p className="text-[#581C87] text-sm leading-relaxed font-medium">
                {c.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
