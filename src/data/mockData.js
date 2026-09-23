// Mock Data for Seychelles Getaway / BlinkitAir

export const DESTINATIONS = [
  {
    id: 'la-digue',
    name: 'La Digue Island',
    tagline: 'Timeless island tranquility & granite boulders',
    description: 'La Digue is renowned for its iconic pink-sand beaches, towering granite boulders at Anse Source d\'Argent, and laid-back bicycle lifestyle. Experience an untouched paradise surrounded by turquoise Indian Ocean waters.',
    image: 'https://images.unsplash.com/photo-1589553460732-57ef51160601?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80',
    highlights: ['Anse Source d\'Argent', 'L\'Union Estate', 'Grand Anse Beach', 'Bicycle Island Tours'],
    bestTime: 'October to May (Optimal diving & calm seas)',
    flightConnectivity: 'Daily inter-island ferries & helicopter shuttles from Mahé & Praslin',
    category: 'Beaches & Relaxation',
    resortsCount: 18,
    avgPrice: '$180/night',
    topAttractions: [
      { name: 'Anse Source d\'Argent', desc: 'World famous beach framed by gigantic granite rock formations.' },
      { name: 'Veuve Reserve', desc: 'Protected sanctuary of the endangered Seychelles Black Flycatcher.' },
      { name: 'Nid d\'Aigle', desc: 'Highest peak of La Digue offering 360-degree panoramic ocean views.' }
    ]
  },
  {
    id: 'praslin',
    name: 'Praslin Island',
    tagline: 'Home of the legendary Coco de Mer & Vallée de Mai',
    description: 'Praslin is famous for the UNESCO World Heritage Vallée de Mai palm forest, pristine ivory sands of Anse Lazio, and world-class luxury golf resorts.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1600&q=80',
    highlights: ['Vallée de Mai UNESCO Site', 'Anse Lazio Beach', 'Anse Georgette', 'Lemuria Golf Course'],
    bestTime: 'Year-round (Best snorkeling March-May & Sept-Nov)',
    flightConnectivity: '15-min Air Seychelles scenic flights from Mahé International Airport',
    category: 'Nature & Wildlife',
    resortsCount: 26,
    avgPrice: '$240/night',
    topAttractions: [
      { name: 'Vallée de Mai Nature Reserve', desc: 'Prehistoric forest harboring the indigenous giant Coco de Mer palm.' },
      { name: 'Anse Lazio', desc: 'Consistently ranked among the top 10 beaches on Earth.' },
      { name: 'Curieuse Island Day Trip', desc: 'Meet giant Aldabra tortoises roaming freely in nature.' }
    ]
  },
  {
    id: 'mahe',
    name: 'Mahé Island',
    tagline: 'Cultural heart & gateway to the Archipelago',
    description: 'The largest island of Seychelles, Mahé blends vibrant Creole culture in Victoria with lush mountain peaks in Morne Seychellois National Park and over 65 glorious beaches.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1600&q=80',
    highlights: ['Victoria Sir Selwyn Market', 'Beau Vallon Beach', 'Morne Seychellois Park', 'Takamaka Rum Distillery'],
    bestTime: 'April, May, October, November (Calm wind conditions)',
    flightConnectivity: 'Seychelles International Airport (SEZ) main hub with direct flights worldwide',
    category: 'Culture & Shopping',
    resortsCount: 45,
    avgPrice: '$210/night',
    topAttractions: [
      { name: 'Victoria Clocktower & Market', desc: 'Bustling capital market filled with fresh spices, local fruits, and souvenirs.' },
      { name: 'Beau Vallon Bay', desc: 'Lively beach strip offering water sports, night markets, and seafood dining.' },
      { name: 'Copolia Trail Hike', desc: 'Short scenic hike delivering breathtaking aerial views of Victoria and marine parks.' }
    ]
  },
  {
    id: 'silhouette',
    name: 'Silhouette Island',
    tagline: 'Wild rainforest peaks & luxury eco-resorts',
    description: 'The third-largest granite island, Silhouette is a protected national park boasting ancient virgin rainforest, rare endemic flora, and pristine coral reefs.',
    image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1600&q=80',
    highlights: ['Mount Dauban Trail', 'Hilton Labriz Resort', 'Giant Tortoise Sanctuary', 'Snorkeling Reefs'],
    bestTime: 'May to October',
    flightConnectivity: '45-minute luxury catamaran boat transfer or 15-minute helicopter flight from Mahé',
    category: 'Luxury Resorts',
    resortsCount: 3,
    avgPrice: '$450/night',
    topAttractions: [
      { name: 'Mount Dauban Peak', desc: 'Reaching 774 meters enveloped in misty tropical cloud forest.' },
      { name: 'Anse Mondon Hike', desc: 'Secluded cove perfect for solitary snorkeling adventures.' }
    ]
  },
  {
    id: 'eden-island',
    name: 'Eden Island',
    tagline: 'Modern luxury marina living & private island villas',
    description: 'A prestige artificial island connected to Mahé by a bridge, offering luxury private villas, deep-water yacht marina, shopping plazas, and fine dining waterfront restaurants.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80',
    highlights: ['Deep Water Marina', 'Eden Plaza Shopping', 'Private Beach Clubs', 'Waterfront Dining'],
    bestTime: 'Year-round',
    flightConnectivity: '10 minutes drive from Seychelles International Airport (SEZ)',
    category: 'Luxury Resorts',
    resortsCount: 12,
    avgPrice: '$320/night',
    topAttractions: [
      { name: 'Eden Plaza', desc: 'Premier destination for boutiques, bank services, spa, and international dining.' },
      { name: 'Charter Yacht Marina', desc: 'Set sail on private catamarans across the Seychelles archipelago.' }
    ]
  },
  {
    id: 'bird-island',
    name: 'Bird Island',
    tagline: 'Wildlife sanctuary & nesting haven for millions of birds',
    description: 'A coral cay dedicated to eco-tourism, home to Esmeralda the world\'s largest free-roaming giant tortoise and over 1 million nesting soot terns.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
    highlights: ['Sooty Tern Colony', 'Esmeralda Giant Tortoise', 'Turtle Nesting Beaches', 'Stargazing Night Skies'],
    bestTime: 'May to October (Peak bird nesting season)',
    flightConnectivity: '30-minute charter light aircraft flight from Mahé',
    category: 'Diving & Marine',
    resortsCount: 1,
    avgPrice: '$380/night',
    topAttractions: [
      { name: 'Bird Sanctuary Trails', desc: 'Guided nature walks amongst millions of sea birds and hawksbill turtles.' }
    ]
  }
];

