import { StyleSheet } from "react-native";

import theme from "../../theme/theme";

const { colors, spacing } = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  content: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xxl,
  },

  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },

  logo: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 12,
  },

  logoText: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.secondary,
  },

  heading: {
    fontSize: 40,
    fontWeight: "800",
    color: colors.white,
    lineHeight: 48,
  },

  headingGold: {
    fontSize: 40,
    fontWeight: "800",
    color: colors.secondary,
    lineHeight: 48,
    marginBottom: 20,
  },

  description: {
    color: "#D6D9E3",
    fontSize: 18,
    lineHeight: 28,
    marginBottom: 34,
  },

  features: {
    marginBottom: 36,
  },

  buttonContent: {
    height: 60,
  },

  primaryButton: {
    marginBottom: 16,
  },

  secondaryButton: {
    marginBottom: 20,
  },
});

export default styles;