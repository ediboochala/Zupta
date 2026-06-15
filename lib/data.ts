// ── ZUPTA BRAND DATA ────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'How It Works', href: '#how' },
  { label: 'Features',     href: '#features' },
  { label: 'Vendors',      href: '#vendors' },
  { label: 'Pricing',      href: '#pricing' },
  { label: 'Blog',         href: '#blog' },
]

export const STATS = [
  { target: 12000, suffix: '+', label: 'Meals Pre-Ordered' },
  { target: 340,   suffix: '+', label: 'Verified Vendors' },
  { target: 98,    suffix: '%', label: 'On-Time Pickup Rate' },
  { target: 4,     suffix: '',  label: 'Cities & Growing' },
]

export const HOW_STEPS = [
  { num: '01', icon: '🔍', title: 'Browse Vendors',  desc: 'Explore trusted local food sellers near you, filtered by meal type, price and rating.' },
  { num: '02', icon: '🛒', title: 'Choose Your Meal', desc: 'Pick exactly what you want and set your preferred pickup time — even hours in advance.' },
  { num: '03', icon: '💳', title: 'Pay Securely',    desc: 'Complete payment safely in advance. Your money is held in escrow until you confirm pickup.' },
  { num: '04', icon: '🎉', title: 'Walk In, Pick Up', desc: 'Arrive at your chosen time and your hot meal is ready waiting — zero queue time.' },
]

export const FEATURES = [
  {
    icon: '⚡', title: 'Instant Pre-Ordering', featured: false,
    desc: 'Place your order up to 24 hours ahead. Your vendor starts cooking at exactly the right time so your food is always fresh on arrival.',
    link: 'Learn more',
  },
  {
    icon: '🏪', title: 'Verified Local Vendors', featured: false,
    desc: 'Every vendor on Zupta is vetted for quality, hygiene and reliability. You\'re always supporting a real local business you can trust.',
    link: 'Browse vendors',
  },
  {
    icon: '🔒', title: 'Escrow-Protected Payments', featured: true,
    desc: 'Your payment is held securely and only released to the vendor when you confirm receipt of your meal. Shop with complete confidence.',
    link: 'How payments work',
  },
  {
    icon: '📍', title: 'Live Vendor Tracking', featured: false,
    desc: 'See real-time preparation status. Know exactly when your food will be ready before you even leave your office or classroom.',
    link: 'See demo',
  },
  {
    icon: '⭐', title: 'Community Reviews', featured: false,
    desc: 'Thousands of genuine reviews from people just like you. Discover the best hidden gems in your area with confidence.',
    link: 'Read reviews',
  },
  {
    icon: '🎁', title: 'Loyalty Rewards', featured: false,
    desc: 'Earn Zupta Points on every order. Redeem for free meals, discounts and exclusive vendor specials that keep getting better.',
    link: 'View rewards',
  },
]

export const VENDORS = [
  {
    emoji: '🍛', bg: 'linear-gradient(135deg,#E8920A,#F0BB35)',
    type: 'Jollof Specialist', name: "Mama Nkechi's Kitchen",
    rating: '4.8', reviews: '2.1k', time: '10–15 min', area: 'Central Business District',
    tags: ['Jollof Rice', 'Fried Rice', 'Chicken', 'Coleslaw'],
  },
  {
    emoji: '🥘', bg: 'linear-gradient(135deg,#0F0C27,#221663)',
    type: 'Traditional Nigerian', name: 'Tasty Pots by Aunty Rose',
    rating: '4.7', reviews: '1.8k', time: '12–18 min', area: 'Wuse Zone 4',
    tags: ['Ofada Rice', 'Egusi Soup', 'Ofe Onugbu'],
  },
  {
    emoji: '🫘', bg: 'linear-gradient(135deg,#14532D,#0F0C27)',
    type: 'Yoruba Classics', name: 'Bolanle Meals',
    rating: '4.6', reviews: '1.2k', time: '8–12 min', area: 'Garki Area 11',
    tags: ['Ewa Agoyin', 'Amala', 'Gbegiri'],
  },
]

