export const personalInfo = {
  name: 'Tayyab Jamil',
  title: 'Full Stack Engineer',
  subtitle: 'React Native & Mobile Specialist',
  bio: "Full Stack Engineer with 5+ years of experience architecting and delivering end-to-end web and mobile applications across corporate and startup environments. Expert in React Native, Expo, Next.js, Firebase, Supabase, Node.js, and scalable API development — from design to production deployment.",
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
      'A/B Testing', 'Feature Flags', 'Vercel',
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
    company: 'Harmony Fire (Auro)',
    period: 'Sep 2025 — Mar 2026',
    description:
      'Architected offline-first Argonaut app for field engineers using React Native, Supabase, and WatermelonDB. Developed Auro Technician App for fire safety engineers to manage buildings and commission sensors.',
    achievements: [
      'Built offline-first architecture handling 50K images per device with queue-based syncing',
      'Implemented Skia-based custom drawing, graphs, and map overlays for field operations',
      'Delivered dynamic forms with Coltor Builder, replacing the legacy Simpro app via Fastlane CI/CD',
      'Built backend with Supabase role-based access, SQL queries, Edge Functions, and webhooks',
    ],
    tech: ['React Native', 'Supabase', 'WatermelonDB', 'GraphQL', 'Fastlane', 'Expo EAS'],
  },
  {
    id: '2',
    role: 'Software Engineer',
    company: 'Solution201, UK',
    period: 'Sep 2024 — Aug 2025',
    description:
      'Led end-to-end development of Pixim agent and customer apps using Expo React Native. Built and maintained the Pixim web platform and admin portal for property management and operational workflows.',
    achievements: [
      'Built Pixim web platform with Next.js, Redux, Tailwind CSS, and Material UI',
      'Integrated Firebase for authentication, real-time database updates, and scalable data handling',
      'Developed complex scraping pipelines to inject live property data into the platform',
      'Delivered real-time chat, Agora video calls, maps, payments, and multi-platform deployments',
    ],
    tech: ['React Native', 'Expo', 'Next.js', 'Firebase', 'Agora', 'Tailwind CSS'],
  },
  {
    id: '3',
    role: 'Full Stack Mobile App Engineer',
    company: 'Digital Adaptation',
    period: 'Oct 2022 — Mar 2024',
    description:
      'Architected FYSH Service App using React Native with scalable cross-platform architecture. Scaled platform to 50,000+ active users in the US market and was awarded Best Project of the Year.',
    achievements: [
      'Scaled FYSH to 50,000+ active users — awarded Best Project of the Year',
      'Implemented Redux Saga state management and Firebase microservices (Cloud Functions, Firestore)',
      'Integrated RevenueCat subscriptions, push notifications, and deep linking',
      'Maintained native modules bridging JS and native layers across JSI and Fabric',
    ],
    tech: ['React Native', 'TypeScript', 'Redux Saga', 'Firebase', 'RevenueCat', 'Expo EAS'],
  },
  {
    id: '4',
    role: 'React Native Developer',
    company: 'Plum Logix (MBE Salesforce Partner)',
    period: 'Dec 2021 — Oct 2022',
    description:
      'Built ComeClosly and Slizzr apps using React Native, each with 20+ complex screens. Delivered 60fps performance via Reanimated animations and Gesture Handler interactions.',
    achievements: [
      'Built two full apps (ComeClosly & Slizzr) with 20+ screens each, Redux, and Sagas',
      'Achieved consistent 60fps with Reanimated animations and Gesture Handler',
      'Integrated Lottie, QR scanning, camera, push notifications, and deep linking',
      'Tested with Jest, React Native Testing Library, and Detox E2E testing',
    ],
    tech: ['React Native', 'Redux', 'Reanimated', 'Lottie', 'Jest', 'Detox'],
  },
  {
    id: '5',
    role: 'Associate React Native Developer',
    company: 'IvyLab Technologies',
    period: 'Apr 2021 — Nov 2021',
    description:
      'Developed and maintained cross-platform mobile applications using React Native. Built reusable UI components and implemented responsive mobile screens across iOS and Android.',
    achievements: [
      'Developed and maintained cross-platform apps using React Native',
      'Built reusable UI component library for consistent mobile UI across screens',
      'Implemented responsive layouts and mobile-first screen architecture',
    ],
    tech: ['React Native', 'JavaScript', 'REST APIs', 'UI Components'],
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
