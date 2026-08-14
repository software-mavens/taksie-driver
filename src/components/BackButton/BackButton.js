import React from "react";
import {
  TouchableOpacity,
  Text,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import theme from "../../theme/theme";
import styles from "./BackButton.styles";

const { colors } = theme;

export default function BackButton({
  onPress,
  label = "Back",
}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Feather
        name="arrow-left"
        size={18}
        color={colors.textSecondary}
      />

      <Text style={styles.text}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}