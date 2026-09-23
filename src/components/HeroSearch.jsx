import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faCalendar, faUsers, faPhone, faShieldHalved, faWandMagicSparkles, faMapMarkerAlt, faMagnifyingGlass, faHotel, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';

export default function HeroSearch() {
  const [activeTab, setActiveTab] = useState('flights');
  const [tripType, setTripType] = useState('roundtrip');
  const [origin, setOrigin] = useState('JFK - New York');
  const [destination, setDestination] = useState('SEZ - Seychelles');
  const [departDate, setDepartDate] = useState('2026-10-15');
  const [returnDate, setReturnDate] = useState('2026-10-25');
  const [travelers, setTravelers] = useState('2 Adults');
  const [cabinClass, setCabinClass] = useState('Economy');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/flights?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`;
  };

  return (
    <section id="search" className="relative text-[#4C1D95] py-12 sm:py-20 overflow-hidden border-b border-[#C084FC]/30" style={{backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-white/80 -z-10"></div>
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C084FC]/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7E22CE]/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Hero Layout: Text Content on LEFT, Search Bar on RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE: Text Content & Badges */}
          <div className="lg:col-span-5 order-1 text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#7E22CE] text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-md">
              <FontAwesomeIcon icon={faWandMagicSparkles} className="w-4 h-4 text-[#E9D5FF]" /> Seychelles Special Fare Console
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-[#4C1D95]">
              Save Big on Flights & <br />
              <span className="text-[#7E22CE] drop-shadow-sm">Seychelles Luxury Resorts</span>
            </h1>

            <p className="text-[#581C87] text-base sm:text-lg font-medium leading-relaxed">
              Compare published airline rates with unpublished phone-only agent discounts. Speak with our 24/7 Seychelles specialists for instant ticket reservations.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs font-extrabold text-[#7E22CE] pt-2">
              <span className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-full shadow-sm border border-[#C084FC]/30">
              <FontAwesomeIcon icon={faShieldHalved} className="w-4 h-4 text-[#7E22CE]" /> 100% Verified Fare Guarantee
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-full shadow-sm border border-[#C084FC]/30">
              <FontAwesomeIcon icon={faWandMagicSparkles} className="w-4 h-4 text-[#7E22CE]" /> Exclusive Agent Rates
              </span>
            </div>

            {/* Travel Images Grid */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80" alt="Beach" className="rounded-2xl h-24 w-full object-cover shadow-md" />
              <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=400&q=80" alt="Flight" className="rounded-2xl h-24 w-full object-cover shadow-md" />
              <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=400&q=80" alt="Resort" className="rounded-2xl h-24 w-full object-cover shadow-md" />
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Search Box */}
          <div className="lg:col-span-7 order-2">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl shadow-[#7E22CE]/10 border border-[#C084FC]/30 text-[#4C1D95]">
              
              {/* Tabs */}
              <div className="flex flex-wrap items-center justify-between border-b border-gray-100 pb-4 mb-6 gap-3">
                <div className="flex items-center gap-2 bg-[#FAF5FF] p-1.5 rounded-2xl border border-[#C084FC]/20">
                  <button
                    type="button"
                    onClick={() => setActiveTab('flights')}
                    className={`px-4 py-2.5 rounded-xl font-black text-xs transition-all ${
                      activeTab === 'flights' ? 'bg-[#7E22CE] text-white shadow-md' : 'text-[#4C1D95] hover:bg-[#F3E8FF]'
                    }`}
                  >
                    <FontAwesomeIcon icon={faPlane} className="mr-1.5" /> Flights
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('hotels')}
                    className={`px-4 py-2.5 rounded-xl font-black text-xs transition-all ${
                      activeTab === 'hotels' ? 'bg-[#7E22CE] text-white shadow-md' : 'text-[#4C1D95] hover:bg-[#F3E8FF]'
                    }`}
                  >
                    <FontAwesomeIcon icon={faHotel} className="mr-1.5" /> Hotels
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('packages')}
                    className={`px-4 py-2.5 rounded-xl font-black text-xs transition-all ${
                      activeTab === 'packages' ? 'bg-[#7E22CE] text-white shadow-md' : 'text-[#4C1D95] hover:bg-[#F3E8FF]'
                    }`}
                  >
                    <FontAwesomeIcon icon={faUmbrellaBeach} className="mr-1.5" /> Packages
                  </button>
                </div>

                {/* Trip type selector */}
                <div className="flex items-center gap-4 text-xs font-extrabold text-[#4C1D95]">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input 
                      type="radio" 
                      name="triptype" 
                      checked={tripType === 'roundtrip'} 
                      onChange={() => setTripType('roundtrip')}
                      className="accent-[#7E22CE]" 
                    />
                    <span>Round Trip</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input 
                      type="radio" 
                      name="triptype" 
                      checked={tripType === 'oneway'} 
                      onChange={() => setTripType('oneway')}
                      className="accent-[#7E22CE]" 
                    />
                    <span>One Way</span>
                  </label>
                </div>
              </div>

              {/* Search Form */}
              <form onSubmit={handleSearchSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Origin */}
                  <div className="bg-[#FAF5FF] p-3.5 rounded-2xl border border-[#C084FC]/30 hover:border-[#7E22CE] transition-all">
                    <label className="block text-[10px] font-extrabold text-[#7E22CE] uppercase tracking-wider mb-1">Departure From</label>
                    <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 text-[#7E22CE]" />
                      <input 
                        type="text" 
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        className="w-full bg-transparent font-bold text-xs text-[#4C1D95] focus:outline-none"
                        placeholder="Origin City"
                      />
                    </div>
                  </div>

                  {/* Destination */}
                  <div className="bg-[#FAF5FF] p-3.5 rounded-2xl border border-[#C084FC]/30 hover:border-[#7E22CE] transition-all">
                    <label className="block text-[10px] font-extrabold text-[#7E22CE] uppercase tracking-wider mb-1">Arrival Destination</label>
                    <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faPlane} className="w-4 h-4 text-[#7E22CE]" />
                      <input 
                        type="text" 
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full bg-transparent font-bold text-xs text-[#4C1D95] focus:outline-none"
                        placeholder="Destination"
                      />
                    </div>
                  </div>

                  {/* Depart Date */}
                  <div className="bg-[#FAF5FF] p-3.5 rounded-2xl border border-[#C084FC]/30 hover:border-[#7E22CE] transition-all">
                    <label className="block text-[10px] font-extrabold text-[#7E22CE] uppercase tracking-wider mb-1">Depart Date</label>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCalendar} className="w-4 h-4 text-[#7E22CE]" />
                      <input 
                        type="date" 
                        value={departDate}
                        onChange={(e) => setDepartDate(e.target.value)}
                        className="w-full bg-transparent font-bold text-xs text-[#4C1D95] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Return Date */}
                  <div className="bg-[#FAF5FF] p-3.5 rounded-2xl border border-[#C084FC]/30 hover:border-[#7E22CE] transition-all">
                    <label className="block text-[10px] font-extrabold text-[#7E22CE] uppercase tracking-wider mb-1">Return Date</label>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCalendar} className="w-4 h-4 text-[#7E22CE]" />
                      <input 
                        type="date" 
                        disabled={tripType === 'oneway'}
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="w-full bg-transparent font-bold text-xs text-[#4C1D95] focus:outline-none disabled:opacity-40"
                      />
                    </div>
                  </div>

                </div>

                {/* Travelers & Cabin + Submit button */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                  <div className="bg-[#FAF5FF] p-3.5 rounded-2xl border border-[#C084FC]/30">
                    <label className="block text-[10px] font-extrabold text-[#7E22CE] uppercase tracking-wider mb-1">Travelers & Passengers</label>
                    <select 
                      value={travelers} 
                      onChange={(e) => setTravelers(e.target.value)}
                      className="w-full bg-transparent font-bold text-xs text-[#4C1D95] focus:outline-none"
                    >
                      <option value="1 Adult">1 Adult</option>
                      <option value="2 Adults">2 Adults</option>
                      <option value="3 Adults">3 Adults</option>
                      <option value="4+ Family">4+ Family Group</option>
                    </select>
                  </div>

                  <div className="bg-[#FAF5FF] p-3.5 rounded-2xl border border-[#C084FC]/30">
                    <label className="block text-[10px] font-extrabold text-[#7E22CE] uppercase tracking-wider mb-1">Class</label>
                    <select 
                      value={cabinClass} 
                      onChange={(e) => setCabinClass(e.target.value)}
                      className="w-full bg-transparent font-bold text-xs text-[#4C1D95] focus:outline-none"
                    >
                      <option value="Economy">Economy</option>
                      <option value="Premium Economy">Premium Economy</option>
                      <option value="Business Class">Business Class</option>
                      <option value="First Class">First Class</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2 lg:col-span-1">
                    <button 
                      type="submit" 
                      className="w-full h-full bg-[#7E22CE] hover:bg-[#581C87] text-white font-black py-4 rounded-2xl shadow-xl shadow-[#7E22CE]/20 transition-all flex items-center justify-center gap-2 text-sm"
                    >
                      <FontAwesomeIcon icon={faMagnifyingGlass} className="w-4 h-4" /> Search Live Fares
                    </button>
                  </div>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
