import { StyleSheet } from "react-native";

export const STYLES = StyleSheet.create({
  flex: {
    flex: 1,
  },
  centerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
  },
  HeadingStyle: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "700",
  }
});

export const MY_COLORS = {
  primary: "#5680E9",
  primary2: "#84CEEB",
  primary3: "#5AB9EA",
  primary4: "#8860D0",
  primary5: "#C1C8E4",
  primaryDark: "#22212c",
  primaryLight: "#f8f8f2",
  primaryRed: "#ff5555",
  primaryPink: "#ff80bf",
  primaryYellow: "#ffff80",
  primaryOrange: "#ff9580",
};

export const shadowStyle = {
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 5,
};
