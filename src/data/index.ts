export const personalInfo = {
  name: 'Tayyab Jamil',
  title: 'Full Stack Engineer',
  subtitle: 'React Native & Mobile Specialist',
  bio: "Full Stack Engineer with 5+ years of experience architecting and delivering end-to-end web and mobile applications across corporate and startup environments. Expert in React Native, Expo, Next.js, Firebase, Supabase, WatermelonDB, and scalable API development — from design to production deployment.",
  location: 'Greenwich, London',
  email: 'tayyabjamil777@gmail.com',
  github: 'https://github.com/tayyabjamil',
  linkedin: 'https://www.linkedin.com/in/muhammad-tayyab-2b31251b8/',
  portfolio: 'https://mtayyabjamil.com/',
};

export const skillGroups = [
  {
    category: 'Frontend & Mobile',
    icon: '📱',
    color: '#2563eb',
    skills: [
      'React Native', 'Expo', 'React.js', 'Next.js',
      'TypeScript', 'JavaScript (ES6+)', 'NativeWind',
      'Tailwind CSS', 'Reanimated', 'Gesture Handler', 'Figma',
    ],
  },
  {
    category: 'Backend & APIs',
    icon: '⚡',
    color: '#7c3aed',
    skills: [
      'Node.js (Express / NestJS)', 'Firebase (Auth, Firestore, Functions)',
      'Supabase (SQL, Edge Functions)', 'REST APIs', 'GraphQL',
      'AWS (Lambda, S3, DynamoDB)', 'SQL / NoSQL', 'Microservices',
    ],
  },
  {
    category: 'State & Native Modules',
    icon: '🔄',
    color: '#0891b2',
    skills: [
      'Redux (Thunk / Saga)', 'Zustand', 'Legend State',
      'React Query', 'WatermelonDB', 'MMKV',
      'Camera / Maps / Permissions', 'Stripe / RevenueCat',
      'WebRTC / Agora', 'AppsFlyer', 'Socket.IO',
    ],
  },
  {
    category: 'Deployments & Testing',
    icon: '🚀',
    color: '#10b981',
    skills: [
      'Expo EAS', 'GitHub Actions', 'Fastlane',
      'Bitbucket Pipelines', 'Jest', 'Detox',
      'React Native Testing Library', 'OTA Updates',
      'A/B Testing', 'Feature Flags', 'Vercel', 'Render',
    ],
  },
];

