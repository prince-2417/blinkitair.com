import React from 'react';
import HeroSearch from '../components/HeroSearch';
import ValueProps from '../components/ValueProps';
import FeaturesBar from '../components/FeaturesBar';
import HotelDeals from '../components/HotelDeals';
import CarRentals from '../components/CarRentals';
import HolidayPackages from '../components/HolidayPackages';
import StepProcess from '../components/StepProcess';
import TravelGuides from '../components/TravelGuides';
import FaqSection from '../components/FaqSection';
import FooterCTA from '../components/FooterCTA';

export default function Home() {
  return (
    <main className="flex-grow">
      <HeroSearch />
      <ValueProps />
      <FeaturesBar />
      <HotelDeals />
      <CarRentals />
      <HolidayPackages />
      <StepProcess />
      <TravelGuides />
      <FaqSection />
      <FooterCTA />
    </main>
  );
}
