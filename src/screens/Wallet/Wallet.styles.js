import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

const { colors, spacing, borderRadius, shadows } = theme;

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
    marginBottom: spacing.lg,
  },

  /* Balance Card */
  balanceCard: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.xxl,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    ...shadows.md,
  },
  balanceLabel: {
    color: colors.secondary,
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
  },
  balanceAmount: {
    color: colors.white,
    fontSize: 38,
    fontWeight: "800",
    marginTop: spacing.xs,
    marginBottom: spacing.xs,
  },
  bankInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  bankInfoText: {
    color: "#C8CFDF",
    fontSize: 13,
    marginLeft: spacing.xs,
  },

  /* Balance Card Actions */
  cardActions: {
    flexDirection: "row",
    gap: spacing.md,
  },
  withdrawButton: {
    flex: 1,
    height: 48,
    backgroundColor: colors.secondary,
    borderRadius: borderRadius.xl,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.xs,
  },
  withdrawText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "700",
  },
  statementButton: {
    flex: 1,
    height: 48,
    backgroundColor: "rgba(255, 255, 255, 0.12)",
    borderRadius: borderRadius.xl,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.xs,
  },
  statementText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "600",
  },

  /* Metrics Summary Row */
  metricsRow: {
    flexDirection: "row",
    gap: spacing.md,
    marginBottom: spacing.xl,
  },
  subMetricCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.xxl,
    padding: spacing.md,
  },
  subMetricLabel: {
    color: colors.textSecondary,
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 4,
  },
  subMetricValue: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: "800",
  },

  /* Activity Section */
  sectionLabel: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: spacing.sm,
  },
  activityList: {
    gap: spacing.sm,
  },
  activityCard: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.xl,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    flexDirection: "row",
    alignItems: "center",
  },
  activityIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.md,
  },
  earningIcon: {
    backgroundColor: "#E4F6EC",
  },
  withdrawalIcon: {
    backgroundColor: "#FEE2E2",
  },
  activityDetails: {
    flex: 1,
  },
  activityTitle: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 2,
  },
  activityTime: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  activityAmount: {
    fontSize: 16,
    fontWeight: "800",
  },
  earningAmount: {
    color: colors.success,
  },
  withdrawalAmount: {
    color: colors.primary,
  },
});