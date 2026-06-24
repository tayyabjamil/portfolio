import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Linking,
  Image,
  ScrollView,
} from 'react-native';
import { colors, spacing } from '../theme';
import { personalInfo } from '../data';

const LOGOS = {
  react: require('../../assets/science.png'),
  node: require('../../assets/programing.png'),
  js: require('../../assets/js.png'),
  ts: require('../../assets/typescript.png'),
};

const TYPING_STRINGS = [
  'Full Stack Engineer',
  'React Native Specialist',
  'Mobile App Architect',
  'Next.js / Node.js Developer',
];


function useTypingEffect(strings: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[idx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % strings.length);
    }

    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx, strings, speed, pause]);

  return display;
}

function DeviceShowcase() {
  const float = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(float, { toValue: -6, duration: 2800, useNativeDriver: true }),
        Animated.timing(float, { toValue: 0, duration: 2800, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  return (
    <View style={deviceStyles.wrapper}>

      {/* Ambient glow */}
      <View style={deviceStyles.glowBlue} />
      <View style={deviceStyles.glowPurple} />


      {/* ── LAPTOP BROWSER ── */}
      <Animated.View style={[deviceStyles.laptop, { transform: [{ translateY: float }] }]}>

        {/* Page content */}
        <View style={deviceStyles.page}>

          {/* Site nav */}
          <View style={deviceStyles.siteNav}>
            <Text style={deviceStyles.siteLogo}>{'<TJ/>'}</Text>
            <View style={{ flex: 1 }} />
            <View style={deviceStyles.hireBtn}>
              <Text style={deviceStyles.hireBtnText}>Hire Me</Text>
            </View>
          </View>

          {/* Hero split */}
          <View style={deviceStyles.hero}>

            {/* Left: web capabilities */}
            <View style={deviceStyles.heroLeft}>
              <View style={deviceStyles.expertiseBadge}>
                <Text style={deviceStyles.expertiseLabel}>5+ YRS · FULL STACK WEB</Text>
              </View>
              <Text style={deviceStyles.webHeading}>Pixel-Perfect{'\n'}Web & Mobile Apps</Text>
              <Text style={deviceStyles.webSubheading}>From idea to production — scalable, fast, and built to convert.</Text>
              {[
                { icon: '🛒', title: 'eCommerce & Marketplaces',    desc: 'Multi-vendor platforms, seller dashboards, Stripe checkout', c: '#2563eb' },
                { icon: '📊', title: 'SaaS & Admin Dashboards',     desc: 'Real-time analytics, role-based access, live data feeds',   c: '#7c3aed' },
                { icon: '💬', title: 'Real-Time Collaboration',     desc: 'WebSocket chat, video rooms, shared workspaces',            c: '#0891b2' },
                { icon: '🔐', title: 'Auth & Billing Platforms',    desc: 'OAuth 2.0, JWT, Stripe subscriptions, multi-tenancy',      c: '#10b981' },
                { icon: '☁️', title: 'Scalable API Architecture',   desc: 'REST, GraphQL, serverless functions, microservices',        c: '#ea580c' },
              ].map(row => (
                <View key={row.title} style={deviceStyles.capRow}>
                  <View style={[deviceStyles.capIcon, { backgroundColor: row.c + '18' }]}>
                    <Text style={deviceStyles.capEmoji}>{row.icon}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={[deviceStyles.capTitle, { color: row.c }]}>{row.title}</Text>
                    <Text style={deviceStyles.capDesc}>{row.desc}</Text>
                  </View>
                </View>
              ))}
            </View>

            {/* Middle: tech stack column */}
            <View style={deviceStyles.techStackCol}>
              <Text style={deviceStyles.techStackLabel}>Tech Stack</Text>
              {[
                { logo: LOGOS.react, label: 'React Native', color: '#2563eb' },
                { logo: LOGOS.react, label: 'React.js',     color: '#0ea5e9' },
                { logo: LOGOS.node,  label: 'Node.js',      color: '#16a34a' },
                { logo: LOGOS.ts,    label: 'TypeScript',   color: '#3b82f6' },
                { logo: LOGOS.js,    label: 'JavaScript',   color: '#ca8a04' },
                { logo: null,        label: 'Expo EAS',     color: '#7c3aed' },
                { logo: null,        label: 'Firebase',     color: '#ea580c' },
                { logo: null,        label: 'Supabase',     color: '#10b981' },
                { logo: null,        label: 'GraphQL',      color: '#e11d48' },
                { logo: null,        label: 'AWS Lambda',   color: '#f59e0b' },
                { logo: null,        label: 'Next.js',      color: '#000000' },
                { logo: null,        label: 'GitHub',       color: '#24292e' },
                { logo: null,        label: 'Expo',         color: '#000020' },
                { logo: null,        label: 'Fastlane',     color: '#e11d48' },
                { logo: null,        label: 'MongoDB',      color: '#16a34a' },
              ].map(t => (
                <View key={t.label} style={[deviceStyles.techStackBadge, { borderColor: t.color + '40', backgroundColor: t.color + '0a' }]}>
                  {t.logo
                    ? <Image source={t.logo} style={deviceStyles.techStackIcon} resizeMode="contain" />
                    : <View style={[deviceStyles.techStackDot, { backgroundColor: t.color }]} />}
                  <Text style={[deviceStyles.techStackName, { color: t.color }]}>{t.label}</Text>
                </View>
              ))}
            </View>

            {/* Right: phone */}
            <View style={deviceStyles.phoneCol}>
              <View style={deviceStyles.phone}>
                {/* Dynamic island */}
                <View style={deviceStyles.island} />
                {/* Status bar */}
                <View style={deviceStyles.statusRow}>
                  <Text style={deviceStyles.statusTime}>9:41</Text>
                  <View style={deviceStyles.statusRight}>
                    {[4,6,8].map((h,i) => <View key={i} style={[deviceStyles.signal, { height: h }]} />)}
                    <View style={deviceStyles.battery} />
                  </View>
                </View>
                {/* Scrollable phone content */}
                <ScrollView
                  style={{ flex: 1 }}
                  contentContainerStyle={deviceStyles.phoneScroll}
                  showsVerticalScrollIndicator={false}
                  bounces
                >
                  {/* Phone hero */}
                  <View style={deviceStyles.rnHero}>
                    <Image source={LOGOS.react} style={deviceStyles.rnLogo} resizeMode="contain" />
                    <View style={deviceStyles.rnBadge}>
                      <Text style={deviceStyles.rnBadgeText}>5+ YRS · REACT NATIVE · EXPO</Text>
                    </View>
                    <Text style={deviceStyles.rnTitle}>Native-Quality Apps{'\n'}for iOS & Android</Text>
                    <Text style={deviceStyles.rnSub}>Capabilities include</Text>
                  </View>

                  {/* Mobile capabilities */}
                  {[
                    { icon: '📴', title: 'Offline-First Architecture', desc: 'WatermelonDB sync, queue-based uploads, works anywhere',   c: '#2563eb' },
                    { icon: '🎥', title: 'Audio & Video Streaming',    desc: 'WebRTC, Agora live rooms, media recording & playback',    c: '#7c3aed' },
                    { icon: '🗺️', title: 'Maps & Live Location',       desc: 'Real-time tracking, geofencing, route optimisation',      c: '#ea580c' },
                    { icon: '✨', title: 'Fluid Animations & Gestures', desc: '60fps with Reanimated, Lottie, shared element transitions', c: '#0891b2' },
                    { icon: '💳', title: 'Payments & Subscriptions',   desc: 'Stripe, RevenueCat, in-app purchases, billing flows',     c: '#10b981' },
                    { icon: '🔔', title: 'Push & Deep Linking',        desc: 'Rich notifications, background tasks, dynamic links',     c: '#a855f7' },
                    { icon: '📷', title: 'Camera, QR & Biometrics',    desc: 'Face ID, document scanning, photo upload pipelines',      c: '#ec4899' },
                    { icon: '🚀', title: 'CI/CD · Fastlane · EAS',    desc: 'Automated builds, OTA updates, App Store & Play deploys', c: '#64748b' },
                  ].map(item => (
                    <View key={item.title} style={[deviceStyles.mobileCapItem, { borderLeftColor: item.c }]}>
                      <Text style={deviceStyles.mobileCapItemIcon}>{item.icon}</Text>
                      <View style={{ flex: 1 }}>
                        <Text style={[deviceStyles.mobileCapItemTitle, { color: item.c }]}>{item.title}</Text>
                        <Text style={deviceStyles.mobileCapItemDesc}>{item.desc}</Text>
                      </View>
                    </View>
                  ))}

                  {/* Spacer for bottom nav */}
                  <View style={{ height: 52 }} />
                </ScrollView>

                {/* Bottom nav — fixed over scroll */}
                <View style={deviceStyles.phoneNav}>
                  {['⌂','⊞','◎','♡'].map((ic, i) => (
                    <View key={i} style={deviceStyles.navItem}>
                      <Text style={[deviceStyles.navIcon, i===0 && { color: '#2563eb' }]}>{ic}</Text>
                      {i === 0 && <View style={deviceStyles.navDot} />}
                    </View>
                  ))}
                </View>
                <View style={deviceStyles.homeBar} />
              </View>
            </View>

          </View>
        </View>
      </Animated.View>

      {/* Laptop base */}
      <View style={deviceStyles.laptopBase}>
        <View style={deviceStyles.laptopHinge} />
      </View>

    </View>
  );
}

interface HeroSectionProps {
  onContactPress: () => void;
  onProjectsPress: () => void;
}

export default function HeroSection({ onContactPress, onProjectsPress }: HeroSectionProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;
  const typedText = useTypingEffect(TYPING_STRINGS);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 900, delay: 200, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 700, delay: 200, useNativeDriver: true }),
    ]).start();

    const blinkInterval = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.bgGradient} />
      <View style={styles.grid} />

      <View style={styles.inner}>
        {/* Left: text content */}
        <Animated.View style={[styles.textCol, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
          <View style={styles.badgeRow}>
            <View style={styles.badge}>
              <View style={styles.dot} />
              <Text style={styles.badgeText}>5+ Years of Experience</Text>
            </View>
          </View>

          <Text style={styles.greeting}>
            Hi, I'm{' '}
            <Text style={styles.nameHighlight}>{personalInfo.name}</Text>
          </Text>

          <View style={styles.typingRow}>
            <Text style={styles.typingText}>{typedText}</Text>
            <Text style={[styles.cursor, { opacity: blink ? 1 : 0 }]}>|</Text>
          </View>


          <Text style={styles.bio}>{personalInfo.bio}</Text>

          <View style={styles.achieveRow}>
            {[
              { icon: '🏆', text: 'Best Project of the Year — FYSH (50K+ users)' },
              { icon: '📱', text: 'Apps live on iOS & Android App Stores' },
              { icon: '🌍', text: 'Worked with UK startups & enterprise clients' },
            ].map(a => (
              <View key={a.text} style={styles.achieveItem}>
                <Text style={styles.achieveIcon}>{a.icon}</Text>
                <Text style={styles.achieveText}>{a.text}</Text>
              </View>
            ))}
          </View>

          <View style={styles.statsRow}>
            {[
              { value: '5+', label: 'Years Exp.' },
              { value: '22+', label: 'Projects' },
              { value: '60K+', label: 'App Users' },
            ].map((stat) => (
              <View key={stat.label} style={styles.statItem}>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>

          <View style={styles.contactRow}>
            <TouchableOpacity onPress={() => Linking.openURL(`mailto:${personalInfo.email}`)}>
              <Text style={styles.contactItem}>✉️ {personalInfo.email}</Text>
            </TouchableOpacity>
            <Text style={styles.contactItem}>📍 {personalInfo.location}</Text>
            <TouchableOpacity onPress={() => Linking.openURL('tel:07398030046')}>
              <Text style={styles.contactItem}>📞 07398030046</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ctaRow}>
            <TouchableOpacity style={styles.primaryBtn} onPress={onProjectsPress}>
              <Text style={styles.primaryBtnText}>View My Work</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryBtn} onPress={onContactPress}>
              <Text style={styles.secondaryBtnText}>Get In Touch</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.socialRow}>
            {[
              { label: 'GitHub', url: personalInfo.github },
              { label: 'LinkedIn', url: personalInfo.linkedin },
              { label: 'Portfolio', url: personalInfo.portfolio },
            ].map((s) => (
              <TouchableOpacity key={s.label} onPress={() => Linking.openURL(s.url)}>
                <Text style={styles.socialLink}>{s.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Animated.View>

        {/* Right: device showcase */}
        <Animated.View style={[styles.phoneCol, { opacity: fadeAnim }]}>
          <DeviceShowcase />
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingBottom: spacing.xxxl,
    paddingHorizontal: spacing.xl,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: colors.bg,
  },
  bgGradient: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '55%',
    bottom: 0,
    backgroundImage: 'linear-gradient(135deg, rgba(37,99,235,0.04) 0%, rgba(124,58,237,0.06) 100%)',
  } as any,
  grid: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.35,
    backgroundImage:
      'repeating-linear-gradient(#e2e8f0 0 1px, transparent 1px 100%), repeating-linear-gradient(90deg, #e2e8f0 0 1px, transparent 1px 100%)',
    backgroundSize: '50px 50px',
  } as any,
  inner: {
    maxWidth: 1400,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xxl,
    flexWrap: 'wrap',
  },
  textCol: {
    flex: 1,
    minWidth: 320,
    paddingLeft: spacing.xxxl,
  },
  phoneCol: {
    flex: 1,
    minWidth: 720,
    alignItems: 'flex-end',
    paddingVertical: spacing.xl,
  },
  badgeRow: {
    marginBottom: spacing.lg,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.accentGlow,
    borderWidth: 1,
    borderColor: colors.borderAccent,
    borderRadius: 20,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs + 2,
    gap: spacing.xs,
    alignSelf: 'flex-start',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.green,
  },
  badgeText: {
    color: colors.accent,
    fontSize: 13,
    fontWeight: '500',
  },
  greeting: {
    fontSize: 48,
    fontWeight: '800',
    color: colors.text,
    lineHeight: 58,
    marginBottom: spacing.sm,
  },
  nameHighlight: {
    color: colors.accent,
  },
  typingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
    minHeight: 44,
  },
  typingText: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.textMuted,
    fontFamily: 'monospace',
  },
  cursor: {
    fontSize: 24,
    color: colors.accent,
    fontWeight: '300',
    marginLeft: 2,
  },
  bio: {
    fontSize: 15,
    color: colors.textMuted,
    lineHeight: 26,
    maxWidth: 520,
    marginBottom: spacing.xl,
  },
  statsRow: {
    flexDirection: 'row',
    gap: spacing.xl,
    marginBottom: spacing.xl,
  },
  statItem: {
    alignItems: 'flex-start',
  },
  statValue: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.accent,
    fontFamily: 'monospace',
  },
  statLabel: {
    fontSize: 11,
    color: colors.textDim,
    marginTop: 2,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  ctaRow: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing.xl,
    flexWrap: 'wrap',
  },
  primaryBtn: {
    backgroundColor: colors.accent,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: 8,
  },
  primaryBtnText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '700',
  },
  secondaryBtn: {
    backgroundColor: 'transparent',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: colors.border,
  },
  secondaryBtnText: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '600',
  },
  highlightRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  highlightTag: {
    backgroundColor: colors.bgCard,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 20,
    paddingHorizontal: spacing.md,
    paddingVertical: 4,
  },
  highlightTagText: {
    fontSize: 12,
    color: colors.textMuted,
    fontWeight: '500',
    fontFamily: 'monospace',
  },
  achieveRow: {
    gap: spacing.sm,
    marginBottom: spacing.xl,
  },
  achieveItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  achieveIcon: {
    fontSize: 14,
  },
  achieveText: {
    fontSize: 13,
    color: colors.textMuted,
    lineHeight: 20,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.lg,
    marginBottom: spacing.xl,
  },
  contactItem: {
    fontSize: 13,
    color: colors.textMuted,
    fontWeight: '500',
  },
  socialRow: {
    flexDirection: 'row',
    gap: spacing.lg,
  },
  socialLink: {
    color: colors.textDim,
    fontSize: 13,
    fontWeight: '500',
    textDecorationLine: 'underline',
    textDecorationStyle: 'dotted',
  },
});

