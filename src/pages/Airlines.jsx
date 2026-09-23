import React from 'react';
import { Link } from 'react-router-dom';
import { AIRLINES } from '../data/mockData';
import { Plane, Star, Luggage, ArrowRight, Phone, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

export default function Airlines() {
  return (
    <div className="bg-[#FAF5FF] min-h-screen pb-16">
      
      {/* FULL HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#F3E8FF] via-[#FAF5FF] to-[#F3E8FF] text-[#4C1D95] overflow-hidden py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#C084FC]/30">
        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#7E22CE] text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-md">
            <Plane className="w-4 h-4 text-white" /> Global Flight Partner Desk
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#4C1D95] leading-none">
            Fly to Seychelles with <br className="hidden sm:inline" />
            <span className="text-[#7E22CE]">World-Class Airlines</span>
          </h1>

          <p className="text-[#581C87] max-w-3xl mx-auto text-base sm:text-xl font-medium leading-relaxed">
            Compare baggage limits, cabin suites, and direct routes across our 5-star partner carriers connecting to Seychelles International Airport (SEZ).
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-4 text-xs font-bold text-[#7E22CE]">
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#C084FC]/30 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#7E22CE]" /> Unpublished Agent Fares
            </span>
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#C084FC]/30 shadow-sm">
              <Luggage className="w-4 h-4 text-[#7E22CE]" /> Free Checked Baggage Options
            </span>
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#C084FC]/30 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#7E22CE]" /> 24/7 Flight Support
            </span>
          </div>
        </div>
      </section>

      {/* Airline Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {AIRLINES.map((airline) => (
          <div key={airline.id} className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-[#C084FC]/30 flex flex-col justify-between space-y-6 group">
            
            {/* Top Bar */}
            <div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#7E22CE] text-white font-black flex items-center justify-center text-lg shadow-sm">
                    {airline.code}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#4C1D95] text-xl group-hover:text-[#7E22CE] transition-colors">
                      {airline.name}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium">{airline.tagline}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-[#F3E8FF] px-2.5 py-1 rounded-full text-xs font-bold text-[#7E22CE]">
                  <Star className="w-3.5 h-3.5 fill-[#7E22CE] text-[#7E22CE]" />
                  <span>{airline.rating}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-[#581C87] font-medium leading-relaxed mt-4">
                {airline.description}
              </p>

              {/* Hub & Baggage */}
              <div className="mt-4 space-y-2 text-xs font-semibold">
                <div className="bg-[#FAF5FF] p-3 rounded-xl border border-[#C084FC]/20">
                  <span className="text-gray-500 text-[11px] block">Main Hub Airport:</span>
                  <span className="text-[#4C1D95] font-black">{airline.hub}</span>
                </div>
                <div className="bg-[#FAF5FF] p-3 rounded-xl border border-[#C084FC]/20">
                  <span className="text-[#7E22CE] text-[11px] font-bold block flex items-center gap-1">
                    <Luggage className="w-3.5 h-3.5 text-[#7E22CE]" /> Baggage Allowance:
                  </span>
                  <span className="text-[#4C1D95] font-medium text-[11px]">{airline.baggagePolicy}</span>
                </div>
              </div>

              {/* Key Features */}
              <div className="mt-4 space-y-1.5">
                <span className="text-[11px] font-extrabold text-[#4C1D95] uppercase tracking-wider block">Inflight Highlights:</span>
                {airline.features.slice(0, 3).map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#581C87] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7E22CE] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-extrabold text-gray-400 block">Popular Routes</span>
                <span className="text-xs font-bold text-[#4C1D95]">{airline.popularRoutes.length} Direct/Connecting</span>
              </div>

              <Link
                to={`/airlines/${airline.id}`}
                className="inline-flex items-center gap-2 bg-[#7E22CE] hover:bg-[#581C87] text-white font-black text-xs px-5 py-2.5 rounded-2xl shadow-md transition-all group-hover:translate-x-1"
              >
                View Airline <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        ))}
      </div>

      {/* Airline Support Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-[#F3E8FF] text-[#4C1D95] rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-[#C084FC]/30">
          <div className="space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#7E22CE] font-extrabold text-xs">
              <ShieldCheck className="w-4 h-4 text-[#7E22CE]" /> OFFICIAL FARE TICKETING DESK
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#4C1D95]">Book Airline Tickets with Exclusive Agent Fares</h2>
            <p className="text-xs sm:text-sm text-[#581C87] max-w-xl font-medium">
              Our agent console accesses unpublished seat inventory across Air Seychelles, Emirates, Qatar Airways, and more.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:+18882109189" 
              className="flex items-center justify-center gap-2 bg-[#7E22CE] hover:bg-[#581C87] text-white font-black text-sm px-6 py-3.5 rounded-full shadow-lg transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Airline Specialist</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
