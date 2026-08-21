import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

const { colors, spacing, borderRadius } = theme;

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

  /* Driver Identity Card */
  driverIdentityCard: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.xxl,
    padding: spacing.md,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.md,
  },
  avatarCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.md,
  },
  avatarInitials: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "800",
  },
  driverMeta: {
    flex: 1,
  },
  driverName: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 2,
  },
  contactText: {
    color: colors.textSecondary,
    fontSize: 12,
  },

  /* Stat Summary Row (2 Cards) */
  statsRow: {
    flexDirection: "row",
    gap: spacing.sm,
    marginBottom: spacing.xl,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.xl,
    paddingVertical: spacing.md,
    alignItems: "center",
  },
  statValue: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 2,
  },
  statLabel: {
    color: colors.textSecondary,
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
  },

  /* Settings List Group */
  menuGroup: {
    gap: spacing.sm,
    marginBottom: spacing.xl,
  },
  menuCard: {
    minHeight: 56,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.xl,
    paddingHorizontal: spacing.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuLeftContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: borderRadius.lg,
    backgroundColor: "#F7EDDE",
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.md,
  },
  menuTitle: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "700",
  },

  /* Sign Out Button Overrides */
  signOutButton: {
    borderColor: colors.border,
    backgroundColor: colors.surface,
    marginBottom: spacing.xl,
  },
  signOutLabel: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "700",
  },
});