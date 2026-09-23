import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ShieldCheck, Sparkles, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function CustomerSupport() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: 'Flight Reservation', message: '' });
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    { q: 'How do I book a flight or holiday package over the phone?', a: 'Simply call our 24/7 hotline at +1-888-210-9189 or +1-877-794-6004. Our Seychelles flight specialists will access live airline systems, provide unpublished fare options, and issue electronic tickets instantly.' },
    { q: 'What is your refund and date change policy?', a: 'Date change and cancellation rules depend on individual airline fare conditions. Flexible fares booked through our hotline include 24-hour penalty-free cancellation. Call our support desk for instant adjustments.' },
    { q: 'Do I need a visa to visit Seychelles?', a: 'Seychelles is a visa-free country for all international travelers. You only need a valid passport, proof of return flight, resort booking confirmation, and completed Seychelles Electronic Border Declaration.' },
    { q: 'What payment methods do you accept?', a: 'We accept all major debit and credit cards (Visa, MasterCard, American Express, Discover) as well as PayPal and direct bank transfers.' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-[#FAF5FF] min-h-screen pb-16">
      
      {/* FULL HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#F3E8FF] via-[#FAF5FF] to-[#F3E8FF] text-[#4C1D95] overflow-hidden py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#C084FC]/30">
        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#7E22CE] text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-md">
            <Phone className="w-4 h-4 text-white animate-pulse" /> 24/7 Global Concierge & Support Hub
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#4C1D95] leading-none">
            We Are Live & Ready to <br className="hidden sm:inline" />
            <span className="text-[#7E22CE]">Assist You 24 Hours a Day</span>
          </h1>

          <p className="text-[#581C87] max-w-3xl mx-auto text-base sm:text-xl font-medium leading-relaxed">
            Need urgent assistance with a flight booking, date change, resort reservation, or emergency cancellation? Speak directly with an expert travel agent.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-4 text-xs font-bold text-[#7E22CE]">
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#C084FC]/30 shadow-sm">
              <Clock className="w-4 h-4 text-[#7E22CE]" /> Zero Hold Times
            </span>
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#C084FC]/30 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#7E22CE]" /> Licensed Travel Agency
            </span>
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#C084FC]/30 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#7E22CE]" /> Toll-Free International Hotline
            </span>
          </div>
        </div>
      </section>

      {/* 24/7 Hotline Callout Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        
        {/* Card 1 */}
        <div className="bg-[#F3E8FF] text-[#4C1D95] rounded-3xl p-8 shadow-xl border border-[#C084FC]/30 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <span className="bg-[#7E22CE] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase inline-block shadow-sm">
              PRIMARY 24/7 HELPLINE
            </span>
            <h2 className="text-3xl font-black text-[#4C1D95]">+1-888-210-9189</h2>
            <p className="text-xs text-[#581C87] font-medium">
              Toll-free 24/7 line for immediate flight bookings, resort inquiries, fare comparisons, and urgent date changes.
            </p>
          </div>
          <a 
            href="tel:+18882109189" 
            className="flex items-center justify-center gap-2 bg-[#7E22CE] hover:bg-[#581C87] text-white font-black py-4 rounded-2xl shadow-md transition-all text-sm"
          >
            <Phone className="w-4 h-4" /> Call +1-888-210-9189 Now
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#C084FC]/30 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <span className="bg-[#F3E8FF] text-[#7E22CE] text-[10px] font-black px-3 py-1 rounded-full uppercase inline-block border border-[#C084FC]/30">
              ALTERNATE SUPPORT DESK
            </span>
            <h2 className="text-3xl font-black text-[#4C1D95]">+1-877-794-6004</h2>
            <p className="text-xs text-[#581C87] font-medium">
              Direct agent line for package customization, group travel discounts, and billing support.
            </p>
          </div>
          <a 
            href="tel:+18777946004" 
            className="flex items-center justify-center gap-2 bg-[#F3E8FF] hover:bg-[#7E22CE] text-[#4C1D95] hover:text-white font-black py-4 rounded-2xl shadow-md transition-all text-sm border border-[#C084FC]/30"
          >
            <Phone className="w-4 h-4 text-[#7E22CE]" /> Call +1-877-794-6004
          </a>
        </div>

      </div>

      {/* Main Grid: Contact Form + FAQ Accordion */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Contact Form */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-[#C084FC]/30 space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-black text-[#4C1D95]">Send Us a Message</h3>
            <p className="text-xs text-gray-500 font-medium">
              Fill in your inquiry below and our support team will reply via email or phone within 15 minutes.
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl p-6 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-extrabold text-base">Message Delivered Successfully!</h4>
              <p className="text-xs">Thank you, {formData.name}. Our travel specialist will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-semibold">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[#4C1D95] block mb-1">Your Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7E22CE]"
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7E22CE]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[#4C1D95] block mb-1">Email Address</label>
                <input 
                  type="email" 
                  required 
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7E22CE]"
                />
              </div>

              <div>
                <label className="text-[#4C1D95] block mb-1">Inquiry Topic</label>
                <select 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7E22CE]"
                >
                  <option value="Flight Reservation">New Flight Reservation</option>
                  <option value="Hotel Booking">Resort / Hotel Package</option>
                  <option value="Date Change">Flight Change / Cancellation</option>
                  <option value="General Inquiry">General Seychelles Information</option>
                </select>
              </div>

              <div>
                <label className="text-[#4C1D95] block mb-1">Your Message or Travel Details</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Tell us your origin city, travel dates, and preferred airlines or resorts..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7E22CE]"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#7E22CE] hover:bg-[#581C87] text-white font-black py-4 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 text-sm"
              >
                <Send className="w-4 h-4" /> Submit Inquiry
              </button>
            </form>
          )}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-[#C084FC]/30 space-y-6">
            <h3 className="text-2xl font-black text-[#4C1D95] flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#7E22CE]" /> Frequently Asked Questions
            </h3>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left p-4 bg-[#FAF5FF] hover:bg-[#F3E8FF] font-extrabold text-[#4C1D95] text-sm flex items-center justify-between transition-colors"
                  >
                    <span>{faq.q}</span>
                    {openFaq === idx ? <ChevronUp className="w-4 h-4 text-[#7E22CE]" /> : <ChevronDown className="w-4 h-4 text-[#7E22CE]" />}
                  </button>

                  {openFaq === idx && (
                    <div className="p-4 text-xs text-[#581C87] font-medium leading-relaxed bg-white border-t border-gray-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Business Info */}
          <div className="bg-white rounded-3xl p-6 shadow-md border border-[#C084FC]/30 space-y-3 text-xs font-semibold text-[#4C1D95]">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#7E22CE]" />
              <span><strong>Operating Hours:</strong> 24 Hours a Day / 7 Days a Week</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#7E22CE]" />
              <span><strong>Email Support:</strong> support@blinkitair.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#7E22CE]" />
              <span><strong>Global Head Operations:</strong> Seychelles & Worldwide Travel Hubs</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
