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
import {
  DefaultTheme,
  PaperProvider,
  Avatar,
  Text,
  TouchableRipple,
} from "react-native-paper";
import LoadingScreen from "../views/LoadingScreen";
import { View, ActivityIndicator } from "react-native";
import ConversasId from "@/components/contato-components/conversasID";
import Conversas from "@/components/contato-components/conversasComponent";
import { UserProvider } from "@/utils/usecontext";
import { getUserData } from "@/api/firebase/authUtils";

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
  ConversasId: { contato: Contato };
};

interface Contato {
  nome: string;
  telefone: string;
  fotoPerfil: string | null;
  online: boolean;
}

const Stack = createStackNavigator<RootStackParamList>();
const userImage = require("@/assets/images/user.png");

export default function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserData();
      setUserData(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Poppins: require("../assets/fonts/Poppins-SemiBold.ttf"),
      });
      setFontsLoaded(true);
    };
    loadFonts();
  }, []);

  if (!fontsLoaded || loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="tomato" />
      </View>
    );
  }
  const renderAvatar = (fotoPerfil: string | null) => {
    if (fotoPerfil) {
      return (
        <Avatar.Image
          style={{ margin: 10 }}
          size={40}
          source={{ uri: fotoPerfil }}
        />
      );
    } else {
      return (
        <Avatar.Image style={{ margin: 10 }} size={40} source={userImage} />
      );
    }
  };

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
                const contato = route.params?.contato;
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
                      <TouchableRipple style={{ marginTop: -10 }}>
                        {renderAvatar(contato.fotoPerfil)}
                      </TouchableRipple>
                      <View>
                        <Text
                          style={{
                            marginLeft: 10,
                            fontSize: 18,
                            fontFamily: "Poppins",
                          }}
                        >
                          {contato.nome}
                        </Text>
                        <Text
                          style={{
                            marginLeft: 10,
                            color: contato.online ? "tomato" : "black",
                            marginTop: -3,
                          }}
                        >
                          {contato.online ? "Online" : "Offline"}
                        </Text>
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
