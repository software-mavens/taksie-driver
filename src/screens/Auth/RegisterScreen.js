import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import AppInput from "../../components/AppInput/AppInput";
import AppButton from "../../components/AppButton/AppButton";
import BackButton from "../../components/BackButton/BackButton";

import styles from "./Register.styles";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const handleRegister = () => {
    // Driver authentication will be connected later.
    navigation.replace("Main");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <BackButton
          onPress={() => navigation.goBack()}
        />

        <Text style={styles.heading}>
          Create your driver account
        </Text>

        <Text style={styles.subtitle}>
          Join Taksie and start managing your taxi trips
        </Text>

        {/* Full Name */}

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>
            Full name
          </Text>

          <AppInput
            placeholder="Enter your full name"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />
        </View>

        {/* Email */}

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>
            Email address
          </Text>

          <AppInput
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password */}

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>
            Password
          </Text>

          <AppInput
            placeholder="Create a password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* Confirm Password */}

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>
            Confirm password
          </Text>

          <AppInput
            placeholder="Confirm your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>

        <AppButton
          style={styles.registerButton}
          onPress={handleRegister}
        >
          Create Driver Account
        </AppButton>

        <Text style={styles.termsText}>
          By creating an account, you agree to the
          Taksie terms and privacy policy.
        </Text>

        <Text style={styles.accountText}>
          Already have a driver account?
        </Text>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Login")
          }
        >
          <Text style={styles.loginText}>
            Log in
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}