export const AIRLINES = [
  {
    id: 'air-seychelles',
    name: 'Air Seychelles',
    code: 'HM',
    logoText: 'Air Seychelles',
    tagline: 'The National Carrier of Seychelles',
    rating: 4.8,
    reviewsCount: 1240,
    hub: 'Seychelles International Airport (SEZ)',
    description: 'Air Seychelles is the national airline of the Republic of Seychelles, offering direct connections to Johannesburg, Mauritius, Mumbai, Tel Aviv, and frequent domestic island shuttles.',
    baggagePolicy: 'Economy: 23kg checked + 7kg cabin. Business: 2x 32kg checked + 12kg cabin.',
    cabinClasses: ['Economy Class', 'Business Class (Creole Spirit)'],
    destinationsServed: ['Mahé', 'Praslin', 'Johannesburg', 'Mumbai', 'Mauritius', 'Tel Aviv'],
    popularRoutes: [
      { origin: 'Johannesburg (JNB)', destination: 'Seychelles (SEZ)', price: '$499', duration: '5h 00m' },
      { origin: 'Mumbai (BOM)', destination: 'Seychelles (SEZ)', price: '$430', duration: '4h 30m' },
      { origin: 'Mauritius (MRU)', destination: 'Seychelles (SEZ)', price: '$380', duration: '2h 45m' }
    ],
    features: ['Creole Gourmet Meals', 'Personal Touch Screen Entertainment', 'Complimentary Island Drinks', 'Inter-island Air Shuttles']
  },
  {
    id: 'emirates',
    name: 'Emirates',
    code: 'EK',
    logoText: 'Emirates',
    tagline: 'Fly Better with 5-Star Luxury Connections',
    rating: 4.9,
    reviewsCount: 3820,
    hub: 'Dubai International Airport (DXB)',
    description: 'Emirates operates double-daily flights to Seychelles (SEZ) via Dubai, connecting travelers seamlessly from North America, Europe, Asia, and Australia with award-winning inflight luxury.',
    baggagePolicy: 'Economy: 30kg checked + 7kg cabin. Business: 40kg checked + 10kg cabin. First: 50kg checked + 15kg cabin.',
    cabinClasses: ['Economy Class', 'Premium Economy', 'Business Class', 'First Class Private Suites'],
    destinationsServed: ['Seychelles via Dubai from 140+ Worldwide Gateways'],
    popularRoutes: [
      { origin: 'London (LHR)', destination: 'Seychelles (SEZ)', price: '$780', duration: '12h 45m (1 stop)' },
      { origin: 'New York (JFK)', destination: 'Seychelles (SEZ)', price: '$950', duration: '17h 30m (1 stop)' },
      { origin: 'Frankfurt (FRA)', destination: 'Seychelles (SEZ)', price: '$720', duration: '11h 50m (1 stop)' }
    ],
    features: ['ICE Inflight Entertainment with 6,500+ Channels', 'Onboard Lounge & Bar on A380', 'Gourmet Multi-course Cuisine', 'Free High-speed Wi-Fi for Skywards']
  },
  {
    id: 'qatar-airways',
    name: 'Qatar Airways',
    code: 'QR',
    logoText: 'Qatar Airways',
    tagline: 'World\'s Best Airline with Qsuite Business Class',
    rating: 4.9,
    reviewsCount: 2950,
    hub: 'Hamad International Airport (DOH)',
    description: 'Fly to Seychelles with Qatar Airways, recipient of multiple Skytrax Airline of the Year awards. Enjoy state-of-the-art Boeing 787 Dreamliner service to Mahé via Doha.',
    baggagePolicy: 'Economy: 30kg - 35kg. Business: 40kg. First: 50kg.',
    cabinClasses: ['Economy Class', 'Qsuite Business Class'],
    destinationsServed: ['Mahé (SEZ) via Hamad International Airport Doha'],
    popularRoutes: [
      { origin: 'Paris (CDG)', destination: 'Seychelles (SEZ)', price: '$760', duration: '12h 15m (1 stop)' },
      { origin: 'Washington (IAD)', destination: 'Seychelles (SEZ)', price: '$980', duration: '18h 10m (1 stop)' },
      { origin: 'Manchester (MAN)', destination: 'Seychelles (SEZ)', price: '$790', duration: '13h 05m (1 stop)' }
    ],
    features: ['Award-winning Qsuite with Sliding Privacy Doors', 'Oryx One Inflight Entertainment', 'On-demand Fine Dining', 'Spacious Legroom']
  },
  {
    id: 'etihad-airways',
    name: 'Etihad Airways',
    code: 'EY',
    logoText: 'Etihad Airways',
    tagline: 'Exceptional Hospitality via Abu Dhabi',
    rating: 4.7,
    reviewsCount: 1890,
    hub: 'Zayed International Airport (AUH)',
    description: 'Etihad Airways connects global destinations to Seychelles with seamless transfers in Abu Dhabi, offering boutique service and environmental innovation.',
    baggagePolicy: 'Economy: 30kg checked. Business: 40kg. First: 50kg.',
    cabinClasses: ['Economy Class', 'Business Studio', 'First Apartment'],
    destinationsServed: ['Mahé (SEZ) via Abu Dhabi'],
    popularRoutes: [
      { origin: 'Rome (FCO)', destination: 'Seychelles (SEZ)', price: '$710', duration: '11h 30m (1 stop)' },
      { origin: 'Chicago (ORD)', destination: 'Seychelles (SEZ)', price: '$940', duration: '17h 45m (1 stop)' }
    ],
    features: ['Wellness Amenities', 'Eco-friendly Cabin Design', 'Custom Comfort Seats', 'Boutique Service']
  },
  {
    id: 'turkish-airlines',
    name: 'Turkish Airlines',
    code: 'TK',
    logoText: 'Turkish Airlines',
    tagline: 'Connecting More Countries Than Any Other Airline',
    rating: 4.8,
    reviewsCount: 2100,
    hub: 'Istanbul Airport (IST)',
    description: 'Fly to Seychelles with Turkish Airlines via Istanbul, enjoying legendary Turkish hospitality, gourmet Flying Chefs, and wide transatlantic connections.',
    baggagePolicy: 'Economy: 2x 23kg. Business: 2x 32kg.',
    cabinClasses: ['Economy Class', 'Business Class'],
    destinationsServed: ['Mahé (SEZ) via Istanbul'],
    popularRoutes: [
      { origin: 'London (LHR)', destination: 'Seychelles (SEZ)', price: '$740', duration: '13h 20m (1 stop)' },
      { origin: 'Toronto (YYZ)', destination: 'Seychelles (SEZ)', price: '$990', duration: '19h 00m (1 stop)' }
    ],
    features: ['Flying Chef Service', 'Touristanbul Free Transit Tours', 'Generous Baggage Allowance', 'Comfortable Seating']
  },
  {
    id: 'ethiopian-airlines',
    name: 'Ethiopian Airlines',
    code: 'ET',
    logoText: 'Ethiopian Airlines',
    tagline: 'The New Spirit of Africa',
    rating: 4.6,
    reviewsCount: 1420,
    hub: 'Addis Ababa Bole International Airport (ADD)',
    description: 'Ethiopian Airlines offers affordable and convenient connections across Africa, South America, and Europe directly to Seychelles International Airport.',
    baggagePolicy: 'Economy: 2x 23kg checked. Cloud Nine Business: 2x 32kg.',
    cabinClasses: ['Economy Class', 'Cloud Nine Business Class'],
    destinationsServed: ['Mahé (SEZ) via Addis Ababa'],
    popularRoutes: [
      { origin: 'London (LHR)', destination: 'Seychelles (SEZ)', price: '$650', duration: '12h 00m (1 stop)' },
      { origin: 'Sao Paulo (GRU)', destination: 'Seychelles (SEZ)', price: '$890', duration: '16h 30m (1 stop)' }
    ],
    features: ['African Gourmet Dishes', 'Competitive Fares', 'Wide-body Aircraft', 'Star Alliance Miles']
  }
];

