import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme';

export default function FooterSection() {
  return (
    <View style={styles.container}>
      <View style={styles.divider} />
      <View style={styles.inner}>
        <Text style={styles.left}>
          <Text style={styles.accent}>{'<'}</Text>TJ
          <Text style={styles.accent}>{'/>'}</Text>
          {' '}Tayyab Jamil
        </Text>
        <Text style={styles.center}>
          Built with React Native Web · 2025
        </Text>
        <Text style={styles.right}>Full Stack Engineer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xl,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginBottom: spacing.lg,
    maxWidth: 1100,
    width: '100%',
    alignSelf: 'center',
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 1100,
    width: '100%',
    alignSelf: 'center',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  accent: {
    color: colors.accent,
  },
  left: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
    fontFamily: 'monospace',
  },
  center: {
    fontSize: 12,
    color: colors.textDim,
  },
  right: {
    fontSize: 12,
    color: colors.textDim,
    fontFamily: 'monospace',
  },
});
