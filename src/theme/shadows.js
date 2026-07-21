import { Platform } from "react-native";

const shadows = {
  none: {},

  sm: Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.08,
      shadowRadius: 2,
    },
    android: {
      elevation: 2,
    },
  }),

  md: Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.12,
      shadowRadius: 6,
    },
    android: {
      elevation: 4,
    },
  }),

  lg: Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.16,
      shadowRadius: 10,
    },
    android: {
      elevation: 8,
    },
  }),

  xl: Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.2,
      shadowRadius: 14,
    },
    android: {
      elevation: 12,
    },
  }),
};

export default shadows;