import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import SessionScreen from "../screens/Session/SessionScreen";
import LogsScreen from "../screens/Logs/LogsScreen";
import WalletScreen from "../screens/Wallet/WalletScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";

import theme from "../theme/theme";
import styles from "./DriverTabNavigator.styles";

const { colors } = theme;

const Tab = createBottomTabNavigator();

export default function DriverTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarLabelPosition: "below-icon",
        tabBarShowLabel: true,

        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "#8A8F9C",

        tabBarLabelStyle: styles.label,
        tabBarStyle: styles.tabBar,

        tabBarIcon: ({ focused }) => {
          let icon = "circle";

          switch (route.name) {
            case "Session":
              icon = "navigation";
              break;

            case "Logs":
              icon = "clock";
              break;

            case "Wallet":
              icon = "credit-card";
              break;

            case "Profile":
              icon = "user";
              break;

            default:
              icon = "circle";
          }

          return (
            <View
              style={[
                styles.iconContainer,
                focused &&
                  styles.activeIconContainer,
              ]}
            >
              <Feather
                name={icon}
                size={22}
                color={
                  focused
                    ? colors.primary
                    : "#8A8F9C"
                }
              />
            </View>
          );
        },
      })}
    >
      <Tab.Screen
        name="Session"
        component={SessionScreen}
      />

      <Tab.Screen
        name="Logs"
        component={LogsScreen}
      />

      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}