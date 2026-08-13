import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

const {
  colors,
  borderRadius,
} = theme;

export default StyleSheet.create({
  primaryButton: {
    backgroundColor: colors.secondary,
    borderRadius: borderRadius.xl,
  },

  primaryLabel: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: "700",
    paddingVertical: 8,
  },

  secondaryButton: {
    borderRadius: borderRadius.xl,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.35)",
  },

  secondaryLabel: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "700",
  },

  textButton: {
    alignItems: "center",
  },

  textLabel: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 16,
    fontWeight: "600",
  },
});