export const BLOGS = [
  {
    id: 'top-10-beaches-seychelles',
    title: 'Top 10 Most Breathtaking Beaches in Seychelles for 2026',
    excerpt: 'From the famous granite cliffs of Anse Source d\'Argent to hidden secluded coves on Praslin, explore the ultimate island beach guide.',
    category: 'Travel Tips',
    readTime: '6 min read',
    date: 'Sept 15, 2026',
    author: 'Elena Rostova',
    authorRole: 'Senior Seychelles Specialist',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p class="lead">Seychelles is world-renowned for having some of the most spectacular coastlines on the planet. With turquoise sea waters, powder-soft white sand, and ancient granite boulders, each island offers a distinct beach experience.</p>
      
      <h3>1. Anse Source d'Argent (La Digue)</h3>
      <p>Regularly voted as the most photographed beach in the world, Anse Source d'Argent is famous for its dramatic granite boulders, shallow lagoons, and coral reefs that make it perfect for wading and snorkeling.</p>
      
      <h3>2. Anse Lazio (Praslin)</h3>
      <p>Framed by lush Takamaka trees and giant granite rocks on both ends, Anse Lazio features crystal clear deep blue waters and pristine ivory sand with no coral reefs in the immediate swimming area.</p>
      
      <h3>3. Anse Intendance (Mahé)</h3>
      <p>Located in the wild southern tip of Mahé, Anse Intendance offers half a mile of pure white sand with magnificent rolling waves—ideal for bodyboarding and beach strolls.</p>
      
      <h3>Pro-Tip for Travelers:</h3>
      <p>Always check tide schedules when visiting La Digue beaches as low tide reveals magnificent shallow natural pools that are perfect for young children and wildlife spotting!</p>
    `
  },
  {
    id: 'ultimate-packing-guide-seychelles',
    title: 'The Ultimate Seychelles Packing Guide: What to Bring & What to Leave',
    excerpt: 'Avoid overpacking! Discover essential items for island hopping, eco-friendly reef-safe sunscreen rules, and dress codes for luxury resorts.',
    category: 'Packing Guides',
    readTime: '5 min read',
    date: 'Sept 10, 2026',
    author: 'Marcus Vance',
    authorRole: 'Travel Logistics Expert',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p class="lead">Packing for tropical paradise requires a balance between lightweight beachwear, island hiking gear, and smart casual attire for evening resort dining.</p>
      
      <h3>Essential Packing Items:</h3>
      <ul>
        <li><strong>Reef-Safe Sunscreen:</strong> Seychelles takes ocean conservation seriously. Protect coral reefs by using biodegradable, zinc-based sunscreens.</li>
        <li><strong>Dry Bags:</strong> Invaluable when traveling between islands on boat charters or catamarans to keep electronics safe.</li>
        <li><strong>Water Shoes:</strong> Essential for exploring granite tidal pools and coral reef flats safely.</li>
        <li><strong>Power Adapter:</strong> Seychelles uses UK 3-pin Type G electrical outlets (240V).</li>
      </ul>
    `
  },
  {
    id: 'island-hopping-guide-seychelles',
    title: 'How to Plan the Perfect Seychelles Island Hopping Itinerary',
    excerpt: 'Step-by-step guide to combining Mahé, Praslin, and La Digue into a seamless 7-day or 10-day tropical getaway.',
    category: 'Island Hopping',
    readTime: '8 min read',
    date: 'Aug 28, 2026',
    author: 'Sophia Chen',
    authorRole: 'Destination Planner',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p class="lead">Why stay on just one island when Seychelles offers 115 unique islands to explore? An island-hopping itinerary allows you to experience vibrant city culture, prehistoric forests, and remote luxury beaches in a single trip.</p>
      
      <h3>Recommended 7-Day Itinerary:</h3>
      <ul>
        <li><strong>Days 1-3 (Mahé):</strong> Victoria market, Copolia trail, Morne Seychellois, and Beau Vallon nightlife.</li>
        <li><strong>Days 4-5 (Praslin):</strong> Vallée de Mai UNESCO palm forest, Anse Lazio, and Curieuse Island tortoise sanctuary.</li>
        <li><strong>Days 6-7 (La Digue):</strong> Rent a bicycle, photograph Anse Source d'Argent, and sip fresh coconuts at Grand Anse.</li>
      </ul>
    `
  },
  {
    id: 'best-time-to-visit-seychelles',
    title: 'Best Time to Visit Seychelles: Month-by-Month Weather & Scuba Guide',
    excerpt: 'Learn when trade winds shift, optimal months for scuba diving visibility (up to 30 meters), and bird-watching seasons.',
    category: 'Travel Tips',
    readTime: '7 min read',
    date: 'Aug 14, 2026',
    author: 'David Sterling',
    authorRole: 'Meteorology & Marine Guide',
    image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p class="lead">Seychelles enjoys a tropical warm climate year-round with temperatures ranging between 24°C (75°F) and 32°C (90°F). However, trade winds dictate the best sea conditions for diving, sailing, and beach choices.</p>
      
      <h3>April - May & October - November:</h3>
      <p>These transitional months between trade winds offer the calmest seas, warm weather, and incredible underwater visibility exceeding 30 meters—making it peak season for divers and snorkelers.</p>
    `
  }
];

