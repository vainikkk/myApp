import { StyleSheet } from "react-native";
import { MY_COLORS, shadowStyle } from "../../baseStyles";

export const styles = StyleSheet.create({
  container:{
    margin: 30,
    backgroundColor: "white",
    ...shadowStyle,
    padding: 10,
    borderRadius: 10
  },
  inputWrapper: {
    margin: 10,
  },
  buttonWrapper: {
    margin: 10,
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: MY_COLORS.primary,
    borderRadius: 10,
    width: 140,
    ...shadowStyle,
  },
  textStyle:{
    color: "white",
    textAlign: "center"
  },
  modalView: {
    height: 150,
    padding: 20,
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    borderRadius: 10,
    width: "100%",
    ...shadowStyle,
  }
});