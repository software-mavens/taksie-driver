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
    fontSize: 28,
    fontWeight: "800",
    marginTop: spacing.sm,
    marginBottom: spacing.xs,
  },

  subtitle: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: spacing.lg,
  },

  driverCard: {
    minHeight: 72,
    backgroundColor: colors.primary,
    borderRadius: borderRadius.xl,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.xl,
  },

  initialsCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.sm,
  },

  initials: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "800",
  },

  driverInfo: {
    flex: 1,
  },

  driverName: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 2,
  },

  vehicleInfo: {
    color: "#C8CFDF",
    fontSize: 12,
  },

  verifiedBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#26375D",
    borderRadius: borderRadius.lg,
    paddingHorizontal: spacing.sm,
    paddingVertical: 6,
  },

  verifiedText: {
    color: colors.secondary,
    fontSize: 10,
    fontWeight: "700",
    marginLeft: 4,
  },

  section: {
    marginBottom: spacing.lg,
  },

  sectionLabel: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: spacing.sm,
  },

  fareInput: {
    height: 66,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.xl,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    marginBottom: spacing.sm,
  },

  currency: {
    color: colors.textSecondary,
    fontSize: 24,
    fontWeight: "600",
    marginRight: spacing.sm,
  },

  fareTextInput: {
    flex: 1,
    height: "100%",
    fontSize: 26,
    fontWeight: "700",
    color: colors.primary,
    paddingHorizontal: 0,
  },

  fareOptions: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },

  fareOption: {
    height: 32,
    paddingHorizontal: spacing.sm,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },

  selectedFareOption: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },

  fareOptionText: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: "600",
  },

  selectedFareOptionText: {
    color: colors.primary,
    fontWeight: "700",
  },

  inputGroup: {
    marginBottom: spacing.lg,
  },

  inputLabel: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: spacing.sm,
    marginLeft: spacing.xs,
  },

  seatSelector: {
    height: 72,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.xl,
    paddingHorizontal: spacing.sm,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  seatButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F7EDDE",
    alignItems: "center",
    justifyContent: "center",
  },

  seatButtonText: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: "600",
    lineHeight: 24,
  },

  seatValueContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  seatValue: {
    color: colors.primary,
    fontSize: 26,
    fontWeight: "700",
    lineHeight: 30,
  },

  seatLabel: {
    color: colors.textSecondary,
    fontSize: 9,
    letterSpacing: 1,
    marginTop: 1,
  },

  startButton: {
    backgroundColor: colors.secondary,
    borderRadius: borderRadius.xl,
    marginTop: spacing.sm,
    ...shadows.md,
  },

  startButtonContent: {
    height: 58,
  },
});