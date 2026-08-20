import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import AppInput from "../../components/AppInput/AppInput";
import AppButton from "../../components/AppButton/AppButton";
import BackButton from "../../components/BackButton/BackButton";

import theme from "../../theme/theme";
import styles from "./Session.styles";
import LiveSessionScreen from "./LiveSessionScreen";

const { colors } = theme;

const fareOptions = [15, 20, 25, 30];

export default function SessionScreen({ navigation }) {
  const [fare, setFare] = useState("25");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [seats, setSeats] = useState(15);

  const increaseSeats = () => {
    setSeats((current) => current + 1);
  };

  const decreaseSeats = () => {
    setSeats((current) => Math.max(1, current - 1));
  };

  const handleStartSession = () => {
    navigation.navigate("LiveSession", {
      fare,
      from: from || "CBD",
      to: to || "Khayelitsha",
      seats,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >

        <Text style={styles.heading}>
          Start a session
        </Text>

        <Text style={styles.subtitle}>
          Configure your fare, route and passenger capacity.
        </Text>

        {/* Driver information */}

        <View style={styles.driverCard}>
          <View style={styles.initialsCircle}>
            <Text style={styles.initials}>
              JM
            </Text>
          </View>

          <View style={styles.driverInfo}>
            <Text style={styles.driverName}>
              John M.
            </Text>

            <Text style={styles.vehicleInfo}>
              CA 123-456 • Quantum
            </Text>
          </View>

          <View style={styles.verifiedBadge}>
            <Feather
              name="check-circle"
              size={13}
              color={colors.secondary}
            />

            <Text style={styles.verifiedText}>
              Verified
            </Text>
          </View>
        </View>

        {/* Fare */}

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>
            PASSENGER FARE
          </Text>

          <View style={styles.fareInput}>
            <Text style={styles.currency}>
              R
            </Text>

            <TextInput
              placeholder="25"
              placeholderTextColor="#9CA3AF"
              value={fare}
              onChangeText={setFare}
              keyboardType="numeric"
              style={styles.fareTextInput}
            />
          </View>

          <View style={styles.fareOptions}>
            {fareOptions.map((amount) => {
              const selected = fare === String(amount);

              return (
                <TouchableOpacity
                  key={amount}
                  style={[
                    styles.fareOption,
                    selected && styles.selectedFareOption,
                  ]}
                  onPress={() => setFare(String(amount))}
                >
                  <Text
                    style={[
                      styles.fareOptionText,
                      selected &&
                        styles.selectedFareOptionText,
                    ]}
                  >
                    R{amount}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* From */}

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>
            FROM
          </Text>

          <AppInput
            placeholder="Enter starting location"
            value={from}
            onChangeText={setFrom}
            autoCapitalize="words"
          />
        </View>

        {/* To */}

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>
            TO
          </Text>

          <AppInput
            placeholder="Enter destination"
            value={to}
            onChangeText={setTo}
            autoCapitalize="words"
          />
        </View>

        {/* Maximum seats */}

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>
            MAXIMUM SEATS
          </Text>

          <View style={styles.seatSelector}>
            <TouchableOpacity
              style={styles.seatButton}
              onPress={decreaseSeats}
            >
              <Text style={styles.seatButtonText}>
                −
              </Text>
            </TouchableOpacity>

            <View style={styles.seatValueContainer}>
              <Text style={styles.seatValue}>
                {seats}
              </Text>

              <Text style={styles.seatLabel}>
                SEATS
              </Text>
            </View>

            <TouchableOpacity
              style={styles.seatButton}
              onPress={increaseSeats}
            >
              <Text style={styles.seatButtonText}>
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Start session */}

        <AppButton
          variant="primary"
          style={styles.startButton}
          contentStyle={styles.startButtonContent}
          onPress={handleStartSession}
        >
          Open live session
        </AppButton>
      </ScrollView>
    </SafeAreaView>
  );
}