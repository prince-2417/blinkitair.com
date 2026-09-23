import React from 'react';
import { Palmtree, Calendar, Users, Phone, ArrowRight, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function HolidayPackages() {
  const packages = [
    {
      title: "Mahé Island Luxury Resort Escape",
      duration: "7 Days / 6 Nights",
      price: "$1,899",
      originalPrice: "$2,450",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      tag: "Best Seller",
      includes: ["5-Star Oceanfront Villa", "Daily Gourmet Breakfast & Dinner", "Inter-island Transfers Included", "24/7 Personal Concierge Support"],
      icon: <Palmtree className="w-8 h-8 text-[#7E22CE]" />
    },
    {
      title: "Praslin & La Digue Island Hopper",
      duration: "10 Days / 9 Nights",
      price: "$2,399",
      originalPrice: "$2,990",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      tag: "Popular Choice",
      includes: ["Boutique Beach Resort Stay", "Vallée de Mai UNESCO Forest Tour", "La Digue Bicycle Rental Included", "Sunset Sailing Catamaran Cruise"],
      icon: <Calendar className="w-8 h-8 text-[#7E22CE]" />
    },
    {
      title: "Seychelles Family Paradise Tour",
      duration: "8 Days / 7 Nights",
      price: "$1,650",
      originalPrice: "$2,100",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      tag: "Family Special",
      includes: ["2-Bedroom Oceanfront Suite", "Giant Tortoise Sanctuary Tour", "Glass Bottom Boat Kayaking", "Kids Club & Water Sports Access"],
      icon: <Users className="w-8 h-8 text-[#7E22CE]" />
    }
  ];

  return (
    <section id="packages" className="py-20 bg-[#FAF5FF] border-t border-[#C084FC]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3E8FF] text-[#7E22CE] text-xs font-extrabold uppercase tracking-wider border border-[#C084FC]/30 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#7E22CE]" />
            <span>All-Inclusive Vacation Bundles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#4C1D95] tracking-tight">
            Curated Seychelles <span className="text-[#7E22CE]">Holiday Packages</span>
          </h2>
          <p className="text-[#581C87] text-base font-semibold">
            Save up to $600 per couple when you bundle international flights with premier island resort stays.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#C084FC]/30 flex flex-col justify-between group"
            >
              {/* Image Banner */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                <span className="absolute top-4 left-4 text-xs font-black text-[#4C1D95] bg-[#F3E8FF] px-3 py-1 rounded-full shadow-md">
                  {pkg.tag}
                </span>

                <div className="absolute bottom-4 left-4 right-4 text-white flex justify-between items-end">
                  <div>
                    <span className="text-xs font-bold text-[#E9D5FF] block">{pkg.duration}</span>
                  </div>
                </div>
              </div>

              {/* Package Details */}
              <div className="p-6 sm:p-8 space-y-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black text-[#4C1D95] mb-3 group-hover:text-[#7E22CE] transition-colors">
                    {pkg.title}
                  </h3>

                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    <span className="text-xs font-extrabold uppercase text-[#7E22CE] tracking-wider block">Package Highlights:</span>
                    {pkg.includes.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#581C87] font-medium">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#7E22CE] flex-shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-400 line-through font-extrabold block">{pkg.originalPrice}</span>
                    <span className="text-3xl font-black text-[#7E22CE]">{pkg.price} <span className="text-xs font-normal text-[#581C87]">/person</span></span>
                  </div>

                  <a 
                    href="tel:+18882109189"
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[#4C1D95] bg-[#F3E8FF] hover:bg-[#7E22CE] hover:text-white px-4 py-2.5 rounded-xl transition-all shadow-sm"
                  >
                    <span>Book Package</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Package CTA Banner */}
        <div className="mt-16 bg-[#F3E8FF] text-[#4C1D95] rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#C084FC]/30">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-black uppercase text-[#7E22CE] tracking-wider">Tailor-Made Vacation Packages</span>
            <h3 className="text-2xl sm:text-3xl font-black">Want a Custom Island Hopping Itinerary?</h3>
            <p className="text-[#581C87] text-sm max-w-xl font-medium">
              Call our travel specialists at +1-888-210-9189 to customize resort stays, flight routes, and island transfers.
            </p>
          </div>
          <a 
            href="tel:+18882109189"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#7E22CE] hover:bg-[#581C87] text-white font-black px-7 py-3.5 rounded-2xl shadow-lg hover:scale-105 transition-all text-sm"
          >
            <Phone className="w-4 h-4" />
            <span>Call Specialist Now</span>
          </a>
        </div>

      </div>
    </section>
  );
}
