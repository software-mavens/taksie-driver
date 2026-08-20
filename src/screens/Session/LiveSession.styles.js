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

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.sm,
    marginTop: spacing.md,
  },

  liveStatus: {
    flexDirection: "row",
    alignItems: "center",
  },

  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.error,
    marginRight: 6,
  },

  liveText: {
    color: colors.error,
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1,
  },

  route: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: "800",
    marginBottom: spacing.lg,
  },

  collectionCard: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.xxl,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    ...shadows.md,
  },

  collectionTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  collectedLabel: {
    color: colors.secondary,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
  },

  perSeat: {
    color: "#BFC7D8",
    fontSize: 12,
  },

  collectedAmount: {
    color: colors.white,
    fontSize: 46,
    fontWeight: "800",
    marginTop: spacing.xs,
    marginBottom: spacing.md,
  },

  seatSummary: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.sm,
  },

  seatSummaryText: {
    color: "#C8CFDF",
    fontSize: 12,
  },

  progressBackground: {
    height: 8,
    backgroundColor: "#2B3B5F",
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: spacing.md,
  },

  progressFill: {
    height: "100%",
    backgroundColor: colors.secondary,
    borderRadius: 4,
  },

  seatGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },

  liveSeat: {
    width: "18.4%",
    aspectRatio: 1,
    borderRadius: 15,
    backgroundColor: "#29395D",
    alignItems: "center",
    justifyContent: "center",
  },

  paidSeat: {
    backgroundColor: colors.secondary,
  },

  latestPayment: {
    minHeight: 44,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: borderRadius.xl,
    backgroundColor: colors.surface,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    marginBottom: spacing.lg,
  },

  paymentDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.success,
    marginRight: spacing.sm,
  },

  latestPaymentText: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: "600",
  },

  passengerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.sm,
  },

  sectionLabel: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
  },

  passengerCount: {
    color: colors.textSecondary,
    fontSize: 12,
  },

  passengerList: {
    gap: spacing.sm,
  },

  passengerCard: {
    minHeight: 60,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.xl,
    paddingHorizontal: spacing.sm,
    flexDirection: "row",
    alignItems: "center",
  },

  passengerNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#E4F6EC",
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.sm,
  },

  passengerNumberText: {
    color: colors.success,
    fontSize: 13,
    fontWeight: "700",
  },

  passengerInfo: {
    flex: 1,
  },

  passengerName: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 2,
  },

  passengerTime: {
    color: colors.textSecondary,
    fontSize: 11,
  },

  passengerAmount: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "800",
    marginRight: spacing.sm,
  },

  paidIcon: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.success,
    alignItems: "center",
    justifyContent: "center",
  },

  scrollView: {
    flex: 1,
  },

  bottomSpacer: {
    height: 170,
  },

  endSessionContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 84,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    paddingBottom: spacing.sm,
  },

  endSessionButton: {
    backgroundColor: colors.secondary,
    borderRadius: borderRadius.xl,
    ...shadows.md,
 },

  endSessionButtonContent: {
    height: 54,
 },
});