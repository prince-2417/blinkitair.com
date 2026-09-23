import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DESTINATIONS, HOTELS } from '../data/mockData';
import { MapPin, Phone, Calendar, Compass, ArrowLeft, Star, CheckCircle, Send, Sparkles } from 'lucide-react';

export default function DestinationDetail() {
  const { id } = useParams();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', travelDate: '', guests: '2' });

  const dest = DESTINATIONS.find(d => d.id === id) || DESTINATIONS[0];
  const relatedResorts = HOTELS.slice(0, 2);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-[#FAF5FF] min-h-screen pb-16">
      {/* Hero Banner */}
      <div className="relative h-[450px] sm:h-[550px] w-full overflow-hidden">
        <img 
          src={dest.heroImage || dest.image} 
          alt={dest.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#4C1D95]/90 via-[#4C1D95]/40 to-transparent"></div>
        
        {/* Navigation Breadcrumb & Back Link */}
        <div className="absolute top-8 left-4 sm:left-8 right-4 max-w-7xl mx-auto flex justify-between items-center z-10">
          <Link 
            to="/destinations" 
            className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md text-[#4C1D95] px-4 py-2 rounded-full font-extrabold text-xs hover:bg-[#7E22CE] hover:text-white transition-all border border-white/30 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Destinations
          </Link>
          <span className="bg-[#7E22CE] text-white text-xs font-black px-3.5 py-1 rounded-full uppercase shadow-sm">
            {dest.category}
          </span>
        </div>

        {/* Hero Details */}
        <div className="absolute bottom-8 left-4 sm:left-8 right-4 max-w-7xl mx-auto text-white space-y-3">
          <div className="flex items-center gap-2 text-[#E9D5FF] font-bold text-sm">
            <MapPin className="w-4 h-4 text-[#E9D5FF]" /> Seychelles Archipelago
          </div>
          <h1 className="text-3xl sm:text-6xl font-black tracking-tight">{dest.name}</h1>
          <p className="text-[#E9D5FF] font-semibold text-base sm:text-xl max-w-2xl">{dest.tagline}</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Column: Comprehensive Information */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* Overview */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-[#C084FC]/30 space-y-4">
            <h2 className="text-2xl font-black text-[#4C1D95] border-b border-gray-100 pb-3">About {dest.name}</h2>
            <p className="text-[#581C87] leading-relaxed text-sm sm:text-base font-medium">
              {dest.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs font-semibold">
              <div className="bg-[#FAF5FF] p-4 rounded-2xl border border-[#C084FC]/30 space-y-1">
                <span className="text-[#7E22CE] font-extrabold block">Best Season to Visit</span>
                <span className="text-[#4C1D95] font-black text-sm">{dest.bestTime}</span>
              </div>
              <div className="bg-[#FAF5FF] p-4 rounded-2xl border border-[#C084FC]/30 space-y-1">
                <span className="text-[#7E22CE] font-extrabold block">Inter-island Connectivity</span>
                <span className="text-[#4C1D95] font-black text-sm">{dest.flightConnectivity}</span>
              </div>
            </div>
          </div>

          {/* Top Attractions */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-[#C084FC]/30 space-y-6">
            <h2 className="text-2xl font-black text-[#4C1D95] border-b border-gray-100 pb-3 flex items-center gap-2">
              <Compass className="w-6 h-6 text-[#7E22CE]" /> Top Must-Visit Attractions
            </h2>

            <div className="space-y-4">
              {dest.topAttractions.map((att, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF5FF] border border-[#C084FC]/20 hover:border-[#7E22CE] transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#7E22CE] text-white font-black flex items-center justify-center text-sm flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#4C1D95] text-base">{att.name}</h3>
                    <p className="text-xs text-[#581C87] font-medium mt-1">{att.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Stays & Resorts */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-[#4C1D95]">Recommended Resorts on {dest.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedResorts.map((hotel) => (
                <div key={hotel.id} className="bg-white rounded-3xl overflow-hidden shadow-md border border-[#C084FC]/30 flex flex-col justify-between">
                  <div className="h-44 overflow-hidden relative">
                    <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 bg-[#7E22CE] text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-sm">
                      {hotel.stars}
                    </span>
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="font-extrabold text-[#4C1D95] text-base">{hotel.name}</h3>
                    <p className="text-xs text-gray-500">{hotel.location}</p>
                    <div className="flex items-center justify-between pt-2 text-xs">
                      <span className="font-black text-[#7E22CE] text-sm">${hotel.pricePerNight} / night</span>
                      <a href="tel:+18882109189" className="bg-[#7E22CE] text-white font-bold px-3 py-1.5 rounded-xl hover:bg-[#581C87] transition-all">Book Fare</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Sidebar: Booking Inquiry & Helpline */}
        <div className="space-y-8">
          
          {/* 24/7 Hotline Callout */}
          <div className="bg-[#F3E8FF] text-[#4C1D95] rounded-3xl p-6 sm:p-8 shadow-xl border border-[#C084FC]/30 text-center space-y-4">
            <div className="w-12 h-12 bg-[#7E22CE] text-white rounded-full flex items-center justify-center mx-auto shadow-sm">
              <Phone className="w-6 h-6 animate-pulse" />
            </div>
            <h3 className="text-xl font-black text-[#4C1D95]">Instant Flight & Resort Booking</h3>
            <p className="text-xs text-[#581C87] font-medium">
              Get published & unpublished fare discounts to {dest.name} by calling our 24/7 travel desk.
            </p>
            <a 
              href="tel:+18882109189" 
              className="block w-full bg-[#7E22CE] hover:bg-[#581C87] text-white font-black text-sm py-3.5 rounded-2xl shadow-md transition-all"
            >
              Call Hotline: +1-888-210-9189
            </a>
            <div className="text-[11px] text-[#581C87] font-semibold">
              Alternative Line: <a href="tel:+18777946004" className="text-[#7E22CE] underline">+1-877-794-6004</a>
            </div>
          </div>

          {/* Custom Island Inquiry Form */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-[#C084FC]/30 space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#7E22CE]" />
              <h3 className="text-lg font-black text-[#4C1D95]">Request Custom Itinerary</h3>
            </div>
            <p className="text-xs text-[#581C87] font-medium">
              Fill out your travel details and our Seychelles experts will call you back within 15 minutes.
            </p>

            {formSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl p-4 text-center space-y-2">
                <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="font-extrabold text-sm">Inquiry Received!</h4>
                <p className="text-xs">Our specialist will contact you shortly with customized options for {dest.name}.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs font-semibold">
                <div>
                  <label className="text-[#4C1D95] block mb-1">Your Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7E22CE]"
                  />
                </div>
                <div>
                  <label className="text-[#4C1D95] block mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7E22CE]"
                  />
                </div>
                <div>
                  <label className="text-[#4C1D95] block mb-1">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="sarah@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7E22CE]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[#4C1D95] block mb-1">Travel Date</label>
                    <input 
                      type="date" 
                      required 
                      value={formData.travelDate}
                      onChange={(e) => setFormData({...formData, travelDate: e.target.value})}
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7E22CE]"
                    />
                  </div>
                  <div>
                    <label className="text-[#4C1D95] block mb-1">Travelers</label>
                    <select 
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: e.target.value})}
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7E22CE]"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3-4">3-4 People</option>
                      <option value="5+">5+ Group</option>
                    </select>
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-[#7E22CE] hover:bg-[#581C87] text-white font-black py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 mt-2 text-xs"
                >
                  <Send className="w-4 h-4" /> Send Request
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
