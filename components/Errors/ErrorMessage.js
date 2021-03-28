import React from "react";
import { StyleSheet } from "react-native";
import { HelperText } from "react-native-paper";
import { MY_COLORS } from "../../baseStyles";

const ErrorMessage = ({ visible, text }) => (
  <HelperText type="error" visible={visible} style={styles.text}>
    {text}
  </HelperText>
);

const styles = StyleSheet.create({
  text: {
    color: MY_COLORS.primaryRed,
    fontSize: 14,
  },
});

export default ErrorMessage;
