import { StyleSheet } from "react-native";

import theme from "../../theme/theme";

const { colors, spacing } = theme;

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.lg,
  },

  text: {
    marginLeft: spacing.xs,
    fontSize: 16,
    color: colors.textSecondary,
    fontWeight: "500",
  },
});