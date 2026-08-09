export const personalInfo = {
  name: 'Tayyab Jamil',
  title: 'Full-Stack AI Engineer',
  subtitle: 'React Native · LangChain · Agentic Workflows',
  bio: "Full-Stack AI Engineer with 6 years passionate about using technology to solve real problems. Deep expertise in React Native, Python, Node.js, TypeScript, LangChain, pgvector, OpenAI APIs, Claude API, RAG pipelines, agentic workflows, and vector databases. Delivered 20+ production systems serving 600K+ users — including a LangChain RAG pipeline achieving 90%+ generation runs and cutting LLM costs by 20%, and 7 Sanofi pharmaceutical platforms impacting 70K+ employees globally. Uses Claude, Cursor, Qodo, and MCPs daily to write, evaluate, test, and review code.",
  location: 'Greenwich, London',
  email: 'tayyabjamil777@gmail.com',
  github: 'https://github.com/tayyabjamil',
  linkedin: 'https://www.linkedin.com/in/muhammad-tayyab-2b31251b8/',
  portfolio: 'https://mtayyabjamil.com/',
};

export const skillGroups = [
  {
    category: 'Mobile Architecture',
    icon: '📱',
    color: '#2563eb',
    skills: [
      'React Native', 'Expo', 'TypeScript', 'JavaScript (ES6+)',
      'React Navigation', 'FlashList', 'Reanimated 3',
      'NativeWind', 'Tailwind CSS', 'Hermes',
      'New Architecture (JSI, TurboModules, Fabric)',
      'Xcode', 'Android Studio',
    ],
  },
  {
    category: 'AI & LLM Engineering',
    icon: '🤖',
    color: '#7c3aed',
    skills: [
      'LangChain', 'OpenAI APIs', 'Claude API',
      'RAG Pipelines', 'pgvector', 'Vector Databases',
      'Hybrid Search', 'Embedding Optimisation',
      'Upstash Redis (LLM Caching)', 'Structured Output Generation',
      'Multimodal AI', 'Prompt Engineering',
      'AI Observability', 'MCP Integrations', 'Agentic Workflows',
    ],
  },
  {
    category: 'Backend & APIs',
    icon: '⚡',
    color: '#0891b2',
    skills: [
      'Node.js', 'NestJS', 'REST APIs', 'GraphQL', 'Apollo Client',
      'Supabase', 'Firebase (Firestore, Auth, Cloud Functions)',
      'PostgreSQL', 'MongoDB', 'SQL',
      'WebSockets', 'JWT', 'OAuth 2.0',
    ],
  },
  {
    category: 'State, DevOps & Testing',
    icon: '🚀',
    color: '#10b981',
    skills: [
      'Redux Toolkit', 'Redux Saga', 'Zustand', 'Legend State',
      'TanStack Query', 'WatermelonDB', 'MMKV',
      'Expo EAS', 'Fastlane', 'GitHub Actions',
      'Supabase Hot Updater', 'OTA Updates',
      'Jest', 'Detox', 'Maestro',
      'Sentry', 'Datadog', 'Firebase Analytics',
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
    role: 'Senior Software Engineer',
    company: 'FounderMatcha',
    period: 'Mar 2026 — Present',
    description:
      'Led development of LeftOverChef, an AI-powered nutrition and meal-planning platform, across React Native, Next.js, Supabase, and PostgreSQL. Defined architecture, API strategy, and monorepo structure. Mentored 3 developers and took the app from greenfield through beta to App Store and Google Play.',
    achievements: [
      'Architected a LangChain-based RAG pipeline using pgvector, OpenAI embeddings, macro-aware retrieval, dietary filtering, structured outputs, and validation — with multimodal ingredient detection from camera images',
      'Optimised LLM infrastructure with Upstash Redis caching, request deduplication, model routing, and vector-first retrieval — cutting OpenAI API costs by 20%',
      'Beta tested with 300+ users across TestFlight and Android internal testing; used Firebase Analytics and Sentry to monitor API latency, failed responses, and crashes — achieving 90%+ successful and diverse recipe-generation runs',
      'Now live on App Store, Google Play, and Vercel; leveraged Claude for automated PR reviews across the team',
    ],
    tech: ['React Native', 'Next.js', 'TypeScript', 'NativeWind', 'Supabase', 'PostgreSQL', 'LangChain', 'OpenAI APIs', 'Claude API', 'pgvector', 'Upstash Redis', 'RevenueCat', 'Firebase Analytics', 'Sentry', 'Expo EAS', 'GitHub Actions'],
  },
  {
    id: '1',
    role: 'React Native Developer',
    company: 'Harmony Fire',
    period: 'Sep 2025 — Mar 2026',
    description:
      'Led development of Argonaut and Auro, supporting 100+ field engineers across active construction sites. Worked directly with the CTO and stakeholders. Owned offline-first strategy, React Native New Architecture, Supabase backend, and native modules.',
    achievements: [
      'Engineered an offline-first sync engine handling 30K+ images with 0% data loss during offline-to-online sync; built dynamic forms rendering thousands of configurable survey fields',
      'Wrote JSI native modules in Swift and Kotlin for Vision Camera and BLE, eliminating JS bridge overhead and connectivity failures',
      'Replaced the legacy Simpro system — 100+ engineers now use Argonaut daily with higher crash-free session rates and faster incident response',
      'Owned 3-environment CI/CD with Fastlane, GitHub Actions, OTA updates, Sentry, and Firebase Crashlytics across both apps',
    ],
    tech: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'WatermelonDB', 'PowerSync', 'Legend State', 'JSI', 'TurboModules', 'Swift', 'Kotlin', 'Fastlane', 'Expo EAS', 'Sentry', 'Firebase Crashlytics'],
  },
  {
    id: '2',
    role: 'Senior React Native Engineer',
    company: 'Solution201',
    period: 'Sep 2024 — Aug 2025',
    description:
      'Led and mentored 4 engineers across Pixim and BusyMotors UK, setting technical direction, running code reviews, managing sprint planning, and making key engineering decisions across both products simultaneously.',
    achievements: [
      'Built a property listing ingestion pipeline scraping thousands of live listings daily, DVLA API for real-time vehicle lookup, real-time chat, Agora video calls, Maps, and Stripe payments',
      'Leveraged Claude for automated PR reviews across the team; maintained 50+ real estate portfolio subscriptions on Pixim and 200+ agent subscriptions on BusyMotors',
      'Cut bug escape rate through Detox E2E testing and Datadog monitoring; shipped both apps to App Store and Google Play',
      'Owned pull-request reviews, repository standards, and ClickUp sprint delivery across three environments',
    ],
    tech: ['React Native', 'Expo', 'TypeScript', 'NativeWind', 'Firebase', 'MongoDB', 'GraphQL', 'Agora', 'RevenueCat', 'Stripe', 'Fastlane', 'Detox', 'Datadog', 'Claude API'],
  },
  {
    id: '3',
    role: 'Ecom Developer (React / Next.js)',
    company: 'Digital Adaptation',
    period: 'Oct 2022 — Mar 2024',
    description:
      'Modernised 7 legacy Sanofi pharmaceutical platforms from ColdFusion to React.js, TypeScript, and Next.js using feature-based architecture — impacting 70K+ Sanofi employees daily across global operations.',
    achievements: [
      'Rebuilt 7 platforms in React.js, TypeScript, and Next.js with feature-based architecture, connecting to Oracle Database through SQL queries and REST / GraphQL APIs',
      'Collaborated with the Data Engineering team on SQL queries and Oracle Database integration to deliver reliable front-end data flows across all 7 platforms',
      'Deployed all 7 platforms via Render and GitHub Actions CI/CD across staging and production environments, monitored with Datadog and Chrome DevTools',
      'Delivered consistent performance improvements and platform stability for 70K+ employee-facing systems globally',
    ],
    tech: ['React.js', 'Next.js', 'TypeScript', 'GraphQL', 'REST APIs', 'Oracle Database', 'SQL', 'Jest', 'GitHub Actions', 'Vercel', 'Render', 'Datadog'],
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
