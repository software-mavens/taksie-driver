import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import theme from "../../theme/theme";
import styles from "./Wallet.styles";

const { colors } = theme;

const mockActivities = [
  {
    id: "1",
    type: "earning",
    title: "Session earnings",
    time: "Today 16:21",
    amount: "+R300",
  },
  {
    id: "2",
    type: "withdrawal",
    title: "Withdrawal · FNB",
    time: "Today 12:00",
    amount: "R1200",
  },
  {
    id: "3",
    type: "earning",
    title: "Session earnings",
    time: "Yesterday 18:04",
    amount: "+R375",
  },
  {
    id: "4",
    type: "earning",
    title: "Session earnings",
    time: "Yesterday 16:30",
    amount: "+R200",
  },
];

export default function WalletScreen({ navigation }) {
  const handleWithdraw = () => {
    // Navigate to Withdraw screen when built
  };

  const handleStatement = () => {
    // Trigger statement export
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.heading}>Wallet</Text>

        {/* Main Available Balance Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>AVAILABLE BALANCE</Text>
          <Text style={styles.balanceAmount}>R2 480.00</Text>

          <View style={styles.bankInfoRow}>
            <Feather name="shield" size={14} color="#C8CFDF" />
            <Text style={styles.bankInfoText}>FNB •••• 4432</Text>
          </View>

          <View style={styles.cardActions}>
            <TouchableOpacity
              style={styles.withdrawButton}
              onPress={handleWithdraw}
              activeOpacity={0.8}
            >
              <Feather name="arrow-down" size={16} color={colors.primary} />
              <Text style={styles.withdrawText}>Withdraw</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.statementButton}
              onPress={handleStatement}
              activeOpacity={0.8}
            >
              <Feather name="arrow-up-right" size={16} color={colors.white} />
              <Text style={styles.statementText}>Statement</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Pending & Weekly Breakdown */}
        <View style={styles.metricsRow}>
          <View style={styles.subMetricCard}>
            <Text style={styles.subMetricLabel}>PENDING</Text>
            <Text style={styles.subMetricValue}>R320</Text>
          </View>

          <View style={styles.subMetricCard}>
            <Text style={styles.subMetricLabel}>THIS WEEK</Text>
            <Text style={styles.subMetricValue}>R4 120</Text>
          </View>
        </View>

        {/* Activity List */}
        <Text style={styles.sectionLabel}>ACTIVITY</Text>
        <View style={styles.activityList}>
          {mockActivities.map((item) => {
            const isEarning = item.type === "earning";

            return (
              <View key={item.id} style={styles.activityCard}>
                <View
                  style={[
                    styles.activityIconContainer,
                    isEarning ? styles.earningIcon : styles.withdrawalIcon,
                  ]}
                >
                  <Feather
                    name={isEarning ? "arrow-down" : "arrow-up-right"}
                    size={18}
                    color={isEarning ? colors.success : colors.error}
                  />
                </View>

                <View style={styles.activityDetails}>
                  <Text style={styles.activityTitle}>{item.title}</Text>
                  <Text style={styles.activityTime}>{item.time}</Text>
                </View>

                <Text
                  style={[
                    styles.activityAmount,
                    isEarning ? styles.earningAmount : styles.withdrawalAmount,
                  ]}
                >
                  {item.amount}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}