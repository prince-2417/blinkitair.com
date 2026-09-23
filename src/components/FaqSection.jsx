import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Phone } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do I find cheap flight deals to Seychelles on Blinkit Air?",
      answer: "Enter your departure airport and preferred travel dates in our live search box above. Our smart fare engine compares over 500 airlines instantly to present the best published rates alongside exclusive phone-only agent discounts."
    },
    {
      question: "What is the best time to book cheap flights and holiday packages?",
      answer: "Booking 6 to 8 weeks in advance often yields the lowest rates. For Seychelles, shoulder seasons like April-May and September-November offer ideal weather with great hotel and flight bundle savings."
    },
    {
      question: "Are taxes and fees included in the displayed flight prices?",
      answer: "Yes! All prices displayed on Blinkit Air include base airfare, government taxes, airport entry fees, and standard airline fuel surcharges with zero hidden markups."
    },
    {
      question: "Can I make changes or cancel my flight booking?",
      answer: "Change and cancellation policies depend on the specific airline fare rules chosen. Flexible ticket options allow date changes for a minimal fee, and our 24/7 hotline team can assist with instant ticket modifications."
    },
    {
      question: "Do you offer customer support for phone bookings?",
      answer: "Absolutely! Our travel experts are available 24/7 at +1-888-210-9189 and +1-877-794-6004 to help you find unpublished fare discounts, customize island-hopping packages, and process instant bookings."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-[#FAF5FF] border-t border-[#C084FC]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3E8FF] text-[#7E22CE] text-xs font-extrabold uppercase tracking-wider border border-[#C084FC]/30 shadow-sm">
            <HelpCircle className="w-4 h-4 text-[#7E22CE]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#4C1D95] tracking-tight">
            Frequently Asked <span className="text-[#7E22CE]">Questions</span>
          </h2>
          <p className="text-[#581C87] text-base font-semibold">
            Everything you need to know about booking flights, hotel packages, and travel support.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-[#C084FC]/30 overflow-hidden shadow-sm transition-all hover:border-[#7E22CE]"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-[#4C1D95] text-base sm:text-lg focus:outline-none"
                >
                  <span className={isOpen ? 'text-[#7E22CE] font-extrabold' : ''}>{faq.question}</span>
                  <div className={`p-2 rounded-full transition-transform duration-300 ${isOpen ? 'bg-[#7E22CE] text-white rotate-180' : 'bg-[#F3E8FF] text-[#7E22CE]'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-[#581C87] leading-relaxed border-t border-gray-100 pt-4 font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help Bar */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-[#C084FC]/30 text-center space-y-3 shadow-md">
          <p className="text-sm text-[#4C1D95] font-extrabold">
            Still have questions or need assistance with your booking?
          </p>
          <a 
            href="tel:+18882109189" 
            className="inline-flex items-center gap-2 text-[#7E22CE] hover:text-[#581C87] font-black text-base transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>Call 24/7 Helpline: +1-888-210-9189</span>
          </a>
        </div>

      </div>
    </section>
  );
}
