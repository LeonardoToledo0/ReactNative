import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./navigations/TabsNavigator";
import LoginScreen from "../views/LoginScreen";
import { store } from "../hooks/configureStore";
import * as Font from "expo-font";
import { DefaultTheme, PaperProvider } from "react-native-paper";
import LoadingScreen from "../views/LoadingScreen";
import { View, ActivityIndicator } from "react-native";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    tomato: "tomato",
  },
};

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Poppins: require("../assets/fonts/Poppins-SemiBold.ttf"),
      });
      setFontsLoaded(true);
    };
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="tomato" />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <PaperProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Loading"
            component={LoadingScreen}
            options={{
              headerShown: false,
              cardStyle: { flex: 1, backgroundColor: "white" },
            }}
          />

          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
              cardStyle: { flex: 1, backgroundColor: "white" },
            }}
          />

          <Stack.Screen
            name="Home"
            component={TabNavigator}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </PaperProvider>
    </Provider>
  );
}
