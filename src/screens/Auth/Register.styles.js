import { StyleSheet } from "react-native";

import theme from "../../theme/theme";

const {
  colors,
  spacing,
  borderRadius,
} = theme;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.xxxl,
  },

  heading: {
    color: colors.primary,
    fontSize: 34,
    fontWeight: "800",
    marginTop: spacing.lg,
    marginBottom: spacing.xs,
  },

  subtitle: {
    color: colors.textSecondary,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: spacing.xl,
  },

  inputGroup: {
    marginBottom: spacing.lg,
  },

  inputLabel: {
    color: colors.textSecondary,
    fontSize: 13,
    fontWeight: "600",
    marginBottom: spacing.sm,
    marginLeft: spacing.xs,
  },

  registerButton: {
    backgroundColor: colors.secondary,
    borderRadius: borderRadius.xl,
    marginTop: spacing.sm,
    marginBottom: spacing.lg,
  },

  termsText: {
    color: colors.textSecondary,
    fontSize: 12,
    lineHeight: 18,
    textAlign: "center",
    paddingHorizontal: spacing.md,
    marginBottom: spacing.xl,
  },

  accountText: {
    color: colors.textSecondary,
    fontSize: 15,
    textAlign: "center",
  },

  loginText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    marginTop: spacing.xs,
  },
});