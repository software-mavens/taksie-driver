import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

const { colors } = theme;

export default StyleSheet.create({
  container: {
    height: 72,
    backgroundColor: "#24365E",
    borderRadius: 22,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    marginBottom: 16,
  },

  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 18,
  },

  title: {
    color: colors.white,
    fontSize: 17,
    fontWeight: "600",
  },
});