export const projects = [
  {
    id: '7',
    title: 'BusyMotors',
    description:
      'A scrap & salvage car marketplace — Find. Contact. Buy. Profit. Users discover thousands of local scrap and salvage vehicle listings, view full specs, contact sellers directly in-app, and buy low to resell high.',
    tags: ['React Native', 'TypeScript', 'Maps', 'Geolocation', 'Node.js'],
    highlights: ['Local deal discovery', 'In-app seller contact', 'iOS & Android'],
    github: '#',
    store: '#',
    color: '#3b82f6',
    image: require('../../assets/scrap.png'),
  },
  {
    id: '8',
    title: 'Argonaut — Field Engineer App',
    description:
      'Offline-first field operations app for fire safety engineers built for Harmony Fire. Handles 50K+ images per device with queue-based sync, dynamic form builder, Skia custom drawing, and real-time map overlays — replacing the legacy Simpro workflow.',
    tags: ['Expo', 'Supabase', 'WatermelonDB', 'GraphQL', 'Skia', 'Expo EAS'],
    highlights: ['Offline-first architecture', '50K images per device', 'Shopify-themed UI'],
    github: null,
    store: 'https://play.google.com/store/apps/details?id=com.harmonyfire.argonaut&pcampaignid=web_share',
    color: '#7c3aed',
    image: require('../../assets/harmony.png'),
  },
  {
    id: '3',
    title: 'FYSH — Side Hustle Marketplace',
    description:
      'A freelance marketplace connecting businesses with part-time and contract workers. Features job posting, proposals, in-app chat, subscriptions via RevenueCat, and payments. Scaled to 50K+ active users in the US market.',
    tags: ['React Native', 'TypeScript', 'Redux Saga', 'Firebase', 'RevenueCat'],
    highlights: ['50K+ active users', 'In-app subscriptions', 'Best Project of the Year'],
    github: null,
    store: 'https://www.youtube.com/watch?v=h2_Qfa2M00o',
    color: '#6366f1',
    image: require('../../assets/fysh.png'),
  },
  {
    id: '5',
    title: 'Slizzr — Event Platform',
    description:
      'A full-featured event hosting and attendance app with 10K+ downloads. Discover events on a live map, see which friends are attending, host your own events, sell tickets, and check in attendees via QR scanner.',
    tags: ['Expo', 'Redux', 'Maps', 'QR Scanner', 'TypeScript'],
    highlights: ['10K+ downloads', 'Live map discovery', 'QR ticketing'],
    github: 'https://github.com/tayyabjamil/Slizzr-App-React-Native',
    store: 'https://play.google.com/store/apps/details?id=com.slizzrapp.slizzr&pcampaignid=web_share',
    color: '#a855f7',
    image: require('../../assets/slizzr.png'),
  },
  {
    id: '1',
    title: '99 DPF',
    description:
      'An on-demand automotive service app for DPF (Diesel Particulate Filter) cleaning. Customers can book services, track orders, and manage their vehicle history — all from mobile.',
    tags: ['React Native', 'TypeScript', 'Node.js', 'Stripe', 'Firebase'],
    highlights: ['iOS & Android', 'Service booking flow', 'Real-time tracking'],
    github: null,
    store: 'https://www.99dpf.com',
    color: '#ef4444',
    image: require('../../assets/99dpf.png'),
  },
  {
    id: '2',
    title: 'Come Closely',
    description:
      'A social discovery app that connects people at events and entertainment venues. Find nearby friends in real-time, discover local events, buy tickets, and check in via QR code.',
    tags: ['React Native', 'Redux', 'Reanimated', 'Lottie', 'Firebase', 'TypeScript'],
    highlights: ['Real-time location', 'Event ticketing', 'QR check-in'],
    github: null,
    store: 'https://www.crunchbase.com/organization/comeclosely',
    color: '#ec4899',
    image: require('../../assets/comeclosely.png'),
  },
  {
    id: '4',
    title: 'Hakeem',
    description:
      'A financial wellness platform built for frontier markets. Helps users track spending, build savings habits, and access financial tools previously unavailable in emerging economies.',
    tags: ['React Native', 'TypeScript', 'Fintech APIs', 'Charts', 'Encryption'],
    highlights: ['Frontier markets', 'Financial wellness', 'Secure by design'],
    github: null,
    store: 'https://hakeem.tech',
    color: '#10b981',
    image: require('../../assets/hakeem.png'),
  },
  {
    id: '6',
    title: 'Trade Unleashed',
    description:
      'An omni-channel cloud retail & eCommerce platform helping businesses modernize their operations. Features real-time integrations, multi-marketplace listing, analytics, and a mobile companion app.',
    tags: ['React Native', 'Next.js', 'TypeScript', 'REST APIs', 'Cloud'],
    highlights: ['Omni-channel retail', 'Multi-marketplace', 'iOS & Android'],
    github: null,
    store: 'https://tradeunleashed.com',
    color: '#0891b2',
    image: require('../../assets/tradeunleashed.png'),
  },
];

