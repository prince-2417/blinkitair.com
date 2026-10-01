import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DESTINATIONS } from '../data/mockData';
import { MapPin, ArrowRight, Sun, Compass, Sparkles, Phone, Calendar } from 'lucide-react';

export default function Destinations() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Beaches & Relaxation', 'Nature & Wildlife', 'Culture & Shopping', 'Island Living', 'Diving & Marine'];

  const filteredDestinations = selectedCategory === 'All' 
    ? DESTINATIONS 
    : DESTINATIONS.filter(d => d.category === selectedCategory);

  return (
    <div className="bg-[#FAF5FF] min-h-screen pb-16">
      
      {/* FULL HERO SECTION */}
      <section className="relative text-[#4C1D95] overflow-hidden py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#C084FC]/30" style={{backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#7E22CE] text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-md">
            <Compass className="w-4 h-4 text-white animate-spin" /> Blinkit Air Destination Guides
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#4C1D95] leading-none">
            Discover Your Next <br className="hidden sm:inline" />
            <span className="text-[#7E22CE]">Next Journey</span>
          </h1>

          <p className="text-black max-w-3xl mx-auto text-base sm:text-xl font-medium leading-relaxed">
            Browse destination ideas and travel experiences to help you plan a trip that suits your style.
          </p>

          {/* Key Quick Stats */}
          <div className="flex flex-wrap justify-center items-center gap-6 pt-4 text-xs font-bold text-[#7E22CE]">
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#C084FC]/30 shadow-sm">
              <MapPin className="w-4 h-4 text-[#2563EB]" /> Destination Guides
            </span>
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#C084FC]/30 shadow-sm">
              <Sun className="w-4 h-4 text-[#2563EB]" /> Year-Round Sunshine
            </span>
          </div>

          {/* Category Filter Buttons in Hero */}
          <div className="pt-8">
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#7E22CE] mb-3">Filter destinations by experience</div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all shadow-sm ${
                    selectedCategory === cat
                      ? 'bg-[#7E22CE] text-white scale-105 shadow-md'
                      : 'bg-white text-[#4C1D95] hover:bg-[#F3E8FF] border border-[#C084FC]/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destination Cards Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#C084FC]/30">
          <h2 className="text-2xl font-black text-[#4C1D95]">
            Showing <span className="text-[#7E22CE]">{filteredDestinations.length}</span> Featured Destinations
          </h2>
          <span className="text-xs text-gray-500 font-bold hidden sm:inline">Updated for 2026 Travel</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <div key={dest.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#C084FC]/30 flex flex-col group">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <span className="absolute top-4 left-4 bg-[#7E22CE] text-white text-xs font-black px-3 py-1.5 rounded-full shadow-sm">
                  {dest.category}
                </span>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold text-[#E9D5FF] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#2563EB]" /> Destination guide
                  </span>
                  <h3 className="text-2xl font-extrabold">{dest.name}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <p className="text-xs text-black font-medium leading-relaxed">
                  {dest.description}
                </p>

                {/* Specs & Highlights */}
                <div className="space-y-2 pt-2 border-t border-gray-100 text-xs">
                  <div className="flex items-center justify-between text-[#4C1D95] font-semibold">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#2563EB]" /> Best Season:</span>
                    <span className="font-extrabold text-[#7E22CE]">{dest.bestTime.split(' ')[0]} {dest.bestTime.split(' ')[1]}</span>
                  </div>
                </div>

                {/* Highlights tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {dest.highlights.map((h, i) => (
                    <span key={i} className="text-[10px] bg-[#F3E8FF] text-[#4C1D95] px-2.5 py-1 rounded-full font-bold">
                      {h}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="pt-4 flex items-center justify-between border-t border-gray-100">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold block">Travel Budget</span>
                    <span className="text-base font-black text-[#4C1D95]">{dest.avgPrice}</span>
                  </div>
                  <Link
                    to={`/destinations/${dest.id}`}
                    className="inline-flex items-center gap-2 bg-[#7E22CE] hover:bg-[#581C87] text-white font-black text-xs px-5 py-2.5 rounded-2xl shadow-md transition-all group-hover:translate-x-1"
                  >
                    Explore Island <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Hotline CTA */}
      <div className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F3E8FF] text-[#4C1D95] rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-[#C084FC]/30">
          <div className="space-y-2 text-center md:text-left">
            <span className="bg-[#7E22CE] text-white text-xs font-black px-3 py-1 rounded-full inline-block">
              NEED A CUSTOM ITINERARY?
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#4C1D95]">Speak with a Blinkit Air Travel Specialist</h2>
            <p className="text-xs sm:text-sm text-black max-w-xl font-medium">
              Get help with flight options, car rentals and travel planning from our team, available 24/7.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:+x-xxx-xxx-xxxx" 
              className="flex items-center justify-center gap-2 bg-[#7E22CE] hover:bg-[#581C87] text-white font-black text-sm px-6 py-3.5 rounded-full shadow-lg transition-all"
            >
              <Phone className="w-4 h-4 text-[#2563EB]" />
              <span>Call +x-xxx-xxx-xxxx</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
