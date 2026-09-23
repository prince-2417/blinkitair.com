import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#F3E8FF] text-[#4C1D95] pt-16 pb-12 border-t border-[#C084FC]/30 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#C084FC]/30">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#7E22CE] flex items-center justify-center text-white shadow-md">
                <Plane className="w-5 h-5 transform -rotate-45" />
              </div>
              <span className="text-2xl font-black tracking-tight text-[#4C1D95]">
                Blinkit<span className="text-[#7E22CE]">Air</span>
              </span>
            </Link>

            <p className="text-[#581C87] text-xs leading-relaxed max-w-sm font-medium">
              Your premier gateway for compare flight deals, island vacation packages, luxury resort stays, and 24/7 expert travel assistance. Book with confidence and zero hidden markups.
            </p>

            <div className="space-y-2 pt-2 text-xs font-semibold text-[#581C87]">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#7E22CE]" />
                <a href="tel:+18882109189" className="hover:text-[#7E22CE] transition-colors">+1-888-210-9189 (24/7 Hotline)</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#7E22CE]" />
                <a href="tel:+18777946004" className="hover:text-[#7E22CE] transition-colors">+1-877-794-6004 (Alternate Line)</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#7E22CE]" />
                <span>support@blinkitair.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#7E22CE]" />
                <span>Global Seychelles Booking Headquarters</span>
              </div>
            </div>
          </div>

          {/* Offers Column */}
          <div className="space-y-3">
            <h4 className="text-[#4C1D95] font-extrabold text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><Link to="/flights" className="hover:text-[#7E22CE] transition-colors">Flight Deals & Search</Link></li>
              <li><Link to="/hotels" className="hover:text-[#7E22CE] transition-colors">Hotel Discounts</Link></li>
              <li><Link to="/packages" className="hover:text-[#7E22CE] transition-colors">Holiday Packages</Link></li>
              <li><Link to="/car-rentals" className="hover:text-[#7E22CE] transition-colors">Car Rentals</Link></li>
              <li><Link to="/airlines" className="hover:text-[#7E22CE] transition-colors">Partner Airlines</Link></li>
            </ul>
          </div>

          {/* Destinations Column */}
          <div className="space-y-3">
            <h4 className="text-[#4C1D95] font-extrabold text-sm tracking-wider uppercase">Destinations</h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><Link to="/destinations/la-digue" className="hover:text-[#7E22CE] transition-colors">La Digue Island</Link></li>
              <li><Link to="/destinations/praslin" className="hover:text-[#7E22CE] transition-colors">Praslin Island</Link></li>
              <li><Link to="/destinations/mahe" className="hover:text-[#7E22CE] transition-colors">Mahé Island</Link></li>
              <li><Link to="/destinations/silhouette" className="hover:text-[#7E22CE] transition-colors">Silhouette Island</Link></li>
              <li><Link to="/destinations" className="hover:text-[#7E22CE] transition-colors">All Destinations</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-3">
            <h4 className="text-[#4C1D95] font-extrabold text-sm tracking-wider uppercase">Company & Legal</h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><Link to="/contact" className="hover:text-[#7E22CE] transition-colors">Contact & Support</Link></li>
              <li><Link to="/blogs" className="hover:text-[#7E22CE] transition-colors">Travel Blog</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-[#7E22CE] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-[#7E22CE] transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/disclaimer" className="hover:text-[#7E22CE] transition-colors">Legal Disclaimer</Link></li>
            </ul>
          </div>

        </div>

        {/* Payment Icons Bar */}
        <div className="py-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#C084FC]/30 text-xs font-bold text-[#4C1D95]">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#7E22CE]" />
            <span>256-Bit SSL Encrypted Booking Checkout</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-white px-3 py-1 rounded-lg text-[#4C1D95] border border-[#C084FC]/40 shadow-sm">VISA</span>
            <span className="bg-white px-3 py-1 rounded-lg text-[#4C1D95] border border-[#C084FC]/40 shadow-sm">MasterCard</span>
            <span className="bg-white px-3 py-1 rounded-lg text-[#4C1D95] border border-[#C084FC]/40 shadow-sm">AMEX</span>
            <span className="bg-white px-3 py-1 rounded-lg text-[#4C1D95] border border-[#C084FC]/40 shadow-sm">Discover</span>
            <span className="bg-white px-3 py-1 rounded-lg text-[#4C1D95] border border-[#C084FC]/40 shadow-sm">PayPal</span>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="pt-6 text-[11px] text-[#581C87] leading-relaxed space-y-2 font-medium">
          <p>
            <strong className="text-[#4C1D95]">Disclaimer:</strong> BlinkitAir / Seychelles Getaway is an independent travel marketplace and fare comparison service. All trademarks, airline logos, brand names, and registered product marks mentioned are the property of their respective owners and used strictly for identification purposes.
          </p>
          <p className="flex items-center justify-between text-[#581C87]/80 pt-2 border-t border-[#C084FC]/30">
            <span>© 2026 BlinkitAir / Seychelles Getaway. All rights reserved.</span>
            <span className="flex items-center gap-1 font-bold">Made with <Heart className="w-3 h-3 text-[#7E22CE] fill-[#7E22CE]" /> for global travelers</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
