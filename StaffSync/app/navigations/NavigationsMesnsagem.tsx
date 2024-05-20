import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contato from "@/components/contato-components/contatoComponent";
import Conversas from "@/components/contato-components/conversasComponent";
import Ligacoes from "@/components/contato-components/ligacoesComponent";

const Stack = createNativeStackNavigator();

const NavigationsMensagem = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "tomato",
        headerTitleStyle: { fontFamily: "Poppins" },
      }}
    >
      <Stack.Screen name="Mensagens" component={Conversas} />
      <Stack.Screen name="Ligações" component={Ligacoes} />
      <Stack.Screen name="Contatos" component={Contato} />
    </Stack.Navigator>
  );
};
export default NavigationsMensagem;
