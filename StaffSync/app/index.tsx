import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import TabNavigator from "./navigations/TabsNavigator";
import LoginScreen from "../views/LoginScreen";
import { store } from "../hooks/configureStore";
import * as Font from "expo-font";
import { DefaultTheme, PaperProvider, Avatar, Text } from "react-native-paper";
import LoadingScreen from "../views/LoadingScreen";
import { View, ActivityIndicator } from "react-native";
import ConversasId from "@/components/contato-components/conversasID";
import Conversas from "@/components/contato-components/conversasComponent";
import { UserProvider } from "@/utils/usecontext";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    tomato: "tomato",
  },
};

type RootStackParamList = {
  Loading: undefined;
  Login: undefined;
  Home: undefined;
  Conversas: undefined;
  ConversasId: { conversa: Conversa };
};

interface Conversa {
  id: number;
  user: any;
  username: string;
  visto: string;
  mensagem: string;
  readonly: boolean;
  online: boolean;
}

const Stack = createStackNavigator<RootStackParamList>();

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
    <UserProvider>
      <Provider store={store}>
        <PaperProvider theme={theme}>
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
              name="Conversas"
              component={Conversas}
              options={{
                headerShown: true,
                headerTitle: "Conversas",
              }}
            />
            <Stack.Screen
              name="ConversasId"
              component={ConversasId}
              options={({ route }) => {
                const conversa = (
                  route.params as RootStackParamList["ConversasId"]
                ).conversa;
                return {
                  headerBackTitle: " ",
                  headerTitle: () => (
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",

                        width: 320,
                        marginLeft: -40,
                      }}
                    >
                      <Avatar.Image source={conversa.user} size={40} />
                      <View>
                        <Text
                          style={{
                            marginLeft: 10,
                            fontSize: 18,
                            fontFamily: "Poppins",
                          }}
                        >
                          {conversa.username}
                        </Text>
                        {conversa.online ? (
                          <Text
                            style={{
                              marginLeft: 10,
                              color: "tomato",
                              marginTop: -3,
                            }}
                          >
                            Online
                          </Text>
                        ) : (
                          <Text
                            style={{
                              marginLeft: 10,
                              color: "black",
                              marginTop: -3,
                            }}
                          >
                            {conversa.visto}
                          </Text>
                        )}
                      </View>
                    </View>
                  ),
                } as StackNavigationOptions;
              }}
            />
          </Stack.Navigator>
        </PaperProvider>
      </Provider>
    </UserProvider>
  );
}
