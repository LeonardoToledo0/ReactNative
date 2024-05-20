import React from "react";
import { ContentConfiguracao } from "@/styles/ConfigStyles";
import { Divider, List, TouchableRipple } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Avatar: undefined;
  Tema: undefined;
  Email: undefined;
  Senha: undefined;
  Telefone: undefined;
  Conta: undefined;
};

export default function ConfiguracoesComponent() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <>
      <ContentConfiguracao>
        <List.Section
          style={{
            width: 350,
            backgroundColor: "white",
            borderRadius: 8,
            marginTop: 50,
            shadowOpacity: 0.3,
          }}
        >
          <TouchableRipple
            onPress={() => {
              navigation.navigate("Avatar");
            }}
          >
            <List.Item
              title="Alterar Avatar"
              titleStyle={{
                fontSize: 16,
                fontFamily: "Poppins",
                color: "tomato",
              }}
              left={() => (
                <List.Icon
                  icon="account-circle-outline"
                  color="tomato"
                  style={{
                    alignItems: "center",
                    marginLeft: 15,
                    justifyContent: "center",
                  }}
                />
              )}
              right={() => <List.Icon icon="chevron-right" color="tomato" />}
            />
          </TouchableRipple>

          <TouchableRipple
            onPress={() => {
              navigation.navigate("Tema");
            }}
          >
            <List.Item
              title="Alterar Tema"
              titleStyle={{
                fontSize: 16,
                fontFamily: "Poppins",
                color: "tomato",
              }}
              left={() => (
                <List.Icon
                  icon="weather-night"
                  color="tomato"
                  style={{
                    alignItems: "center",
                    marginLeft: 15,
                    justifyContent: "center",
                  }}
                />
              )}
              right={() => <List.Icon icon="chevron-right" color="tomato" />}
            />
          </TouchableRipple>

          <TouchableRipple
            onPress={() => {
              navigation.navigate("Email");
            }}
          >
            <List.Item
              title="Alterar Email"
              titleStyle={{
                fontSize: 16,
                fontFamily: "Poppins",
                color: "tomato",
              }}
              left={() => (
                <List.Icon
                  icon="email-outline"
                  color="tomato"
                  style={{
                    alignItems: "center",
                    marginLeft: 15,
                    justifyContent: "center",
                  }}
                />
              )}
              right={() => <List.Icon icon="chevron-right" color="tomato" />}
            />
          </TouchableRipple>

          <TouchableRipple
            onPress={() => {
              navigation.navigate("Senha");
            }}
          >
            <List.Item
              title="Alterar Senha"
              titleStyle={{
                fontSize: 16,
                fontFamily: "Poppins",
                color: "tomato",
              }}
              left={() => (
                <List.Icon
                  icon="lock-outline"
                  color="tomato"
                  style={{
                    alignItems: "center",
                    marginLeft: 15,
                    justifyContent: "center",
                  }}
                />
              )}
              right={() => <List.Icon icon="chevron-right" color="tomato" />}
            />
          </TouchableRipple>

          <TouchableRipple
            onPress={() => {
              navigation.navigate("Telefone");
            }}
          >
            <List.Item
              title="Alterar Telefone"
              titleStyle={{
                fontSize: 16,
                fontFamily: "Poppins",
                color: "tomato",
              }}
              left={() => (
                <List.Icon
                  icon="cellphone"
                  color="tomato"
                  style={{
                    alignItems: "center",
                    marginLeft: 15,
                    justifyContent: "center",
                  }}
                />
              )}
              right={() => <List.Icon icon="chevron-right" color="tomato" />}
            />
          </TouchableRipple>
          <TouchableRipple
            onPress={() => {
              navigation.navigate("Conta");
            }}
          >
            <List.Item
              title="Excluir Conta"
              titleStyle={{
                fontSize: 16,
                fontFamily: "Poppins",
                color: "tomato",
              }}
              left={() => (
                <List.Icon
                  icon="delete-outline"
                  color="tomato"
                  style={{
                    alignItems: "center",
                    marginLeft: 15,
                    justifyContent: "center",
                  }}
                />
              )}
              right={() => <List.Icon icon="chevron-right" color="tomato" />}
            />
          </TouchableRipple>
        </List.Section>
      </ContentConfiguracao>
    </>
  );
}
