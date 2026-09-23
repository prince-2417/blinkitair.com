import React, { useState } from 'react';
import { CAR_RENTALS } from '../data/mockData';
import { Car, CheckCircle, ShieldCheck, MapPin, Phone, Send, Sparkles } from 'lucide-react';

export default function CarRentalsPage() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [resSuccess, setResSuccess] = useState(false);

  return (
    <div className="bg-[#FAF5FF] min-h-screen pb-16">
      
      {/* FULL HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#F3E8FF] via-[#FAF5FF] to-[#F3E8FF] text-[#4C1D95] overflow-hidden py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#C084FC]/30">
        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#7E22CE] text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-md">
            <Car className="w-4 h-4 text-white" /> Seychelles Island Car Rentals
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#4C1D95] leading-none">
            Explore Seychelles at <br className="hidden sm:inline" />
            <span className="text-[#7E22CE]">Your Own Island Pace</span>
          </h1>

          <p className="text-[#581C87] max-w-3xl mx-auto text-base sm:text-xl font-medium leading-relaxed">
            Automatic transmission cars, 4x4 compact SUVs, and soft-top convertibles with free airport delivery on Mahé & Praslin. Zero hidden drop-off fees.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-4 text-xs font-bold text-[#7E22CE]">
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#C084FC]/30 shadow-sm">
              <MapPin className="w-4 h-4 text-[#7E22CE]" /> Airport & Resort Delivery
            </span>
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#C084FC]/30 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#7E22CE]" /> Unlimited Mileage
            </span>
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#C084FC]/30 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#7E22CE]" /> Full CDW Insurance
            </span>
          </div>
        </div>
      </section>

      {/* Fleet Cards Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#C084FC]/30">
          <h2 className="text-2xl font-black text-[#4C1D95]">
            Available Island Rental Fleet
          </h2>
          <span className="text-xs text-gray-500 font-bold hidden sm:inline">Automatic Transmission Included</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CAR_RENTALS.map((car) => (
            <div key={car.id} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#C084FC]/30 flex flex-col justify-between group">
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 left-4 bg-[#7E22CE] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase shadow-sm">
                  {car.category}
                </span>
              </div>

              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-[#4C1D95]">{car.name}</h3>
                  <p className="text-xs text-gray-500 font-bold">{car.capacity} • {car.transmission}</p>
                  <div className="text-[11px] text-[#581C87] font-medium">
                    <strong>Available on:</strong> {car.islandAvailability.join(', ')}
                  </div>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-gray-100">
                  {car.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#581C87] font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-[#7E22CE] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-extrabold text-gray-400 block">Daily Rate</span>
                    <span className="text-2xl font-black text-[#7E22CE]">${car.pricePerDay} <span className="text-xs font-normal text-gray-500">/ day</span></span>
                  </div>

                  <button 
                    onClick={() => setSelectedCar(car)}
                    className="bg-[#7E22CE] hover:bg-[#581C87] text-white font-black text-xs px-5 py-2.5 rounded-2xl shadow-md transition-all"
                  >
                    Reserve Car
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reservation Modal */}
      {selectedCar && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-4 shadow-2xl relative border border-[#C084FC]/30">
            <button onClick={() => setSelectedCar(null)} className="absolute top-4 right-4 text-gray-400 font-black text-lg">✕</button>

            <h3 className="text-xl font-black text-[#4C1D95]">Reserve {selectedCar.name}</h3>
            <p className="text-xs text-[#581C87]">Rate: ${selectedCar.pricePerDay} / day with unlimited mileage.</p>

            {resSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl p-4 text-center space-y-2 text-xs">
                <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="font-extrabold">Car Reservation Request Sent!</h4>
                <p>Our team will confirm vehicle delivery details with you directly.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setResSuccess(true); }} className="space-y-3 text-xs">
                <input type="text" required placeholder="Full Name" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7E22CE]" />
                <input type="tel" required placeholder="Phone Number" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7E22CE]" />
                <select className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7E22CE]">
                  <option>Mahé Island Airport (SEZ)</option>
                  <option>Praslin Airport (PRI)</option>
                  <option>Hotel Delivery</option>
                </select>
                <button type="submit" className="w-full bg-[#7E22CE] hover:bg-[#581C87] text-white font-black py-3 rounded-xl shadow-md">
                  Confirm Reservation Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
