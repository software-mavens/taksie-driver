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
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
  heading: {
    color: colors.primary,
    fontSize: 28,
    fontWeight: "800",
  },
  addButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    ...shadows.sm,
  },
  
  /* Filter Chips Bar */
  filterContainer: {
    flexDirection: "row",
    gap: spacing.xs,
    marginBottom: spacing.lg,
  },
  filterChip: {
    paddingHorizontal: spacing.md,
    paddingVertical: 8,
    borderRadius: borderRadius.lg,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  activeFilterChip: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  filterText: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: "600",
  },
  activeFilterText: {
    color: colors.white,
    fontWeight: "700",
  },

  /* Metric Cards */
  metricsRow: {
    flexDirection: "row",
    gap: spacing.md,
    marginBottom: spacing.xl,
  },
  todayCard: {
    flex: 1.2,
    backgroundColor: colors.primary,
    borderRadius: borderRadius.xxl,
    padding: spacing.md,
    justifyContent: "center",
    ...shadows.md,
  },
  metricLabel: {
    color: colors.secondary,
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 4,
  },
  metricValueDark: {
    color: colors.white,
    fontSize: 28,
    fontWeight: "800",
  },
  sessionsCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.xxl,
    padding: spacing.md,
    justifyContent: "center",
  },
  sessionsLabel: {
    color: colors.textSecondary,
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 4,
  },
  metricValueLight: {
    color: colors.primary,
    fontSize: 28,
    fontWeight: "800",
  },

  /* Date Group Headers */
  dateSectionHeader: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    marginTop: spacing.sm,
    marginBottom: spacing.sm,
  },

  /* Session Log Cards */
  logsList: {
    gap: spacing.sm,
  },
  logCard: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.xl,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logInfo: {
    flex: 1,
    paddingRight: spacing.sm,
  },
  routeText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 4,
  },
  metaText: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  logMetaRight: {
    alignItems: "flex-end",
  },
  amountText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 4,
  },
  timeText: {
    color: colors.textSecondary,
    fontSize: 12,
  },
});