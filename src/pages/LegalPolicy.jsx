import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ShieldCheck, FileText, AlertCircle, RefreshCw, Cookie, Phone, Lock, DollarSign, Megaphone, UserCheck, Globe } from 'lucide-react';

export default function LegalPolicy() {
  const location = useLocation();
  
  const getInitialTab = () => {
    const path = location.pathname;
    if (path.includes('terms')) return 'terms';
    if (path.includes('refund')) return 'refund';
    if (path.includes('cancellation')) return 'cancellation';
    if (path.includes('cookie')) return 'cookie';
    if (path.includes('taxes')) return 'taxes';
    if (path.includes('advertiser')) return 'advertiser';
    if (path.includes('ccpa')) return 'ccpa';
    if (path.includes('gdpr')) return 'gdpr';
    return 'privacy';
  };

  const [activeTab, setActiveTab] = useState(getInitialTab());

  useEffect(() => {
    setActiveTab(getInitialTab());
  }, [location.pathname]);

  return (
    <div className="bg-[#FAF5FF] min-h-screen pb-16">
      
      {/* FULL HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#F3E8FF] via-[#FAF5FF] to-[#F3E8FF] text-[#4C1D95] overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#C084FC]/30">
        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-md">
            <ShieldCheck className="w-4 h-4 text-white" /> Trust, Safety & Legal Disclosures
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#4C1D95] leading-none">
            Legal Policies & <br className="hidden sm:inline" />
            <span className="text-[#2563EB]">Consumer Protection Notices</span>
          </h1>

          <p className="text-black max-w-3xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
            Transparent terms of service, privacy protections, agency disclosures, tax policies, CCPA, and GDPR compliance standards.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-2 text-xs font-bold text-[#2563EB]">
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#C084FC]/30 shadow-sm">
              <Lock className="w-4 h-4 text-[#2563EB]" /> 256-Bit SSL Data Encryption
            </span>
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#C084FC]/30 shadow-sm">
              <RefreshCw className="w-4 h-4 text-[#2563EB]" /> 24h Flexible Cancellation
            </span>
          </div>

          {/* Integrated Policy Navigation Tabs */}
          <div className="pt-6">
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { id: 'privacy', label: 'Privacy Policy', path: '/privacy-policy' },
                { id: 'terms', label: 'Terms & Conditions', path: '/terms-and-conditions' },
                { id: 'refund', label: 'Refund Policy', path: '/refund-policy' },
                { id: 'cancellation', label: 'Cancellation Policy', path: '/cancellation-policy' },
                { id: 'cookie', label: 'Cookie Policy', path: '/cookie-policy' },
                { id: 'taxes', label: 'Taxes & Fees', path: '/taxes-and-fees' },
                { id: 'advertiser', label: 'Advertiser Policy', path: '/advertiser-policy' },
                { id: 'ccpa', label: 'CCPA Notice', path: '/ccpa-notice' },
                { id: 'gdpr', label: 'GDPR Notice', path: '/gdpr-notice' },
              ].map((tab) => (
                <Link
                  key={tab.id}
                  to={tab.path}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2.5 rounded-full text-xs font-extrabold transition-all shadow-sm ${
                    activeTab === tab.id ? 'bg-[#2563EB] text-white scale-105' : 'bg-white text-[#4C1D95] hover:bg-[#F3E8FF] border border-[#C084FC]/30'
                  }`}
                >
                  {tab.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Box */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-xl border border-[#C084FC]/30 space-y-8 text-sm text-black font-medium leading-relaxed">
          
          {/* PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h2 className="text-2xl font-black text-[#4C1D95] flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-[#2563EB]" /> Privacy Policy
                </h2>
                <p className="text-xs text-black mt-1">Last updated: January 2026</p>
              </div>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">1. Information Collection & Usage</h3>
                <p className="text-black">
                  Blinkit Air collects personal information such as full name, email address, contact phone number, and passport details strictly for processing flight tickets, car rentals, and tour reservations.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">2. Data Security & Encryption</h3>
                <p className="text-black">
                  All payment transactions and customer communication channels are protected using 256-bit SSL encryption. We do not store full credit card CVV codes or unencrypted financial credentials on our servers.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">3. Third-Party Partners</h3>
                <p className="text-black">
                  To fulfill travel arrangements, necessary booking data is transmitted securely to airline operators and ground-transfer providers.
                </p>
              </section>
            </div>
          )}

          {/* TERMS & CONDITIONS */}
          {activeTab === 'terms' && (
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h2 className="text-2xl font-black text-[#4C1D95] flex items-center gap-2">
                  <FileText className="w-6 h-6 text-[#2563EB]" /> Terms & Conditions
                </h2>
                <p className="text-xs text-black mt-1">Last updated: January 2026</p>
              </div>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">1. Agency Status & Booking Contract</h3>
                <p className="text-black">
                  Blinkit Air acts as an independent travel marketplace and fare aggregator connecting travelers with airline carriers and travel providers. Individual ticket rules, baggage limits, and fare penalties are governed by the operating carrier.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">2. Fares & Price Accuracy</h3>
                <p className="text-black">
                  Airfares are dynamic and subject to seat inventory availability until full payment is authorized and electronic tickets are issued.
                </p>
              </section>
            </div>
          )}

          {/* REFUND POLICY */}
          {activeTab === 'refund' && (
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h2 className="text-2xl font-black text-[#4C1D95] flex items-center gap-2">
                  <RefreshCw className="w-6 h-6 text-[#2563EB]" /> Refund Policy
                </h2>
                <p className="text-xs text-black mt-1">Last updated: January 2026</p>
              </div>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">1. 24-Hour Risk-Free Window</h3>
                <p className="text-black">
                  Selected flight bookings made over the telephone hotline (+x-xxx-xxx-xxxx) qualify for a 24-hour grace period for full refund or corrections without processing penalties.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">2. Refund Processing Timelines</h3>
                <p className="text-black">
                  Approved refunds are returned to the original payment method within 5 to 10 business days depending on bank clearance speeds.
                </p>
              </section>
            </div>
          )}

          {/* CANCELLATION POLICY */}
          {activeTab === 'cancellation' && (
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h2 className="text-2xl font-black text-[#4C1D95] flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-[#2563EB]" /> Cancellation Policy
                </h2>
                <p className="text-xs text-black mt-1">Last updated: January 2026</p>
              </div>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">1. Cancellation Procedures</h3>
                <p className="text-black">
                  Cancellations must be requested via our 24/7 hotline (+x-xxx-xxx-xxxx) or in writing to support@blinkitair.com prior to the scheduled flight departure time.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">2. Airline Supplier Rules</h3>
                <p className="text-black">
                  Supplier cancellation fees and non-refundable fare restrictions are established directly by operating airline carriers.
                </p>
              </section>
            </div>
          )}

          {/* COOKIE POLICY */}
          {activeTab === 'cookie' && (
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h2 className="text-2xl font-black text-[#4C1D95] flex items-center gap-2">
                  <Cookie className="w-6 h-6 text-[#2563EB]" /> Cookie Policy
                </h2>
                <p className="text-xs text-black mt-1">Last updated: January 2026</p>
              </div>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">1. Essential Cookies</h3>
                <p className="text-black">
                  We use essential cookies to maintain user sessions, remember flight search filters, and ensure secure booking checkout flows.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">2. Analytics & Preference Cookies</h3>
                <p className="text-black">
                  Analytical cookies help us improve web performance and user experience. Users can manage or disable cookie settings directly through browser preferences.
                </p>
              </section>
            </div>
          )}

          {/* TAXES & FEES */}
          {activeTab === 'taxes' && (
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h2 className="text-2xl font-black text-[#4C1D95] flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-[#2563EB]" /> Taxes & Fees Breakdown
                </h2>
                <p className="text-xs text-black mt-1">Last updated: January 2026</p>
              </div>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">1. Transparent Pricing</h3>
                <p className="text-black">
                  All displayed airfares include government sales tax, international passenger facility charges, security fees, and airline fuel surcharges upfront.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">2. Agency Service Fees</h3>
                <p className="text-black">
                  Agent ticketing desk fees cover 24/7 post-booking monitoring, seat assignments, schedule change notifications, and phone reservation services.
                </p>
              </section>
            </div>
          )}

          {/* ADVERTISER POLICY */}
          {activeTab === 'advertiser' && (
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h2 className="text-2xl font-black text-[#4C1D95] flex items-center gap-2">
                  <Megaphone className="w-6 h-6 text-[#2563EB]" /> Advertiser Disclosure Policy
                </h2>
                <p className="text-xs text-black mt-1">Last updated: January 2026</p>
              </div>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">1. Partner Affiliations</h3>
                <p className="text-black">
                  Blinkit Air may receive commercial compensation or referral commissions from airline partners and car-rental providers featured across our comparison pages.
                </p>
              </section>
            </div>
          )}

          {/* CCPA NOTICE */}
          {activeTab === 'ccpa' && (
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h2 className="text-2xl font-black text-[#4C1D95] flex items-center gap-2">
                  <UserCheck className="w-6 h-6 text-[#2563EB]" /> CCPA Privacy Notice (California Residents)
                </h2>
                <p className="text-xs text-black mt-1">Last updated: January 2026</p>
              </div>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">1. Your California Rights</h3>
                <p className="text-black">
                  Under the California Consumer Privacy Act (CCPA), California residents have the right to request access to personal information collected, request deletion of data, and opt out of the sale of personal data.
                </p>
              </section>
            </div>
          )}

          {/* GDPR NOTICE */}
          {activeTab === 'gdpr' && (
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h2 className="text-2xl font-black text-[#4C1D95] flex items-center gap-2">
                  <Globe className="w-6 h-6 text-[#2563EB]" /> GDPR Privacy Rights Notice (EU Citizens)
                </h2>
                <p className="text-xs text-black mt-1">Last updated: January 2026</p>
              </div>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">1. EU Data Rights</h3>
                <p className="text-black">
                  Under the General Data Protection Regulation (GDPR), European Union citizens hold rights to data access, rectification, erasure (the right to be forgotten), and data portability. Contact support@blinkitair.com to exercise these rights.
                </p>
              </section>
            </div>
          )}

          {/* Hotline Bar */}
          <div className="pt-6 border-t border-gray-100 bg-[#F3E8FF] p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#C084FC]/30">
            <div className="text-xs text-[#4C1D95]">
              <strong className="block text-sm font-extrabold text-[#4C1D95]">Have Questions Regarding Legal or Booking Terms?</strong>
              <p className="text-black">Our compliance & support desk is available 24 hours a day.</p>
            </div>
            <a 
              href="tel:+x-xxx-xxx-xxxx" 
              className="bg-[#2563EB] text-white font-black text-xs px-5 py-3 rounded-xl hover:bg-[#1d4ed8] transition-colors flex items-center gap-2 flex-shrink-0 shadow-sm"
            >
              <Phone className="w-4 h-4 text-white" /> Call +x-xxx-xxx-xxxx
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