export const TESTIMONIALS = [
  { name: 'Chioma O.', role: 'Marketing Manager, Abuja', initials: 'CO', color: '#E8920A', text: 'I used to spend 25 minutes every day waiting for jollof rice. With Zupta, I order from my desk and walk in at exactly 1 pm. The food is always hot and fresh. Absolute game changer.' },
  { name: 'Emeka A.',  role: 'Software Engineer',         initials: 'EA', color: '#221663', text: 'Finally someone solved the lunch queue problem in Nigeria! I\'ve been using Zupta for 3 months and I genuinely get an extra 30 minutes of productivity every single day.' },
  { name: 'Fatima B.', role: 'Civil Servant, FCT',        initials: 'FB', color: '#0F0C27', text: 'Mama Nkechi\'s Jollof was always sold out by the time I got there. Now I pre-order at 10am and it\'s ready when I walk in. This app changed my lunch life completely.' },
  { name: 'Tunde L.',  role: 'Bank Executive',            initials: 'TL', color: '#14532D', text: 'The secure payment system gives me confidence. My money is protected, the food quality is consistent, and I\'ve never once had an issue. Solid platform.' },
  { name: 'Ngozi E.',  role: 'University Lecturer',       initials: 'NE', color: '#7B1D1D', text: 'As a vendor, Zupta has increased my daily orders by 60%. I know exactly what to prepare each day and there\'s almost zero food waste now. Best business decision I made.' },
  { name: 'Abiodun K.',role: 'Accountant',                initials: 'AK', color: '#78350F', text: 'The Zupta Rewards programme is genuinely brilliant. I\'ve gotten three free meals just from regular ordering. The points add up fast and the redemption is seamless.' },
  { name: 'Blessing M.',role: 'HR Director',              initials: 'BM', color: '#1E3A5F', text: 'I introduced Zupta to my entire office team of 40 people. Now we do a team lunch every Friday — everyone orders independently and we all pick up together. No more queue stress.' },
  { name: 'Ibrahim Y.', role: 'Medical Doctor',           initials: 'IY', color: '#4A1D96', text: 'My lunch break is only 20 minutes. Before Zupta I was skipping lunch regularly. Now I pre-order between patients and pick up fresh food in under 3 minutes. Life-saving — literally.' },
]

export const PRICING_PLANS = [
  {
    name: 'Starter', price: '0', period: 'Free forever', featured: false,
    features: [
      { ok: true,  text: 'Up to 5 orders/month' },
      { ok: true,  text: '50+ vendor access' },
      { ok: true,  text: 'Basic order tracking' },
      { ok: true,  text: 'Standard pickup slots' },
      { ok: false, text: 'Priority queue' },
      { ok: false, text: 'Loyalty rewards' },
    ],
    cta: 'Get Started Free',
  },
  {
    name: 'Pro', price: '1,500', period: 'per month · cancel anytime', featured: true, badge: 'Most Popular',
    features: [
      { ok: true, text: 'Unlimited orders' },
      { ok: true, text: 'All 340+ vendors' },
      { ok: true, text: 'Live order tracking' },
      { ok: true, text: 'Priority pickup slots' },
      { ok: true, text: 'Zupta Rewards points' },
      { ok: true, text: 'Exclusive vendor deals' },
    ],
    cta: 'Start 14-Day Free Trial',
  },
  {
    name: 'Vendor', price: '3,000', period: 'per month · for food businesses', featured: false,
    features: [
      { ok: true, text: 'Vendor dashboard' },
      { ok: true, text: 'Order management system' },
      { ok: true, text: 'Revenue analytics' },
      { ok: true, text: 'Customer insights' },
      { ok: true, text: 'Featured listing' },
      { ok: true, text: 'Daily settlements' },
    ],
    cta: 'Register as Vendor',
  },
]

