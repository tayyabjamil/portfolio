import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';
import { colors, spacing } from '../theme';
import { projects } from '../data';

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionNumber}>{number}</Text>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionLine} />
    </View>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <View style={[cardStyles.card, { borderTopColor: project.color }]}>
      {project.image ? (
        <Image
          source={project.image}
          style={cardStyles.screenshot}
          resizeMode="cover"
        />
      ) : (
        <View style={[cardStyles.screenshotPlaceholder, { backgroundColor: project.color + '18' }]}>
          <Text style={[cardStyles.placeholderText, { color: project.color }]}>{project.title}</Text>
        </View>
      )}
      <View style={cardStyles.body}>
        <View style={cardStyles.header}>
          <View style={[cardStyles.colorDot, { backgroundColor: project.color }]} />
          <Text style={cardStyles.title}>{project.title}</Text>
        </View>
        <Text style={cardStyles.description}>{project.description}</Text>

        <View style={cardStyles.highlights}>
          {project.highlights.map((h) => (
            <View key={h} style={cardStyles.highlight}>
              <Text style={[cardStyles.highlightText, { color: project.color }]}>✦ {h}</Text>
            </View>
          ))}
        </View>

        <View style={cardStyles.tags}>
          {project.tags.map((tag) => (
            <View key={tag} style={cardStyles.tag}>
              <Text style={cardStyles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>

        <View style={cardStyles.actions}>
          {project.github && (
            <TouchableOpacity
              style={[cardStyles.btn, { borderColor: project.color }]}
              onPress={() => Linking.openURL(project.github!)}
            >
              <Text style={[cardStyles.btnText, { color: project.color }]}>GitHub</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={[cardStyles.btnFilled, { backgroundColor: project.color, flex: project.github ? 1 : undefined, paddingHorizontal: project.github ? undefined : spacing.xl }]}
            onPress={() => Linking.openURL(project.store)}
          >
            <Text style={cardStyles.btnFilledText}>View App</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default function ProjectsSection() {
  return (
    <View style={styles.container}>
      <SectionHeader number="03" title="Featured Projects" />
      <Text style={styles.subtitle}>
        A selection of apps I've built — from concept to production
      </Text>
      <View style={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
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
    width: 'calc(33.333% - 16px)' as any,
    minWidth: 280,
    backgroundColor: colors.bgCard,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
    borderTopWidth: 3,
    gap: spacing.md,
    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
  } as any,
  screenshot: {
    width: '100%',
    height: 180,
    backgroundColor: colors.border,
  },
  screenshotPlaceholder: {
    width: '100%',
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: 18,
    fontWeight: '700',
    opacity: 0.6,
  },
  body: {
    padding: spacing.lg,
    gap: spacing.md,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  colorDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    flex: 1,
  },
  description: {
    fontSize: 14,
    color: colors.textMuted,
    lineHeight: 22,
  },
  highlights: {
    gap: 4,
  },
  highlight: {},
  highlightText: {
    fontSize: 13,
    fontWeight: '500',
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  tag: {
    backgroundColor: colors.bg,
    borderRadius: 4,
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: colors.border,
  },
  tagText: {
    fontSize: 11,
    color: colors.textMuted,
    fontFamily: 'monospace',
  },
  actions: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.xs,
  },
  btn: {
    flex: 1,
    paddingVertical: spacing.sm,
    borderRadius: 6,
    borderWidth: 1,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 13,
    fontWeight: '600',
  },
  btnFilled: {
    flex: 1,
    paddingVertical: spacing.sm,
    borderRadius: 6,
    alignItems: 'center',
  },
  btnFilledText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '600',
  },
});
