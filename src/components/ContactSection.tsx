import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';

const GITHUB_SVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%2324292e'%3E%3Cpath d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'/%3E%3C/svg%3E`;
import { colors, spacing } from '../theme';
import { personalInfo } from '../data';

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionNumber}>{number}</Text>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionLine} />
    </View>
  );
}

const contacts = [
  {
    icon: '✉️',
    label: 'Email',
    value: personalInfo.email,
    sub: 'Drop me a message anytime',
    url: `mailto:${personalInfo.email}`,
    color: '#2563eb',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '07398030046',
    sub: 'Available Mon–Fri, 9am–6pm',
    url: 'tel:07398030046',
    color: '#10b981',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'muhammad-tayyab',
    sub: 'Connect professionally',
    url: personalInfo.linkedin,
    color: '#0a66c2',
  },
  {
    icon: '📍',
    label: 'Location',
    value: personalInfo.location,
    sub: 'Open to remote worldwide',
    url: null,
    color: '#7c3aed',
  },
];

export default function ContactSection() {
  return (
    <View style={styles.container}>
      <SectionHeader number="05" title="Get In Touch" />

      <View style={styles.hero}>
        <View style={styles.heroGlow} />
        <Text style={styles.heroTitle}>Let's Build Something{'\n'}Great Together</Text>
        <Text style={styles.heroSub}>
          Open to full-time roles, freelance projects, and technical collaborations.
          Whether it's a startup idea or an enterprise product — let's talk.
        </Text>
        <View style={styles.heroBadge}>
          <View style={styles.heroDot} />
          <Text style={styles.heroBadgeText}>Available for new opportunities</Text>
        </View>
      </View>

      <View style={styles.grid}>
        {contacts.map(c => (
          <TouchableOpacity
            key={c.label}
            style={styles.card}
            onPress={() => c.url && Linking.openURL(c.url)}
            activeOpacity={c.url ? 0.75 : 1}
          >
            <View style={[styles.iconBox, { backgroundColor: c.color + '14', borderColor: c.color + '30' }]}>
              {c.icon
                ? <Text style={styles.icon}>{c.icon}</Text>
                : <Image source={{ uri: GITHUB_SVG }} style={styles.githubIcon} resizeMode="contain" />}
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.cardLabel}>{c.label}</Text>
              <Text style={[styles.cardValue, c.url && { color: c.color }]}>{c.value}</Text>
              <Text style={styles.cardSub}>{c.sub}</Text>
            </View>
            {c.url && (
              <View style={[styles.arrow, { backgroundColor: c.color + '12' }]}>
                <Text style={[styles.arrowText, { color: c.color }]}>→</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.xxxl,
    paddingHorizontal: spacing.xl,
    maxWidth: 1100,
    width: '100%',
    alignSelf: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xl,
    gap: spacing.md,
  },
  sectionNumber: {
    fontSize: 13,
    color: colors.accent,
    fontFamily: 'monospace',
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
  },
  sectionLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
    marginLeft: spacing.md,
  },

  hero: {
    borderRadius: 20,
    padding: spacing.xxxl,
    marginBottom: spacing.xxl,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#0f172a',
    boxShadow: '0 8px 40px rgba(37,99,235,0.18)',
  } as any,
  heroGlow: {
    position: 'absolute',
    top: -60,
    right: -60,
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: 'rgba(37,99,235,0.25)',
    filter: 'blur(60px)',
  } as any,
  heroTitle: {
    fontSize: 36,
    fontWeight: '800',
    color: '#ffffff',
    lineHeight: 46,
    marginBottom: spacing.md,
  },
  heroSub: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.65)',
    lineHeight: 26,
    maxWidth: 560,
    marginBottom: spacing.xl,
  },
  heroBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: 'rgba(16,185,129,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(16,185,129,0.35)',
    borderRadius: 20,
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
    alignSelf: 'flex-start',
  },
  heroDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: '#10b981',
  },
  heroBadgeText: {
    fontSize: 13,
    color: '#10b981',
    fontWeight: '600',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.bgCard,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    width: 'calc(50% - 8px)' as any,
    minWidth: 280,
    boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
  } as any,
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 22,
  },
  githubIcon: {
    width: 26,
    height: 26,
  },
  cardBody: {
    flex: 1,
    gap: 2,
  },
  cardLabel: {
    fontSize: 11,
    color: colors.textDim,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    fontFamily: 'monospace',
  },
  cardValue: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
  },
  cardSub: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 1,
  },
  arrow: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowText: {
    fontSize: 16,
    fontWeight: '700',
  },
});
