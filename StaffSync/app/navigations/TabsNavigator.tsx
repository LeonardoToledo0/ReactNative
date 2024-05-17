import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NoticiasScreen from "@/views/NoticiasScreen";
import QrcodeScreen from "@/views/QrcodeScreen";
import MensagemScreen from "@/views/MensagemScreen";

import ConfiguracaoScreen from "@/views/ConfiguracaoScreen";
import { Icones } from "@/styles/NavegacaoStyles";
import AgendaScreen from "@/views/AgendaScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Noticias") {
            iconName = focused ? "newspaper" : "newspaper-outline";
          } else if (route.name === "Conversas") {
            iconName = focused ? "chatbubble" : "chatbubble-outline";
          } else if (route.name === "Agenda") {
            iconName = focused ? "calendar" : "calendar-outline";
          } else if (route.name === "Configuração") {
            iconName = focused ? "options" : "options-outline";
          } else if (route.name === "QR Code") {
            iconName = focused ? "qr-code" : "qr-code-outline";
          }

          return (
            <Icones
              name={
                iconName as
                  | "newspaper"
                  | "newspaper-outline"
                  | "chatbubble"
                  | "chatbubble-outline"
                  | "person"
                  | "person-outline"
                  | "notifications"
                  | "notifications-outline"
                  | "qr-code"
                  | "qr-code-outline"
              }
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Noticias"
        component={NoticiasScreen}
        options={{
          tabBarLabel: "Noticias",
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Agenda"
        component={AgendaScreen}
        options={{
          tabBarLabel: "Agenda",
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="QR Code"
        component={QrcodeScreen}
        options={{
          tabBarLabel: "QR Code",
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Conversas"
        component={MensagemScreen}
        options={{
          tabBarLabel: "Conversas",
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Configuração"
        component={ConfiguracaoScreen}
        options={{
          tabBarLabel: "Configuração",
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
