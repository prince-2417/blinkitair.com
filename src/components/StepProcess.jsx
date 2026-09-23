import React from 'react';
import { Search, PhoneCall, CheckCircle, ShieldCheck } from 'lucide-react';

export default function StepProcess() {
  const steps = [
    {
      num: "01",
      title: "Search & Compare",
      desc: "Enter your destination and dates in our live fare search engine or browse our recommended resort packages.",
      icon: <Search className="w-6 h-6 text-[#7E22CE]" />
    },
    {
      num: "02",
      title: "Speak with Specialist",
      desc: "Call our 24/7 hotline at +1-888-210-9189 to unlock unpublished agent discounts and phone-only flight specials.",
      icon: <PhoneCall className="w-6 h-6 text-[#7E22CE]" />
    },
    {
      num: "03",
      title: "Instant Ticket Issuance",
      desc: "Receive your official airline e-tickets, hotel booking vouchers, and 24/7 travel itinerary support directly.",
      icon: <CheckCircle className="w-6 h-6 text-[#7E22CE]" />
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-[#C084FC]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3E8FF] text-[#7E22CE] text-xs font-extrabold uppercase tracking-wider border border-[#C084FC]/30 shadow-sm">
            <span>Simple 3-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#4C1D95] tracking-tight">
            How to Book Your <span className="text-[#7E22CE]">Dream Vacation</span>
          </h2>
          <p className="text-[#581C87] text-base font-semibold">
            From search to instant confirmation, our travel team handles every detail seamlessly.
          </p>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((s, idx) => (
            <div 
              key={idx}
              className="bg-[#FAF5FF] rounded-3xl p-8 border border-[#C084FC]/30 hover:border-[#7E22CE] transition-all relative group shadow-sm hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#F3E8FF] flex items-center justify-center border border-[#C084FC]/30 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <span className="text-3xl font-black text-[#7E22CE]/30 group-hover:text-[#7E22CE] transition-colors">
                  {s.num}
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-[#4C1D95] mb-2 group-hover:text-[#7E22CE] transition-colors">
                {s.title}
              </h3>
              <p className="text-[#581C87] text-sm leading-relaxed font-medium">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-[#F3E8FF] border border-[#C084FC]/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <ShieldCheck className="w-8 h-8 text-[#7E22CE] flex-shrink-0" />
          <p className="text-xs sm:text-sm text-[#4C1D95] font-semibold leading-relaxed">
            <span className="font-extrabold text-[#4C1D95]">Instant Booking Confirmation:</span> Receive your official airline ticket details & e-boarding pass reference instantly by email and SMS right after booking approval.
          </p>
        </div>

      </div>
    </section>
  );
}
