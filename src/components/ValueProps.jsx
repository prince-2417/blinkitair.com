import React from 'react';
import { Shield, Sparkles, Clock, PhoneCall } from 'lucide-react';

export default function ValueProps() {
  const props = [
    {
      icon: <Shield className="w-8 h-8 text-[#2563EB]" />,
      tag: "Best Price Guarantee",
      title: "Lowest Flight Fares",
      desc: "Compare hundreds of airline ticket deals with zero hidden booking charges."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#2563EB]" />,
      tag: "Exclusive Agent Deals",
      title: "Unpublished Fare Discounts",
      desc: "Access phone-only unpublished airline seat inventory not found on public booking sites."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#2563EB]" />,
      tag: "24/7 Helpline",
      title: "Round-the-Clock Support",
      desc: "Speak directly with experienced Blinkit Air travel advisors anytime at +x-xxx-xxx-xxxx for booking help."
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-[#C084FC]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3E8FF] text-[#7E22CE] text-xs font-extrabold uppercase tracking-wider border border-[#C084FC]/30 shadow-sm">
            <PhoneCall className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Why Travelers Choose Blinkit Air</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#2563EB] tracking-tight">
            Book Flights with <span className="text-[#2563EB]">Absolute Confidence</span>
          </h2>
          <p className="text-black text-base font-semibold">
            Dedicated service, transparent pricing, and 24/7 phone assistance for smoother travel planning.
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
              <h3 className="text-xl font-extrabold text-[#2563EB] mb-3 group-hover:text-[#2563EB] transition-colors">
                {p.title}
              </h3>
              <p className="text-black text-sm leading-relaxed font-medium">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
