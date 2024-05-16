import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./navigations/TabsNavigator";
import LoginScreen from "@/views/LoginScreen";
import { store } from "@/hooks/configureStore";
import * as Font from "expo-font";
import LoadingScreen from "@/views/LoadingScreen";

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Poppins: require("../assets/fonts/Poppins-SemiBold.ttf"),
      });
    };
    loadFonts();
  }, []);

  return (
    <Provider store={store}>
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
    </Provider>
  );
}
