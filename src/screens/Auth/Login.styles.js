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

  forgotButton: {
    alignSelf: "flex-end",
    marginTop: -spacing.sm,
    marginBottom: spacing.lg,
  },

  forgotText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "600",
  },

  loginButton: {
    backgroundColor: colors.secondary,
    borderRadius: borderRadius.xl,
    marginBottom: spacing.xl,
  },

  accountText: {
    textAlign: "center",
    color: colors.textSecondary,
    fontSize: 15,
  },

  createAccountText: {
    textAlign: "center",
    color: colors.primary,
    fontSize: 15,
    fontWeight: "700",
    marginTop: spacing.xs,
  },
});