export const FLIGHT_SEARCH_RESULTS = [
  {
    id: 'fl-101',
    airline: 'Air Seychelles',
    airlineCode: 'HM',
    flightNumber: 'HM 188',
    origin: 'JNB',
    originCity: 'Johannesburg',
    destination: 'SEZ',
    destCity: 'Seychelles (Mahé)',
    departTime: '09:00 AM',
    arrivalTime: '04:05 PM',
    duration: '5h 05m',
    stops: 0,
    stopDetails: 'Direct Flight',
    price: 499,
    cabin: 'Economy Standard',
    baggage: '1x 23kg Checked + 7kg Carry-on',
    seatsLeft: 4,
    badge: 'Best Value'
  },
  {
    id: 'fl-102',
    airline: 'Emirates',
    airlineCode: 'EK',
    flightNumber: 'EK 705',
    origin: 'DXB',
    originCity: 'Dubai',
    destination: 'SEZ',
    destCity: 'Seychelles (Mahé)',
    departTime: '02:15 AM',
    arrivalTime: '06:45 AM',
    duration: '4h 30m',
    stops: 0,
    stopDetails: 'Direct Flight',
    price: 680,
    cabin: 'Economy Flex',
    baggage: '1x 30kg Checked + 7kg Carry-on',
    seatsLeft: 7,
    badge: 'Most Popular'
  },
  {
    id: 'fl-103',
    airline: 'Qatar Airways',
    airlineCode: 'QR',
    flightNumber: 'QR 678',
    origin: 'LHR',
    originCity: 'London Heathrow',
    destination: 'SEZ',
    destCity: 'Seychelles (Mahé)',
    departTime: '08:30 PM',
    arrivalTime: '01:20 PM (+1 day)',
    duration: '12h 50m',
    stops: 1,
    stopDetails: '1 Stop in Doha (DOH, 1h 40m layover)',
    price: 780,
    cabin: 'Economy Value',
    baggage: '1x 30kg Checked + 7kg Carry-on',
    seatsLeft: 3,
    badge: '5-Star Rated'
  },
  {
    id: 'fl-104',
    airline: 'Ethiopian Airlines',
    airlineCode: 'ET',
    flightNumber: 'ET 879',
    origin: 'LHR',
    originCity: 'London Heathrow',
    destination: 'SEZ',
    destCity: 'Seychelles (Mahé)',
    departTime: '09:00 PM',
    arrivalTime: '02:45 PM (+1 day)',
    duration: '13h 45m',
    stops: 1,
    stopDetails: '1 Stop in Addis Ababa (ADD, 2h 10m layover)',
    price: 645,
    cabin: 'Economy Standard',
    baggage: '2x 23kg Checked + 7kg Carry-on',
    seatsLeft: 9,
    badge: 'Cheapest Option'
  },
  {
    id: 'fl-105',
    airline: 'Etihad Airways',
    airlineCode: 'EY',
    flightNumber: 'EY 622',
    origin: 'JFK',
    originCity: 'New York JFK',
    destination: 'SEZ',
    destCity: 'Seychelles (Mahé)',
    departTime: '03:40 PM',
    arrivalTime: '03:15 PM (+1 day)',
    duration: '17h 35m',
    stops: 1,
    stopDetails: '1 Stop in Abu Dhabi (AUH, 2h 15m layover)',
    price: 940,
    cabin: 'Economy Choice',
    baggage: '2x 23kg Checked + 7kg Carry-on',
    seatsLeft: 2,
    badge: 'Premium Comfort'
  }
];

