export const personalInfo = {
  name: 'Tayyab Jamil',
  title: 'Senior Mobile Engineer',
  subtitle: 'React Native & Expo Specialist',
  bio: "Senior Mobile Engineer with 5+ years shipping React Native and Expo apps that people rely on daily — FYSH (50K+ users), Slizzr (300K+ users), Argonaut (300+ field engineers). Strong on mobile craft: animations feel right, scroll lists are smooth, frame rates are measured not guessed. Comfortable dropping into Swift and Kotlin when React Native hits its limits. Expert in RAG AI pipelines, EAS build and submission workflows, and end-to-end ownership from design through to production.",
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
    highlights: ['300+ field engineers', 'Offline-first architecture', 'JSI native modules'],
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
    highlights: ['300K+ users', 'Live map discovery', 'QR ticketing'],
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
    id: '0',
    role: 'Senior React Native Engineer (Contract)',
    company: 'FounderMatcha',
    period: 'Mar 2026 — Present',
    description:
      'Working at FounderMatcha with founders building CoachOS (contentcoachos.com), an AI content platform for fitness instructors, and LeftOverChef, an AI recipe suggestion app. Both built in Expo, TypeScript, and NativeWind with GraphQL, Apollo Client, React Query, and Context API — end-to-end from greenfield through beta to App Store and Google Play releases.',
    achievements: [
      'Built the full RAG AI layer for both apps — pgvector vector database, embedding pipeline, retrieval logic, and prompt engineering for personalised content; backend in Supabase including auth, schema, row-level security, and edge functions',
      'CoachOS integrates OpenAI APIs, Stripe subscriptions, AppsFlyer attribution, and TikTok and Meta SDKs; LeftOverChef integrates OpenAI APIs with RAG and RevenueCat for in-app purchases',
      'Beta tested CoachOS with 30 gym instructors and LeftOverChef with 15 iOS and Android users, monitored with Firebase Analytics and Sentry',
      'Deployed both apps via Expo EAS and GitHub Actions with Jest and Maestro test coverage',
    ],
    tech: ['Expo', 'TypeScript', 'NativeWind', 'GraphQL', 'Apollo Client', 'React Query', 'Supabase', 'OpenAI APIs', 'pgvector', 'Stripe', 'RevenueCat', 'AppsFlyer', 'Firebase Analytics', 'Sentry', 'Expo EAS', 'Jest', 'Maestro'],
  },
  {
    id: '1',
    role: 'React Native Developer',
    company: 'Harmony Fire / Auro',
    period: 'Sep 2025 — Mar 2026',
    description:
      'Owned two mobile products: Argonaut, a field app for fire door installation used by 300+ engineers replacing the legacy Simpro system, and Auro, a commissioning app connecting to BLE sensors to trigger door commissioning and using Skia to sketch asset locations on site. Both apps built offline-first.',
    achievements: [
      'Built Argonaut in React Native, TypeScript, and Tailwind CSS with offline-first sync (WatermelonDB, MMKV, PowerSync, Legend State), JSI native modules for Vision Camera and BLE, and a 30K-image storage fix',
      'Built Auro in Expo with Skia drawing, GraphQL with Apollo Client, Context API, and TanStack Query for real-time BLE sensor commissioning',
      'Configured three-environment release pipelines; deployed Argonaut via Fastlane with OTA updates and Auro via Expo EAS with QA gates',
      'Set up Sentry monitoring pipeline that reduced incident response time; tested with Jest and Maestro across both apps',
    ],
    tech: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'WatermelonDB', 'PowerSync', 'Legend State', 'Skia', 'Apollo Client', 'JSI', 'Fastlane', 'Expo EAS', 'Sentry', 'Maestro'],
  },
  {
    id: '2',
    role: 'Senior React Native Engineer',
    company: 'Solution201',
    period: 'Sep 2024 — Aug 2025',
    description:
      'Led a team of 4–5 engineers across two products: Pixim, a US property platform with thousands of customers (Agent App, Client App, and admin portal), and BusyMotors UK, a car scrap marketplace serving 100+ agents. Pixim built in React Native; BusyMotors built in Expo with NativeWind and a Nest.js backend.',
    achievements: [
      'Pixim: integrated Firebase microservices with Context API, TanStack Query, and GraphQL, using data scraping tools to ingest property listings with Agora video calls and RevenueCat payments',
      'BusyMotors: integrated the DVLA API for live vehicle data lookup with NativeWind UI, MongoDB backend, and Hot Updater for OTA updates',
      'Tested Pixim with Jest via Fastlane CI/CD across three environments; tested BusyMotors with Detox via Expo EAS with staged rollouts',
      'Monitored both platforms with Datadog and Bugsnag; shipped to App Store and Google Play',
    ],
    tech: ['React Native', 'Expo', 'TypeScript', 'NativeWind', 'Firebase', 'Supabase', 'MongoDB', 'GraphQL', 'Agora', 'RevenueCat', 'Fastlane', 'Detox', 'Datadog'],
  },
  {
    id: '3',
    role: 'Ecom Developer (React / React Native)',
    company: 'Digital Adaptation',
    period: 'Oct 2022 — Mar 2024',
    description:
      'Modernised 7 legacy Sanofi e-commerce platforms from ColdFusion to a modern web stack, working alongside cross-border data stakeholders to deliver improved digital experiences and improved page load speed and platform stability.',
    achievements: [
      'Rebuilt 7 platforms in React.js, TypeScript, and Next.js, connecting to Oracle Database through REST and GraphQL APIs',
      'Collaborated with the Data Engineering team to write SQL queries and integrate data from Oracle Database for content delivery',
      'Tested with Jest across all 7 platforms; deployed via Render and Vercel across separate staging and production environments',
      'Delivered meaningful improvements in page load speed and platform stability for large-scale employee-facing systems',
    ],
    tech: ['React.js', 'Next.js', 'TypeScript', 'ColdFusion', 'GraphQL', 'REST APIs', 'Oracle Database', 'SQL', 'Jest', 'Vercel', 'Render'],
  },
  {
    id: '4',
    role: 'React Native Developer',
    company: 'Plumlogix (MBE Salesforce Partner)',
    period: 'Dec 2021 — Oct 2022',
    description:
      'Developed FYSH, a US side-hustle service marketplace, as lead developer collaborating with a cross-border team lead, UI/UX, and marketing teams — recognised as Plumlogix\'s Project of the Year. Built in React Native and TypeScript with Redux Toolkit, Redux Saga, and Firebase microservices.',
    achievements: [
      'Architected FYSH with Redux Toolkit, Redux Saga, and custom hooks backed by Firebase microservices (Cloud Functions, Firestore)',
      'Scaled the platform to 50K+ active users in the US market — earning Best Project of the Year award',
      'Integrated RevenueCat subscriptions, APNs/FCM push notifications, Universal Links, and deep linking',
      'Tracked attribution with AppsFlyer, monitored with Sentry; managed CI/CD through Fastlane for App Store and Google Play',
    ],
    tech: ['React Native', 'TypeScript', 'Redux Toolkit', 'Redux Saga', 'Firebase', 'RevenueCat', 'AppsFlyer', 'Sentry', 'Fastlane'],
  },
  {
    id: '5',
    role: 'React Native Developer',
    company: 'IvyLab Technologies',
    period: 'May 2021 — Dec 2021',
    description:
      'Contributed to two social apps: Slizzr, an event discovery app that grew to 300K+ users, and ComeClosely, a social connection app with TikTok-style video feeds. Both built in Expo and TypeScript with MobX and Redux for state management.',
    achievements: [
      'Slizzr: delivered live maps, QR code ticketing, push notifications, and native iOS/Android flows structured with reusable atomic design components',
      'ComeClosely: implemented front-end video SDKs, Reanimated animations, Lottie transitions, Agora audio/video calling, and i18n for multi-language support',
      'Managed releases for both apps through Expo EAS; resolved production issues that improved Slizzr\'s stability at 300K+ users',
      'Optimised memory handling in ComeClosely\'s video-heavy screens to reduce crashes',
    ],
    tech: ['Expo', 'TypeScript', 'MobX', 'Redux', 'Reanimated', 'Gesture Handler', 'Lottie', 'Agora', 'Expo EAS'],
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