export const FAQ_ITEMS = [
  { q: 'How far in advance can I place a pre-order?',            a: 'You can pre-order up to 24 hours in advance. Most customers order the night before or during the morning commute for lunchtime pickup. You can schedule your order down to a 15-minute pickup window.' },
  { q: 'What happens if my food isn\'t ready when I arrive?',    a: 'This rarely happens, but if it does, we notify you immediately and you get Zupta credit for the delay. If you wait more than 10 minutes past your pickup time, you\'re eligible for a full refund — no questions asked.' },
  { q: 'How does payment work? Is my money safe?',               a: 'We use an escrow system. Your payment is securely held and only released to the vendor after you confirm you\'ve received your meal. We partner with CBN-licensed payment processors and all transactions are SSL-encrypted.' },
  { q: 'Can I cancel or change my order after placing it?',      a: 'Yes — you can cancel or modify your order up to 30 minutes before your scheduled pickup time for a full refund. After that window, cancellations may receive partial credit depending on preparation status.' },
  { q: 'How do vendors get verified on Zupta?',                  a: 'Every vendor goes through a multi-step onboarding: business registration check, in-person hygiene inspection, test order evaluation, and ongoing quality monitoring via customer reviews. Only vendors who maintain a 4.0+ rating stay on the platform.' },
  { q: 'Is Zupta available outside Abuja and Lagos?',            a: 'Currently we serve Abuja and Lagos. Port Harcourt and Kano are launching in Q3 and Q4 2026 respectively. Sign up with your email to get notified when we arrive in your city.' },
  { q: 'How do I join as a food vendor?',                        a: 'Visit the "For Vendors" section and complete the vendor application form. Our team will contact you within 48 hours for an onboarding call. Setup takes about 3–5 working days and the first month is free for all new vendors.' },
  { q: 'Do you offer corporate accounts for offices?',           a: 'Absolutely! Zupta for Business lets companies set up a shared account for employee lunches with centralised billing, usage reports and volume discounts. Contact us at business@zupta.com to learn more.' },
]

