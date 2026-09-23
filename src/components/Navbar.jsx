import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Plane, Menu, X, ChevronDown, Sparkles, MapPin, Compass } from 'lucide-react';
import { DESTINATIONS, AIRLINES } from '../data/mockData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destDropdownOpen, setDestDropdownOpen] = useState(false);
  const [airlineDropdownOpen, setAirlineDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-[#C084FC]/30">
      {/* Top Banner Line */}
      <div className="bg-[#F3E8FF] text-[#4C1D95] text-xs py-2.5 px-4 border-b border-[#C084FC]/20 font-semibold">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="bg-[#7E22CE] text-white text-[10px] font-black px-3 py-1 rounded-full flex items-center shadow-sm">
              EXCLUSIVE DEALS
            </span>
            <span className="text-[#581C87] hidden sm:inline font-bold">Save up to 35% on international flights & resort packages!</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+18882109189" className="flex items-center gap-1.5 text-[#7E22CE] font-black hover:text-[#581C87] transition-colors whitespace-nowrap">
              <Phone className="w-3.5 h-3.5 animate-pulse text-[#7E22CE]" />
              <span>24/7 Hotline: +1-888-210-9189</span>
            </a>
            <span className="text-[#C084FC] hidden md:inline">|</span>
            <a href="tel:+18777946004" className="hidden lg:flex items-center gap-1.5 text-[#581C87] font-bold hover:text-[#7E22CE] transition-colors">
              <span>+1-877-794-6004</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-[#7E22CE] flex items-center justify-center text-white shadow-md shadow-[#7E22CE]/30 group-hover:scale-105 transition-transform">
              <Plane className="w-6 h-6 transform -rotate-45" />
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-[#4C1D95] font-sans">
                Blinkit<span className="text-[#7E22CE]">Air</span>
              </span>
              <span className="block text-[10px] font-bold text-[#7E22CE] uppercase tracking-widest -mt-1">
                Seychelles & Global Vacations
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">

            {/* Destinations Dropdown */}
            <div className="relative group" onMouseEnter={() => setDestDropdownOpen(true)} onMouseLeave={() => setDestDropdownOpen(false)}>
              <Link 
                to="/destinations"
                className="flex items-center gap-1 font-bold text-[#4C1D95] hover:text-[#7E22CE] transition-colors py-2 text-sm"
              >
                Destinations <ChevronDown className="w-4 h-4 text-[#7E22CE]" />
              </Link>

              {destDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-[#C084FC]/30 p-3 animate-fadeIn z-50">
                  <div className="flex items-center justify-between px-3 py-1 mb-1 border-b border-[#FAF5FF]">
                    <span className="text-[11px] font-extrabold text-[#4C1D95] uppercase flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#7E22CE]" /> Seychelles Islands
                    </span>
                    <Link to="/destinations" className="text-[11px] text-[#7E22CE] font-bold hover:underline">View All</Link>
                  </div>
                  {DESTINATIONS.slice(0, 5).map((dest) => (
                    <Link
                      key={dest.id}
                      to={`/destinations/${dest.id}`}
                      className="block px-3 py-2 rounded-xl text-xs text-[#4C1D95] hover:bg-[#F3E8FF] hover:text-[#7E22CE] font-semibold transition-colors"
                    >
                      <div className="font-bold">{dest.name}</div>
                      <div className="text-[10px] text-gray-500 font-normal truncate">{dest.tagline}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/flights" className={({ isActive }) => `font-bold text-sm transition-colors py-2 ${isActive ? 'text-[#7E22CE] border-b-2 border-[#7E22CE]' : 'text-[#4C1D95] hover:text-[#7E22CE]'}`}>
              Flights
            </NavLink>

            <NavLink to="/hotels" className={({ isActive }) => `font-bold text-sm transition-colors py-2 ${isActive ? 'text-[#7E22CE] border-b-2 border-[#7E22CE]' : 'text-[#4C1D95] hover:text-[#7E22CE]'}`}>
              Hotels
            </NavLink>

            <NavLink to="/car-rentals" className={({ isActive }) => `font-bold text-sm transition-colors py-2 ${isActive ? 'text-[#7E22CE] border-b-2 border-[#7E22CE]' : 'text-[#4C1D95] hover:text-[#7E22CE]'}`}>
              Car
            </NavLink>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+18882109189" 
              className="flex items-center gap-2 bg-[#7E22CE] hover:bg-[#581C87] text-white font-extrabold text-sm px-5 py-3 rounded-full shadow-md hover:scale-[1.02] transition-all"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call Specialist</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hidden p-2.5 rounded-xl bg-[#F3E8FF] text-[#7E22CE]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Tabs Bar */}
      <div className="md:hidden flex items-center gap-1 overflow-x-auto no-scrollbar border-t border-[#C084FC]/20 px-2 py-2">
        <NavLink to="/destinations" className={({ isActive }) => `flex-shrink-0 px-3 py-1.5 rounded-xl font-bold text-xs transition-all ${isActive ? 'bg-[#7E22CE] text-white' : 'text-[#4C1D95] hover:bg-[#F3E8FF]'}`}>Destinations</NavLink>
        <NavLink to="/flights" className={({ isActive }) => `flex-shrink-0 px-3 py-1.5 rounded-xl font-bold text-xs transition-all ${isActive ? 'bg-[#7E22CE] text-white' : 'text-[#4C1D95] hover:bg-[#F3E8FF]'}`}>Flights</NavLink>
        <NavLink to="/hotels" className={({ isActive }) => `flex-shrink-0 px-3 py-1.5 rounded-xl font-bold text-xs transition-all ${isActive ? 'bg-[#7E22CE] text-white' : 'text-[#4C1D95] hover:bg-[#F3E8FF]'}`}>Hotels</NavLink>
        <NavLink to="/car-rentals" className={({ isActive }) => `flex-shrink-0 px-3 py-1.5 rounded-xl font-bold text-xs transition-all ${isActive ? 'bg-[#7E22CE] text-white' : 'text-[#4C1D95] hover:bg-[#F3E8FF]'}`}>Car</NavLink>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF5FF] border-b border-[#C084FC]/30 px-4 pt-3 pb-6 space-y-3">
          <Link to="/destinations" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-bold text-[#4C1D95] border-b border-[#C084FC]/20">Destinations</Link>
          <Link to="/flights" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-bold text-[#4C1D95] border-b border-[#C084FC]/20">Flights</Link>
          <Link to="/hotels" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-bold text-[#4C1D95] border-b border-[#C084FC]/20">Hotels</Link>
          <Link to="/car-rentals" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-bold text-[#4C1D95] border-b border-[#C084FC]/20">Car</Link>
          <a 
            href="tel:+18882109189" 
            className="flex items-center justify-center gap-2 bg-[#7E22CE] text-white font-black py-3 rounded-2xl shadow-md mt-4"
          >
            <Phone className="w-5 h-5" />
            <span>Call +1-888-210-9189</span>
          </a>
        </div>
      )}
    </header>
  );
}
