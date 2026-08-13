import React from "react";
import { Button } from "react-native-paper";

import styles from "./AppButton.styles";

export default function AppButton({
  children,
  onPress,
  variant = "primary",
  style,
  labelStyle,
  disabled = false,
  ...props
}) {
  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary";
  const isText = variant === "text";

  return (
    <Button
      mode={isPrimary ? "contained" : isSecondary ? "outlined" : "text"}
      onPress={onPress}
      disabled={disabled}
      style={[
        isPrimary && styles.primaryButton,
        isSecondary && styles.secondaryButton,
        isText && styles.textButton,
        style,
      ]}
      labelStyle={[
        isPrimary && styles.primaryLabel,
        isSecondary && styles.secondaryLabel,
        isText && styles.textLabel,
        labelStyle,
      ]}
      {...props}
    >
      {children}
    </Button>
  );
}