export const HOTELS = [
  {
    id: 'four-seasons-mahe',
    name: 'Four Seasons Resort Seychelles',
    location: 'Petite Anse, Mahé Island',
    rating: 5,
    stars: '5 Star Luxury',
    pricePerNight: 850,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    amenities: ['Private Plunge Pool', 'Hilltop Spa', 'Oceanfront Dining', 'Butler Service', 'Kids Club'],
    highlights: 'Treehouse-style luxury villas nestled in lush tropical hillside facing Petite Anse beach.'
  },
  {
    id: 'raffles-praslin',
    name: 'Raffles Seychelles',
    location: 'Anse Takamaka, Praslin Island',
    rating: 5,
    stars: '5 Star Resort',
    pricePerNight: 720,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    amenities: ['Infiniti Pool', 'Raffles Spa', 'Private Pavilion Dining', 'Direct Beach Access'],
    highlights: 'Panoramic luxury villas with private infinity pools close to Curieuse Island and Vallée de Mai.'
  },
  {
    id: 'constance-ephelia',
    name: 'Constance Ephelia Resort',
    location: 'Port Launay, Mahé Island',
    rating: 4.8,
    stars: '5 Star Family Resort',
    pricePerNight: 460,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    amenities: ['5 Restaurants', 'Zip-lining Park', 'Mangrove Kayaking', 'Largest Spa in Seychelles'],
    highlights: 'Spans 120 hectares of lush tropical greenery overlooking two idyllic marine park beaches.'
  },
  {
    id: 'domaines-de-lorangerie',
    name: 'Le Domaine de L\'Orangeraie Resort & Spa',
    location: 'Anse Severe, La Digue Island',
    rating: 4.9,
    stars: 'Boutique Luxury',
    pricePerNight: 510,
    image: 'https://images.unsplash.com/photo-1589553460732-57ef51160601?auto=format&fit=crop&w=1200&q=80',
    amenities: ['Barefoot Luxury Villas', 'Zen Lagoon Pool', 'Lagoon Spa', 'Free Bicycles'],
    highlights: 'Romantic sanctuary designed with natural island timber and Zen elegance on La Digue.'
  }
];

