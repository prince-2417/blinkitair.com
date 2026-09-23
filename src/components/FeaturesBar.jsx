import React from 'react';
import { Plane, Zap, CalendarDays, TrendingDown } from 'lucide-react';

export default function FeaturesBar() {
  const items = [
    {
      icon: <Plane className="w-6 h-6 text-[#7E22CE]" />,
      title: "500+ Partner Airlines",
      desc: "Full coverage across major airlines & budget carriers"
    },
    {
      icon: <Zap className="w-6 h-6 text-[#7E22CE]" />,
      title: "Instant Confirmation",
      desc: "Immediate e-ticket issuance upon booking approval"
    },
    {
      icon: <CalendarDays className="w-6 h-6 text-[#7E22CE]" />,
      title: "Flexible Dates Options",
      desc: "Compare low fares across adjacent travel days"
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-[#7E22CE]" />,
      title: "Low-Fare Finder",
      desc: "Automated engine highlighting top budget choices"
    }
  ];

  return (
    <section className="bg-[#F3E8FF] text-[#4C1D95] py-14 border-y border-[#C084FC]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#4C1D95] mb-2">
            Book Cheap Flights <span className="text-[#7E22CE]">Worldwide</span>
          </h2>
          <p className="text-[#581C87] text-sm font-semibold">
            Compare airfares, find booking guidance, and plan your destination routes with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white border border-[#C084FC]/30 rounded-2xl p-5 flex items-start gap-4 hover:border-[#7E22CE] hover:shadow-lg transition-all shadow-sm"
            >
              <div className="p-3 bg-[#F3E8FF] rounded-xl flex-shrink-0 border border-[#C084FC]/20">
                {item.icon}
              </div>
              <div>
                <h3 className="font-extrabold text-[#4C1D95] text-base mb-1">{item.title}</h3>
                <p className="text-[#581C87] text-xs leading-relaxed font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