export const BLOG_POSTS = [
  {
    img: 'https://picsum.photos/seed/jollof-ng/900/520',
    emoji: '🍛',
    bg: 'linear-gradient(135deg,#E8920A 0%,#F0BB35 100%)',
    cat: 'Food Culture',
    date: 'June 10, 2026',
    title: "Why Jollof Rice is Nigeria's Greatest Lunch Equaliser",
    excerpt: 'From corporate boardrooms to university canteens, one dish unites every Nigerian at lunchtime — and Zupta is making sure you never miss a plate again.',
    fullContent: [
      'Walk into any office canteen, university refectory or street-side buka in Nigeria between 12pm and 2pm, and you will find one constant: jollof rice. Whether you are an Igbo accountant in Abuja, a Yoruba professor in Ibadan, or a Hausa civil servant in Kano, the smoky, tomato-red one-pot dish is almost certainly on your radar. Jollof rice is not just food in Nigeria — it is a social contract.',
      'The dish\'s power lies in its universality. Unlike pounded yam and egusi, which can feel regional, or suya, which is more of an evening affair, jollof rice occupies a uniquely democratic space in the Nigerian lunch landscape. At ₦1,000 to ₦1,500 per plate from most street vendors, it is accessible to the intern and the executive alike. That accessibility is what makes it the true equaliser of the Nigerian lunch hour.',
      'Yet the jollof experience has long been marred by one unavoidable friction: the queue. Demand at the best spots — like Mama Nkechi\'s kitchen in Abuja\'s CBD — routinely exceeds supply by noon, leaving hundreds of hungry workers either waiting 20 minutes or going without. This is the problem Zupta was built to solve. By enabling pre-orders from as early as 7am, we ensure that your plate of jollof is reserved, cooked to order, and waiting for you exactly when you arrive.',
      'Since launching in Abuja, we have processed over 47,000 jollof rice orders alone — making it our single most popular dish by a significant margin. The data tells a clear story: Nigerians do not just want convenience; they want their jollof, and they want it fresh and hot. Zupta simply removes the one thing standing between them and it — the wait. Pre-order by 10am, walk in at 1pm, and your plate is ready. No queue. No stress. Just food.',
    ],
    author: 'Adaeze Okonkwo', authorInitials: 'AO', authorColor: '#E8920A',
    readTime: '5 min read',
    featured: true,
  },
  {
    img: 'https://picsum.photos/seed/tech-nigeria/900/520',
    emoji: '⚙️',
    bg: 'linear-gradient(135deg,#0F0C27 0%,#221663 100%)',
    cat: 'Product',
    date: 'June 5, 2026',
    title: 'How We Built a Zero-Queue Pickup System That Actually Works',
    excerpt: 'A behind-the-scenes look at the technology, real-time logistics and vendor partnerships that power our on-time pickup guarantee — and what we learned along the way.',
    fullContent: [
      'When we first started building Zupta, we made a bold promise: if you pre-order through our platform, your food will be ready within two minutes of your stated pickup time, or your next order is free. Eighteen months later, we have honoured that promise 98.3% of the time. Here is how we built the system that makes it possible.',
      'The core challenge was not technology — it was timing. Vendors need to know exactly when to start cooking so that food is hot on arrival but not overcooked from sitting. Our solution was the "Cook Clock": an algorithm that works backwards from your pickup time, factors in the dish\'s average preparation time, and sends the vendor a precise "start cooking" notification. For a jollof rice that takes 18 minutes to cook, if you\'re picking up at 1:00 PM, the vendor gets a ping at 12:40 PM sharp.',
      'Vendor onboarding was the harder problem. Many of our partners — brilliant cooks, every one of them — were managing orders via WhatsApp and physical notebooks when they joined us. We built a dedicated vendor app with a large-text, high-contrast interface optimised for use in hot, busy kitchens. It took three iterations to get right. Our breakthrough came when we stopped designing in conference rooms and started spending time in the kitchens ourselves.',
      'The result is a system where 99.1% of orders are confirmed within 60 seconds of placement, and 97.8% of pickups happen within the stated time window. We\'re not perfect, but we\'re getting closer every week. And every missed pickup is a learning: we review every failure, update the cook clock parameters, and retrain our prediction model. Continuous improvement is not a slogan at Zupta — it is a survival strategy.',
    ],
    author: 'Ade Tunde, CTO', authorInitials: 'AT', authorColor: '#221663',
    readTime: '8 min read',
    featured: false,
  },
  {
    img: 'https://picsum.photos/seed/market-abuja/900/520',
    emoji: '🏪',
    bg: 'linear-gradient(135deg,#14532D 0%,#0F0C27 100%)',
    cat: 'Vendor Spotlight',
    date: 'May 28, 2026',
    title: "From Street Stall to 200 Orders a Day: Mama Nkechi's Story",
    excerpt: 'How a humble jollof rice seller from Abuja grew her daily orders by 340% in eight months after joining the Zupta platform — and what she plans to do next.',
    fullContent: [
      'Nkechi Obi has been cooking jollof rice in Abuja\'s Central Business District for eleven years. For most of that time, she served between 40 and 60 customers a day from a small stall outside Zone 3. The operation was simple: cook a large pot in the morning, sell until it ran out, go home. On a good day, she cleared ₦18,000 in profit. On a bad day, she threw away food and barely covered her costs.',
      '"The problem was I never knew how many people were coming," she told us when we first sat down with her in September 2025. "Some days 80 people show up and I\'m sold out by 12:30. Other days I\'m still standing there at 2pm with half a pot of rice going cold." That uncertainty — the fundamental unpredictability of street food demand — was the invisible ceiling on her business.',
      'Joining Zupta in October 2025 changed everything. Within the first month, her average daily orders climbed from 55 to 120. By March 2026, she was consistently processing 200 pre-orders a day. She has hired two assistants, moved into a proper kitchen space, and launched a second menu — swallow dishes — that now account for 30% of her revenue. Her monthly profit has grown from an average of ₦540,000 to over ₦2.1 million.',
      '"What Zupta gave me is not customers — I already had customers," she says with a wide smile. "What they gave me is knowledge. I know every morning exactly how many plates to cook. I know when to start. I don\'t throw food away. I don\'t run out. That\'s the difference between a stall and a business." Mama Nkechi is now one of our most-reviewed vendors, with a 4.9-star average across 2,100+ orders. She has plans to open a second location in Wuse before the end of the year.',
    ],
    author: 'Nkechi Obi', authorInitials: 'NK', authorColor: '#14532D',
    readTime: '6 min read',
    featured: false,
  },
  {
    img: 'https://picsum.photos/seed/data-lagos/900/520',
    emoji: '📊',
    bg: 'linear-gradient(135deg,#1E1040 0%,#78350F 100%)',
    cat: 'Data & Insights',
    date: 'May 20, 2026',
    title: "The Hidden Economy of Nigeria's Street Food: A Data Deep-Dive",
    excerpt: 'We analysed 180,000 orders across Abuja and Lagos. Here is what the data reveals about how, when, and what Nigerians eat for lunch — and why it matters.',
    fullContent: [
      'Nigeria\'s street food economy is worth an estimated ₦2.5 trillion annually — yet it remains almost entirely invisible to formal economic measurement. There are no Bloomberg terminals tracking jollof rice futures. There is no index for buka operator sentiment. What there is, however, is Zupta\'s order database: 180,000 transactions across Abuja and Lagos, spanning 14 months. We dug in so you don\'t have to.',
      'Finding #1: The lunch window is brutally narrow. Across all cities and all food categories, 74% of orders are placed for pickup between 12:45 PM and 1:30 PM. A 45-minute window drives the vast majority of daily food commerce in Nigerian business districts. This concentration of demand is exactly why queues form — and why pre-ordering shifts the entire dynamic.',
      'Finding #2: Jollof rice is the undisputed king, but swallow is the dark horse. Jollof accounts for 38% of all orders, followed by fried rice at 19%, and various swallow dishes (amala, pounded yam, semo) at a combined 27%. What is striking is that swallow orders have grown 60% year-on-year on our platform — suggesting that as ordering convenience increases, people are reaching for more "traditional" dishes that they might have previously considered too messy or time-consuming for a standard lunch break.',
      'Finding #3: Price sensitivity is lower than assumed. The average Zupta order value is ₦1,847 — higher than many industry analysts would expect for "street food." Our users are not primarily motivated by cheapness; they are motivated by quality, reliability, and time savings. Vendors who emphasise freshness and consistency in their listings see 2.3× higher repeat order rates than those who compete primarily on price. The Nigerian lunch market is not a race to the bottom. It is a race to the top.',
    ],
    author: 'Zupta Research', authorInitials: 'ZR', authorColor: '#78350F',
    readTime: '10 min read',
    featured: false,
  },
  {
    img: 'https://picsum.photos/seed/nigeria-city/900/520',
    emoji: '🚀',
    bg: 'linear-gradient(135deg,#0C2340 0%,#0E7490 100%)',
    cat: 'Industry',
    date: 'May 12, 2026',
    title: "5 Reasons Nigeria's Food-Tech Scene is About to Explode",
    excerpt: 'With 220 million people, rapidly rising smartphone penetration and a culture built around communal eating, Nigeria may be food-tech\'s next great frontier.',
    fullContent: [
      'Sub-Saharan Africa\'s food-tech sector attracted $600 million in venture funding in 2025 — and Nigeria captured 34% of it. Yet most analysts believe this is just the beginning. Here are five structural factors that make Nigeria not just a large food-tech market, but potentially the most exciting one on the planet.',
      'Reason 1: Scale you cannot replicate. Nigeria has 220 million people, a median age of 18, and an urbanisation rate growing at 4.3% per year. By 2030, Lagos alone will have more people than the entire United Kingdom. When food-tech infrastructure reaches this population — and it is reaching it fast — the compound effects will be unlike anything seen in food-tech elsewhere.',
      'Reason 2: The smartphone moment is now. In 2020, smartphone penetration in Nigeria stood at 39%. By 2026, it is at 67% and rising. More critically, 4G and 5G coverage now extends to every major commercial district in Abuja, Lagos, Port Harcourt and Kano. The infrastructure prerequisite for mobile food commerce — which took a decade to build in Europe and North America — is arriving here in compressed time.',
      'Reason 3: Nigeria\'s food culture is monetisable in ways others are not. Communal eating is not just a social preference in Nigeria — it is a daily economic activity. Workers eat out for lunch every single weekday. Families celebrate every milestone with large cooked meals. Food is the primary vehicle of hospitality. This cultural relationship with food means that when a platform makes the food experience better, adoption is not a question of changing behaviour. It is a question of improving an existing, deeply ingrained one.',
    ],
    author: 'Emeka Eze', authorInitials: 'EE', authorColor: '#0E7490',
    readTime: '7 min read',
    featured: false,
  },
  {
    img: 'https://picsum.photos/seed/office-lunch/900/520',
    emoji: '❤️',
    bg: 'linear-gradient(135deg,#7B0038 0%,#E8920A 100%)',
    cat: 'Customer Stories',
    date: 'May 5, 2026',
    title: 'How Pre-Ordering Changed My Lunch Break: 6 Customer Stories',
    excerpt: 'Real people, real results. We sat down with six Zupta regulars to hear how pre-ordering transformed their daily lunch routines — and gave them back their time.',
    fullContent: [
      'We asked six of our most loyal users — people who have collectively placed over 800 orders on Zupta — to tell us in their own words what changed when they started pre-ordering. What we heard went far beyond saving time. Pre-ordering, it turns out, changes your relationship with the entire middle of your workday.',
      '"I used to dread 12pm," says Chioma Okafor, a marketing manager in Abuja. "I knew I had maybe 45 minutes, and at least 20 of them were going to be spent in a queue. Now I order at 10am from my desk, walk out at 12:55, pick up in 90 seconds, and I\'m back at my desk by 1:10 eating hot food while my colleagues are still in line. I\'ve reclaimed 100+ minutes a week. That\'s a lot of life."',
      '"The mental load reduction is the thing no one talks about," says Dr. Ibrahim Yusuf, a physician at a private hospital in Lagos. "Deciding where to eat, walking there, waiting — it\'s all decision fatigue. With Zupta, I decide once at 9am and the rest just happens. My lunch break is now actually a break." Dr. Yusuf averages 4.2 orders per week and has introduced the app to all eight of his colleagues in the hospital.',
      '"For me it was about the vendors," says Blessing Marcus, an HR director whose office team of 40 all use Zupta. "I feel like I\'m genuinely supporting local businesses. Mama Nkechi told me that because of predictable pre-orders, she stopped throwing away food. I spend ₦1,200 on my lunch and I feel good about every naira of it." This sentiment — of pre-ordering as an act of community — came up in four of the six interviews. It was not something we expected, but it was deeply gratifying to hear.',
    ],
    author: 'Blessing Marcus', authorInitials: 'BM', authorColor: '#7B0038',
    readTime: '9 min read',
    featured: false,
  },
  {
    img: 'https://picsum.photos/seed/nigerian-soup/900/520',
    emoji: '🍲',
    bg: 'linear-gradient(135deg,#064E3B 0%,#059669 100%)',
    cat: 'Health & Nutrition',
    date: 'April 28, 2026',
    title: "The Nutritional Power of Nigerian Soups: A Dietitian Weighs In",
    excerpt: "From Egusi to Ofe Onugbu, Nigerian traditional soups are among the world's most nutritionally dense meals — and a Zupta-partnered dietitian breaks down exactly why.",
    fullContent: [
      'Ask a Western nutritionist to design the perfect lunch and they might recommend a grain bowl: complex carbohydrates, lean protein, leafy greens, healthy fats. Ask a Nigerian grandmother the same question and she will serve you egusi soup with eba — and she will, nutritionally speaking, be right. Nigerian traditional soups are not just culturally important. They are genuinely, scientifically impressive meals.',
      '"Egusi alone is a nutritional powerhouse," says Dr. Funmi Adeyemi, a registered dietitian in Abuja who has partnered with Zupta to review the nutritional profiles of our top dishes. "Melon seeds are rich in zinc, magnesium, and healthy unsaturated fats. Combined with leafy vegetables like ugu or bitter leaf, palm oil which contains vitamins A and E, and the protein from stockfish or assorted meat, you have a meal that ticks almost every micronutrient box."',
      'The data backs this up. A standard portion of egusi soup with eba provides approximately 540 calories, 28 grams of protein, significant quantities of iron, calcium, and B vitamins, and a meaningful dose of dietary fibre. By comparison, the average office cafeteria junk food lunch — a meat pie and a sachet drink — delivers empty calories and very little else. The traditional Nigerian soup lunch, it turns out, is one of the most nutritionally complete meals a working adult can eat.',
      'The challenge has historically been access and convenience. Soups require skill and time to prepare. The best buka soups are genuinely artisanal — slow-cooked, ingredient-rich, and impossible to rush. This is exactly why pre-ordering them makes sense. When you pre-order a soup dish from a Zupta vendor who specialises in traditional cooking, you are getting a meal that was prepared with care, not cut corners. Pre-ordering is not just convenient. For soup lovers, it is the only way to guarantee the real thing.',
    ],
    author: 'Dr. Funmi Adeyemi', authorInitials: 'FA', authorColor: '#059669',
    readTime: '6 min read',
    featured: false,
  },
  {
    img: 'https://picsum.photos/seed/entrepreneur-ng/900/520',
    emoji: '💡',
    bg: 'linear-gradient(135deg,#312E81 0%,#4C1D95 100%)',
    cat: 'Entrepreneurship',
    date: 'April 20, 2026',
    title: "Starting a Food Business in Nigeria: What No One Tells You",
    excerpt: "We asked 50 food vendors on the Zupta platform what they wish they'd known before starting. Their candid, hard-won answers might surprise you.",
    fullContent: [
      'Starting a food business in Nigeria is often described as simple: buy ingredients, cook food, sell it. The reality, as anyone who has tried it knows, is far more complex. We sat down with 50 of our active vendor partners — representing a combined 340+ years of food business experience — and asked them one question: what do you wish you had known before you started? Their answers were candid, occasionally painful, and universally instructive.',
      'The most common answer — cited by 38 of the 50 vendors — was some version of "I underestimated waste." Food waste is the invisible destroyer of small food businesses. When you cook speculatively (making a pot of rice and hoping customers come), the economics are brutal. Ingredients you bought, fuel you burned, time you spent — all of it walking out the door as unsold food. One vendor in Lagos told us she was throwing away ₦8,000 worth of food every day in her first six months. "I thought I was profitable," she said. "I wasn\'t even breaking even when I counted the waste."',
      '"No one tells you about the NAFDAC process," said another vendor. The National Agency for Food and Drug Administration and Control registration is a legal requirement for food businesses in Nigeria, but the process is poorly documented and can take months. Of our 50 vendors, 32 said they had operated informally for at least three months before getting their paperwork in order. "Get the registration before you open," said one veteran. "Not after."',
      'The most surprising insight was about pricing. 43 of 50 vendors said they initially underpriced their food significantly. "I was afraid to charge what my food was worth," said Mama Nkechi. "I thought if I charged ₦1,200 instead of ₦800 people would go elsewhere. But I learned that people do not want cheap food — they want good food. When my quality is high and my price reflects that, my customers are more loyal, not less." The vendors who figured this out earliest grew the fastest. Price confidence, it turns out, is as important as cooking skill.',
    ],
    author: 'Ibrahim Musa', authorInitials: 'IM', authorColor: '#4C1D95',
    readTime: '11 min read',
    featured: false,
  },
  {
    img: 'https://picsum.photos/seed/ai-prediction/900/520',
    emoji: '📱',
    bg: 'linear-gradient(135deg,#1E3A5F 0%,#0E7490 100%)',
    cat: 'Tech & Innovation',
    date: 'April 10, 2026',
    title: "How AI is Predicting What Nigeria Will Eat for Lunch Tomorrow",
    excerpt: "Zupta's demand prediction engine analyses weather, events and historical orders to help vendors prepare the right food at exactly the right time.",
    fullContent: [
      'Every morning at 6:00 AM, before most of our vendors have lit their stoves, Zupta\'s demand prediction engine is already running its daily forecast. Drawing on 180,000+ historical orders, real-time weather data, the Nigerian public holiday calendar, local event schedules, and 47 other variables, it generates a predicted demand profile for every active vendor on the platform — broken down by dish, by hour, and by the number of servings to prepare.',
      'The model was trained on fourteen months of order data and took our engineering team six months to get right. The early versions were embarrassingly wrong. We predicted high jollof rice demand on rainy days (wrong — people order lighter foods when it rains). We underestimated demand on Fridays before long weekends (turns out people order more, not less, as they try to enjoy one last office lunch). We missed the "post-payday surge" — the spike in premium dish orders that happens in the first five days of every month as salaries land. Every failure taught us something.',
      'Today, the model achieves 91% accuracy at the vendor level and 96% accuracy in aggregate. More importantly, it translates predictions into plain-language recommendations that even non-technical vendors can act on. Instead of probability distributions, vendors see messages like: "Tomorrow is likely to be 40% busier than your usual Thursday. Consider preparing 60 extra plates of jollof rice." Simple, actionable, right.',
      'The downstream effects have been significant. Vendor food waste has decreased by an average of 34% since we introduced demand predictions. Stockout events — where a vendor runs out of a dish before the end of the lunch window — have fallen from 18% of days to under 4%. And vendor revenue has grown by an average of 28% in the six months after adoption, partly because they can confidently prepare more food knowing demand is predictable. The AI doesn\'t cook the food. But it helps every cook on our platform prepare with confidence.',
    ],
    author: 'Zupta Engineering', authorInitials: 'ZE', authorColor: '#0E7490',
    readTime: '8 min read',
    featured: false,
  },
]

