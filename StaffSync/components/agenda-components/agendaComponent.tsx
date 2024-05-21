import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Avatar, Card, Divider, TouchableRipple } from "react-native-paper";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScrollView, View } from "react-native";
import { ConfigNome, SobreNome } from "@/styles/ConfigStyles";

type RootStackParamList = {
  Salão: undefined;
  Churrasqueira: undefined;
};
const churras = require("../../assets/images/churras.jpg");
const salao = require("../../assets/images/salao.jpg");
export default function Agendas() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <>
      <ScrollView>
        <ConfigNome style={{ marginTop: 20 }}>
          Faça Agora sua <SobreNome>Reserva</SobreNome>
        </ConfigNome>
        <View
          style={{
            width: "95%",
            alignSelf: "center",
            alignItems: "center",
            borderRadius: 8,
            backgroundColor: "white",
            marginTop: 10,
          }}
        >
          <TouchableRipple
            onPress={() => {
              navigation.navigate("Churrasqueira");
            }}
          >
            <Card.Title
              style={{
                margin: 10,
                backgroundColor: "white",
                width: "95%",
                alignSelf: "center",
                borderRadius: 8,
              }}
              title="Churrasqueira"
              subtitle="Agendar"
              titleStyle={{
                fontFamily: "Poppins",
                color: "black",
                marginLeft: 20,
                fontSize: 18,
              }}
              subtitleStyle={{
                marginLeft: 20,
                fontSize: 16,
                color: "black",
              }}
              left={() => <Avatar.Image source={churras} />}
            ></Card.Title>
          </TouchableRipple>
        </View>
        <View
          style={{
            width: "95%",
            alignSelf: "center",
            alignItems: "center",
            borderRadius: 8,
            backgroundColor: "white",
            marginTop: 10,
            flexDirection: "row",
          }}
        >
          <TouchableRipple
            onPress={() => {
              navigation.navigate("Salão");
            }}
          >
            <Card.Title
              style={{
                backgroundColor: "white",
                width: "95%",
                alignSelf: "center",
                borderRadius: 8,
                margin: 10,
              }}
              titleStyle={{
                fontFamily: "Poppins",
                color: "black",
                marginLeft: 20,
                fontSize: 18,
              }}
              subtitleStyle={{
                marginLeft: 20,
                fontSize: 16,

                color: "black",
              }}
              title="Salão"
              subtitle="Agendar"
              left={() => <Avatar.Image source={salao} />}
            ></Card.Title>
          </TouchableRipple>
        </View>
      </ScrollView>
    </>
  );
}
