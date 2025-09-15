const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  // Template
  [
  {
    "title": "Cozy Beachfront Cottage",
    "description": "Perfectly located near attractions, dining, and shopping.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1891,
    "location": "Paris",
    "country": "France"
  },
  {
    "title": "Cozy Beachfront Cottage",
    "description": "Stay close to nature without giving up on comfort and style.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1519817914152-22f90e0a46b5?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1505,
    "location": "Cusco",
    "country": "Peru"
  },
  {
    "title": "Island Bungalow",
    "description": "Designed for relaxation, privacy, and memorable adventures.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3901,
    "location": "Tuscany",
    "country": "Italy"
  },
  {
    "title": "Modern City Apartment",
    "description": "Experience culture, history, and comfort in one unique stay.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2117,
    "location": "Aspen",
    "country": "United States"
  },
  {
    "title": "Arctic Glass Igloo",
    "description": "Experience culture, history, and comfort in one unique stay.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60"
    },
    "price": 977,
    "location": "Dubai",
    "country": "UAE"
  },
  {
    "title": "Ski-In Ski-Out Chalet",
    "description": "Experience culture, history, and comfort in one unique stay.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2725,
    "location": "Cape Town",
    "country": "South Africa"
  },
  {
    "title": "Secluded Jungle Retreat",
    "description": "Perfectly located near attractions, dining, and shopping.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1507,
    "location": "Dubai",
    "country": "UAE"
  },
  {
    "title": "Beach Hut Paradise",
    "description": "Wake up to breathtaking views and unforgettable experiences.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4777,
    "location": "Paris",
    "country": "France"
  },
  {
    "title": "Cultural Heritage House",
    "description": "Ideal for couples and families looking for a peaceful vacation.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2183,
    "location": "Queenstown",
    "country": "New Zealand"
  },
  {
    "title": "Rainforest Treehouse",
    "description": "Perfectly located near attractions, dining, and shopping.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4932,
    "location": "Lapland",
    "country": "Finland"
  },
  {
    "title": "Urban Loft Escape",
    "description": "Ideal for couples and families looking for a peaceful vacation.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4028,
    "location": "Lapland",
    "country": "Finland"
  },
  {
    "title": "Ski-In Ski-Out Chalet",
    "description": "Ideal for couples and families looking for a peaceful vacation.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3429,
    "location": "Queenstown",
    "country": "New Zealand"
  },
  {
    "title": "Cozy Beachfront Cottage",
    "description": "Escape to this charming retreat with stunning views and cozy interiors.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1519817914152-22f90e0a46b5?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3568,
    "location": "Aspen",
    "country": "United States"
  },
  {
    "title": "Mountain View Cabin",
    "description": "Reconnect with nature in this eco-friendly accommodation.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2483,
    "location": "Santorini",
    "country": "Greece"
  },
  {
    "title": "Rainforest Treehouse",
    "description": "Designed for relaxation, privacy, and memorable adventures.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3794,
    "location": "Reykjavik",
    "country": "Iceland"
  },
  {
    "title": "Luxury Penthouse",
    "description": "Escape to this charming retreat with stunning views and cozy interiors.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1101,
    "location": "Marrakech",
    "country": "Morocco"
  },
  {
    "title": "Cliffside Villa",
    "description": "Modern amenities meet natural surroundings for a perfect getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4874,
    "location": "Paris",
    "country": "France"
  },
  {
    "title": "Ski-In Ski-Out Chalet",
    "description": "Perfectly located near attractions, dining, and shopping.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2248,
    "location": "Dubai",
    "country": "UAE"
  },
  {
    "title": "Desert Luxury Camp",
    "description": "Escape to this charming retreat with stunning views and cozy interiors.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4275,
    "location": "Marrakech",
    "country": "Morocco"
  },
  {
    "title": "Safari Tent",
    "description": "Reconnect with nature in this eco-friendly accommodation.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4710,
    "location": "Dubai",
    "country": "UAE"
  },
  {
    "title": "Island Bungalow",
    "description": "Enjoy the perfect mix of adventure and relaxation in this unique stay.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1155,
    "location": "Queenstown",
    "country": "New Zealand"
  },
  {
    "title": "Modern City Apartment",
    "description": "Wake up to breathtaking views and unforgettable experiences.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3668,
    "location": "Banff",
    "country": "Canada"
  },
  {
    "title": "Desert Luxury Camp",
    "description": "Wake up to breathtaking views and unforgettable experiences.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60"
    },
    "price": 665,
    "location": "Marrakech",
    "country": "Morocco"
  },
  {
    "title": "Lakeside Wooden Lodge",
    "description": "Enjoy the perfect mix of adventure and relaxation in this unique stay.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1301,
    "location": "Cusco",
    "country": "Peru"
  },
  {
    "title": "Lakeside Wooden Lodge",
    "description": "Designed for relaxation, privacy, and memorable adventures.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1519817914152-22f90e0a46b5?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1205,
    "location": "Malibu",
    "country": "United States"
  },
  {
    "title": "Safari Tent",
    "description": "Designed for relaxation, privacy, and memorable adventures.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2807,
    "location": "Barcelona",
    "country": "Spain"
  },
  {
    "title": "Mountain View Cabin",
    "description": "Escape to this charming retreat with stunning views and cozy interiors.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1761,
    "location": "Santorini",
    "country": "Greece"
  },
  {
    "title": "Urban Loft Escape",
    "description": "Ideal for couples and families looking for a peaceful vacation.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3292,
    "location": "Cusco",
    "country": "Peru"
  },
  {
    "title": "Boutique Studio",
    "description": "Designed for relaxation, privacy, and memorable adventures.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3623,
    "location": "Lapland",
    "country": "Finland"
  },
  {
    "title": "Urban Loft Escape",
    "description": "Experience culture, history, and comfort in one unique stay.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60"
    },
    "price": 722,
    "location": "Cusco",
    "country": "Peru"
  },
  {
    "title": "Safari Tent",
    "description": "Designed for relaxation, privacy, and memorable adventures.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4323,
    "location": "Reykjavik",
    "country": "Iceland"
  },
  {
    "title": "Luxury Penthouse",
    "description": "Modern amenities meet natural surroundings for a perfect getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1519817914152-22f90e0a46b5?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3901,
    "location": "Barcelona",
    "country": "Spain"
  },
  {
    "title": "Arctic Glass Igloo",
    "description": "Experience culture, history, and comfort in one unique stay.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=60"
    },
    "price": 671,
    "location": "Phuket",
    "country": "Thailand"
  },
  {
    "title": "Cultural Heritage House",
    "description": "Stay close to nature without giving up on comfort and style.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2751,
    "location": "Tuscany",
    "country": "Italy"
  },
  {
    "title": "Island Bungalow",
    "description": "Escape to this charming retreat with stunning views and cozy interiors.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4482,
    "location": "Kyoto",
    "country": "Japan"
  },
  {
    "title": "Mountain View Cabin",
    "description": "Reconnect with nature in this eco-friendly accommodation.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1935,
    "location": "Cape Town",
    "country": "South Africa"
  },
  {
    "title": "Cultural Heritage House",
    "description": "Experience culture, history, and comfort in one unique stay.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2383,
    "location": "Barcelona",
    "country": "Spain"
  },
  {
    "title": "Lakeside Wooden Lodge",
    "description": "Designed for relaxation, privacy, and memorable adventures.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2486,
    "location": "Bali",
    "country": "Indonesia"
  },
  {
    "title": "Modern City Apartment",
    "description": "Modern amenities meet natural surroundings for a perfect getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2195,
    "location": "Tuscany",
    "country": "Italy"
  },
  {
    "title": "Charming Countryside Villa",
    "description": "Reconnect with nature in this eco-friendly accommodation.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4771,
    "location": "Cusco",
    "country": "Peru"
  },
  {
    "title": "Rainforest Treehouse",
    "description": "Designed for relaxation, privacy, and memorable adventures.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3803,
    "location": "Tuscany",
    "country": "Italy"
  },
  {
    "title": "Urban Loft Escape",
    "description": "Enjoy the perfect mix of adventure and relaxation in this unique stay.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2510,
    "location": "Paris",
    "country": "France"
  },
  {
    "title": "Boutique Studio",
    "description": "Designed for relaxation, privacy, and memorable adventures.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2991,
    "location": "Berlin",
    "country": "Germany"
  },
  {
    "title": "Cultural Heritage House",
    "description": "Modern amenities meet natural surroundings for a perfect getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3866,
    "location": "Marrakech",
    "country": "Morocco"
  },
  {
    "title": "Arctic Glass Igloo",
    "description": "Wake up to breathtaking views and unforgettable experiences.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2920,
    "location": "Petra",
    "country": "Jordan"
  },
  {
    "title": "Rustic Farmhouse",
    "description": "Stay close to nature without giving up on comfort and style.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1100,
    "location": "Santorini",
    "country": "Greece"
  },
  {
    "title": "Cultural Heritage House",
    "description": "Experience culture, history, and comfort in one unique stay.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4818,
    "location": "Kyoto",
    "country": "Japan"
  },
  {
    "title": "Charming Countryside Villa",
    "description": "Designed for relaxation, privacy, and memorable adventures.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3770,
    "location": "Cusco",
    "country": "Peru"
  },
  {
    "title": "Mountain View Cabin",
    "description": "Perfectly located near attractions, dining, and shopping.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2086,
    "location": "Tuscany",
    "country": "Italy"
  },
  {
    "title": "Charming Countryside Villa",
    "description": "Escape to this charming retreat with stunning views and cozy interiors.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4585,
    "location": "Phuket",
    "country": "Thailand"
  },
  {
    "title": "Cozy Beachfront Cottage",
    "description": "Wake up to breathtaking views and unforgettable experiences.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4572,
    "location": "Barcelona",
    "country": "Spain"
  },
  {
    "title": "Boutique Studio",
    "description": "Wake up to breathtaking views and unforgettable experiences.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1866,
    "location": "Banff",
    "country": "Canada"
  },
  {
    "title": "Cliffside Villa",
    "description": "Enjoy the perfect mix of adventure and relaxation in this unique stay.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3447,
    "location": "Dubai",
    "country": "UAE"
  },
  {
    "title": "Cliffside Villa",
    "description": "Perfectly located near attractions, dining, and shopping.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2570,
    "location": "Cusco",
    "country": "Peru"
  },
  {
    "title": "Lakeside Wooden Lodge",
    "description": "Ideal for couples and families looking for a peaceful vacation.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1765,
    "location": "Aspen",
    "country": "United States"
  },
  {
    "title": "Cozy Beachfront Cottage",
    "description": "Modern amenities meet natural surroundings for a perfect getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3822,
    "location": "Bali",
    "country": "Indonesia"
  },
  {
    "title": "Secluded Jungle Retreat",
    "description": "Designed for relaxation, privacy, and memorable adventures.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3695,
    "location": "Santorini",
    "country": "Greece"
  },
  {
    "title": "Cozy Beachfront Cottage",
    "description": "Designed for relaxation, privacy, and memorable adventures.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60"
    },
    "price": 566,
    "location": "Aspen",
    "country": "United States"
  },
  {
    "title": "Luxury Penthouse",
    "description": "Wake up to breathtaking views and unforgettable experiences.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3253,
    "location": "Paris",
    "country": "France"
  },
  {
    "title": "Rainforest Treehouse",
    "description": "Ideal for couples and families looking for a peaceful vacation.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1404,
    "location": "Queenstown",
    "country": "New Zealand"
  },
  {
    "title": "Secluded Jungle Retreat",
    "description": "Reconnect with nature in this eco-friendly accommodation.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1502,
    "location": "Berlin",
    "country": "Germany"
  },
  {
    "title": "Modern City Apartment",
    "description": "Ideal for couples and families looking for a peaceful vacation.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1452,
    "location": "Cappadocia",
    "country": "Turkey"
  },
  {
    "title": "Modern City Apartment",
    "description": "Experience culture, history, and comfort in one unique stay.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3314,
    "location": "Cusco",
    "country": "Peru"
  },
  {
    "title": "Cliffside Villa",
    "description": "Ideal for couples and families looking for a peaceful vacation.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2549,
    "location": "Banff",
    "country": "Canada"
  },
  {
    "title": "Rainforest Treehouse",
    "description": "Wake up to breathtaking views and unforgettable experiences.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2139,
    "location": "Reykjavik",
    "country": "Iceland"
  },
  {
    "title": "Lakeside Wooden Lodge",
    "description": "Enjoy the perfect mix of adventure and relaxation in this unique stay.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1566,
    "location": "Barcelona",
    "country": "Spain"
  },
  {
    "title": "Island Bungalow",
    "description": "Modern amenities meet natural surroundings for a perfect getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4775,
    "location": "Cappadocia",
    "country": "Turkey"
  },
  {
    "title": "Beach Hut Paradise",
    "description": "Escape to this charming retreat with stunning views and cozy interiors.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=60"
    },
    "price": 631,
    "location": "Dubai",
    "country": "UAE"
  },
  {
    "title": "Cultural Heritage House",
    "description": "Enjoy the perfect mix of adventure and relaxation in this unique stay.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1881,
    "location": "Paris",
    "country": "France"
  },
  {
    "title": "Lakeside Wooden Lodge",
    "description": "Wake up to breathtaking views and unforgettable experiences.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3471,
    "location": "Dubai",
    "country": "UAE"
  },
  {
    "title": "Island Bungalow",
    "description": "Ideal for couples and families looking for a peaceful vacation.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3284,
    "location": "Marrakech",
    "country": "Morocco"
  },
  {
    "title": "Cliffside Villa",
    "description": "Stay close to nature without giving up on comfort and style.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4692,
    "location": "Tuscany",
    "country": "Italy"
  },
  {
    "title": "Arctic Glass Igloo",
    "description": "Wake up to breathtaking views and unforgettable experiences.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1519817914152-22f90e0a46b5?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2677,
    "location": "Dubai",
    "country": "UAE"
  },
  {
    "title": "Mountain View Cabin",
    "description": "Escape to this charming retreat with stunning views and cozy interiors.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1519817914152-22f90e0a46b5?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2810,
    "location": "Paris",
    "country": "France"
  },
  {
    "title": "Arctic Glass Igloo",
    "description": "Reconnect with nature in this eco-friendly accommodation.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60"
    },
    "price": 867,
    "location": "Paris",
    "country": "France"
  },
  {
    "title": "Beach Hut Paradise",
    "description": "Stay close to nature without giving up on comfort and style.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    "price": 900,
    "location": "Kyoto",
    "country": "Japan"
  },
  {
    "title": "Mountain View Cabin",
    "description": "Enjoy the perfect mix of adventure and relaxation in this unique stay.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3579,
    "location": "Bali",
    "country": "Indonesia"
  },
  {
    "title": "Rustic Farmhouse",
    "description": "Modern amenities meet natural surroundings for a perfect getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1520,
    "location": "Petra",
    "country": "Jordan"
  },
  {
    "title": "Modern City Apartment",
    "description": "Reconnect with nature in this eco-friendly accommodation.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3755,
    "location": "Marrakech",
    "country": "Morocco"
  },
  {
    "title": "Lakeside Wooden Lodge",
    "description": "Wake up to breathtaking views and unforgettable experiences.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1519817914152-22f90e0a46b5?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4732,
    "location": "Lapland",
    "country": "Finland"
  },
  {
    "title": "Cliffside Villa",
    "description": "Perfectly located near attractions, dining, and shopping.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4219,
    "location": "Barcelona",
    "country": "Spain"
  },
  {
    "title": "Historic Castle Stay",
    "description": "Perfectly located near attractions, dining, and shopping.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4426,
    "location": "Cape Town",
    "country": "South Africa"
  },
  {
    "title": "Secluded Jungle Retreat",
    "description": "Ideal for couples and families looking for a peaceful vacation.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4031,
    "location": "Petra",
    "country": "Jordan"
  },
  {
    "title": "Cultural Heritage House",
    "description": "Escape to this charming retreat with stunning views and cozy interiors.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60"
    },
    "price": 695,
    "location": "Barcelona",
    "country": "Spain"
  },
  {
    "title": "Lakeside Wooden Lodge",
    "description": "Modern amenities meet natural surroundings for a perfect getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2460,
    "location": "Dubai",
    "country": "UAE"
  },
  {
    "title": "Modern City Apartment",
    "description": "Modern amenities meet natural surroundings for a perfect getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3243,
    "location": "Phuket",
    "country": "Thailand"
  },
  {
    "title": "Beach Hut Paradise",
    "description": "Ideal for couples and families looking for a peaceful vacation.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4313,
    "location": "Kyoto",
    "country": "Japan"
  },
  {
    "title": "Boutique Studio",
    "description": "Wake up to breathtaking views and unforgettable experiences.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3218,
    "location": "Queenstown",
    "country": "New Zealand"
  },
  {
    "title": "Island Bungalow",
    "description": "Wake up to breathtaking views and unforgettable experiences.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2962,
    "location": "Petra",
    "country": "Jordan"
  },
  {
    "title": "Cultural Heritage House",
    "description": "Reconnect with nature in this eco-friendly accommodation.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3916,
    "location": "Tuscany",
    "country": "Italy"
  },
  {
    "title": "Cliffside Villa",
    "description": "Wake up to breathtaking views and unforgettable experiences.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1519817914152-22f90e0a46b5?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1972,
    "location": "Santorini",
    "country": "Greece"
  },
  {
    "title": "Cliffside Villa",
    "description": "Reconnect with nature in this eco-friendly accommodation.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1088,
    "location": "Bali",
    "country": "Indonesia"
  },
  {
    "title": "Boutique Studio",
    "description": "Escape to this charming retreat with stunning views and cozy interiors.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    "price": 758,
    "location": "Bali",
    "country": "Indonesia"
  },
  {
    "title": "Charming Countryside Villa",
    "description": "Ideal for couples and families looking for a peaceful vacation.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60"
    },
    "price": 902,
    "location": "Marrakech",
    "country": "Morocco"
  },
  {
    "title": "Urban Loft Escape",
    "description": "Perfectly located near attractions, dining, and shopping.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4302,
    "location": "Marrakech",
    "country": "Morocco"
  },
  {
    "title": "Beach Hut Paradise",
    "description": "Perfectly located near attractions, dining, and shopping.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60"
    },
    "price": 618,
    "location": "Tuscany",
    "country": "Italy"
  },
  {
    "title": "Safari Tent",
    "description": "Modern amenities meet natural surroundings for a perfect getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3292,
    "location": "Santorini",
    "country": "Greece"
  },
  {
    "title": "Ski-In Ski-Out Chalet",
    "description": "Stay close to nature without giving up on comfort and style.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3579,
    "location": "Cape Town",
    "country": "South Africa"
  },
  {
    "title": "Desert Luxury Camp",
    "description": "Stay close to nature without giving up on comfort and style.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4411,
    "location": "Banff",
    "country": "Canada"
  },
  {
    "title": "Island Bungalow",
    "description": "Modern amenities meet natural surroundings for a perfect getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4434,
    "location": "Dubai",
    "country": "UAE"
  }
]
];

module.exports = { data: sampleListings };