const deviceStyles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    width: 780,
    height: 520,
    alignSelf: 'flex-end',
  },
  glowBlue: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(37,99,235,0.10)',
    top: '30%',
    left: '15%',
    filter: 'blur(50px)',
  } as any,
  glowPurple: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(124,58,237,0.07)',
    top: '10%',
    right: '10%',
    filter: 'blur(40px)',
  } as any,
  badge: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
    zIndex: 20,
  },
  badgeIcon: {
    width: 13,
    height: 13,
    borderRadius: 3,
  },
  badgeDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '600',
    fontFamily: 'monospace',
  },

  /* ── Laptop / Browser ── */
  laptop: {
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: '#cbd5e1',
    backgroundColor: '#ffffff',
    height: 480,
    boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 4px 16px rgba(37,99,235,0.10)',
  } as any,

  /* macOS-style chrome row */
  chrome: {
    backgroundColor: '#f1f5f9',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    paddingHorizontal: 12,
    paddingTop: 7,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 32,
  },
  dots: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    paddingBottom: 6,
    marginRight: 8,
  },
  dot: { width: 9, height: 9, borderRadius: 4.5 },
  tabBar: { flex: 1, flexDirection: 'row', alignItems: 'flex-end' },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,
    gap: 5,
    minWidth: 160,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderBottomWidth: 0,
  },
  favicon: { width: 8, height: 8, borderRadius: 2 },
  tabText: { fontSize: 10, color: '#374151', fontWeight: '500', flex: 1 },
  tabClose: { fontSize: 12, color: '#9ca3af', fontWeight: '300', lineHeight: 14 },

  /* Address bar */
  addressBar: {
    backgroundColor: '#f8fafc',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    height: 28,
  },
  addressIcon: { fontSize: 11 },
  addressField: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    alignItems: 'center',
  },
  addressText: { fontSize: 10, color: '#374151', fontFamily: 'monospace', fontWeight: '500' },
  addressRefresh: { fontSize: 13, color: '#6b7280' },

  /* Page content area */
  page: { flex: 1, backgroundColor: '#ffffff' },

  /* Site nav bar inside page */
  siteNav: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
    gap: 12,
    height: 34,
  },
  siteLogo: { fontSize: 13, fontWeight: '800', color: '#2563eb', fontFamily: 'monospace' },
  siteLinks: { flex: 1, flexDirection: 'row', gap: 12, justifyContent: 'center' },
  siteLink: { fontSize: 10, color: '#475569', fontWeight: '500' },
  hireBtn: { backgroundColor: '#2563eb', borderRadius: 4, paddingHorizontal: 8, paddingVertical: 4 },
  hireBtnText: { fontSize: 9, color: '#ffffff', fontWeight: '700' },

  /* Hero split */
  hero: { flex: 1, flexDirection: 'row', overflow: 'hidden' },
  heroLeft: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 7,
    justifyContent: 'center',
  },

  /* Available badge */
  availBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(16,185,129,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(16,185,129,0.30)',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    alignSelf: 'flex-start',
  },
  availDot: { width: 5, height: 5, borderRadius: 2.5, backgroundColor: '#10b981' },
  availText: { fontSize: 7, color: '#10b981', fontWeight: '600' },

  /* Hero text */
  heroGreet: { fontSize: 9, color: '#64748b', fontWeight: '500' },
  heroName: { fontSize: 18, fontWeight: '800', color: '#0f172a', lineHeight: 22, marginTop: -2 },
  heroUnderline: { width: 32, height: 2.5, backgroundColor: '#2563eb', borderRadius: 1, marginTop: 1 },
  heroRole: { fontSize: 9, fontWeight: '700', color: '#2563eb', marginTop: 1 },
  heroSub: { fontSize: 7, color: '#64748b', lineHeight: 10 },

  /* Tech logo row */
  logoRow: { flexDirection: 'row', gap: 4, marginTop: 1 },
  logoBox: { width: 24, height: 24, borderRadius: 6, borderWidth: 1, alignItems: 'center', justifyContent: 'center' },
  logoImg: { width: 15, height: 15, borderRadius: 2 },

  /* Stats */
  statsRow: { flexDirection: 'row', gap: 10, marginTop: 2 },
  statBox: { alignItems: 'flex-start' },
  statVal: { fontSize: 12, fontWeight: '800', color: '#0f172a', fontFamily: 'monospace' },
  statLbl: { fontSize: 6, color: '#94a3b8', textTransform: 'uppercase' as any, letterSpacing: 0.5 },

  /* CTA buttons (kept for potential use) */
  ctaRow: { flexDirection: 'row', gap: 5, marginTop: 1 },
  ctaPrimary: { backgroundColor: '#2563eb', borderRadius: 4, paddingHorizontal: 10, paddingVertical: 4 },
  ctaPrimaryText: { fontSize: 7, color: '#ffffff', fontWeight: '700' },
  ctaSecondary: { borderWidth: 1, borderColor: '#cbd5e1', borderRadius: 4, paddingHorizontal: 10, paddingVertical: 4 },
  ctaSecondaryText: { fontSize: 7, color: '#374151', fontWeight: '600' },

  /* ── Web expertise (heroLeft replacement) ── */
  expertiseBadge: {
    backgroundColor: '#eff6ff',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#bfdbfe',
    marginBottom: 2,
  },
  expertiseLabel: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1d4ed8',
    letterSpacing: 0.5,
    textTransform: 'uppercase' as any,
    fontFamily: 'monospace',
  },

  /* 2×2 logo grid */
  logoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  logoCard: {
    width: '47%' as any,
    backgroundColor: '#f8fafc',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderTopWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 6,
    paddingVertical: 5,
  },
  logoCardImg: { width: 16, height: 16, borderRadius: 3 },
  logoCardName: { fontSize: 9.5, fontWeight: '700', fontFamily: 'monospace' },

  /* Web heading / subheading */
  webHeading: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0f172a',
    lineHeight: 34,
    marginTop: 2,
  },
  webSubheading: {
    fontSize: 13,
    color: '#64748b',
    lineHeight: 18,
    marginTop: 3,
    marginBottom: 4,
  },

  /* Section mini labels & industry tags (web side) */
  sectionMiniLabel: {
    fontSize: 8,
    fontWeight: '700',
    color: '#94a3b8',
    textTransform: 'uppercase' as any,
    letterSpacing: 0.5,
    marginTop: 5,
    marginBottom: 4,
  },
  industryRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 4, marginBottom: 2 },
  industryTag: {
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 7,
    paddingVertical: 3,
  },
  industryTagText: { fontSize: 8.5, fontWeight: '700' },

  /* Capability rows */
  capRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  capIcon: {
    width: 18,
    height: 18,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  capEmoji: { fontSize: 13 },
  capTitle: { fontSize: 12, fontWeight: '700', lineHeight: 16 },
  capDesc:  { fontSize: 10, color: '#64748b', lineHeight: 13, marginTop: 1 },
  capDot: { width: 5, height: 5, borderRadius: 2.5 },

  /* Web project rows */
  projectRow: {
    borderLeftWidth: 2,
    paddingLeft: 8,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f8fafc',
    gap: 3,
  },
  projectRowTop: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 2 },
  projectName: { fontSize: 12, fontWeight: '800' },
  projectTag: { borderRadius: 4, paddingHorizontal: 5, paddingVertical: 2 },
  projectTagText: { fontSize: 7, fontWeight: '600' },
  projectDesc: { fontSize: 7.5, color: '#64748b', lineHeight: 10.5 },

  /* Mobile capability items (in phone scroll) */
  mobileCapItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderLeftWidth: 2,
    marginHorizontal: 10,
    paddingLeft: 8,
    paddingVertical: 7,
    gap: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  mobileCapItemIcon: { fontSize: 11, marginTop: 1 },
  mobileCapItemTitle: { fontSize: 9, fontWeight: '800', lineHeight: 12, marginBottom: 1 },
  mobileCapItemDesc: { fontSize: 7, color: '#64748b', lineHeight: 10 },

  /* ── Tech stack column (between web content and phone) ── */
  techStackCol: {
    width: 110,
    borderLeftWidth: 1,
    borderLeftColor: '#f1f5f9',
    borderRightWidth: 1,
    borderRightColor: '#f1f5f9',
    backgroundColor: '#fafbfc',
    paddingHorizontal: 8,
    paddingVertical: 10,
    gap: 5,
  },
  techStackLabel: {
    fontSize: 8,
    fontWeight: '700',
    color: '#94a3b8',
    textTransform: 'uppercase' as any,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  techStackBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  techStackIcon: { width: 12, height: 12, borderRadius: 2 },
  techStackDot:  { width: 8, height: 8, borderRadius: 4 },
  techStackName: { fontSize: 8.5, fontWeight: '600', flex: 1 },

  /* ── Phone column (right side inside browser) ── */
  phoneCol: {
    width: 230,
    backgroundColor: '#f8fafc',
    borderLeftWidth: 1,
    borderLeftColor: '#e2e8f0',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },

  /* Phone frame */
  phone: {
    width: 200,
    height: 400,
    borderRadius: 30,
    borderWidth: 7,
    borderColor: '#1e293b',
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    boxShadow: '0 12px 40px rgba(0,0,0,0.22), 0 4px 12px rgba(37,99,235,0.16)',
  } as any,

  /* Dynamic island */
  island: {
    width: 64,
    height: 15,
    backgroundColor: '#1e293b',
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 8,
    marginBottom: 5,
  },

  /* Status bar */
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 2,
  },
  statusTime: { fontSize: 12, fontWeight: '700', color: '#0f172a', fontFamily: 'monospace' },
  statusRight: { flexDirection: 'row', alignItems: 'flex-end', gap: 2.5 },
  signal: { width: 3.5, backgroundColor: '#0f172a', borderRadius: 1 },
  battery: { width: 15, height: 8, borderRadius: 2.5, borderWidth: 1.5, borderColor: '#0f172a', marginLeft: 3 },

  /* React Native hero block in phone */
  rnHero: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: '#eff6ff',
    borderBottomWidth: 1,
    borderBottomColor: '#dbeafe',
    gap: 3,
  },
  rnLogo: { width: 54, height: 54 },
  rnBadge: {
    backgroundColor: '#dbeafe',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  rnBadgeText: {
    fontSize: 7,
    fontWeight: '800',
    color: '#1d4ed8',
    letterSpacing: 0.5,
    textTransform: 'uppercase' as any,
    fontFamily: 'monospace',
  },
  rnTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0f172a',
    textAlign: 'center',
    lineHeight: 18,
  },
  rnSub: {
    fontSize: 9,
    color: '#2563eb',
    fontWeight: '600',
    textAlign: 'center',
  },
  rnDesc: {
    fontSize: 9.5,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 13,
    paddingHorizontal: 6,
  },

  /* Mobile industry tags */
  mobileIndustryWrap: { paddingHorizontal: 10, paddingTop: 8, paddingBottom: 4 },
  mobileIndustryLabel: { fontSize: 8, fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase' as any, letterSpacing: 0.5, marginBottom: 4 },
  mobileIndustryRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 5 },
  mobileIndTag: { borderRadius: 10, borderWidth: 1, paddingHorizontal: 8, paddingVertical: 4 },
  mobileIndText: { fontSize: 10, fontWeight: '700' },

  /* Mobile superpower rows */
  mobilePowerWrap: { paddingHorizontal: 10, paddingTop: 6 },
  mobilePowerLabel: { fontSize: 9, fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase' as any, letterSpacing: 0.5, marginBottom: 5 },
  mobilePowerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  mobilePowerIcon: { fontSize: 13, width: 18 },
  mobilePowerText: { fontSize: 11, fontWeight: '600', flex: 1 },

  /* Mobile capability chips (kept for potential reuse) */
  mobileCapWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  mobileChip: {
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  mobileChipText: { fontSize: 7, fontWeight: '600' },

  /* Mini stat cards in phone */
  miniStats: { flexDirection: 'row', paddingHorizontal: 8, paddingVertical: 7, gap: 4 },
  miniStat: {
    flex: 1,
    backgroundColor: '#f8fafc',
    borderRadius: 6,
    paddingVertical: 5,
    alignItems: 'center',
    borderTopWidth: 2,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  miniStatVal: { fontSize: 13, fontWeight: '800', fontFamily: 'monospace' },
  miniStatLbl: { fontSize: 8.5, color: '#94a3b8', marginTop: 2 },

  /* App list rows in phone */
  appRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 9,
    paddingVertical: 6,
    gap: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  appIcon: { width: 26, height: 26, borderRadius: 8, borderWidth: 1, alignItems: 'center', justifyContent: 'center' },
  appName: { fontSize: 9, fontWeight: '700', color: '#0f172a' },
  appSub: { fontSize: 7, color: '#94a3b8' },
  livePill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    backgroundColor: 'rgba(16,185,129,0.10)',
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  livePillDot: { width: 5, height: 5, borderRadius: 2.5, backgroundColor: '#10b981' },
  livePillText: { fontSize: 7, fontWeight: '700', color: '#10b981' },

  phoneScroll: {
    flexGrow: 1,
  },

  /* Phone bottom nav — sits below scroll, above home bar */
  phoneNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    paddingTop: 6,
    paddingBottom: 4,
    backgroundColor: '#ffffff',
  },
  navItem: { alignItems: 'center', gap: 2 },
  navIcon: { fontSize: 18, color: '#94a3b8' },
  navDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#2563eb' },
  homeBar: {
    alignSelf: 'center',
    width: 56,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#1e293b',
    opacity: 0.5,
    marginVertical: 6,
  },

  /* Laptop base / stand */
  laptopBase: { alignItems: 'center' },
  laptopHinge: {
    width: 180,
    height: 8,
    backgroundColor: '#d1d5db',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopWidth: 2,
    borderTopColor: '#e5e7eb',
  },
});