export const experience = [
  {
    id: '1',
    role: 'React Native Engineer',
    company: 'Harmony Fire',
    period: 'Sep 2025 — Mar 2026',
    description:
      'Built Argonaut and Auro Technician — field engineering mobile apps for surveys, remeasurements, installations, snagging, building management, and sensor commissioning across construction and fire-safety operations. Replaced the legacy Simpro app and portal with two production apps now used by 100+ engineers daily.',
    achievements: [
      'Led React Native and Expo development using Supabase, WatermelonDB, offline-first architecture, SQL, Edge Functions, and webhooks',
      'Delivered offline syncing, dynamic forms with Coltor Builder, 50K+ image handling, Skia custom drawing, maps, overlays, and asset pinning',
      'Built real-time graphs and Legend State updates for engineers working on-site across construction and fire-safety sites',
      'Replaced legacy Simpro workflow with two production apps and a Supabase-backed platform used by 100+ engineers',
    ],
    tech: ['React Native', 'Expo', 'Supabase', 'WatermelonDB', 'Legend State', 'Skia', 'Expo EAS'],
  },
  {
    id: '2',
    role: 'Software Engineer',
    company: 'Solution201',
    period: 'Sep 2024 — Aug 2025',
    description:
      'Led the mobile team across two major platforms: Pixim (property management) and BusyMotors UK (vehicle marketplace). Delivered production apps, web portals, and admin dashboards for thousands of customers and agents.',
    achievements: [
      'Led Pixim Agent and Customer apps using Expo, OTA updates, Firebase, and data extraction pipelines — with real-time chat, Agora video calls, maps, and RevenueCat payments',
      'Led BusyMotors UK mobile app, web platform, and admin portal using React Native, Supabase, MongoDB, SQL, and Hot Updater for OTA updates',
      'Built vehicle listing workflows, admin dashboards, maps, and payments serving 100+ agents on BusyMotors',
      'Managed production deployments for thousands of customers across property and vehicle marketplace platforms',
    ],
    tech: ['React Native', 'Expo', 'Firebase', 'Supabase', 'MongoDB', 'Agora', 'RevenueCat'],
  },
  {
    id: '3',
    role: 'Software Engineer',
    company: 'Broadmoor Solutions Inc (Digital Adaptation)',
    period: 'Oct 2022 — Mar 2024',
    description:
      'Developed React Native mobile app features and supported internal Sanofi web platforms used by thousands of employees. Migrated legacy websites to modern front-end solutions and integrated data from Oracle Database.',
    achievements: [
      'Migrated legacy Sanofi websites to modern front-end solutions using ColdFusion, Next.js, and React.js',
      'Collaborated with the Data Engineering team to write SQL queries and integrate data from Oracle Database',
      'Supported data validation, backend data flows, and reliable content delivery across internal organisation websites',
      'Improved internal platform usability, stability, and maintainability for large-scale employee-facing systems',
    ],
    tech: ['React Native', 'Next.js', 'React.js', 'ColdFusion', 'SQL', 'Oracle Database', 'PostgreSQL'],
  },
  {
    id: '4',
    role: 'React Native Developer',
    company: 'Plumlogix (MBE Salesforce Partner)',
    period: 'Dec 2021 — Oct 2022',
    description:
      'Architected the FYSH Service App using React Native with scalable cross-platform architecture. Integrated business-driven state management and backend microservices, scaling the platform to over 50,000 active users in the US market.',
    achievements: [
      'Architected FYSH Service App with Redux Saga state management and Firebase microservices (Cloud Functions, Firestore)',
      'Scaled the platform to 50,000+ active users in the US market — earning Best Project of the Year award',
      'Integrated RevenueCat subscriptions, push notifications, and deep linking for enhanced user engagement',
      'Built and maintained native modules bridging JS and native layers across the production app',
    ],
    tech: ['React Native', 'TypeScript', 'Redux Saga', 'Firebase', 'RevenueCat', 'Expo EAS'],
  },
  {
    id: '5',
    role: 'React Native Developer',
    company: 'IvyLab Technologies',
    period: 'May 2021 — Dec 2021',
    description:
      'Built and shipped ComeClosly (social video app) and Slizzr (event social app) using React Native and Expo. Collaborated closely with designers and backend engineers to deliver pixel-perfect screens and scale both apps to production.',
    achievements: [
      'Built ComeClosly with TikTok-style swipe interactions, smooth reels, transitions, onboarding flows, and social UI using Reanimated, Gesture Handler, and Lottie',
      'Built Slizzr with event discovery, hosting, tickets, payments, check-ins, and native QR code functionality for iOS and Android',
      'Scaled Slizzr to 300K users across App Store and Google Play, collaborating with designers, backend, and mobile teams',
      'Managed Git workflows, fixed production issues, and deployed both apps to iOS and Android',
    ],
    tech: ['React Native', 'Expo', 'Reanimated', 'Gesture Handler', 'Lottie', 'JavaScript'],
  },
];

export const certifications = [
  {
    id: '1',
    title: 'AWS Cloud Technology and Services',
    issuer: 'DataCamp',
    issued: 'Dec 2024',
    expires: 'Nov 2026',
    skills: ['AWS Lambda', 'S3', 'Redshift', 'Cloud Architecture'],
  },
  {
    id: '2',
    title: 'Associate Data Engineer',
    issuer: 'DataCamp',
    issued: 'Nov 2024',
    expires: 'Sep 2025',
    skills: ['SQL', 'Snowflake', 'Data Pipelines'],
  },
];
