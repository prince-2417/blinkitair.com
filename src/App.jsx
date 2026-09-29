import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import Airlines from './pages/Airlines';
import AirlineDetail from './pages/AirlineDetail';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import SearchResults from './pages/SearchResults';
import CarRentalsPage from './pages/CarRentalsPage';
import HolidayPackagesPage from './pages/HolidayPackagesPage';
import CustomerSupport from './pages/CustomerSupport';
import LegalPolicy from './pages/LegalPolicy';

import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FAF5FF] text-[#4C1D95] flex flex-col font-sans selection:bg-[#2563EB] selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:id" element={<DestinationDetail />} />
            <Route path="/airlines" element={<Airlines />} />
            <Route path="/airlines/:id" element={<AirlineDetail />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
            <Route path="/flights" element={<SearchResults />} />
            <Route path="/search-results" element={<SearchResults />} />
            <Route path="/car-rentals" element={<CarRentalsPage />} />
            <Route path="/packages" element={<HolidayPackagesPage />} />
            <Route path="/contact" element={<CustomerSupport />} />
            <Route path="/support" element={<CustomerSupport />} />
            
            {/* Legal Policy Routes */}
            <Route path="/privacy-policy" element={<LegalPolicy />} />
            <Route path="/terms-and-conditions" element={<LegalPolicy />} />
            <Route path="/refund-policy" element={<LegalPolicy />} />
            <Route path="/cancellation-policy" element={<LegalPolicy />} />
            <Route path="/cookie-policy" element={<LegalPolicy />} />
            <Route path="/taxes-and-fees" element={<LegalPolicy />} />
            <Route path="/advertiser-policy" element={<LegalPolicy />} />
            <Route path="/ccpa-notice" element={<LegalPolicy />} />
            <Route path="/gdpr-notice" element={<LegalPolicy />} />
            <Route path="/disclaimer" element={<LegalPolicy />} />
            
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
