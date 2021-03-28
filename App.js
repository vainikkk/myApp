import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/Home/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MY_COLORS } from "./baseStyles";
import CreateScreen from "./screens/CreateEmployee/CreateScreen";
import store from "./store/store";
import { Provider } from "react-redux";
import ProfileScreen from "./screens/Profile/ProfileScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <View style={styles.container}>
          <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: MY_COLORS.primary } }}>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Create Screen" component={CreateScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </View>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ededed",
    marginTop: Constants.statusBarHeight,
  },
});
