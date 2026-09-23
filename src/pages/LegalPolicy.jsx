import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ShieldCheck, FileText, AlertCircle, RefreshCw, Cookie, Phone, Lock } from 'lucide-react';

export default function LegalPolicy() {
  const location = useLocation();
  
  const getInitialTab = () => {
    if (location.pathname.includes('terms')) return 'terms';
    if (location.pathname.includes('disclaimer')) return 'disclaimer';
    if (location.pathname.includes('cancellation')) return 'refund';
    return 'privacy';
  };

  const [activeTab, setActiveTab] = useState(getInitialTab());

  return (
    <div className="bg-[#FAF5FF] min-h-screen pb-16">
      
      {/* FULL HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#F3E8FF] via-[#FAF5FF] to-[#F3E8FF] text-[#4C1D95] overflow-hidden py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#C084FC]/30">
        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#7E22CE] text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-md">
            <ShieldCheck className="w-4 h-4 text-white" /> Trust, Safety & Legal Disclosure
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#4C1D95] leading-none">
            Consumer Rights & <br className="hidden sm:inline" />
            <span className="text-[#7E22CE]">Legal Policies</span>
          </h1>

          <p className="text-[#581C87] max-w-2xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
            Transparent terms of service, privacy protections, agency status disclosures, and 24-hour refund policies for all travel arrangements.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-2 text-xs font-bold text-[#7E22CE]">
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#C084FC]/30 shadow-sm">
              <Lock className="w-4 h-4 text-[#7E22CE]" /> 256-Bit SSL Data Encryption
            </span>
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#C084FC]/30 shadow-sm">
              <RefreshCw className="w-4 h-4 text-[#7E22CE]" /> 24h Flexible Cancellation
            </span>
          </div>

          {/* Integrated Policy Navigation Tabs */}
          <div className="pt-6">
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActiveTab('privacy')}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all shadow-sm ${
                  activeTab === 'privacy' ? 'bg-[#7E22CE] text-white scale-105' : 'bg-white text-[#4C1D95] border border-[#C084FC]/30'
                }`}
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setActiveTab('terms')}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all shadow-sm ${
                  activeTab === 'terms' ? 'bg-[#7E22CE] text-white scale-105' : 'bg-white text-[#4C1D95] border border-[#C084FC]/30'
                }`}
              >
                Terms & Conditions
              </button>
              <button
                onClick={() => setActiveTab('disclaimer')}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all shadow-sm ${
                  activeTab === 'disclaimer' ? 'bg-[#7E22CE] text-white scale-105' : 'bg-white text-[#4C1D95] border border-[#C084FC]/30'
                }`}
              >
                Legal Disclaimer
              </button>
              <button
                onClick={() => setActiveTab('refund')}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all shadow-sm ${
                  activeTab === 'refund' ? 'bg-[#7E22CE] text-white scale-105' : 'bg-white text-[#4C1D95] border border-[#C084FC]/30'
                }`}
              >
                Refund & Cancellation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Box */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-xl border border-[#C084FC]/30 space-y-8 text-sm text-[#581C87] font-medium leading-relaxed">
          
          {/* PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h2 className="text-2xl font-black text-[#4C1D95] flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-[#7E22CE]" /> Privacy Policy
                </h2>
                <p className="text-xs text-gray-400 mt-1">Last updated: January 2026</p>
              </div>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">1. Information Collection & Usage</h3>
                <p>
                  BlinkitAir / Seychelles Getaway collects personal information such as full name, email address, contact phone number, and passport details strictly for processing flight tickets, hotel vouchers, car rentals, and tour reservations.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">2. Data Security & Encryption</h3>
                <p>
                  All payment transactions and customer communication channels are protected using 256-bit SSL encryption. We do not store full credit card CVV codes or unencrypted financial credentials on our servers.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">3. Third-Party Partners</h3>
                <p>
                  To fulfill travel arrangements, necessary booking data is transmitted securely to airline operators, resort vendors, and ground transfer providers in Seychelles.
                </p>
              </section>
            </div>
          )}

          {/* TERMS & CONDITIONS */}
          {activeTab === 'terms' && (
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h2 className="text-2xl font-black text-[#4C1D95] flex items-center gap-2">
                  <FileText className="w-6 h-6 text-[#7E22CE]" /> Terms & Conditions
                </h2>
                <p className="text-xs text-gray-400 mt-1">Last updated: January 2026</p>
              </div>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">1. Agency Status & Booking Contract</h3>
                <p>
                  BlinkitAir / Seychelles Getaway acts as an independent travel marketplace and fare aggregator connecting travelers with airline carriers and island resorts. Individual ticket rules, baggage limits, and fare penalties are governed by the operating carrier.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">2. Fares & Price Accuracy</h3>
                <p>
                  Airfares and resort package rates are dynamic and subject to seat inventory availability until full payment is authorized and electronic tickets are issued.
                </p>
              </section>
            </div>
          )}

          {/* DISCLAIMER */}
          {activeTab === 'disclaimer' && (
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h2 className="text-2xl font-black text-[#4C1D95] flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-[#7E22CE]" /> Legal Disclaimer & Trademarks
                </h2>
                <p className="text-xs text-gray-400 mt-1">Last updated: January 2026</p>
              </div>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">1. Independent Service Provider</h3>
                <p>
                  BlinkitAir and seychellesgetaway.com operate independently and are not directly owned or operated by Air Seychelles, Emirates, Qatar Airways, or any specific resort chain. All company logos, brand names, and registered trademarks belong strictly to their respective owners and are displayed for identification purposes.
                </p>
              </section>
            </div>
          )}

          {/* REFUND & CANCELLATION */}
          {activeTab === 'refund' && (
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h2 className="text-2xl font-black text-[#4C1D95] flex items-center gap-2">
                  <RefreshCw className="w-6 h-6 text-[#7E22CE]" /> Refund & Cancellation Policy
                </h2>
                <p className="text-xs text-gray-400 mt-1">Last updated: January 2026</p>
              </div>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">1. 24-Hour Risk-Free Window</h3>
                <p>
                  Selected flight bookings made over the telephone hotline (+1-888-210-9189) qualify for a 24-hour grace period for full refund or corrections without processing penalties.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">2. Refund Processing Timelines</h3>
                <p>
                  Approved refunds are returned to the original payment method within 5 to 10 business days depending on bank clearance speeds.
                </p>
              </section>
            </div>
          )}

          {/* Hotline Bar */}
          <div className="pt-6 border-t border-gray-100 bg-[#F3E8FF] p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#C084FC]/30">
            <div className="text-xs text-[#4C1D95]">
              <strong className="block text-sm font-extrabold">Have Questions Regarding Legal or Booking Terms?</strong>
              <span>Our compliance & support desk is available 24 hours a day.</span>
            </div>
            <a 
              href="tel:+18882109189" 
              className="bg-[#7E22CE] text-white font-black text-xs px-5 py-3 rounded-xl hover:bg-[#581C87] transition-colors flex items-center gap-2 flex-shrink-0 shadow-sm"
            >
              <Phone className="w-4 h-4" /> Call +1-888-210-9189
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
