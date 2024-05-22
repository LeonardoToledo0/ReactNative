import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./navigations/TabsNavigator";
import LoginScreen from "../views/LoginScreen";
import { store } from "../hooks/configureStore";
import * as Font from "expo-font";
import { Avatar, DefaultTheme, PaperProvider } from "react-native-paper";
import LoadingScreen from "../views/LoadingScreen";
import { View, ActivityIndicator, Text } from "react-native";
import TabConversasId from "./navigations/tabConversasId";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    tomato: "tomato",
  },
};
const perfil = require("@/assets/images/perfilhomen.jpg");
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
        <Stack.Navigator
          screenOptions={{
            headerTintColor: "tomato",
            headerTitleStyle: { fontFamily: "Poppins" },
          }}
        >
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
          <Stack.Screen
            name="ConversasId"
            component={TabConversasId}
            options={{
              headerBackTitle: " ",
              headerTitle: () => (
                <View
                  style={{
                    width: 300,
                    flexDirection: "row",
                    marginLeft: -30,
                  }}
                >
                  <Avatar.Image
                    style={{
                      backgroundColor: "transparent",
                      marginLeft: 10,
                    }}
                    source={perfil}
                    size={40}
                  />
                  <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontFamily: "Poppins", fontSize: 16 }}>
                      Ricardo
                    </Text>
                    <Text style={{ fontSize: 12, color: "tomato" }}>
                      Online
                    </Text>
                  </View>
                </View>
              ),
            }}
          />
        </Stack.Navigator>
      </PaperProvider>
    </Provider>
  );
}
