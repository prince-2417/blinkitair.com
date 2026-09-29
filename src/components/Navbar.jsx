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
            <span className="bg-[#2563EB] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
              <Sparkles className="w-3 h-3 text-white" /> EXCLUSIVE DEALS
            </span>
            <p className="text-black hidden sm:inline font-bold">Save up to 35% on international flights & resort packages!</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+x-xxx-xxx-xxxx" className="flex items-center gap-1.5 text-[#2563EB] font-black hover:text-[#4C1D95] transition-colors">
              <Phone className="w-3.5 h-3.5 animate-pulse text-[#2563EB]" />
              <span>24/7 Hotline: +x-xxx-xxx-xxxx</span>
            </a>
            <span className="text-[#C084FC] hidden md:inline">|</span>
            <a href="tel:+18777946004" className="hidden lg:flex items-center gap-1.5 text-black font-bold hover:text-[#2563EB] transition-colors">
              <Phone className="w-3 h-3 text-[#2563EB]" />
              <span>+x-xxx-xxx-xxxx</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-[#2563EB] flex items-center justify-center text-white shadow-md shadow-[#2563EB]/30 group-hover:scale-105 transition-transform">
              <Plane className="w-6 h-6 transform -rotate-45 text-white" />
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-[#4C1D95] font-sans">
                Blinkit<span className="text-[#2563EB]">Air</span>
              </span>
              <span className="block text-[10px] font-bold text-[#2563EB] uppercase tracking-widest -mt-1">
                Flights, Hotels & Holidays
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `font-bold text-sm transition-colors py-2 ${isActive ? 'text-[#2563EB] border-b-2 border-[#2563EB]' : 'text-[#4C1D95] hover:text-[#2563EB]'}`
              }
            >
              Home
            </NavLink>

            {/* Destinations Dropdown */}
            <div className="relative group" onMouseEnter={() => setDestDropdownOpen(true)} onMouseLeave={() => setDestDropdownOpen(false)}>
              <Link 
                to="/destinations"
                className="flex items-center gap-1 font-bold text-[#4C1D95] hover:text-[#2563EB] transition-colors py-2 text-sm"
              >
                Destinations <ChevronDown className="w-4 h-4 text-[#2563EB]" />
              </Link>

              {destDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-[#C084FC]/30 p-3 animate-fadeIn z-50">
                  <div className="flex items-center justify-between px-3 py-1 mb-1 border-b border-[#FAF5FF]">
                    <span className="text-[11px] font-extrabold text-[#4C1D95] uppercase flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#2563EB]" /> Featured destinations
                    </span>
                    <Link to="/destinations" className="text-[11px] text-[#2563EB] font-bold hover:underline">View All</Link>
                  </div>
                  {DESTINATIONS.slice(0, 5).map((dest) => (
                    <Link
                      key={dest.id}
                      to={`/destinations/${dest.id}`}
                      className="block px-3 py-2 rounded-xl text-xs text-[#4C1D95] hover:bg-[#F3E8FF] hover:text-[#2563EB] font-semibold transition-colors"
                    >
                      <div className="font-bold">{dest.name}</div>
                      <p className="text-[10px] text-black font-normal truncate">{dest.tagline}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Airlines Dropdown */}
            <div className="relative group" onMouseEnter={() => setAirlineDropdownOpen(true)} onMouseLeave={() => setAirlineDropdownOpen(false)}>
              <Link 
                to="/airlines"
                className="flex items-center gap-1 font-bold text-[#4C1D95] hover:text-[#2563EB] transition-colors py-2 text-sm"
              >
                Airlines <ChevronDown className="w-4 h-4 text-[#2563EB]" />
              </Link>

              {airlineDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-[#C084FC]/30 p-3 animate-fadeIn z-50">
                  <div className="flex items-center justify-between px-3 py-1 mb-1 border-b border-[#FAF5FF]">
                    <span className="text-[11px] font-extrabold text-[#4C1D95] uppercase flex items-center gap-1">
                      <Plane className="w-3 h-3 text-[#2563EB]" /> Airline Partners
                    </span>
                    <Link to="/airlines" className="text-[11px] text-[#2563EB] font-bold hover:underline">View All</Link>
                  </div>
                  {AIRLINES.slice(0, 5).map((airline) => (
                    <Link
                      key={airline.id}
                      to={`/airlines/${airline.id}`}
                      className="block px-3 py-2 rounded-xl text-xs text-[#4C1D95] hover:bg-[#F3E8FF] hover:text-[#2563EB] font-semibold transition-colors"
                    >
                      <div className="font-bold">{airline.name}</div>
                      <p className="text-[10px] text-black font-normal">{airline.code} • {airline.tagline}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/flights" className={({ isActive }) => `font-bold text-sm transition-colors py-2 ${isActive ? 'text-[#2563EB] border-b-2 border-[#2563EB]' : 'text-[#4C1D95] hover:text-[#2563EB]'}`}>
              Flight Deals
            </NavLink>

            <NavLink to="/car-rentals" className={({ isActive }) => `font-bold text-sm transition-colors py-2 ${isActive ? 'text-[#2563EB] border-b-2 border-[#2563EB]' : 'text-[#4C1D95] hover:text-[#2563EB]'}`}>
              Car Rentals
            </NavLink>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+x-xxx-xxx-xxxx" 
              className="flex items-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-extrabold text-sm px-5 py-3 rounded-full shadow-md hover:scale-[1.02] transition-all"
            >
              <Phone className="w-4 h-4 fill-white text-white" />
              <span>Call Specialist</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-[#F3E8FF] text-[#2563EB]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#2563EB]" /> : <Menu className="w-6 h-6 text-[#2563EB]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF5FF] border-b border-[#C084FC]/30 px-4 pt-3 pb-6 space-y-3">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-bold text-[#4C1D95] border-b border-[#C084FC]/20">Home</Link>
          <Link to="/destinations" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-bold text-[#4C1D95] border-b border-[#C084FC]/20">Destinations</Link>
          <Link to="/airlines" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-bold text-[#4C1D95] border-b border-[#C084FC]/20">Partner Airlines</Link>
          <Link to="/flights" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-bold text-[#4C1D95] border-b border-[#C084FC]/20">Flight Deals & Search</Link>
          <Link to="/car-rentals" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-bold text-[#4C1D95] border-b border-[#C084FC]/20">Car Rentals</Link>
          <a 
            href="tel:+x-xxx-xxx-xxxx" 
            className="flex items-center justify-center gap-2 bg-[#2563EB] text-white font-black py-3 rounded-2xl shadow-md mt-4"
          >
            <Phone className="w-5 h-5 text-white" />
            <span>Call +x-xxx-xxx-xxxx</span>
          </a>
        </div>
      )}
    </header>
  );
}
