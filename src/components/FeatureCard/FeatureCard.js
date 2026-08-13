import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

import theme from "../../theme/theme";
import styles from "./FeatureCard.styles";

const { colors } = theme;

export default function FeatureCard({ icon, title }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather
          name={icon}
          size={20}
          color={colors.primary}
        />
      </View>

      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  );
}