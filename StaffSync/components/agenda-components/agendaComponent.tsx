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
        <View style={{ flex: 1 }}>
          <TouchableRipple
            onPress={() => {
              navigation.navigate("Churrasqueira");
            }}
          >
            <Card.Title
              style={{
                marginTop: 10,
                backgroundColor: "white",
                width: 400,
                alignSelf: "center",
                borderRadius: 8,
                shadowOpacity: 0.3,
                height: 90,
              }}
              title="Churrasqueira"
              subtitle="Agendar"
              titleStyle={{
                fontFamily: "Poppins",
                color: "tomato",
                marginLeft: 20,
              }}
              subtitleStyle={{
                marginLeft: 20,
                fontFamily: "Poppins",
                color: "gray",
              }}
              left={() => <Avatar.Image source={churras} />}
            ></Card.Title>
          </TouchableRipple>

          <TouchableRipple
            onPress={() => {
              navigation.navigate("Salão");
            }}
          >
            <Card.Title
              style={{
                marginTop: 10,
                backgroundColor: "white",
                width: 400,
                alignSelf: "center",
                borderRadius: 8,
                shadowOpacity: 0.3,
                height: 90,
              }}
              titleStyle={{
                fontFamily: "Poppins",
                color: "tomato",
                marginLeft: 20,
              }}
              subtitleStyle={{
                marginLeft: 20,
                fontFamily: "Poppins",
                color: "gray",
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
