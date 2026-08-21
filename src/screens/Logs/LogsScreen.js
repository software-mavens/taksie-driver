import React, { useState, useMemo } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import theme from "../../theme/theme";
import styles from "./Logs.styles";

const { colors } = theme;

// Extended mock logs dataset including past sessions
const mockLogs = [
  {
    id: "1",
    from: "CBD",
    to: "Khayelitsha",
    passengers: 12,
    status: "Finished",
    amount: 300,
    time: "16:21",
    category: "Today",
  },
  {
    id: "2",
    from: "CBD",
    to: "Khayelitsha",
    passengers: 9,
    status: "Finished",
    amount: 225,
    time: "15:20",
    category: "Today",
  },
  {
    id: "3",
    from: "CBD",
    to: "Khayelitsha",
    passengers: 14,
    status: "Finished",
    amount: 350,
    time: "13:45",
    category: "Today",
  },
  {
    id: "4",
    from: "CBD",
    to: "Khayelitsha",
    passengers: 15,
    status: "Finished",
    amount: 375,
    time: "Yesterday 18:04",
    category: "This Week",
  },
  {
    id: "5",
    from: "CBD",
    to: "Khayelitsha",
    passengers: 8,
    status: "Finished",
    amount: 200,
    time: "Yesterday 16:30",
    category: "This Week",
  },
  {
    id: "6",
    from: "Bellville",
    to: "CBD",
    passengers: 15,
    status: "Finished",
    amount: 450,
    time: "15 Aug 08:30",
    category: "All Time",
  },
  {
    id: "7",
    from: "Wynberg",
    to: "Claremont",
    passengers: 11,
    status: "Finished",
    amount: 165,
    time: "14 Aug 17:10",
    category: "All Time",
  },
];

export default function LogsScreen({ navigation }) {
  const [selectedFilter, setSelectedFilter] = useState("Today");

  const handleStartNewSession = () => {
    navigation.navigate("Session");
  };

  const handleSelectLog = (logId) => {
    // Navigate to trip details/manifest screen when connected
  };

  // Filter logs based on selected timeframe
  const filteredLogs = useMemo(() => {
    if (selectedFilter === "Today") {
      return mockLogs.filter((log) => log.category === "Today");
    }
    if (selectedFilter === "This Week") {
      return mockLogs.filter(
        (log) => log.category === "Today" || log.category === "This Week"
      );
    }
    return mockLogs; // "All Time"
  }, [selectedFilter]);

  // Calculate dynamic totals for selected timeframe
  const totalEarnings = useMemo(() => {
    return filteredLogs.reduce((sum, item) => sum + item.amount, 0);
  }, [filteredLogs]);

  const totalSessions = filteredLogs.length;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Header */}
        <View style={styles.headerRow}>
          <Text style={styles.heading}>Session logs</Text>

          <TouchableOpacity
            style={styles.addButton}
            onPress={handleStartNewSession}
            activeOpacity={0.8}
          >
            <Feather name="plus" size={22} color={colors.primary} />
          </TouchableOpacity>
        </View>

        {/* Timeframe Selector Chips */}
        <View style={styles.filterContainer}>
          {["Today", "This Week", "All Time"].map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <TouchableOpacity
                key={filter}
                style={[
                  styles.filterChip,
                  isActive && styles.activeFilterChip,
                ]}
                onPress={() => setSelectedFilter(filter)}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.filterText,
                    isActive && styles.activeFilterText,
                  ]}
                >
                  {filter}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Dynamic Summary Cards */}
        <View style={styles.metricsRow}>
          <View style={styles.todayCard}>
            <Text style={styles.metricLabel}>
              {selectedFilter.toUpperCase()} EARNINGS
            </Text>
            <Text style={styles.metricValueDark}>R{totalEarnings}</Text>
          </View>

          <View style={styles.sessionsCard}>
            <Text style={styles.sessionsLabel}>SESSIONS</Text>
            <Text style={styles.metricValueLight}>{totalSessions}</Text>
          </View>
        </View>

        {/* Logs List */}
        <View style={styles.logsList}>
          {filteredLogs.map((log) => (
            <TouchableOpacity
              key={log.id}
              style={styles.logCard}
              onPress={() => handleSelectLog(log.id)}
              activeOpacity={0.7}
            >
              <View style={styles.logInfo}>
                <Text style={styles.routeText}>
                  {log.from} → {log.to}
                </Text>

                <Text style={styles.metaText}>
                  {log.passengers} passengers · {log.status}
                </Text>
              </View>

              <View style={styles.logMetaRight}>
                <Text style={styles.amountText}>R{log.amount}</Text>
                <Text style={styles.timeText}>
                  {log.category === "Today" ? `Today ${log.time}` : log.time}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}