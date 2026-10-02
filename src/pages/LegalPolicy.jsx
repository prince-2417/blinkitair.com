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
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="p-6 sm:p-12   border-[#C084FC]/30 space-y-8 text-sm text-black font-medium leading-relaxed">
          
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
                <h3 className="text-base font-extrabold text-[#4C1D95]">Introduction</h3>
                <p className="text-black">
                  At <strong>Blinkit Air</strong>, your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website <a href="https://blinkitair.com/" className="text-[#2563EB] underline" target="_blank" rel="noreferrer">BlinkitAir.com</a> or use our travel booking services.
                </p>
                <p className="text-black">
                  By using our website and services, you consent to the collection and use of your information as described in this policy.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Information We Collect</h3>
                <p className="text-black">
                  Blinkit Air may collect the following types of information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, billing address, and payment details when you make a booking.</li>
                  <li><strong>Travel Information:</strong> Passport details, frequent flyer numbers, travel preferences, and special requests.</li>
                  <li><strong>Technical Information:</strong> IP address, browser type, device information, and cookies (see our Cookies Policy).</li>
                  <li><strong>Usage Information:</strong> Pages visited, search queries, and interactions with our website.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">How We Use Your Information</h3>
                <p className="text-black">
                  Blinkit Air uses your information to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Process and confirm your flight, hotel, and car rental bookings</li>
                  <li>Communicate with you about your reservations</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Personalize your travel recommendations and offers</li>
                  <li>Improve our website functionality and user experience</li>
                  <li>Comply with legal and regulatory requirements</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Sharing Your Information</h3>
                <p className="text-black">
                  Blinkit Air does not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li><strong>Airlines &amp; Travel Suppliers:</strong> To complete your travel bookings.</li>
                  <li><strong>Payment Processors:</strong> To securely handle transactions.</li>
                  <li><strong>Service Providers:</strong> Third parties that assist with website operations and customer support.</li>
                  <li><strong>Legal Authorities:</strong> When required by law or to protect our rights.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Data Security</h3>
                <p className="text-black">
                  Blinkit Air implements industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure payment gateways</li>
                  <li>Regular security audits and updates</li>
                  <li>Restricted access to personal information</li>
                </ul>
                <p className="text-black">
                  While we strive to protect your data, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Your Rights</h3>
                <p className="text-black">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Object to certain data processing activities</li>
                </ul>
                <p className="text-black">
                  To exercise these rights, please contact us using the information below.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Data Retention</h3>
                <p className="text-black">
                  Blinkit Air retains your personal information only as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Children&apos;s Privacy</h3>
                <p className="text-black">
                  Our services are not directed to individuals under the age of 18. Blinkit Air does not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete it promptly.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Updates to This Policy</h3>
                <p className="text-black">
                  Blinkit Air may update this Privacy Policy from time to time to reflect changes in legal requirements, our practices, or industry standards. Any updates will be posted on this page with a revised "Last Updated" date. We encourage you to review this policy periodically.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Contact Information</h3>
                <p className="text-black">
                  If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Email: <a href="mailto:support@blinkitair.com" className="text-[#2563EB] underline">support@blinkitair.com</a></li>
                  <li>Phone: <a href="tel:+18445723292" className="text-[#2563EB] underline">x-xxx-xxx-xxxx</a></li>
                  <li>Address: 13217 Juliet Way, Frisco, TX 75035, USA</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Disclaimer</h3>
                <p className="text-black">
                  Blinkit Air is committed to protecting your privacy and ensuring transparency in our data collection practices. For more information about how we use cookies, please review our <a href="/cookie-policy" className="text-[#2563EB] underline">Cookie Policy</a>.
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
                <h3 className="text-base font-extrabold text-[#4C1D95]">Introduction</h3>
                <p className="text-black">
                  Welcome to <strong>Tripyzo</strong>. These Terms and Conditions govern your use of our website <a href="https://blinkitair.com/" className="text-[#2563EB] underline" target="_blank" rel="noreferrer">blinkitair.com</a> and the travel booking services we provide. By accessing or using our website, you agree to be bound by these terms.
                </p>
                <p className="text-black">
                  If you do not agree with any part of these terms, please do not use our website or services.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Booking Services</h3>
                <p className="text-black">
                  Tripyzo acts as an independent travel agency facilitating bookings for flights, hotels, car rentals, and vacation packages. We do not operate airlines, hotels, or other travel suppliers. All bookings are subject to the terms and conditions of the respective service providers.
                </p>
                <p className="text-black">
                  When you make a booking through Tripyzo, you acknowledge that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>You are responsible for providing accurate information</li>
                  <li>You have read and agree to the supplier&apos;s terms</li>
                  <li>Tripyzo is not liable for supplier service failures</li>
                  <li>Additional fees may apply for changes or cancellations</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">User Responsibilities</h3>
                <p className="text-black">
                  As a user of Tripyzo&apos;s services, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Provide accurate, complete, and current information</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Review all booking details before confirmation</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Ensure you have valid travel documents (passport, visa, etc.)</li>
                  <li>Arrive at the airport with sufficient time before departure</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Pricing and Payments</h3>
                <p className="text-black">
                  All prices displayed on Tripyzo are subject to change without notice. Final prices are confirmed at the time of booking. Prices include applicable taxes and fees unless stated otherwise.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Payments are processed through secure payment gateways</li>
                  <li>We accept major credit cards (Visa, MasterCard, Amex, Discover)</li>
                  <li>Additional service fees may apply for certain bookings</li>
                  <li>Currency conversion fees may apply for international bookings</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Cancellations and Changes</h3>
                <p className="text-black">
                  Cancellation and change policies vary by airline, hotel, or travel supplier. Please review the specific terms for your booking. In general:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Some fares are non-refundable and non-changeable</li>
                  <li>Cancellation fees may apply based on the supplier&apos;s policy</li>
                  <li>Tripyzo service fees are non-refundable after booking</li>
                  <li>Changes may be subject to fare differences</li>
                  <li>No-show penalties apply for missed flights without prior cancellation</li>
                </ul>
                <p className="text-black">
                  For cancellations or changes, contact Tripyzo customer support as soon as possible.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Refunds</h3>
                <p className="text-black">
                  Refunds are processed according to the supplier&apos;s refund policy. Tripyzo will assist with refund requests but cannot guarantee approval. Eligible refunds will be credited to the original payment method within 7-20 business days depending on the supplier.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Intellectual Property</h3>
                <p className="text-black">
                  All content on the Tripyzo website, including text, graphics, logos, images, and software, is the property of Tripyzo or its content suppliers and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without express written permission.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Limitation of Liability</h3>
                <p className="text-black">
                  To the maximum extent permitted by law, Tripyzo shall not be liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Any direct, indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Delays, cancellations, or service failures by airlines or suppliers</li>
                  <li>Personal injury, illness, or death during travel</li>
                  <li>Loss or damage to baggage or personal belongings</li>
                </ul>
                <p className="text-black">
                  Our total liability for any claim arising from your use of our services is limited to the amount you paid for the booking.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Indemnification</h3>
                <p className="text-black">
                  You agree to indemnify and hold Tripyzo harmless from any claims, damages, losses, liabilities, costs, or expenses arising from your use of our website, violation of these terms, or infringement of any third-party rights.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Governing Law</h3>
                <p className="text-black">
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of New Hampshire, United States, without regard to its conflict of law provisions. Any legal action arising from these terms shall be brought exclusively in the courts of Portsmouth, New Hampshire.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Changes to Terms</h3>
                <p className="text-black">
                  Tripyzo reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on this page. Your continued use of our website constitutes acceptance of the modified terms.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Contact Information</h3>
                <p className="text-black">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Email: <a href="mailto:info@blinkitair.com" className="text-[#2563EB] underline">info@blinkitair.com</a></li>
                  <li>Phone: <a href="tel:+18445723292" className="text-[#2563EB] underline">x-xxx-xxx-xxxx</a></li>
                  <li>Address: 13217 Juliet Way, Frisco, TX 75035, USA</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Disclaimer</h3>
                <p className="text-black">
                  Tripyzo provides travel booking services as an independent agent. We are not responsible for the actions, errors, omissions, representations, or warranties of any airlines, hotels, or other travel suppliers. Your travel is at your own risk, and we recommend purchasing travel insurance for protection.
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
                <h3 className="text-base font-extrabold text-[#4C1D95]">Introduction</h3>
                <p className="text-black">
                  At <strong>Tripyzo</strong>, we strive to ensure your satisfaction with every booking. This Refund Policy explains the circumstances under which refunds may be issued, how to request a refund, and the timelines involved for bookings made through our website <a href="https://blinkitair.com/" className="text-[#2563EB] underline" target="_blank" rel="noreferrer">blinkitair.com</a>.
                </p>
                <p className="text-black">
                  Please read this policy carefully before requesting a refund. All refunds are subject to the terms and conditions of the respective airline or travel supplier.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">When Refunds Are Available</h3>
                <p className="text-black">
                  Refunds may be available in the following situations:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li><strong>Cancellation within 24 hours:</strong> Most airlines allow full refunds for bookings canceled within 24 hours of purchase (for bookings made at least 7 days before departure).</li>
                  <li><strong>Refundable Fare Types:</strong> Some fare classes allow cancellations with partial or full refunds, minus applicable fees.</li>
                  <li><strong>Schedule Changes:</strong> If the airline makes significant schedule changes, you may be eligible for a refund.</li>
                  <li><strong>Flight Cancellations:</strong> If the airline cancels your flight and cannot rebook you on an alternative flight.</li>
                  <li><strong>Service Issues:</strong> In cases of billing errors or services not rendered as described.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">How to Request a Refund</h3>
                <p className="text-black">
                  To request a refund, please follow these steps:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-black">
                  <li>Contact Tripyzo customer support at <a href="mailto:info@blinkitair.com" className="text-[#2563EB] underline">info@blinkitair.com</a> or <a href="tel:+18445723292" className="text-[#2563EB] underline">x-xxx-xxx-xxxx</a></li>
                  <li>Provide your booking reference number and reason for refund request</li>
                  <li>Our team will review airline policies and advise on eligibility</li>
                  <li>Submit any required documentation (if applicable)</li>
                  <li>Once approved, refund will be processed to original payment method</li>
                </ol>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Refund Processing Time</h3>
                <p className="text-black">
                  Refund processing times vary depending on the airline or supplier:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li><strong>Domestic Flights:</strong> 7-14 business days after approval</li>
                  <li><strong>International Flights:</strong> 14-20 business days after approval</li>
                  <li><strong>Hotels &amp; Packages:</strong> 10-15 business days after approval</li>
                </ul>
                <p className="text-black">
                  Please note that your bank or credit card issuer may take additional time to reflect the refund in your account.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Non-Refundable Situations</h3>
                <p className="text-black">
                  Refunds are typically not available in the following situations:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Non-refundable or promotional fare types</li>
                  <li>No-show for your flight without prior cancellation</li>
                  <li>Partial use of a round-trip ticket</li>
                  <li>Voluntary cancellation after 24-hour grace period (for non-refundable fares)</li>
                  <li>Changes in personal plans or travel preferences</li>
                  <li>Weather-related disruptions (airline policies vary)</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Refund Amount &amp; Fees</h3>
                <p className="text-black">
                  The refund amount you receive may be less than your original payment due to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Airline-imposed cancellation penalties</li>
                  <li>Tripyzo service fees (non-refundable after booking confirmation)</li>
                  <li>Difference between original fare and current fare (for certain changes)</li>
                  <li>Third-party fees (insurance, seat selection, baggage fees)</li>
                </ul>
                <p className="text-black">
                  All applicable fees will be disclosed before you confirm your cancellation and refund request.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Partial Refunds</h3>
                <p className="text-black">
                  In some cases, partial refunds may be available even when full refunds are not. Examples include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Downgrading from business class to economy</li>
                  <li>Removing optional services (e.g., extra baggage, seat selection)</li>
                  <li>Using a flight credit for future travel (airline policies vary)</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Cancellations Due to External Events</h3>
                <p className="text-black">
                  In cases where travel is disrupted by weather conditions, natural disasters, strikes, government restrictions, or other events beyond our control, refund eligibility will be determined by the airline or service provider. Tripyzo will assist you with refund requests where possible.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Updates to This Policy</h3>
                <p className="text-black">
                  Tripyzo may update this Refund Policy from time to time to reflect changes in legal requirements, business practices, or airline policies. Any updates will be posted on this page with a revised "Last Updated" date.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Contact Information</h3>
                <p className="text-black">
                  For refund requests or questions about this policy, please contact us:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Email: <a href="mailto:info@blinkitair.com" className="text-[#2563EB] underline">info@blinkitair.com</a></li>
                  <li>Phone: <a href="tel:+18445723292" className="text-[#2563EB] underline">x-xxx-xxx-xxxx</a></li>
                  <li>Address: 13217 Juliet Way, Frisco, TX 75035, USA</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Disclaimer</h3>
                <p className="text-black">
                  Tripyzo acts as an independent travel agency. Final refund decisions are made by airlines, hotels, or travel suppliers based on their individual policies. Tripyzo will assist you in the refund process but cannot guarantee refund approval beyond the terms set by the service provider.
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
                <h3 className="text-base font-extrabold text-[#4C1D95]">Introduction</h3>
                <p className="text-black">
                  At <strong>Tripyzo</strong>, we understand that travel plans may change due to unexpected circumstances. This Cancellation Policy explains how cancellations are handled, applicable charges, and the process for modifying or canceling bookings made through our website <a href="https://blinkitair.com/" className="text-[#2563EB] underline" target="_blank" rel="noreferrer">blinkitair.com</a>.
                </p>
                <p className="text-black">
                  Please read this policy carefully before confirming your travel reservation. By using our services, you acknowledge and accept the terms outlined below.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">How to Cancel a Booking</h3>
                <ol className="list-decimal pl-6 space-y-2 text-black">
                  <li>Contact our customer service team immediately at <a href="mailto:info@blinkitair.com" className="text-[#2563EB] underline">info@blinkitair.com</a> or by phone at <a href="tel:+18445723292" className="text-[#2563EB] underline">x-xxx-xxx-xxxx</a>.</li>
                  <li>Provide your booking reference number, full name, and details of your itinerary.</li>
                  <li>Our agents will review the airline or travel supplier&apos;s fare rules and advise you on applicable cancellation charges and refund options (if available).</li>
                  <li>Once you confirm the cancellation, we will process it and send you a confirmation email.</li>
                </ol>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Airline &amp; Supplier Rules</h3>
                <p className="text-black">
                  All cancellations are subject to the individual airline or travel supplier&apos;s policies. These rules determine whether your booking is refundable, partially refundable, or non-refundable. Airline-imposed penalties, reissue fees, or fare differences may apply depending on the fare type and time of cancellation.
                </p>
                <p className="text-black">
                  Some low-cost or promotional fares are non-cancellable once issued. In such cases, credits or rebooking options may be available, depending on airline policy.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Cancellation Fees &amp; Charges</h3>
                <p className="text-black">
                  Tripyzo applies a nominal service fee for processing cancellations in addition to airline or supplier charges. All fees will be disclosed before confirming your cancellation.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li><strong>Domestic Flights:</strong> Service fee up to $25 per passenger (in addition to airline penalties).</li>
                  <li><strong>International Flights:</strong> Service fee up to $75 per passenger (in addition to airline penalties).</li>
                </ul>
                <p className="text-black">
                  Airlines may charge separate fees for no-shows or last-minute cancellations.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Time-Sensitive Cancellations</h3>
                <p className="text-black">
                  Cancellation eligibility and refund value depend on when you cancel relative to your departure date.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li><strong>Within 24 hours of booking:</strong> Most airlines allow cancellations within 24 hours of purchase without penalty (for bookings made at least 7 days before departure).</li>
                  <li><strong>After 24 hours:</strong> Standard airline and agency cancellation rules apply. Refunds may be partial or unavailable depending on the fare.</li>
                  <li><strong>After departure or no-shows:</strong> No refund will be available unless otherwise specified by the airline.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Non-Cancellable &amp; Non-Refundable Situations</h3>
                <p className="text-black">
                  Certain bookings are strictly non-cancellable or non-refundable as per airline or hotel policy. These include but are not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Promotional or flash sale fares</li>
                  <li>Group or bulk bookings</li>
                  <li>Partially used flight tickets</li>
                  <li>Bookings involving multiple suppliers with restrictive fare rules</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Cancellations Due to External Events</h3>
                <p className="text-black">
                  In cases where travel is disrupted by weather conditions, natural disasters, strikes, government restrictions, or other events beyond our control, cancellation and refund eligibility will be determined by the airline or service provider. Tripyzo will assist you with rebooking or claim submissions where possible.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Refund After Cancellation</h3>
                <p className="text-black">
                  Refunds for eligible cancellations are processed only after receiving confirmation from the airline or travel supplier. Refunds will be credited to the original form of payment within 7–14 business days (up to 20 days for international carriers).
                </p>
                <p className="text-black">
                  All refunds are subject to validation and may exclude applicable service or processing fees. Tripyzo does not hold or delay any approved refunds intentionally.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Legal &amp; Compliance</h3>
                <p className="text-black">
                  Tripyzo operates in compliance with U.S. Department of Transportation (DOT) regulations and international travel laws. All policies are designed to promote transparency, accountability, and customer protection, following Google Ads advertising standards.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Contact Information</h3>
                <p className="text-black">
                  For cancellations, modifications, or further assistance, please contact us:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Email: <a href="mailto:info@blinkitair.com" className="text-[#2563EB] underline">info@blinkitair.com</a></li>
                  <li>Phone: <a href="tel:+18445723292" className="text-[#2563EB] underline">x-xxx-xxx-xxxx</a></li>
                  <li>Address: 13217 Juliet Way, Frisco, TX 75035, USA</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Disclaimer</h3>
                <p className="text-black">
                  Tripyzo acts as an independent travel agency. We facilitate bookings between customers and airlines, hotels, or travel suppliers but do not control their policies or decisions regarding cancellations or refunds. All travel arrangements are subject to the terms and conditions of the respective providers.
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
                <h3 className="text-base font-extrabold text-[#4C1D95]">Introduction</h3>
                <p className="text-black">
                  At <strong>Tripyzo</strong>, we use cookies and similar tracking technologies to improve your browsing experience on our website <a href="https://blinkitair.com/" className="text-[#2563EB] underline" target="_blank" rel="noreferrer">blinkitair.com</a>. This Cookies Policy explains what cookies are, how we use them, and how you can manage your cookie preferences.
                </p>
                <p className="text-black">
                  By continuing to use our website, you consent to our use of cookies as described in this policy.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">What Are Cookies?</h3>
                <p className="text-black">
                  Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently, enhance user experience, and provide information to website owners.
                </p>
                <p className="text-black">
                  Cookies do not contain personal information that can identify you directly, but they help us recognize your device and remember your preferences for future visits.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Types of Cookies We Use</h3>
                <p className="text-black">
                  Tripyzo uses the following categories of cookies:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly (e.g., navigation, login, form submissions).</li>
                  <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website (e.g., page visits, load times).</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences (e.g., language, location) to provide enhanced features.</li>
                  <li><strong>Advertising Cookies:</strong> Used to deliver relevant ads and measure campaign effectiveness.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">How We Use Cookies</h3>
                <p className="text-black">
                  Tripyzo uses cookies to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Remember your login details and preferences</li>
                  <li>Analyze website traffic and user behavior</li>
                  <li>Improve website performance and loading speed</li>
                  <li>Personalize content and offers based on your interests</li>
                  <li>Enable social media sharing and interactions</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Third-Party Cookies</h3>
                <p className="text-black">
                  We may also allow third-party service providers (such as Google Analytics, Facebook, and payment processors) to place cookies on your device to help us analyze website usage, deliver targeted advertisements, and process transactions.
                </p>
                <p className="text-black">
                  These third parties have their own privacy policies, and Tripyzo does not control their cookie practices. We recommend reviewing their policies for more information.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Managing Your Cookie Preferences</h3>
                <p className="text-black">
                  You can control and manage cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>View cookies stored on your device</li>
                  <li>Block or delete existing cookies</li>
                  <li>Prevent websites from setting new cookies</li>
                  <li>Receive notifications when cookies are set</li>
                </ul>
                <p className="text-black">
                  Please note that disabling essential cookies may affect website functionality and your user experience.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Your Consent</h3>
                <p className="text-black">
                  By continuing to use the Tripyzo website, you consent to our use of cookies as described in this policy. If you do not agree to our use of cookies, you should adjust your browser settings or refrain from using our website.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Updates to This Policy</h3>
                <p className="text-black">
                  Tripyzo may update this Cookies Policy from time to time to reflect changes in technology, legal requirements, or business operations. Any updates will be posted on this page with a revised "Last Updated" date.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Contact Information</h3>
                <p className="text-black">
                  If you have any questions about our use of cookies or this policy, please contact us:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Email: <a href="mailto:info@blinkitair.com" className="text-[#2563EB] underline">info@blinkitair.com</a></li>
                  <li>Phone: <a href="tel:+18445723292" className="text-[#2563EB] underline">x-xxx-xxx-xxxx</a></li>
                  <li>Address: 13217 Juliet Way, Frisco, TX 75035, USA</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Disclaimer</h3>
                <p className="text-black">
                  Tripyzo is committed to protecting your privacy and ensuring transparency in our data collection practices. For more information about how we handle your personal data, please review our <a href="https://www.blinkitair.com/privacy-policy" className="text-[#2563EB] underline" target="_blank" rel="noreferrer">Privacy Policy</a>.
                </p>
              </section>
            </div>
          )}

          {/* TAXES & FEES */}
          {activeTab === 'taxes' && (
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h2 className="text-2xl font-black text-[#4C1D95] flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-[#2563EB]" /> Taxes & Fees Overview
                </h2>
                <p className="text-xs text-black mt-1">Last updated: January 2026</p>
              </div>

              <section className="space-y-3">
                <p className="text-black">
                  blinkitair.com is an independent travel agency offering booking assistance for flights, hotels, car rentals, and vacation packages. Taxes, fees, and service charges may vary based on route, supplier, passenger type, and booking details.
                </p>
                <p className="text-black">
                  The information below is provided for general guidance only. Final charges will be shown during the booking process before payment is completed on <a href="https://blinkitair.com/" className="text-[#2563EB] underline" target="_blank" rel="noreferrer">blinkitair.com</a>.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Common Travel Taxes and Service Fees</h3>
                <div className="overflow-x-auto border border-[#C084FC]/30 rounded-2xl">
                  <table className="min-w-full border-collapse text-left text-sm text-black">
                    <thead className="bg-[#F3E8FF] text-[#4C1D95]">
                      <tr>
                        <th className="border border-[#C084FC]/30 px-4 py-3 font-extrabold">Name &amp; Description</th>
                        <th className="border border-[#C084FC]/30 px-4 py-3 font-extrabold">Applicable To</th>
                        <th className="border border-[#C084FC]/30 px-4 py-3 font-extrabold">Code</th>
                        <th className="border border-[#C084FC]/30 px-4 py-3 font-extrabold">Estimated Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-[#C084FC]/30 px-4 py-3">Security &amp; Insurance Surcharge</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">Flights operated by selected international carriers</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">AP</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">$4.00 per leg</td>
                      </tr>
                      <tr>
                        <td className="border border-[#C084FC]/30 px-4 py-3">Alaska/Hawaii Travel Facilities Tax</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">Flights to or from Alaska or Hawaii</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">—</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">US$10.60 one-way / $21.20 round-trip</td>
                      </tr>
                      <tr>
                        <td className="border border-[#C084FC]/30 px-4 py-3">U.S. Domestic Segment Fee</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">Each segment of a domestic U.S. flight</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">ZP</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">$4.80 per segment</td>
                      </tr>
                      <tr>
                        <td className="border border-[#C084FC]/30 px-4 py-3">U.S. Excise Ticket Tax</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">U.S. mainland travel and certain Canada/Mexico routes within eligible zones</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">US</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">7.5% of airfare</td>
                      </tr>
                      <tr>
                        <td className="border border-[#C084FC]/30 px-4 py-3">Passenger Facility Charge (PFC)</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">Charged by selected U.S. airports for facility improvements</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">XF</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">Up to $4.50 per stop</td>
                      </tr>
                      <tr>
                        <td className="border border-[#C084FC]/30 px-4 py-3">U.S. September 11th Security Fee</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">Applied to U.S. and foreign air carrier enplanements</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">AY</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">$5.60 each way</td>
                      </tr>
                      <tr>
                        <td className="border border-[#C084FC]/30 px-4 py-3">U.S. International Travel Tax</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">Flights arriving in or departing from the U.S., Puerto Rico, or U.S. Virgin Islands</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">US</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">$21.10</td>
                      </tr>
                      <tr>
                        <td className="border border-[#C084FC]/30 px-4 py-3">APHIS Inspection Fee</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">International flights arriving into the U.S.</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">XA</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">$3.83</td>
                      </tr>
                      <tr>
                        <td className="border border-[#C084FC]/30 px-4 py-3">Immigration Processing Fee</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">International arrivals into the U.S. and territories</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">XY</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">$7.00</td>
                      </tr>
                      <tr>
                        <td className="border border-[#C084FC]/30 px-4 py-3">Customs Processing Fee</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">International entries into the U.S.</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">YC</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">$6.52</td>
                      </tr>
                      <tr>
                        <td className="border border-[#C084FC]/30 px-4 py-3">International Departure / Arrival Taxes</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">Varies by destination, government, and airport authority</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">—</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">Varies</td>
                      </tr>
                      <tr>
                        <td className="border border-[#C084FC]/30 px-4 py-3">Airfare Booking Service Fee</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">Applies per traveler based on fare type and booking complexity</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">Fees</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">Up to $30.00 per person</td>
                      </tr>
                      <tr>
                        <td className="border border-[#C084FC]/30 px-4 py-3">Hotel Booking Service Fee</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">Applies per room or per night depending on booking type</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">Fees</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">Up to $35.00</td>
                      </tr>
                      <tr>
                        <td className="border border-[#C084FC]/30 px-4 py-3">Car Rental Booking Service Fee</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">Applied once per car rental transaction</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">Fees</td>
                        <td className="border border-[#C084FC]/30 px-4 py-3">$14.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Additional Notes</h3>
                <p className="text-black">
                  Passenger categories may include adults, children, infants, students, seniors, and military personnel.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Government-imposed taxes and fees may change without prior notice.</li>
                  <li>Service fees charged by Tripyzo for processing transactions are generally non-refundable.</li>
                  <li>Final pricing depends on fare availability, supplier rules, passenger details, and itinerary complexity.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Service Fee Exceptions</h3>
                <p className="text-black">
                  Certain bookings may involve additional service fees based on fare class, route complexity, or supplier requirements.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li><strong>Business or First Class fares:</strong> Up to $100 per passenger</li>
                  <li><strong>Multi-city bookings:</strong> Up to $100 per traveler</li>
                  <li><strong>Multiple airline or complex itineraries:</strong> Fees may vary by booking</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Need Help Understanding Fees?</h3>
                <p className="text-black">
                  For current taxes, fees, and charges related to your specific travel itinerary, please review the final fare breakdown during checkout or contact Tripyzo support.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Email: <a href="mailto:info@blinkitair.com" className="text-[#2563EB] underline">info@blinkitair.com</a></li>
                  <li>Phone: <a href="tel:+18445723292" className="text-[#2563EB] underline">x-xxx-xxx-xxxx</a></li>
                  <li>Address: 13217 Juliet Way, Frisco, TX 75035, USA</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Disclaimer</h3>
                <p className="text-black">
                  blinkitair.com is owned and operated by <strong>Aadi Travel LLC</strong>. Tripyzo provides independent travel booking assistance and is not directly affiliated with any airline, hotel, or travel supplier unless clearly stated.
                </p>
                <p className="text-black">
                  All fares, taxes, and fees are subject to availability, supplier rules, and government regulations until ticketed or confirmed.
                </p>
              </section>
            </div>
          )}

          {/* ADVERTISER POLICY */}
          {activeTab === 'advertiser' && (
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h2 className="text-2xl font-black text-[#4C1D95] flex items-center gap-2">
                  <Megaphone className="w-6 h-6 text-[#2563EB]" /> Advertiser Disclosure
                </h2>
                <p className="text-xs text-black mt-1">Last updated: January 2026</p>
              </div>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Introduction</h3>
                <p className="text-black">
                  At <strong>Tripyzo</strong>, transparency and trust are important parts of how we serve travelers. This Advertiser Disclosure explains how promotional content, travel offers, sponsored listings, and special deals may be displayed on <a href="https://blinkitair.com/" className="text-[#2563EB] underline" target="_blank" rel="noreferrer">blinkitair.com</a>.
                </p>
                <p className="text-black">
                  Our goal is to help travelers make informed booking decisions through clear communication, fair pricing information, and responsible advertising practices.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Our Commitment to Transparency</h3>
                <p className="text-black">
                  Tripyzo works to ensure that advertisements, travel deals, and promotional content displayed on our website are presented clearly and responsibly.
                </p>
                <p className="text-black">
                  We aim to provide accurate information about available flights, fares, travel services, and booking options so users can compare offers with confidence.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Accurate Promotion of Travel Offers</h3>
                <p className="text-black">
                  Any deal, discount, fare, or promotional travel offer shown on Tripyzo is intended to reflect genuine booking opportunities available at the time of display.
                </p>
                <p className="text-black">
                  We make reasonable efforts to communicate important pricing details, inclusions, limitations, and booking conditions before a customer completes a reservation.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Clear Terms &amp; Conditions</h3>
                <p className="text-black">
                  Promotional offers may include specific terms, restrictions, eligibility requirements, travel dates, cancellation rules, or supplier conditions.
                </p>
                <p className="text-black">
                  We encourage all customers to review the final booking details, fare rules, and supplier terms carefully before confirming any travel purchase.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Clear Distinction Between Offers</h3>
                <p className="text-black">
                  Tripyzo may display standard fares, discounted offers, limited-time promotions, or sponsored travel listings. We work to present these offers in a way that helps users understand the difference between regular pricing and promotional opportunities.
                </p>
                <p className="text-black">
                  Sponsored or promotional placements do not guarantee that an offer is the lowest available price for every traveler or itinerary.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Real-Time Pricing &amp; Availability</h3>
                <p className="text-black">
                  Flight prices, hotel rates, package pricing, and seat availability may change at any time due to supplier inventory, airline rules, demand, and real-time market conditions.
                </p>
                <p className="text-black">
                  While Tripyzo works to display updated pricing, final fares and availability are confirmed only during the booking process before payment or ticketing.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Regulatory &amp; Advertising Compliance</h3>
                <p className="text-black">
                  Tripyzo strives to follow applicable advertising laws, consumer protection standards, and responsible marketing practices.
                </p>
                <p className="text-black">
                  Promotional content is intended to be presented in a lawful, ethical, and transparent manner.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Customer Privacy Protection</h3>
                <p className="text-black">
                  Your privacy matters to us. Promotional communications and advertising-related activity are handled in accordance with our Privacy Policy.
                </p>
                <p className="text-black">
                  Tripyzo does not use customer information for unauthorized marketing purposes and works to protect personal data shared through our website and booking channels.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Continuous Improvement</h3>
                <p className="text-black">
                  We regularly review our advertising and promotional practices to improve clarity, accuracy, user experience, and customer trust. Customer feedback, industry standards, and best practices help us maintain responsible advertising on Tripyzo.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Contact Information</h3>
                <p className="text-black">
                  If you have questions about this Advertiser Disclosure, please contact Tripyzo:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Email: <a href="mailto:info@blinkitair.com" className="text-[#2563EB] underline">info@blinkitair.com</a></li>
                  <li>Phone: <a href="tel:+18445723292" className="text-[#2563EB] underline">x-xxx-xxx-xxxx</a></li>
                  <li>Address: 13217 Juliet Way, Frisco, TX 75035, USA</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Disclaimer</h3>
                <p className="text-black">
                  blinkitair.com is owned and operated by <strong>Aadi Travel LLC</strong>. Tripyzo is an independent travel agency and is not directly affiliated with airlines, hotels, or travel suppliers unless clearly stated.
                </p>
                <p className="text-black">
                  All fares, offers, promotions, and availability are subject to change until confirmed and ticketed.
                </p>
              </section>
            </div>
          )}

          {/* CCPA NOTICE */}
          {activeTab === 'ccpa' && (
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h2 className="text-2xl font-black text-[#4C1D95] flex items-center gap-2">
                  <UserCheck className="w-6 h-6 text-[#2563EB]" /> CCPA Notice
                </h2>
                <p className="text-xs text-black mt-1">Last updated: January 2026</p>
              </div>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Introduction</h3>
                <p className="text-black">
                  This California Consumer Privacy Act ("CCPA") Notice forms part of Tripyzo&apos;s Privacy Policy and applies exclusively to California residents ("Consumers," "you," or "your") as defined under applicable California privacy laws.
                </p>
                <p className="text-black">
                  Unless otherwise stated, terms used in this Notice carry the same meaning as provided in our Privacy Policy or under the CCPA. In the event of any inconsistency between this Notice and our Privacy Policy, this Notice shall govern solely with respect to California residents and their personal information.
                </p>
                <p className="text-black">
                  This Notice explains your rights regarding the collection, use, disclosure, and sharing of personal information by Tripyzo.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">About Tripyzo</h3>
                <p className="text-black">
                  blinkitair.com is an independent travel agency offering booking assistance for flights, hotels, vacation packages, and other travel-related services.
                </p>
                <p className="text-black">
                  We are not directly affiliated with airlines or travel suppliers unless explicitly stated. All bookings, fares, and pricing remain subject to availability and supplier approval.
                </p>
                <p className="text-black">
                  blinkitair.com is owned and operated by <strong>Aadi Travel LLC</strong>.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Right to Know What Personal Information We Collect</h3>
                <p className="text-black">
                  California residents have the right to request information regarding the personal information Tripyzo has collected about them during the previous 12 months.
                </p>
                <p className="text-black">
                  This may include details about:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>The categories of personal information collected</li>
                  <li>The sources from which information was collected</li>
                  <li>The business purpose for collecting the data</li>
                  <li>How the information has been used or disclosed</li>
                  <li>The categories of third parties receiving the data</li>
                </ul>
                <p className="text-black">
                  California residents may submit up to two verified requests within a 12-month period.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Right to Request Deletion</h3>
                <p className="text-black">
                  You have the right to request deletion of personal information collected by Tripyzo, subject to specific legal and operational exceptions permitted under California law.
                </p>
                <p className="text-black">
                  After verifying your identity and determining that no legal obligation requires us to retain the information, we will delete your data from our systems.
                </p>
                <p className="text-black">
                  In certain cases, we may retain limited information necessary to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Complete bookings or requested transactions</li>
                  <li>Detect fraud or security incidents</li>
                  <li>Comply with legal obligations</li>
                  <li>Resolve disputes and enforce agreements</li>
                  <li>Maintain records of privacy-related requests</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Right to Opt Out of “Sale” or Sharing of Personal Information</h3>
                <p className="text-black">
                  California residents have the right to opt out of the “sale” or sharing of personal information as defined under the CCPA.
                </p>
                <p className="text-black">
                  Tripyzo may share certain categories of information with advertising, analytics, or marketing service providers in a manner that may be considered a “sale” or “sharing” under California privacy laws.
                </p>
                <p className="text-black">
                  This does not include sensitive financial information or data shared solely for operational and booking purposes.
                </p>
                <p className="text-black">
                  To exercise your right to opt out, California users may use the <strong>“Do Not Sell or Share My Personal Information”</strong> link available on our website.
                </p>
                <p className="text-black">
                  Please note that opting out does not prevent us from sharing information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>With vendors or affiliates supporting operational services</li>
                  <li>As necessary to process bookings or fulfill requests</li>
                  <li>During mergers, acquisitions, or restructuring activities</li>
                  <li>Where disclosure is legally required</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">How to Exercise Your Rights</h3>
                <p className="text-black">
                  California residents may submit requests regarding access, deletion, or privacy rights using the following methods:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Email: <a href="mailto:info@blinkitair.com" className="text-[#2563EB] underline">info@blinkitair.com</a></li>
                  <li>Through the “Do Not Sell or Share My Personal Information” link available on our website</li>
                </ul>
                <p className="text-black">
                  We may need to verify your identity before processing certain requests in order to protect your personal information.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Non-Discrimination</h3>
                <p className="text-black">
                  Tripyzo will not discriminate against California residents for exercising any rights granted under the CCPA.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Denying services or bookings</li>
                  <li>Charging different prices or fees</li>
                  <li>Providing a different level of service quality</li>
                  <li>Imposing penalties for privacy requests</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Changes to This Notice</h3>
                <p className="text-black">
                  Tripyzo reserves the right to update or modify this CCPA Notice at any time. Changes will become effective immediately upon posting on this page.
                </p>
                <p className="text-black">
                  Continued use of our website and services after updates constitutes acceptance of the revised Notice.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Contact Information</h3>
                <p className="text-black">
                  If you have questions regarding this CCPA Notice or wish to exercise your California privacy rights, please contact us:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Email: <a href="mailto:info@blinkitair.com" className="text-[#2563EB] underline">info@blinkitair.com</a></li>
                  <li>Phone: <a href="tel:+18445723292" className="text-[#2563EB] underline">x-xxx-xxx-xxxx</a></li>
                  <li>Address: 13217 Juliet Way, Frisco, TX 75035, USA</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Disclaimer</h3>
                <p className="text-black">
                  Tripyzo provides travel booking assistance as an independent travel agency. We are not responsible for the actions, delays, errors, or omissions of airlines, hotels, or third-party travel providers.
                </p>
                <p className="text-black">
                  Your use of our website and services is at your own discretion, and we recommend reviewing all supplier policies carefully before completing any booking.
                </p>
              </section>
            </div>
          )}

          {/* GDPR NOTICE */}
          {activeTab === 'gdpr' && (
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h2 className="text-2xl font-black text-[#4C1D95] flex items-center gap-2">
                  <Globe className="w-6 h-6 text-[#2563EB]" /> GDPR Privacy Notice
                </h2>
                <p className="text-xs text-black mt-1">Last updated: January 2026</p>
              </div>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Introduction</h3>
                <p className="text-black">
                  This General Data Protection Regulation ("GDPR") Privacy Notice supplements Tripyzo&apos;s Privacy Policy and applies specifically to users located within the European Economic Area ("EEA") and the United Kingdom ("UK").
                </p>
                <p className="text-black">
                  This Notice explains how Tripyzo collects, stores, processes, and protects your personal information when you access our website <a href="https://blinkitair.com/" className="text-[#2563EB] underline" target="_blank" rel="noreferrer">blinkitair.com</a> and use our travel-related services.
                </p>
                <p className="text-black">
                  By using our website and services, you acknowledge and agree to the practices described in this GDPR Privacy Notice.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Who We Are</h3>
                <p className="text-black">
                  blinkitair.com is an independent travel agency offering booking assistance for flights, hotels, car rentals, vacation packages, and related travel services.
                </p>
                <p className="text-black">
                  We are not directly affiliated with airlines, hotel brands, or travel suppliers unless otherwise stated. All prices and fares are subject to availability and may change until ticketed.
                </p>
                <p className="text-black">
                  blinkitair.com is owned and operated by <strong>Aadi Travel LLC</strong>.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Data Controller</h3>
                <p className="text-black">
                  Tripyzo acts as the data controller for personal information collected through our website, customer support channels, and travel booking services.
                </p>
                <p className="text-black">
                  This includes information collected when you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Book or inquire about travel services</li>
                  <li>Contact customer support</li>
                  <li>Subscribe to promotional communications</li>
                  <li>Interact with our website or advertisements</li>
                  <li>Submit forms or participate in surveys</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Information We Collect</h3>
                <p className="text-black">
                  Depending on how you interact with our services, we may collect personal and technical information.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Full name and contact details</li>
                  <li>Email address and phone number</li>
                  <li>Billing and payment information</li>
                  <li>Travel itinerary and booking details</li>
                  <li>Passport or identification details if required</li>
                  <li>IP address and browser/device information</li>
                  <li>Website usage and analytics information</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">How We Use Your Information</h3>
                <p className="text-black">
                  We process your personal information for legitimate business and operational purposes.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Process and manage travel bookings</li>
                  <li>Provide customer service and booking assistance</li>
                  <li>Send confirmations and important travel updates</li>
                  <li>Improve website functionality and user experience</li>
                  <li>Prevent fraud and unauthorized transactions</li>
                  <li>Comply with legal and regulatory obligations</li>
                  <li>Send promotional offers where permitted by law</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">International Data Transfers</h3>
                <p className="text-black">
                  Your personal information may be transferred and processed outside the EEA or UK, including in the United States, in order to provide requested travel services.
                </p>
                <p className="text-black">
                  Where required, Tripyzo implements appropriate safeguards such as Standard Contractual Clauses (SCCs) and secure processing agreements with third-party providers.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Data Retention</h3>
                <p className="text-black">
                  We retain personal information only for as long as necessary to fulfill business, legal, and operational requirements.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Managing and completing bookings</li>
                  <li>Providing customer support</li>
                  <li>Preventing fraud and abuse</li>
                  <li>Meeting accounting and legal obligations</li>
                  <li>Resolving disputes or chargebacks</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">How We Protect Your Information</h3>
                <p className="text-black">
                  Tripyzo maintains commercially reasonable technical and organizational safeguards to help protect your information from unauthorized access, misuse, or disclosure.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>SSL-secured website encryption</li>
                  <li>Secure payment gateways</li>
                  <li>Restricted internal access controls</li>
                  <li>Fraud monitoring systems</li>
                  <li>PCI-compliant payment processing where applicable</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Sharing of Information</h3>
                <p className="text-black">
                  We may share your personal information with trusted third parties when necessary to provide our services.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Airlines and travel suppliers</li>
                  <li>Hotels and transportation providers</li>
                  <li>Payment processors</li>
                  <li>Analytics and hosting providers</li>
                  <li>Customer support partners</li>
                  <li>Government or legal authorities where required by law</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Your GDPR Rights</h3>
                <p className="text-black">
                  If you are located in the EEA or UK, you have important rights regarding your personal information.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Request access to your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Restrict or object to certain processing activities</li>
                  <li>Withdraw consent where applicable</li>
                  <li>Request portability of your data</li>
                  <li>Opt out of direct marketing communications</li>
                </ul>
                <p className="text-black">
                  To exercise your rights, please contact our support team using the information below.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Children&apos;s Privacy</h3>
                <p className="text-black">
                  Tripyzo does not knowingly collect personal information from individuals under the age of 18. If we become aware that such information has been collected unintentionally, we will promptly remove it from our systems.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Limitation of Liability</h3>
                <p className="text-black">
                  While we work hard to protect your information, no online system or internet transmission can be guaranteed to be 100% secure.
                </p>
                <p className="text-black">
                  Tripyzo shall not be responsible for unauthorized access caused by factors beyond our reasonable control.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Changes to This Notice</h3>
                <p className="text-black">
                  Tripyzo reserves the right to update or modify this GDPR Privacy Notice at any time. Changes will become effective immediately upon posting on this page.
                </p>
                <p className="text-black">
                  Continued use of our website and services after updates constitutes acceptance of the revised Notice.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Contact Information</h3>
                <p className="text-black">
                  If you have questions regarding this GDPR Privacy Notice or wish to exercise your privacy rights, please contact us:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Email: <a href="mailto:info@blinkitair.com" className="text-[#2563EB] underline">info@blinkitair.com</a></li>
                  <li>Phone: <a href="tel:+18445723292" className="text-[#2563EB] underline">x-xxx-xxx-xxxx</a></li>
                  <li>Address: 13217 Juliet Way, Frisco, TX 75035, USA</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-extrabold text-[#4C1D95]">Disclaimer</h3>
                <p className="text-black">
                  Tripyzo provides travel booking assistance as an independent travel agency. We are not responsible for the actions, omissions, delays, or service interruptions caused by airlines, hotels, or third-party travel providers.
                </p>
                <p className="text-black">
                  Your use of our website and services is at your own discretion, and we recommend reviewing all supplier policies before booking.
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
