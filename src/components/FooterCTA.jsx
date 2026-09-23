import React from 'react';
import { Phone, Search, Sparkles } from 'lucide-react';

export default function FooterCTA() {
  return (
    <section className="bg-gradient-to-b from-[#FAF5FF] via-[#F3E8FF] to-[#FAF5FF] text-[#4C1D95] py-20 relative overflow-hidden border-t border-[#C084FC]/30">
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#7E22CE] text-xs font-black border border-[#C084FC]/40 shadow-sm">
          <Sparkles className="w-4 h-4 text-[#7E22CE]" />
          <span>Limited Time Phone-Only Rates</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-black text-[#4C1D95] tracking-tight">
          Start Planning Your Next <span className="text-[#7E22CE]">Trip Today</span>
        </h2>

        <p className="text-[#581C87] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-semibold">
          Unlock cheap flight deals, hotel discounts, and luxury vacation packages with 24/7 expert travel support.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a 
            href="#search" 
            className="inline-flex items-center gap-2 bg-[#7E22CE] hover:bg-[#581C87] text-white font-black text-base px-8 py-4 rounded-2xl shadow-xl shadow-[#7E22CE]/20 hover:scale-105 transition-all"
          >
            <Search className="w-5 h-5 stroke-[2.5]" />
            <span>Find Flight Deals</span>
          </a>
          <a 
            href="tel:+18882109189" 
            className="inline-flex items-center gap-2 bg-white border border-[#C084FC]/40 text-[#4C1D95] font-black text-base px-8 py-4 rounded-2xl hover:bg-[#F3E8FF] transition-all shadow-md"
          >
            <Phone className="w-5 h-5 text-[#7E22CE]" />
            <span>Call +1-888-210-9189</span>
          </a>
        </div>
      </div>
    </section>
  );
}
