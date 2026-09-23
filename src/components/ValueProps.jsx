import React from 'react';
import { Shield, Sparkles, Clock, PhoneCall } from 'lucide-react';

export default function ValueProps() {
  const props = [
    {
      icon: <Shield className="w-8 h-8 text-[#7E22CE]" />,
      tag: "Best Price Guarantee",
      title: "Lowest Flight & Resort Fares",
      desc: "Compare hundreds of airline ticket deals and resort package discounts with zero hidden booking charges."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#7E22CE]" />,
      tag: "Exclusive Agent Deals",
      title: "Unpublished Fare Discounts",
      desc: "Access phone-only unpublished airline seat inventory and resort upgrades not found on public booking sites."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#7E22CE]" />,
      tag: "24/7 Helpline",
      title: "Round-the-Clock Support",
      desc: "Speak directly with experienced Seychelles travel advisors anytime at +1-888-210-9189 for instant booking help."
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-[#C084FC]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3E8FF] text-[#7E22CE] text-xs font-extrabold uppercase tracking-wider border border-[#C084FC]/30 shadow-sm">
            <PhoneCall className="w-3.5 h-3.5 text-[#7E22CE]" />
            <span>Why Travelers Choose Blinkit Air</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#4C1D95] tracking-tight">
            Book Flights & Packages with <span className="text-[#7E22CE]">Absolute Confidence</span>
          </h2>
          <p className="text-[#581C87] text-base font-semibold">
            Dedicated service, transparent pricing, and 24/7 phone assistance for seamless island vacations.
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {props.map((p, idx) => (
            <div 
              key={idx}
              className="bg-[#FAF5FF] rounded-3xl p-8 border border-[#C084FC]/30 hover:border-[#7E22CE] hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#F3E8FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                {p.icon}
              </div>
              <span className="inline-block text-xs font-extrabold text-[#7E22CE] bg-[#F3E8FF] px-3 py-1 rounded-lg mb-3 border border-[#C084FC]/30">
                {p.tag}
              </span>
              <h3 className="text-xl font-extrabold text-[#4C1D95] mb-3 group-hover:text-[#7E22CE] transition-colors">
                {p.title}
              </h3>
              <p className="text-[#581C87] text-sm leading-relaxed font-medium">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
