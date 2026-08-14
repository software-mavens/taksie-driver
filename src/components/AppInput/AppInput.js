import React from "react";
import {
  View,
  TextInput,
} from "react-native";

import styles from "./AppInput.styles";

export default function AppInput({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
  autoCapitalize = "sentences",
  editable = true,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        editable={editable}
        style={styles.input}
        placeholderTextColor="#9CA3AF"
      />
    </View>
  );
}