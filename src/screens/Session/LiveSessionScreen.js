import React, { useMemo } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import AppButton from "../../components/AppButton/AppButton";

import theme from "../../theme/theme";
import styles from "./LiveSession.styles";

const { colors } = theme;

const mockPassengers = [
  {
    id: 1,
    name: "Sarah",
    time: "16:03",
    amount: 25,
  },
  {
    id: 2,
    name: "Thabo",
    time: "16:02",
    amount: 25,
  },
  {
    id: 3,
    name: "Nadia",
    time: "16:00",
    amount: 25,
  },
  {
    id: 4,
    name: "Sipho",
    time: "15:58",
    amount: 25,
  },
];

export default function LiveSessionScreen({
  navigation,
  route,
}) {
  const {
    fare = "25",
    from = "CBD",
    to = "Khayelitsha",
    seats = 15,
  } = route.params || {};

  const numericFare = Number(fare) || 0;

  const paidSeats = mockPassengers.length;

  const remainingSeats = Math.max(
    seats - paidSeats,
    0
  );

  const collected = paidSeats * numericFare;

  const seatNumbers = useMemo(
    () =>
      Array.from(
        { length: seats },
        (_, index) => index
      ),
    [seats]
  );

  const handleEndSession = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Scrollable session content */}

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

        {/* Live session heading */}

        <View style={styles.topRow}>
          <View style={styles.liveStatus}>
            <View style={styles.liveDot} />

            <Text style={styles.liveText}>
              LIVE SESSION
            </Text>
          </View>
        </View>

        <Text style={styles.route}>
          {from} → {to}
        </Text>

        {/* Collection card */}

        <View style={styles.collectionCard}>
          <View style={styles.collectionTopRow}>
            <Text style={styles.collectedLabel}>
              COLLECTED
            </Text>

            <Text style={styles.perSeat}>
              R{numericFare} per seat
            </Text>
          </View>

          <Text style={styles.collectedAmount}>
            R{collected}
          </Text>

          <View style={styles.seatSummary}>
            <Text style={styles.seatSummaryText}>
              {paidSeats}/{seats} paid seats
            </Text>

            <Text style={styles.seatSummaryText}>
              {remainingSeats} remaining
            </Text>
          </View>

          <View style={styles.progressBackground}>
            <View
              style={[
                styles.progressFill,
                {
                  width:
                    seats > 0
                      ? `${Math.min(
                          (paidSeats / seats) * 100,
                          100
                        )}%`
                      : "0%",
                },
              ]}
            />
          </View>

          <View style={styles.seatGrid}>
            {seatNumbers.map((seat) => {
              const isPaid = seat < paidSeats;

              return (
                <View
                  key={seat}
                  style={[
                    styles.liveSeat,
                    isPaid && styles.paidSeat,
                  ]}
                >
                  <Feather
                    name={
                      isPaid
                        ? "check"
                        : "circle"
                    }
                    size={isPaid ? 16 : 13}
                    color={
                      isPaid
                        ? colors.primary
                        : "#8792A9"
                    }
                  />
                </View>
              );
            })}
          </View>
        </View>

        {/* Latest payment */}

        {mockPassengers.length > 0 && (
          <View style={styles.latestPayment}>
            <View style={styles.paymentDot} />

            <Text style={styles.latestPaymentText}>
              {mockPassengers[0].name} paid R
              {mockPassengers[0].amount} · just now
            </Text>
          </View>
        )}

        {/* Paid passengers */}

        <View style={styles.passengerHeader}>
          <Text style={styles.sectionLabel}>
            PAID PASSENGERS
          </Text>

          <Text style={styles.passengerCount}>
            {paidSeats} passengers
          </Text>
        </View>

        <View style={styles.passengerList}>
          {mockPassengers.map(
            (passenger, index) => (
              <View
                key={passenger.id}
                style={styles.passengerCard}
              >
                <View
                  style={styles.passengerNumber}
                >
                  <Text
                    style={
                      styles.passengerNumberText
                    }
                  >
                    {index + 1}
                  </Text>
                </View>

                <View style={styles.passengerInfo}>
                  <Text
                    style={styles.passengerName}
                  >
                    {passenger.name}
                  </Text>

                  <Text
                    style={styles.passengerTime}
                  >
                    {passenger.time} · Paid
                  </Text>
                </View>

                <Text
                  style={styles.passengerAmount}
                >
                  R{passenger.amount}
                </Text>

                <View style={styles.paidIcon}>
                  <Feather
                    name="check"
                    size={14}
                    color={colors.white}
                  />
                </View>
              </View>
            )
          )}
        </View>

        {/* Extra bottom space so the last passenger
            isn't hidden behind the fixed button */}

        <View style={styles.bottomSpacer} />

      </ScrollView>

      {/* Fixed End Session button */}

      <View style={styles.endSessionContainer}>
        <AppButton
          variant="primary"
          style={styles.endSessionButton}
          contentStyle={styles.endSessionButtonContent}
          onPress={handleEndSession}
        >
          End session
        </AppButton>
      </View>

    </SafeAreaView>
  );
}