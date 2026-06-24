import React, { useRef } from 'react';
import { ScrollView, StyleSheet, View, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import NavBar from './src/components/NavBar';
import HeroSection from './src/components/HeroSection';
import SkillsSection from './src/components/SkillsSection';
import ProjectsSection from './src/components/ProjectsSection';
import ExperienceSection from './src/components/ExperienceSection';
import ContactSection from './src/components/ContactSection';
import FooterSection from './src/components/FooterSection';
import { colors } from './src/theme';

export default function App() {
  const scrollRef = useRef<ScrollView>(null);
  const sectionRefs = useRef<Record<string, number>>({});

  const handleNavPress = (id: string) => {
    const y = sectionRefs.current[id];
    if (y !== undefined) {
      scrollRef.current?.scrollTo({ y, animated: true });
    }
  };

  const setRef = (id: string) => (event: any) => {
    const y = event?.nativeEvent?.layout?.y;
    if (y !== undefined) {
      sectionRefs.current[id] = y - 70;
    }
  };

  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      <NavBar onNavPress={handleNavPress} />
      <ScrollView
        ref={scrollRef}
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View onLayout={setRef('about')}>
          <HeroSection
            onContactPress={() => handleNavPress('contact')}
            onProjectsPress={() => handleNavPress('projects')}
          />
        </View>

        <View style={styles.divider} />

        <View onLayout={setRef('skills')}>
          <SkillsSection />
        </View>

        <View style={styles.divider} />

        <View onLayout={setRef('projects')}>
          <ProjectsSection />
        </View>

        <View style={styles.divider} />

        <View onLayout={setRef('experience')}>
          <ExperienceSection />
        </View>

        <View style={styles.divider} />

        <View onLayout={setRef('contact')}>
          <ContactSection />
        </View>

        <FooterSection />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingTop: Platform.OS === 'web' ? 0 : 0,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    maxWidth: 1100,
    width: '90%',
    alignSelf: 'center',
  },
});
