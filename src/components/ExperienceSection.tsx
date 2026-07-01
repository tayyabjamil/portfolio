import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme';
import { experience, certifications } from '../data';

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionNumber}>{number}</Text>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionLine} />
    </View>
  );
}

function ExperienceItem({
  item,
  isLast,
}: {
  item: (typeof experience)[0];
  isLast: boolean;
}) {
  return (
    <View style={itemStyles.row}>
      <View style={itemStyles.timeline}>
        <View style={itemStyles.dot} />
        {!isLast && <View style={itemStyles.line} />}
      </View>
      <View style={[itemStyles.card, isLast && { marginBottom: 0 }]}>
        <View style={itemStyles.header}>
          <View style={itemStyles.headerLeft}>
            <Text style={itemStyles.role}>{item.role}</Text>
            <Text style={itemStyles.company}>{item.company}</Text>
          </View>
          <View style={itemStyles.periodBadge}>
            <Text style={itemStyles.period}>{item.period}</Text>
          </View>
        </View>
        <Text style={itemStyles.description}>{item.description}</Text>
        <View style={itemStyles.achievements}>
          {item.achievements.map((a) => (
            <View key={a} style={itemStyles.achievement}>
              <Text style={itemStyles.achievementBullet}>→</Text>
              <Text style={itemStyles.achievementText}>{a}</Text>
            </View>
          ))}
        </View>
        <View style={itemStyles.techRow}>
          {item.tech.map((t) => (
            <View key={t} style={itemStyles.techTag}>
              <Text style={itemStyles.techTagText}>{t}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

function CertificationsBlock() {
  return (
    <View style={certStyles.container}>
      <Text style={certStyles.heading}>Licenses & Certifications</Text>
      <View style={certStyles.grid}>
        {certifications.map((cert) => (
          <View key={cert.id} style={certStyles.card}>
            <View style={certStyles.iconBox}>
              <Text style={certStyles.icon}>☁️</Text>
            </View>
            <View style={certStyles.body}>
              <Text style={certStyles.title}>{cert.title}</Text>
              <Text style={certStyles.issuer}>{cert.issuer}</Text>
              <Text style={certStyles.dates}>
                Issued {cert.issued} · Expires {cert.expires}
              </Text>
              <View style={certStyles.skillsRow}>
                {cert.skills.map((s) => (
                  <View key={s} style={certStyles.skillTag}>
                    <Text style={certStyles.skillText}>{s}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

export default function ExperienceSection() {
  return (
    <View style={styles.container}>
      <SectionHeader number="04" title="Work Experience" />
      <Text style={styles.subtitle}>5+ years building production products across mobile, web, and backend</Text>
      <View style={styles.timeline}>
        {experience.map((item, i) => (
          <ExperienceItem key={item.id} item={item} isLast={i === experience.length - 1} />
        ))}
      </View>
      <CertificationsBlock />
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
    marginBottom: spacing.sm,
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
  subtitle: {
    fontSize: 15,
    color: colors.textMuted,
    marginBottom: spacing.xl,
    lineHeight: 24,
  },
  timeline: {},
});

const itemStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: spacing.lg,
  },
  timeline: {
    alignItems: 'center',
    width: 20,
    paddingTop: 4,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.accent,
    borderWidth: 2,
    borderColor: colors.bg,
    zIndex: 1,
  },
  line: {
    flex: 1,
    width: 2,
    backgroundColor: colors.border,
    marginTop: 4,
  },
  card: {
    flex: 1,
    backgroundColor: colors.bgCard,
    borderRadius: 12,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.xl,
    gap: spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  headerLeft: {
    gap: 2,
  },
  role: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.text,
  },
  company: {
    fontSize: 14,
    color: colors.accent,
    fontWeight: '500',
  },
  periodBadge: {
    backgroundColor: colors.accentGlow,
    borderRadius: 6,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: colors.borderAccent,
  },
  period: {
    fontSize: 12,
    color: colors.accent,
    fontFamily: 'monospace',
  },
  description: {
    fontSize: 14,
    color: colors.textMuted,
    lineHeight: 22,
  },
  achievements: {
    gap: 6,
  },
  achievement: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  achievementBullet: {
    color: colors.accent,
    fontSize: 13,
    fontWeight: '700',
  },
  achievementText: {
    fontSize: 13,
    color: colors.textMuted,
    flex: 1,
    lineHeight: 20,
  },
  techRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  techTag: {
    backgroundColor: colors.bg,
    borderRadius: 4,
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: colors.border,
  },
  techTagText: {
    fontSize: 11,
    color: colors.textDim,
    fontFamily: 'monospace',
  },
});

const certStyles = StyleSheet.create({
  container: {
    marginTop: spacing.xxl,
    paddingTop: spacing.xxl,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.lg,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.lg,
  },
  card: {
    flex: 1,
    minWidth: 280,
    flexDirection: 'row',
    gap: spacing.md,
    backgroundColor: colors.bgCard,
    borderRadius: 12,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: colors.accentGlow,
    borderWidth: 1,
    borderColor: colors.borderAccent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 22,
  },
  body: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
  },
  issuer: {
    fontSize: 13,
    color: colors.accent,
    fontWeight: '500',
  },
  dates: {
    fontSize: 12,
    color: colors.textDim,
    fontFamily: 'monospace',
  },
  skillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
    marginTop: 4,
  },
  skillTag: {
    backgroundColor: colors.bg,
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: colors.border,
  },
  skillText: {
    fontSize: 11,
    color: colors.textDim,
    fontFamily: 'monospace',
  },
});
