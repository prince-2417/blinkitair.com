import React, { useState } from 'react';
import { FLIGHT_SEARCH_RESULTS, AIRLINES } from '../data/mockData';
import { Plane, Filter, Phone, Clock, Luggage, ChevronDown, ChevronUp, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Search } from 'lucide-react';

export default function SearchResults() {
  const [selectedStops, setSelectedStops] = useState('all');
  const [selectedAirline, setSelectedAirline] = useState('all');
  const [maxPrice, setMaxPrice] = useState(1000);
  const [expandedFlightId, setExpandedFlightId] = useState(null);
  const [bookingModalFlight, setBookingModalFlight] = useState(null);

  const filteredFlights = FLIGHT_SEARCH_RESULTS.filter((fl) => {
    const matchesStops = selectedStops === 'all' || 
                         (selectedStops === 'direct' && fl.stops === 0) || 
                         (selectedStops === '1stop' && fl.stops === 1);
    const matchesAirline = selectedAirline === 'all' || fl.airline === selectedAirline;
    const matchesPrice = fl.price <= maxPrice;

    return matchesStops && matchesAirline && matchesPrice;
  });

  return (
    <div className="bg-[#FAF5FF] min-h-screen pb-16">
      
      {/* FULL HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#F3E8FF] via-[#FAF5FF] to-[#F3E8FF] text-[#4C1D95] overflow-hidden py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#C084FC]/30">
        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#7E22CE] text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-md">
            <Plane className="w-4 h-4 text-white" /> Live Flight Comparison Engine
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#4C1D95] leading-none">
            Compare & Book Flights to <br className="hidden sm:inline" />
            <span className="text-[#7E22CE]">Seychelles International (SEZ)</span>
          </h1>

          <p className="text-[#581C87] max-w-3xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
            Real-time published airline fares combined with offline phone-only agent discounts across Air Seychelles, Emirates, Qatar Airways, and Etihad.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-2 text-xs font-bold text-[#7E22CE]">
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#C084FC]/30 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#7E22CE]" /> Guaranteed Lowest Fares
            </span>
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#C084FC]/30 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#7E22CE]" /> Instant E-Ticket Delivery
            </span>
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#C084FC]/30 shadow-sm">
              <Phone className="w-4 h-4 text-[#7E22CE]" /> 24/7 Agent Desk
            </span>
          </div>
        </div>
      </section>

      {/* Main Grid: Sidebar Filters + Flight Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left Sidebar Filters */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 shadow-md border border-[#C084FC]/30 space-y-6">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <h3 className="font-black text-[#4C1D95] text-base flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#7E22CE]" /> Filter Flights
              </h3>
              <button 
                onClick={() => { setSelectedStops('all'); setSelectedAirline('all'); setMaxPrice(1000); }}
                className="text-xs text-[#7E22CE] font-extrabold hover:underline"
              >
                Reset All
              </button>
            </div>

            {/* Stops Filter */}
            <div className="space-y-2">
              <label className="text-xs font-extrabold text-[#4C1D95] uppercase tracking-wider block">Stops</label>
              <div className="space-y-1.5 text-xs font-semibold text-[#581C87]">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input 
                    type="radio" 
                    name="stops" 
                    checked={selectedStops === 'all'} 
                    onChange={() => setSelectedStops('all')}
                    className="accent-[#7E22CE]"
                  />
                  <span>All Flights</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input 
                    type="radio" 
                    name="stops" 
                    checked={selectedStops === 'direct'} 
                    onChange={() => setSelectedStops('direct')}
                    className="accent-[#7E22CE]"
                  />
                  <span>Non-stop / Direct Flights</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input 
                    type="radio" 
                    name="stops" 
                    checked={selectedStops === '1stop'} 
                    onChange={() => setSelectedStops('1stop')}
                    className="accent-[#7E22CE]"
                  />
                  <span>1 Stop</span>
                </label>
              </div>
            </div>

            {/* Max Price Slider */}
            <div className="space-y-2 pt-2 border-t border-gray-100">
              <div className="flex justify-between text-xs font-bold text-[#4C1D95]">
                <span>Max Price:</span>
                <span className="text-[#7E22CE] font-extrabold">${maxPrice}</span>
              </div>
              <input 
                type="range" 
                min="400" 
                max="1000" 
                step="50"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#7E22CE]"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-bold">
                <span>$400</span>
                <span>$1,000</span>
              </div>
            </div>

            {/* Airline Filter */}
            <div className="space-y-2 pt-2 border-t border-gray-100">
              <label className="text-xs font-extrabold text-[#4C1D95] uppercase tracking-wider block">Airline Carrier</label>
              <select
                value={selectedAirline}
                onChange={(e) => setSelectedAirline(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs font-semibold text-[#4C1D95] focus:outline-none focus:border-[#7E22CE]"
              >
                <option value="all">All Partner Airlines</option>
                {AIRLINES.map(a => (
                  <option key={a.id} value={a.name}>{a.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* 24/7 Agent Advice Box */}
          <div className="bg-[#F3E8FF] text-[#4C1D95] rounded-3xl p-6 shadow-lg border border-[#C084FC]/30 space-y-3 text-center">
            <ShieldCheck className="w-8 h-8 text-[#7E22CE] mx-auto" />
            <h4 className="font-extrabold text-sm text-[#4C1D95]">Can't Find Your Preferred Schedule?</h4>
            <p className="text-xs text-[#581C87]">Call our desk to access off-web consolidation seats and flexible date changes.</p>
            <a 
              href="tel:+18882109189" 
              className="block w-full bg-[#7E22CE] text-white font-black text-xs py-3 rounded-xl hover:bg-[#581C87] transition-all shadow-md"
            >
              Call Specialist: +1-888-210-9189
            </a>
          </div>
        </div>

        {/* Right Content: Flight Results List */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between bg-white px-6 py-3.5 rounded-2xl border border-[#C084FC]/30 text-xs font-bold text-[#4C1D95]">
            <span>Showing <strong className="text-[#7E22CE]">{filteredFlights.length}</strong> flight deals matching your criteria</span>
            <span className="text-gray-500 font-normal hidden sm:inline">Prices include all taxes & fees</span>
          </div>

          {filteredFlights.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center space-y-4 border border-[#C084FC]/30">
              <Plane className="w-12 h-12 text-gray-300 mx-auto" />
              <h3 className="text-xl font-black text-[#4C1D95]">No Flights Found</h3>
              <p className="text-xs text-[#581C87] max-w-md mx-auto font-medium">
                Try increasing your maximum price filter or selecting "All Flights" under stops.
              </p>
              <button 
                onClick={() => { setSelectedStops('all'); setSelectedAirline('all'); setMaxPrice(1000); }}
                className="bg-[#7E22CE] text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow-sm"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredFlights.map((fl) => (
              <div key={fl.id} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-[#C084FC]/30">
                {/* Badge line */}
                <div className="bg-[#FAF5FF] border-b border-[#C084FC]/20 px-6 py-2.5 flex items-center justify-between text-xs">
                  <span className="bg-[#7E22CE] text-white text-[10px] font-black px-3 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                    <Sparkles className="w-3 h-3 text-[#E9D5FF]" /> {fl.badge}
                  </span>
                  <span className="text-xs font-bold text-[#7E22CE]">Only {fl.seatsLeft} seats left at this rate!</span>
                </div>

                {/* Main Flight Row */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                  
                  {/* Airline Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#7E22CE] text-white font-black flex items-center justify-center text-sm shadow-sm flex-shrink-0">
                      {fl.airlineCode}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#4C1D95] text-base">{fl.airline}</h4>
                      <span className="text-xs text-gray-500 font-medium">{fl.flightNumber} • {fl.cabin}</span>
                    </div>
                  </div>

                  {/* Flight Times & Duration */}
                  <div className="md:col-span-2 flex items-center justify-between text-center space-x-2">
                    <div>
                      <div className="text-xl font-black text-[#4C1D95]">{fl.departTime}</div>
                      <div className="text-xs font-bold text-gray-500">{fl.originCity} ({fl.origin})</div>
                    </div>

                    <div className="flex-grow px-4 space-y-1">
                      <div className="text-[11px] font-extrabold text-[#7E22CE] flex items-center justify-center gap-1">
                        <Clock className="w-3 h-3" /> {fl.duration}
                      </div>
                      <div className="relative flex items-center justify-center">
                        <div className="w-full h-0.5 bg-gray-200"></div>
                        <Plane className="w-4 h-4 text-[#7E22CE] absolute bg-white px-0.5" />
                      </div>
                      <div className="text-[10px] font-bold text-gray-500">{fl.stopDetails}</div>
                    </div>

                    <div>
                      <div className="text-xl font-black text-[#4C1D95]">{fl.arrivalTime}</div>
                      <div className="text-xs font-bold text-gray-500">{fl.destCity} ({fl.destination})</div>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="flex flex-row md:flex-col items-center md:items-end justify-between border-t md:border-t-0 pt-4 md:pt-0 border-gray-100">
                    <div className="text-left md:text-right">
                      <span className="text-[10px] text-gray-400 font-extrabold uppercase block">Total Price</span>
                      <span className="text-3xl font-black text-[#4C1D95]">${fl.price}</span>
                      <span className="text-[10px] text-emerald-600 font-bold block">Included Taxes & Fees</span>
                    </div>

                    <button 
                      onClick={() => setBookingModalFlight(fl)}
                      className="bg-[#7E22CE] hover:bg-[#581C87] text-white font-black text-xs px-6 py-3 rounded-2xl shadow-md transition-all mt-2"
                    >
                      Book Ticket
                    </button>
                  </div>
                </div>

                {/* Bottom Toggle for Details */}
                <div className="bg-[#FAF5FF] px-6 py-2.5 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#4C1D95]">
                  <div className="flex items-center gap-4 text-[#581C87]">
                    <span className="flex items-center gap-1.5"><Luggage className="w-3.5 h-3.5 text-[#7E22CE]" /> {fl.baggage}</span>
                  </div>

                  <button 
                    onClick={() => setExpandedFlightId(expandedFlightId === fl.id ? null : fl.id)}
                    className="flex items-center gap-1 text-[#7E22CE] hover:underline"
                  >
                    {expandedFlightId === fl.id ? (
                      <>Hide Details <ChevronUp className="w-4 h-4" /></>
                    ) : (
                      <>Flight Details <ChevronDown className="w-4 h-4" /></>
                    )}
                  </button>
                </div>

                {/* Expanded Details Panel */}
                {expandedFlightId === fl.id && (
                  <div className="bg-white p-6 border-t border-[#C084FC]/30 space-y-4 text-xs">
                    <h5 className="font-black text-[#4C1D95] text-sm">Full Itinerary Breakdown</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-[#FAF5FF] p-4 rounded-2xl space-y-1 border border-[#C084FC]/20">
                        <span className="font-extrabold text-[#7E22CE] block">Departure Flight</span>
                        <p className="font-medium text-[#4C1D95]">{fl.originCity} ({fl.origin}) to {fl.destCity} ({fl.destination})</p>
                        <p className="text-[11px] text-[#581C87]">Scheduled: {fl.departTime} - {fl.arrivalTime}</p>
                      </div>
                      <div className="bg-[#FAF5FF] p-4 rounded-2xl space-y-1 border border-[#C084FC]/20">
                        <span className="font-extrabold text-[#7E22CE] block">Baggage Rules</span>
                        <p className="font-medium text-[#4C1D95]">{fl.baggage}</p>
                        <p className="text-[11px] text-[#581C87]">Personal item included</p>
                      </div>
                      <div className="bg-[#FAF5FF] p-4 rounded-2xl space-y-1 border border-[#C084FC]/20">
                        <span className="font-extrabold text-[#7E22CE] block">Fare Conditions</span>
                        <p className="font-medium text-[#4C1D95]">Standard Economy Ticket</p>
                        <p className="text-[11px] text-[#581C87]">24h risk-free cancellation available via hotline</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Booking Modal */}
      {bookingModalFlight && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative border border-[#C084FC]/30">
            <button 
              onClick={() => setBookingModalFlight(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black font-black text-lg"
            >
              ✕
            </button>

            <div className="space-y-2 text-center">
              <div className="w-12 h-12 bg-[#F3E8FF] text-[#7E22CE] rounded-full flex items-center justify-center mx-auto border border-[#C084FC]/30">
                <Phone className="w-6 h-6 animate-pulse" />
              </div>
              <h3 className="text-2xl font-black text-[#4C1D95]">Confirm Flight Fare: ${bookingModalFlight.price}</h3>
              <p className="text-xs text-[#581C87] font-medium">
                {bookingModalFlight.airline} ({bookingModalFlight.flightNumber}) • {bookingModalFlight.origin} to {bookingModalFlight.destination}
              </p>
            </div>

            <div className="bg-[#FAF5FF] p-4 rounded-2xl space-y-2 text-xs font-semibold text-[#4C1D95] border border-[#C084FC]/20">
              <div className="flex justify-between">
                <span>Base Airfare:</span>
                <span>${bookingModalFlight.price - 45}</span>
              </div>
              <div className="flex justify-between">
                <span>Airport Taxes & Fuel Surcharge:</span>
                <span>$45</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-2 font-black text-sm text-[#7E22CE]">
                <span>Total Amount:</span>
                <span>${bookingModalFlight.price}</span>
              </div>
            </div>

            <div className="space-y-3">
              <a 
                href="tel:+18882109189" 
                className="block w-full bg-[#7E22CE] hover:bg-[#581C87] text-white font-black text-center py-4 rounded-2xl shadow-lg text-sm transition-all"
              >
                Call to Reserve Ticket: +1-888-210-9189
              </a>
              <a 
                href="tel:+18777946004" 
                className="block w-full bg-[#F3E8FF] hover:bg-[#7E22CE] text-[#4C1D95] hover:text-white font-extrabold text-center py-3 rounded-2xl text-xs transition-all border border-[#C084FC]/30"
              >
                Alternate Line: +1-877-794-6004
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
