import { StyleSheet } from "react-native";

import theme from "../theme/theme";

const { colors } = theme;

export default StyleSheet.create({
  tabBar: {
    height: 84,

    backgroundColor: colors.white,

    borderTopWidth: 1,
    borderTopColor: "#ECECEC",

    paddingTop: 8,
    paddingBottom: 8,

    position: "absolute",

    elevation: 10,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: -2,
    },
  },

  label: {
    fontSize: 12,
    fontWeight: "500",
    marginTop: 4,
    marginBottom: 8,
  },

  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,

    justifyContent: "center",
    alignItems: "center",
  },

  activeIconContainer: {
    backgroundColor: "#FCE8C3",
  },
});