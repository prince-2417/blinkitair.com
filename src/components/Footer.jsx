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
              <div className="w-10 h-10 rounded-2xl bg-[#2563EB] flex items-center justify-center text-white shadow-md">
                <Plane className="w-5 h-5 transform -rotate-45 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tight text-[#4C1D95]">
                Blinkit<span className="text-[#2563EB]">Air</span>
              </span>
            </Link>

            <p className="text-black text-xs leading-relaxed max-w-sm font-medium">
              Your place to explore flight deals, car rentals and 24/7 travel assistance. Book with confidence through Blinkit Air.
            </p>

            <div className="space-y-2 pt-2 text-xs font-semibold text-[#4C1D95]">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#2563EB]" />
                <a href="tel:+x-xxx-xxx-xxxx" className="hover:text-[#2563EB] transition-colors text-black">+x-xxx-xxx-xxxx (24/7 Hotline)</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#2563EB]" />
                <a href="tel:+18777946004" className="hover:text-[#2563EB] transition-colors text-black">+x-xxx-xxx-xxxx (Alternate Line)</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#2563EB]" />
                <span className="text-black">support@blinkitair.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#2563EB]" />
                <span className="text-black">Serving travelers worldwide</span>
              </div>
            </div>
          </div>

          {/* Offers Column */}
          <div className="space-y-3">
            <h4 className="text-[#4C1D95] font-extrabold text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><Link to="/flights" className="text-black hover:text-[#2563EB] transition-colors">Flight Deals & Search</Link></li>
              <li><Link to="/car-rentals" className="text-black hover:text-[#2563EB] transition-colors">Car Rentals</Link></li>
              <li><Link to="/airlines" className="text-black hover:text-[#2563EB] transition-colors">Partner Airlines</Link></li>
              <li><Link to="/destinations" className="text-black hover:text-[#2563EB] transition-colors">Destinations</Link></li>
            </ul>
          </div>

          {/* Legal Column 1 */}
          <div className="space-y-3">
            <h4 className="text-[#4C1D95] font-extrabold text-sm tracking-wider uppercase">Legal & Policies</h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><Link to="/privacy-policy" className="text-black hover:text-[#2563EB] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="text-black hover:text-[#2563EB] transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy" className="text-black hover:text-[#2563EB] transition-colors">Refund Policy</Link></li>
              <li><Link to="/cancellation-policy" className="text-black hover:text-[#2563EB] transition-colors">Cancellation Policy</Link></li>
              <li><Link to="/cookie-policy" className="text-black hover:text-[#2563EB] transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Legal Column 2 */}
          <div className="space-y-3">
            <h4 className="text-[#4C1D95] font-extrabold text-sm tracking-wider uppercase">Compliance & Notices</h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><Link to="/taxes-and-fees" className="text-black hover:text-[#2563EB] transition-colors">Taxes & Fees</Link></li>
              <li><Link to="/advertiser-policy" className="text-black hover:text-[#2563EB] transition-colors">Advertiser Policy</Link></li>
              <li><Link to="/ccpa-notice" className="text-black hover:text-[#2563EB] transition-colors">CCPA Notice</Link></li>
              <li><Link to="/gdpr-notice" className="text-black hover:text-[#2563EB] transition-colors">GDPR Notice</Link></li>
              <li><Link to="/contact" className="text-black hover:text-[#2563EB] transition-colors">Contact Support</Link></li>
            </ul>
          </div>

        </div>

        {/* Payment Icons Bar */}
        <div className="py-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#C084FC]/30 text-xs font-bold text-[#4C1D95]">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#2563EB]" />
            <span className="text-black font-bold">256-Bit SSL Encrypted Booking Checkout</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-white px-3 py-1 rounded-lg text-[#4C1D95] border border-[#C084FC]/40 shadow-sm font-black">VISA</span>
            <span className="bg-white px-3 py-1 rounded-lg text-[#4C1D95] border border-[#C084FC]/40 shadow-sm font-black">MasterCard</span>
            <span className="bg-white px-3 py-1 rounded-lg text-[#4C1D95] border border-[#C084FC]/40 shadow-sm font-black">AMEX</span>
            <span className="bg-white px-3 py-1 rounded-lg text-[#4C1D95] border border-[#C084FC]/40 shadow-sm font-black">Discover</span>
            <span className="bg-white px-3 py-1 rounded-lg text-[#4C1D95] border border-[#C084FC]/40 shadow-sm font-black">PayPal</span>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="pt-6 text-[11px] text-black leading-relaxed space-y-2 font-medium">
          <p className="text-black">
            <strong className="text-[#4C1D95]">Disclaimer:</strong> Blinkit Air is an independent travel marketplace and fare-comparison service. All trademarks, airline logos, brand names and registered product marks belong to their respective owners and are used only for identification.
          </p>
          <div className="flex items-center justify-between text-black pt-2 border-t border-[#C084FC]/30">
            <p className="text-black">© 2026 Blinkit Air. All rights reserved.</p>
            <span className="flex items-center gap-1 font-bold text-black">Made with <Heart className="w-3 h-3 text-[#2563EB] fill-[#2563EB]" /> for global travelers</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
