import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ConfigComponent from "@/components/config-components/configComponent";
import AvatarComponent from "@/components/config-components/avatarComponent";
import TemaComponent from "@/components/config-components/TemaComponent";
import EmailComponent from "@/components/config-components/EmailComponent";
import SenhaComponent from "@/components/config-components/SenhaComponent";
import TelefoneComponent from "@/components/config-components/TelefoneComponent";
import ExcluirContaComponent from "@/components/config-components/ExcluirContaComponent";

const Stack = createNativeStackNavigator();
const NavigatiosConfig = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "tomato",
        headerTitleStyle: { fontFamily: "Poppins" },
      }}
    >
      <Stack.Screen name="Configurações" component={ConfigComponent} />
      <Stack.Screen name="Avatar" component={AvatarComponent} />
      <Stack.Screen name="Tema" component={TemaComponent} />
      <Stack.Screen name="Email" component={EmailComponent} />
      <Stack.Screen name="Senha" component={SenhaComponent} />
      <Stack.Screen name="Telefone" component={TelefoneComponent} />
      <Stack.Screen name="Conta" component={ExcluirContaComponent} />
    </Stack.Navigator>
  );
};
export default NavigatiosConfig;
