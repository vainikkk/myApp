import {StyleSheet} from "react-native"
import { MY_COLORS, shadowStyle } from "../../baseStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    color: "white",
    padding: 10,
    ...shadowStyle
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: MY_COLORS.primary,
  },
});