export const CAR_RENTALS = [
  {
    id: 'car-compact',
    name: 'Hyundai i10 / Kia Picanto',
    category: 'Compact Automatic',
    capacity: '4 Passengers • 2 Bags',
    islandAvailability: ['Mahé Island', 'Praslin Island'],
    pricePerDay: 45,
    transmission: 'Automatic',
    airCon: true,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    features: ['Unlimited Mileage', 'Free Airport Delivery', 'Collision Damage Waiver', '24/7 Roadside Assistance']
  },
  {
    id: 'car-suv',
    name: 'Suzuki Jimny 4x4 / Creta',
    category: 'Compact SUV 4WD',
    capacity: '5 Passengers • 3 Bags',
    islandAvailability: ['Mahé Island', 'Praslin Island'],
    pricePerDay: 75,
    transmission: 'Automatic 4x4',
    airCon: true,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    features: ['Hill Climb Power', 'High Ground Clearance', 'Free Island Pick-up', 'Zero Excess Insurance Available']
  },
  {
    id: 'car-luxury',
    name: 'BMW 4 Series Convertible / Open SUV',
    category: 'Luxury Open Top',
    capacity: '4 Passengers • 2 Bags',
    islandAvailability: ['Mahé Island'],
    pricePerDay: 140,
    transmission: 'Automatic',
    airCon: true,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
    features: ['Leather Interior', 'Soft-top Convertible', 'VIP Concierge Drop-off', 'Comprehensive Coverage']
  }
];

