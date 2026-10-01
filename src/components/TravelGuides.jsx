import React from 'react';
import { CalendarCheck, Car, Headphones, PlaneTakeoff, ShieldCheck, TicketCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const essentials = [
  {
    icon: <PlaneTakeoff className="w-7 h-7 text-[#2563EB]" />,
    title: 'Search Flight Fares',
    description: 'Compare flight options for your dates and choose the route that suits your schedule.',
    link: '/flights',
    label: 'Explore Flights'
  },
  {
    icon: <Car className="w-7 h-7 text-[#2563EB]" />,
    title: 'Reserve Your Car',
    description: 'Find a convenient rental car for airport pickup, city travel, or a longer road trip.',
    link: '/car-rentals',
    label: 'View Car Rentals'
  },
  {
    icon: <Headphones className="w-7 h-7 text-[#2563EB]" />,
    title: 'Get Booking Support',
    description: 'Our travel team is available 24/7 to help with fare questions, changes, and bookings.',
    link: '/contact',
    label: 'Contact Support'
  }
];

export default function TravelGuides() {
  return (
    <section id="travel-essentials" className="py-20 bg-[#FAF5FF] border-t border-[#C084FC]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3E8FF] text-[#7E22CE] text-xs font-extrabold uppercase tracking-wider border border-[#C084FC]/30 shadow-sm">
            <TicketCheck className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Blinkit Air Essentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#2563EB] tracking-tight">
            Flights and <span className="text-[#7E22CE]">Car Rentals Made Simple</span>
          </h2>
          <p className="text-black text-base font-semibold">
            Plan your journey, arrange your ride, and get help whenever you need it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {essentials.map((item) => (
            <div key={item.title} className="bg-white rounded-3xl p-7 shadow-md hover:shadow-xl transition-all duration-300 border border-[#C084FC]/30 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#F3E8FF] flex items-center justify-center">{item.icon}</div>
                <h3 className="font-extrabold text-[#2563EB] text-xl">{item.title}</h3>
                <p className="text-sm text-black font-medium leading-relaxed">{item.description}</p>
              </div>
              <Link to={item.link} className="inline-flex items-center gap-2 text-sm font-extrabold text-[#4C1D95] hover:text-[#7E22CE] transition-colors">
                {item.label} <CalendarCheck className="w-4 h-4 text-[#2563EB]" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#F3E8FF] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 border border-[#C084FC]/30">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <ShieldCheck className="w-10 h-10 text-[#7E22CE] hidden sm:block" />
            <div>
              <h3 className="font-black text-[#4C1D95] text-xl">Book with confidence</h3>
              <p className="text-sm text-black font-medium">Clear flight options, reliable car rentals, and expert support.</p>
            </div>
          </div>
          <a href="tel:+x-xxx-xxx-xxxx" className="bg-[#7E22CE] hover:bg-[#581C87] text-white font-black text-sm px-6 py-3 rounded-2xl shadow-md transition-all">Call Travel Support</a>
        </div>
      </div>
    </section>
  );
}