export const LOCATIONS = [
  { flag: '🏙️', name: 'Abuja, FCT',    detail: '118 vendors · 5,400+ customers', status: 'live'  },
  { flag: '🌊', name: 'Lagos',          detail: '214 vendors · 6,200+ customers', status: 'live'  },
  { flag: '⚓', name: 'Port Harcourt', detail: 'Launching Q3 2026',               status: 'soon'  },
  { flag: '🕌', name: 'Kano',           detail: 'Launching Q4 2026',              status: 'soon'  },
]

export const MAP_PINS = [
  { top: '38%', left: '48%', label: 'Abuja · Live',         active: true  },
  { top: '62%', left: '32%', label: 'Lagos · Live',         active: true  },
  { top: '70%', left: '55%', label: 'Port Harcourt · Soon', active: false },
  { top: '22%', left: '52%', label: 'Kano · Soon',          active: false },
]

export const TRUST_ITEMS = [
  { icon: '🔒', text: 'SSL Encrypted\nPayments'        },
  { icon: '🏦', text: 'CBN Licensed\nProvider'         },
  { icon: '⭐', text: '4.9 / 5  App Store\nRating'     },
  { icon: '🛡️', text: 'Buyer Protection\nGuarantee'    },
  { icon: '✅', text: 'NDPR\nCompliant'                 },
  { icon: '🌍', text: 'ISO 27001\nCertified'            },
]

