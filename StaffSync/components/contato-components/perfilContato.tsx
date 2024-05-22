import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { ScrollView, View, Text } from "react-native";
import { Avatar, Card } from "react-native-paper";

type RootStackParamList = {
  PerfilContato: { conversa: Conversa };
};

interface Conversa {
  id: number;
  user: any;
  username: string;
  status: string;
  visto: string;
  mensagem: string;
  readonly: boolean;
  online: boolean;
  backuser: any;
  telefone: string;
  cargo: string;
  descricao: string;
  responsabilidade: string;
  qualificacoes: string;
  interesses: string;
}

const PerfilContato = () => {
  const route = useRoute<RouteProp<RootStackParamList, "PerfilContato">>();
  const { conversa } = route.params;

  return (
    <ScrollView>
      <View>
        <Card.Cover
          style={{ borderRadius: 0, height: 250 }}
          source={conversa.backuser}
        />
        <Avatar.Image
          style={{
            alignSelf: "center",
            marginTop: -100,
            shadowOpacity: 0.3,
          }}
          source={conversa.user}
          size={150}
        />
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: 24,
          }}
        >
          {conversa.username}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: 18,
            color: "tomato",
            marginTop: -5,
          }}
        >
          {conversa.status}
        </Text>
        <Text style={{ textAlign: "center", fontSize: 16, color: "gray" }}>
          {conversa.telefone}
        </Text>
      </View>
      <View style={{ padding: 10, gap: 10 }}>
        <Text style={{ fontFamily: "Poppins", color: "tomato" }}>
          Cargo:{" "}
          <Text style={{ fontFamily: "", color: "black" }}>
            {conversa.cargo}
          </Text>
        </Text>
        <Text
          style={{
            fontFamily: "Poppins",
            color: "tomato",
            textAlign: "justify",
          }}
        >
          Descrição:{" "}
          <Text
            style={{
              fontFamily: "",
              color: "black",
            }}
          >
            {conversa.descricao}
          </Text>
        </Text>
        <Text
          style={{
            fontFamily: "Poppins",
            color: "tomato",
            textAlign: "justify",
          }}
        >
          Responsabilidade:{" "}
          <Text
            style={{
              fontFamily: "",
              color: "black",
            }}
          >
            {conversa.responsabilidade}
          </Text>{" "}
        </Text>
        <Text
          style={{
            fontFamily: "Poppins",
            color: "tomato",
            textAlign: "justify",
          }}
        >
          Qualificações:{" "}
          <Text
            style={{
              fontFamily: "",
              color: "black",
            }}
          >
            {conversa.qualificacoes}
          </Text>{" "}
        </Text>
        <Text
          style={{
            fontFamily: "Poppins",
            color: "tomato",
            textAlign: "justify",
          }}
        >
          Interesses:{" "}
          <Text
            style={{
              fontFamily: "",
              color: "black",
            }}
          >
            {conversa.interesses}
          </Text>{" "}
        </Text>
      </View>
    </ScrollView>
  );
};

export default PerfilContato;
