// ConversasId.js

import React from "react";
import { ScrollView, View, Text, ImageBackground } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

type RootStackParamList = {
  ConversasId: { contato: Contato };
};

interface Contato {
  nome: string;
  telefone: string;
  fotoPerfil: string | null;
  online: boolean;
}

const ConversasId = () => {
  const route = useRoute<RouteProp<RootStackParamList, "ConversasId">>();
  const { contato } = route.params;

  return (
    <ImageBackground
      source={require("@/assets/images/back3.jpg")}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <View style={{ flexDirection: "row", margin: 5 }}>
          <Text
            style={{
              fontSize: 16,
              padding: 5,
              marginLeft: 5,
              marginTop: 5,
              backgroundColor: "white",
              alignSelf: "flex-start",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "gray",
              overflow: "hidden",
            }}
          >
            Iniciar conversa com {contato.nome}
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default ConversasId;