export const HOLIDAY_PACKAGES = [
  {
    id: 'pkg-honeymoon-luxury',
    title: 'Seychelles Honeymoon & Luxury Escape',
    duration: '7 Days / 6 Nights',
    price: 1899,
    originalPrice: 2450,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    destinationsIncluded: ['Mahé (3 Nights)', 'Praslin (3 Nights)', 'Day trip to La Digue'],
    inclusions: [
      '5-Star Oceanfront Villa Resort Accommodation',
      'Daily Breakfast & Gourmet Candlelight Dinner',
      'Inter-island Scenic Flights & Catamaran Transfers',
      'Sunset Sailing Cruise with Champagne',
      '24/7 Private Concierge Support'
    ],
    badge: 'Popular for Couples'
  },
  {
    id: 'pkg-island-hopper-adventure',
    title: 'Ultimate 3-Island Hopper Explorer',
    duration: '10 Days / 9 Nights',
    price: 2399,
    originalPrice: 2990,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    destinationsIncluded: ['Mahé (3 Nights)', 'Praslin (3 Nights)', 'La Digue (3 Nights)'],
    inclusions: [
      'Boutique Resort & Beach Lodge Stays',
      'Vallée de Mai UNESCO Guided Tour',
      'La Digue Bicycle Rental & Anse Source d\'Argent Entry',
      'All Ferry & Domestic Flight Connections',
      'Daily Buffet Breakfasts'
    ],
    badge: 'Best Seller'
  },
  {
    id: 'pkg-family-paradise',
    title: 'Seychelles Family Tropical Paradise',
    duration: '8 Days / 7 Nights',
    price: 1650,
    originalPrice: 2100,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    destinationsIncluded: ['Mahé Island Luxury Family Villa'],
    inclusions: [
      '2-Bedroom Ocean Suite Accommodation',
      'Curieuse Island Giant Tortoise Sanctuary Excursion',
      'Family Kayaking & Glass Bottom Boat Tour',
      'Kids Club Access & Complimentary Water Sports',
      'Private Airport Transfers'
    ],
    badge: 'Family Special'
  }
];
