import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import AppButton from "../../components/AppButton/AppButton";

import theme from "../../theme/theme";
import styles from "./Profile.styles";

const { colors } = theme;

export default function ProfileScreen({ navigation }) {
  const handleSignOut = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Welcome" }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.heading}>Profile</Text>

        {/* Identity Header */}
        <View style={styles.driverIdentityCard}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarInitials}>JM</Text>
          </View>

          <View style={styles.driverMeta}>
            <Text style={styles.driverName}>John M.</Text>
            <Text style={styles.contactText}>
              Driver since Mar 2024
            </Text>
          </View>
        </View>

        {/* Stat Cards (Trips & Earned) */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>284</Text>
            <Text style={styles.statLabel}>TRIPS</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statValue}>R38k</Text>
            <Text style={styles.statLabel}>EARNED</Text>
          </View>
        </View>

        {/* Profile Action Items */}
        <View style={styles.menuGroup}>
          <TouchableOpacity
            style={styles.menuCard}
            onPress={() => navigation.navigate("EditProfile")}
            activeOpacity={0.7}
          >
            <View style={styles.menuLeftContent}>
              <View style={styles.iconBox}>
                <Feather name="user" size={18} color={colors.primary} />
              </View>
              <Text style={styles.menuTitle}>Personal details</Text>
            </View>
            <Feather
              name="chevron-right"
              size={18}
              color={colors.textSecondary}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuCard}
            onPress={() => navigation.navigate("Vehicle")}
            activeOpacity={0.7}
          >
            <View style={styles.menuLeftContent}>
              <View style={styles.iconBox}>
                <Feather name="truck" size={18} color={colors.primary} />
              </View>
              <Text style={styles.menuTitle}>
                Vehicle · CA 123–456
              </Text>
            </View>
            <Feather
              name="chevron-right"
              size={18}
              color={colors.textSecondary}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuCard}
            onPress={() => navigation.navigate("BankDetails")}
            activeOpacity={0.7}
          >
            <View style={styles.menuLeftContent}>
              <View style={styles.iconBox}>
                <Feather name="landmark" size={18} color={colors.primary} />
              </View>
              <Text style={styles.menuTitle}>Bank details</Text>
            </View>
            <Feather
              name="chevron-right"
              size={18}
              color={colors.textSecondary}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuCard}
            onPress={() => navigation.navigate("Settings")}
            activeOpacity={0.7}
          >
            <View style={styles.menuLeftContent}>
              <View style={styles.iconBox}>
                <Feather name="shield" size={18} color={colors.primary} />
              </View>
              <Text style={styles.menuTitle}>Security & Password</Text>
            </View>
            <Feather
              name="chevron-right"
              size={18}
              color={colors.textSecondary}
            />
          </TouchableOpacity>
        </View>

        {/* Sign Out Button */}
        <AppButton
          variant="secondary"
          style={styles.signOutButton}
          labelStyle={styles.signOutLabel}
          onPress={handleSignOut}
          icon={({ size }) => (
            <Feather name="log-out" size={size || 18} color={colors.primary} />
          )}
        >
          Sign out
        </AppButton>
      </ScrollView>
    </SafeAreaView>
  );
}