export const TICKER_ITEMS = [
  'Mama Nkechi just added Coconut Rice',
  'New feature: Schedule a week of lunches at once',
  'Over 12,000 happy customers and counting',
  'Zupta wins Best FoodTech Startup 2026',
  'Coming to Port Harcourt in Q3 2026',
  'Refer a friend — earn ₦500 credit each',
  'Average pickup wait: under 90 seconds',
  "New vendor: Chef Bola's Amala & Ewedu — Wuse",
]

export const VENDOR_NAMES = [
  "Mama Nkechi's Kitchen", 'Tasty Pots by Aunty Rose', 'Bolanle Meals',
  "Chef Bola's Delicacies", 'Iya Ibeji Cuisine', "Emeka's Pepper Soup",
  'Lagos Street Suya', 'Abuja Rice House', "Fatima's Northern Bites",
  "Tunde's Amala Palace", 'The Jollof Joint', "Moji's Snack Bar",
  "Grandma's Recipes", 'Bilikis Kitchen', 'Ofe Onugbu House',
]

export const FOOTER_LINKS = {
  Product:        ['How It Works', 'Browse Vendors', 'Download App', 'Pricing', 'Zupta Rewards'],
  'For Vendors':  ['Join as a Vendor', 'Vendor Dashboard', 'Resources', 'Success Stories', 'Support'],
  Company:        ['About Zupta', 'Careers', 'Blog', 'Press Kit', 'Contact Us'],
}
