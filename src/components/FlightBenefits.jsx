import React from 'react';
import { BadgeDollarSign, CalendarDays, Headphones, Plane, Search, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: <BadgeDollarSign className="w-7 h-7 text-[#2563EB]" />,
    title: 'Best Fare Options',
    description: 'Compare competitive international fares and find an option that fits your budget.'
  },
  {
    icon: <CalendarDays className="w-7 h-7 text-[#2563EB]" />,
    title: 'Flexible Travel Planning',
    description: 'Choose dates and timings that work for you, with support for itinerary changes.'
  },
  {
    icon: <Headphones className="w-7 h-7 text-[#2563EB]" />,
    title: '24/7 Travel Support',
    description: 'Speak with our travel team whenever you need help before or after booking.'
  }
];

export default function FlightBenefits() {
  return (
    <section id="flight-benefits" className="py-20 bg-[#FAF5FF] border-t border-[#C084FC]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3E8FF] text-[#7E22CE] text-xs font-extrabold uppercase tracking-wider border border-[#C084FC]/30 shadow-sm">
            <Plane className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Travel Smarter</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#2563EB] tracking-tight">
            Everything You Need for <span className="text-[#7E22CE]">Better Flights</span>
          </h2>
          <p className="text-black text-base font-semibold">
            Simple flight search, dependable booking support, and expert help for every journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-white rounded-3xl p-8 shadow-lg border border-[#C084FC]/30 text-center space-y-4 hover:shadow-2xl transition-shadow">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-[#F3E8FF] flex items-center justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-black text-[#4C1D95]">{benefit.title}</h3>
              <p className="text-sm text-black font-medium leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#F3E8FF] rounded-3xl p-7 sm:p-9 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#C084FC]/30 shadow-lg">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="hidden sm:flex w-12 h-12 rounded-full bg-[#7E22CE] text-white items-center justify-center"><ShieldCheck className="w-6 h-6" /></div>
            <div>
              <h3 className="text-xl font-black text-[#4C1D95]">Ready to find your next flight?</h3>
              <p className="text-sm text-black font-medium">Search fares in minutes or call our travel specialists.</p>
            </div>
          </div>
          <Link to="/flights" className="inline-flex items-center gap-2 bg-[#7E22CE] hover:bg-[#581C87] text-white font-black px-6 py-3 rounded-2xl shadow-md transition-all">
            <Search className="w-4 h-4" /> Search Flights
          </Link>
        </div>
      </div>
    </section>
  );
}
