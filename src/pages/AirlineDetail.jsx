import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { AIRLINES } from '../data/mockData';
import { Plane, Star, Luggage, ArrowLeft, Phone, ShieldCheck, CheckCircle, Clock, MapPin } from 'lucide-react';

export default function AirlineDetail() {
  const { id } = useParams();
  const airline = AIRLINES.find(a => a.id === id) || AIRLINES[0];

  return (
    <div className="bg-[#FAF5FF] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Back Link */}
        <div>
          <Link 
            to="/airlines" 
            className="inline-flex items-center gap-2 bg-white text-[#4C1D95] px-4 py-2 rounded-full font-extrabold text-xs hover:bg-[#7E22CE] hover:text-white transition-all border border-[#C084FC]/30 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Airlines Overview
          </Link>
        </div>

        {/* Header Hero Card */}
        <div className="bg-[#F3E8FF] text-[#4C1D95] rounded-3xl p-8 sm:p-12 shadow-xl border border-[#C084FC]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-[#7E22CE] text-white font-black text-2xl flex items-center justify-center shadow-md">
                {airline.code}
              </div>
              <div>
                <span className="text-xs font-extrabold text-[#7E22CE] uppercase tracking-wider block">Official Airline Partner</span>
                <h1 className="text-3xl sm:text-5xl font-black text-[#4C1D95]">{airline.name}</h1>
              </div>
            </div>
            <p className="text-sm sm:text-base text-[#581C87] font-medium leading-relaxed">
              {airline.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold pt-2">
              <span className="bg-white px-3.5 py-1.5 rounded-full flex items-center gap-1.5 border border-[#C084FC]/30 shadow-sm">
                <Star className="w-4 h-4 text-[#7E22CE] fill-[#7E22CE]" /> {airline.rating} ({airline.reviewsCount} verified traveler reviews)
              </span>
              <span className="bg-white px-3.5 py-1.5 rounded-full flex items-center gap-1.5 border border-[#C084FC]/30 shadow-sm">
                <MapPin className="w-4 h-4 text-[#7E22CE]" /> Hub: {airline.hub}
              </span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#C084FC]/30 space-y-4 w-full md:w-80 flex-shrink-0 text-center shadow-md">
            <span className="text-xs font-extrabold text-[#7E22CE] uppercase block">Need Special Fare Booking?</span>
            <div className="text-2xl font-black text-[#4C1D95]">+1-888-210-9189</div>
            <p className="text-[11px] text-[#581C87]">Call our desk for phone-only agent discounts on {airline.name} flights.</p>
            <a 
              href="tel:+18882109189" 
              className="block w-full bg-[#7E22CE] hover:bg-[#581C87] text-white font-black py-3 rounded-xl shadow-md transition-all text-xs"
            >
              Call Specialist Now
            </a>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Popular Routes */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-[#C084FC]/30 space-y-6">
              <h2 className="text-2xl font-black text-[#4C1D95] border-b border-gray-100 pb-3 flex items-center gap-2">
                <Plane className="w-6 h-6 text-[#7E22CE]" /> Popular Routes & Fare Estimates
              </h2>

              <div className="space-y-4">
                {airline.popularRoutes.map((route, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-[#FAF5FF] border border-[#C084FC]/20 hover:border-[#7E22CE] transition-all gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 font-black text-[#4C1D95] text-base">
                        <span>{route.origin}</span>
                        <ArrowLeft className="w-4 h-4 text-[#7E22CE] transform rotate-180" />
                        <span>{route.destination}</span>
                      </div>
                      <div className="text-xs text-gray-500 font-medium flex items-center gap-3">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#7E22CE]" /> Duration: {route.duration}</span>
                        <span>•</span>
                        <span>Operated by {airline.name}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-200">
                      <div>
                        <span className="text-[10px] text-gray-400 font-extrabold uppercase block">Fares From</span>
                        <span className="text-xl font-black text-[#7E22CE]">{route.price}</span>
                      </div>
                      <Link 
                        to="/flights" 
                        className="bg-[#7E22CE] hover:bg-[#581C87] text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-colors"
                      >
                        Search Route
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Baggage & Cabin Classes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-6 shadow-md border border-[#C084FC]/30 space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-[#F3E8FF] text-[#7E22CE] flex items-center justify-center">
                  <Luggage className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-[#4C1D95]">Baggage Policy</h3>
                <p className="text-xs text-[#581C87] font-medium leading-relaxed">
                  {airline.baggagePolicy}
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-md border border-[#C084FC]/30 space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-[#F3E8FF] text-[#7E22CE] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-[#4C1D95]">Available Cabins</h3>
                <div className="space-y-1">
                  {airline.cabinClasses.map((cls, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-bold text-[#4C1D95]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#7E22CE]" />
                      <span>{cls}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-md border border-[#C084FC]/30 space-y-4">
              <h3 className="text-lg font-black text-[#4C1D95]">Why Book {airline.name} with Us?</h3>
              <ul className="space-y-3 text-xs text-[#581C87] font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#7E22CE] flex-shrink-0 mt-0.5" />
                  <span>Unpublished agent discounts up to 35% off.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#7E22CE] flex-shrink-0 mt-0.5" />
                  <span>Free seat selection and baggage upgrades on select fares.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#7E22CE] flex-shrink-0 mt-0.5" />
                  <span>24/7 flight monitoring and change assistance.</span>
                </li>
              </ul>
              <a 
                href="tel:+18882109189" 
                className="block w-full bg-[#7E22CE] hover:bg-[#581C87] text-white font-black text-center py-3.5 rounded-2xl shadow-md transition-all text-xs"
              >
                Call Hotline: +1-888-210-9189
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
