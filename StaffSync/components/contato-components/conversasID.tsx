import React from "react";
import { View, Text, ScrollView, ImageBackground } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

type RootStackParamList = {
  ConversasId: { conversa: Conversa };
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
}
const back = require("@/assets/images/back3.jpg");
const ConversasId = () => {
  const route = useRoute<RouteProp<RootStackParamList, "ConversasId">>();
  const { conversa } = route.params;

  return (
    <ImageBackground source={back} style={{ flex: 1 }}>
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
            {conversa.mensagem}
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default ConversasId;
