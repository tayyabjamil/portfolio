import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme';
import { skillGroups } from '../data';

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionNumber}>{number}</Text>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionLine} />
    </View>
  );
}

function SkillCard({ group }: { group: (typeof skillGroups)[0] }) {
  return (
    <View style={[cardStyles.card, { borderTopColor: group.color }]}>
      <View style={cardStyles.header}>
        <View style={[cardStyles.iconBox, { backgroundColor: group.color + '14', borderColor: group.color + '40' }]}>
          <Text style={cardStyles.icon}>{group.icon}</Text>
        </View>
        <Text style={cardStyles.category}>{group.category}</Text>
      </View>
      <View style={cardStyles.chips}>
        {group.skills.map((skill) => (
          <View key={skill} style={cardStyles.chip}>
            <Text style={cardStyles.chipText}>{skill}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default function SkillsSection() {
  return (
    <View style={styles.container}>
      <SectionHeader number="02" title="Skills & Tech Stack" />
      <Text style={styles.subtitle}>
        Full-stack expertise across mobile, web, backend, and cloud infrastructure
      </Text>
      <View style={styles.grid}>
        {skillGroups.map((group) => (
          <SkillCard key={group.category} group={group} />
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.lg,
  },
});

const cardStyles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: 260,
    backgroundColor: colors.bgCard,
    borderRadius: 14,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    borderTopWidth: 3,
    gap: spacing.md,
    boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
  } as any,
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 20,
  },
  category: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    flex: 1,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  chip: {
    backgroundColor: colors.bg,
    borderRadius: 20,
    paddingHorizontal: spacing.md,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: colors.border,
  },
  chipText: {
    fontSize: 12,
    color: colors.textMuted,
    fontWeight: '500',
  },
});
