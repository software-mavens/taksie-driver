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

import styles from "./Login.styles";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Authentication will be connected later.
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
          Welcome back, Driver
        </Text>

        <Text style={styles.subtitle}>
          Sign in to manage your Taksie driving account
        </Text>

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
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => {}}
        >
          <Text style={styles.forgotText}>
            Forgot password?
          </Text>
        </TouchableOpacity>

        <AppButton
          style={styles.loginButton}
          onPress={handleLogin}
        >
          Log In
        </AppButton>

        <Text style={styles.accountText}>
          Don't have a driver account?
        </Text>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Register")
          }
        >
          <Text style={styles.createAccountText}>
            Create a driver account
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}