import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Card } from "react-native-paper";
import { themePrimaryColor } from "../../theme";

const IconAndText = ({ text, iconName, ellipsizeMode, dataDetectorType, numberOfLines }) => (
  <Card style={{ marginBottom: 10 }}>
    <View style={styles.cardWrapper}>
      <Avatar.Icon size={40} icon={iconName} theme={themePrimaryColor} />
      <View style={styles.textWrapper}>
        <Text
          style={styles.text}
          ellipsizeMode={ellipsizeMode}
          dataDetectorType={dataDetectorType}
          numberOfLines={numberOfLines}
        >
          {text}
        </Text>
      </View>
    </View>
  </Card>
);
const styles = StyleSheet.create({
  cardWrapper: {
    padding: 10,
    position: "relative",
    flexDirection: "row",
  },
  textWrapper: {
    justifyContent: "center",
    marginLeft: 20,
    width: 200,
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
  },
});
export default IconAndText;
