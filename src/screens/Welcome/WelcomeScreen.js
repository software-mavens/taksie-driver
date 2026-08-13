import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";

import styles from "./Welcome.styles";

import FeatureCard from "../../components/FeatureCard/FeatureCard";
import AppButton from "../../components/AppButton/AppButton";

const features = [
  {
    icon: "zap",
    title: "Get paid in under seconds",
  },
  {
    icon: "credit-card",
    title: "No cash needed",
  },
  {
    icon: "shield",
    title: "Safe & secure payments",
  },
];

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo */}

        <View style={styles.logoRow}>
          <Image
            source={require("../../assets/logo/logo.png")}
            style={styles.logo}
          />

          <Text style={styles.logoText}>
            Taksie
          </Text>
        </View>

        {/* Hero */}

        <Text style={styles.heading}>
            Skip the cash.
        </Text>

        <Text style={styles.headingGold}>
          DRIVE • GET PAID • EARN
        </Text>

        <Text style={styles.description}>
            Receive digital minibus taxi payments in under seconds.
            No cash needed.
        </Text>

        {/* Features */}

        <View style={styles.features}>
          {features.map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </View>

        {/* Actions */}

        <AppButton
          variant="primary"
          contentStyle={styles.buttonContent}
          style={styles.primaryButton}
          onPress={() =>
            navigation.navigate("Register")
          }
        >
          Create Driver Account
        </AppButton>

        <AppButton
          variant="secondary"
          contentStyle={styles.buttonContent}
          style={styles.secondaryButton}
          onPress={() =>
            navigation.navigate("Login")
          }
        >
          Sign In
        </AppButton>
      </ScrollView>
    </SafeAreaView>
  );
}