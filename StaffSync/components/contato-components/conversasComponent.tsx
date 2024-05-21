import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Avatar, Icon, TouchableRipple } from "react-native-paper";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  ConversasId: { conversa: Conversa };
};

interface Conversa {
  id: number;
  user: any;
  username: string;
  visto: string;
  mensagem: string;
  readonly: boolean;
}

export default function Conversas() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const conversas: Conversa[] = [
    {
      id: 1,
      username: "Ricardo",
      user: require("@/assets/images/perfilhomen.jpg"),
      visto: "14:30",
      mensagem: "Ola Jhoe Tudo Bem ?",
      readonly: false,
    },
    {
      id: 2,
      username: "Maria",
      user: require("@/assets/images/perfilmulher.jpg"),
      visto: "18:30",
      mensagem: "Ola Jhoe como voce está?",
      readonly: true,
    },
  ];

  const handleContatosPress = (conversa: Conversa) => {
    navigation.navigate("ConversasId", { conversa });
  };

  return (
    <ScrollView>
      {conversas.map((conversa) => (
        <TouchableRipple
          key={conversa.id}
          onPress={() => handleContatosPress(conversa)}
        >
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
            <Avatar.Image style={{ margin: 10 }} source={conversa.user} />
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "85%",
                }}
              >
                <Text
                  style={{ fontFamily: "Poppins", marginLeft: 5, fontSize: 18 }}
                >
                  {conversa.username}
                </Text>
                <Text style={{ fontFamily: "Poppins", fontSize: 16 }}>
                  {conversa.visto}
                </Text>
              </View>
              <View style={{ flexDirection: "row", margin: 5, gap: 2 }}>
                <Icon
                  source="check-all"
                  size={16}
                  color={conversa.readonly ? "tomato" : "gray"}
                />
                <Text>{conversa.mensagem}</Text>
              </View>
            </View>
          </View>
        </TouchableRipple>
      ))}
    </ScrollView>
  );
}
