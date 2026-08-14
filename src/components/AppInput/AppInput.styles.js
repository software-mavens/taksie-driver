import { StyleSheet } from "react-native";

import theme from "../../theme/theme";

const {
  colors,
  spacing,
  borderRadius,
  shadows,
} = theme;

export default StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    paddingHorizontal: spacing.lg,
    height: 56,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.sm,
  },

  input: {
    fontSize: 16,
    color: colors.primary,
    padding: 0,
  },
});