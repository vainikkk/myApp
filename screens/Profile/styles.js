import { Dimensions, StyleSheet } from "react-native";
import { MY_COLORS, shadowStyle } from "../../baseStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBox:{
    height: 150,
    backgroundColor: MY_COLORS.primary2,
    ...shadowStyle
  },
  imageWrapper: {
    width: 100, 
    height: 100, 
    left: Dimensions.get("screen").width/2 - 50,
    justifyContent: "center",
    top: -50,
    ...shadowStyle,
  },
  image: {
    width: 100, 
    height: 100, 
    borderRadius: 50,
  },
  profileWrapper: {
    margin: 25,
    marginTop:0,
  },
  buttonGroup:{
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20
  }
});