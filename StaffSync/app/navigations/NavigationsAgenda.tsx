import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AgendaSalao from "@/components/agendaSalao";
import AgendaChurrasqueira from "@/components/agendaChurrasqueria";

import Agendas from "@/components/agendaComponent";
const Stack = createNativeStackNavigator();

const NavigationsAgenda = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "tomato",
        headerTitleStyle: { fontFamily: "Poppins" },
      }}
    >
      <Stack.Screen name="Agendas" component={Agendas} />
      <Stack.Screen name="Salão" component={AgendaSalao} />
      <Stack.Screen name="Churrasqueira" component={AgendaChurrasqueira} />
    </Stack.Navigator>
  );
};
export default NavigationsAgenda;
