import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Linking,
  Alert,
} from 'react-native';
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

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [focused, setFocused] = useState<string | null>(null);

  const handleSend = () => {
    if (!name || !email || !message) {
      Alert.alert('Missing fields', 'Please fill in all fields before sending.');
      return;
    }
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    Linking.openURL(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`);
  };

  const inputStyle = (field: string) => [
    formStyles.input,
    focused === field && formStyles.inputFocused,
  ];

  return (
    <View style={styles.container}>
      <SectionHeader number="05" title="Get In Touch" />
      <Text style={styles.subtitle}>
        Open to new opportunities, collaborations, and interesting projects.
        Let's build something great together.
      </Text>

      <View style={styles.inner}>
        <View style={styles.infoCol}>
          <Text style={styles.infoTitle}>Let's Connect</Text>
          <Text style={styles.infoText}>
            Whether you have a project in mind, want to discuss mobile or web
            architecture, or just want to say hi — my inbox is always open.
          </Text>

          <View style={styles.contactLinks}>
            {[
              { label: 'Email', value: personalInfo.email, url: `mailto:${personalInfo.email}` },
              { label: 'GitHub', value: 'github.com/tayyabjamil', url: personalInfo.github },
              { label: 'LinkedIn', value: 'linkedin.com/in/tayyab-jamil', url: personalInfo.linkedin },
              { label: 'Portfolio', value: 'mtayyabjamil.com', url: personalInfo.portfolio },
            ].map((link) => (
              <TouchableOpacity
                key={link.label}
                style={styles.linkItem}
                onPress={() => Linking.openURL(link.url)}
              >
                <Text style={styles.linkLabel}>{link.label}</Text>
                <Text style={styles.linkValue}>{link.value}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.availability}>
            <View style={styles.availDot} />
            <Text style={styles.availText}>Available for freelance & full-time roles</Text>
          </View>
        </View>

        <View style={styles.formCol}>
          <View style={formStyles.field}>
            <Text style={formStyles.label}>Your Name</Text>
            <TextInput
              style={inputStyle('name')}
              placeholder="John Doe"
              placeholderTextColor={colors.textDim}
              value={name}
              onChangeText={setName}
              onFocus={() => setFocused('name')}
              onBlur={() => setFocused(null)}
            />
          </View>
          <View style={formStyles.field}>
            <Text style={formStyles.label}>Email Address</Text>
            <TextInput
              style={inputStyle('email')}
              placeholder="john@company.com"
              placeholderTextColor={colors.textDim}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused(null)}
            />
          </View>
          <View style={formStyles.field}>
            <Text style={formStyles.label}>Message</Text>
            <TextInput
              style={[inputStyle('message'), formStyles.textarea]}
              placeholder="Tell me about your project..."
              placeholderTextColor={colors.textDim}
              value={message}
              onChangeText={setMessage}
              multiline
              numberOfLines={5}
              textAlignVertical="top"
              onFocus={() => setFocused('message')}
              onBlur={() => setFocused(null)}
            />
          </View>
          <TouchableOpacity style={formStyles.submitBtn} onPress={handleSend}>
            <Text style={formStyles.submitText}>Send Message →</Text>
          </TouchableOpacity>
        </View>
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
  inner: {
    flexDirection: 'row',
    gap: spacing.xxl,
    flexWrap: 'wrap',
  },
  infoCol: {
    flex: 1,
    minWidth: 260,
    gap: spacing.lg,
  },
  infoTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
  },
  infoText: {
    fontSize: 14,
    color: colors.textMuted,
    lineHeight: 24,
  },
  contactLinks: {
    gap: spacing.md,
  },
  linkItem: {
    gap: 2,
  },
  linkLabel: {
    fontSize: 11,
    color: colors.textDim,
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontFamily: 'monospace',
  },
  linkValue: {
    fontSize: 14,
    color: colors.accent,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  availability: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.bgCard,
    padding: spacing.md,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  availDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.green,
  },
  availText: {
    fontSize: 13,
    color: colors.textMuted,
    fontWeight: '500',
  },
  formCol: {
    flex: 2,
    minWidth: 300,
    gap: spacing.md,
  },
});

const formStyles = StyleSheet.create({
  field: {
    gap: spacing.xs,
  },
  label: {
    fontSize: 13,
    color: colors.textMuted,
    fontWeight: '500',
  },
  input: {
    backgroundColor: colors.bgCard,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    fontSize: 14,
    color: colors.text,
    outline: 'none',
  } as any,
  inputFocused: {
    borderColor: colors.accent,
    boxShadow: `0 0 0 3px ${colors.accentGlow}`,
  } as any,
  textarea: {
    height: 130,
    paddingTop: spacing.md,
  },
  submitBtn: {
    backgroundColor: colors.accent,
    paddingVertical: spacing.md,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: spacing.sm,
  },
  submitText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '700',
  },
});
