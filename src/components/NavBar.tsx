import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Platform,
} from 'react-native';
import { colors, spacing } from '../theme';

const NAV_ITEMS = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];

interface NavBarProps {
  onNavPress: (id: string) => void;
}

export default function NavBar({ onNavPress }: NavBarProps) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <View style={styles.inner}>
        <Text style={styles.logo}>
          <Text style={styles.logoAccent}>{'<'}</Text>TJ
          <Text style={styles.logoAccent}>{'/>'}</Text>
        </Text>
        <View style={styles.navItems}>
          {NAV_ITEMS.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => onNavPress(item.id)}
              style={styles.navItem}
            >
              <Text style={styles.navText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.resumeBtn}
            onPress={() => onNavPress('contact')}
          >
            <Text style={styles.resumeBtnText}>Hire Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: Platform.OS === 'web' ? ('fixed' as any) : 'relative',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backdropFilter: 'blur(12px)',
    boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
  } as any,
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    maxWidth: 1100,
    alignSelf: 'center',
    width: '100%',
  },
  logo: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    fontFamily: 'monospace',
  },
  logoAccent: {
    color: colors.accent,
  },
  navItems: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.lg,
  },
  navItem: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
  },
  navText: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: '500',
  },
  resumeBtn: {
    backgroundColor: colors.accent,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: 6,
    marginLeft: spacing.sm,
  },
  resumeBtnText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
});
