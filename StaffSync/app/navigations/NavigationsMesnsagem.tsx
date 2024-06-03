import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contatos from "@/components/contato-components/contatoComponent";
import Conversas from "@/components/contato-components/conversasComponent";
import Ligacoes from "@/components/contato-components/ligacoesComponent";
import PerfilContato from "@/components/contato-components/perfilContato";

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
      <Stack.Screen name="Contatos" component={Contatos} />
      <Stack.Screen
        name="PerfilContato"
        component={PerfilContato}
        options={{ headerBackTitle: " ", headerTitle: " " }}
      />
    </Stack.Navigator>
  );
};
export default NavigationsMensagem;
