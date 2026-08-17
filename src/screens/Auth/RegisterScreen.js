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

const vehicleTypes = [
  "Quantum",
  "Siyaya",
  "Sprinter",
];

export default function RegisterScreen({ navigation }) {
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [registration, setRegistration] =
    useState("");
  const [vehicleType, setVehicleType] =
    useState("");

  const handleNext = () => {
    setStep(2);
  };

  const handleRegister = () => {
    // Driver authentication will be connected later.
    navigation.replace("Main");
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
      return;
    }

    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <BackButton onPress={handleBack} />

        {step === 1 ? (
          <>
            <Text style={styles.heading}>
              Create your driver account
            </Text>

            <Text style={styles.subtitle}>
              Join Taksie and start managing your taxi
              trips
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

            {/* Phone */}

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>
                Phone number
              </Text>

              <AppInput
                placeholder="Enter your phone number"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
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
              onPress={handleNext}
            >
              Next
            </AppButton>

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
          </>
        ) : (
          <>
            <Text style={styles.heading}>
              Tell us about your taxi
            </Text>

            <Text style={styles.subtitle}>
              Just a few vehicle details and you're
              ready to use Taksie.
            </Text>

            <Text style={styles.sectionTitle}>
              VEHICLE DETAILS
            </Text>

            {/* Registration */}

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>
                Registration number
              </Text>

              <AppInput
                placeholder="e.g. CA 123-456"
                value={registration}
                onChangeText={setRegistration}
                autoCapitalize="characters"
              />
            </View>

            {/* Vehicle Type */}

            <View style={styles.vehicleGroup}>
              <Text style={styles.inputLabel}>
                Vehicle type
              </Text>

              {vehicleTypes.map((type) => {
                const selected =
                  vehicleType === type;

                return (
                  <TouchableOpacity
                    key={type}
                    style={[
                      styles.vehicleOption,
                      selected &&
                        styles.vehicleOptionSelected,
                    ]}
                    onPress={() =>
                      setVehicleType(type)
                    }
                    activeOpacity={0.8}
                  >
                    <Text
                      style={[
                        styles.vehicleText,
                        selected &&
                          styles.vehicleTextSelected,
                      ]}
                    >
                      {type}
                    </Text>

                    {selected && (
                      <Text
                        style={
                          styles.vehicleCheck
                        }
                      >
                        ✓
                      </Text>
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>

            <AppButton
              style={styles.registerButton}
              onPress={handleRegister}
            >
              Create Driver Account
            </AppButton>

            <Text style={styles.termsText}>
              By creating an account, you agree to
              the Taksie terms and privacy policy.
            </Text>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}