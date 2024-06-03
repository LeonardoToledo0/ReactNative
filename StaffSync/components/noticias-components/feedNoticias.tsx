import React from "react";
import { ScrollView, View } from "react-native";
import {
  Avatar,
  Card,
  Text,
  Icon,
  Title,
  TouchableRipple,
  Divider,
  Button,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { Noticia } from "@/types/type";

type RootStackParamList = {
  Post: { noticia: Noticia };
};

export default function FeedNoticias() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const noticias: Noticia[] = [
    {
      id: 1,
      user: require("@/assets/images/perfilhomen.jpg"),
      username: "Ricardo",
      image: require("@/assets/images/salao.jpg"),
      title: "Melhorias no Salão",
      datepost: "21/05/2024",
      description:
        "Nosso Salão obteve melhorias, com os novos ajustes será bem mais confortável para novos eventos.",
    },
    {
      id: 2,
      user: require("@/assets/images/perfilmulher.jpg"),
      username: "Maria",
      image: require("@/assets/images/churras.jpg"),
      title: "Melhorias na Churrasqueira",
      datepost: "21/05/2024",
      description:
        "Nossa Churrasqueira obteve melhorias, com os novos ajustes será bem mais confortável para novos eventos.",
    },
  ];
  const handleNoticiaPress = (noticia: Noticia) => {
    navigation.navigate("Post", { noticia });
  };
  return (
    <ScrollView>
      {noticias.map((noticia) => (
        <View
          key={noticia.id}
          style={{
            width: "100%",
            alignSelf: "center",
            marginTop: 25,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Avatar.Image
              style={{ margin: 10 }}
              size={50}
              source={noticia.user}
            />
            <View>
              <Text
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                  color: "black",
                }}
              >
                {noticia.username}
              </Text>
              <Text style={{ marginTop: -2, color: "gray" }}>
                {noticia.datepost}
              </Text>
            </View>
          </View>
          <TouchableRipple onPress={() => handleNoticiaPress(noticia)}>
            <View>
              <Card.Cover
                style={{
                  width: "100%",
                  height: 250,
                  alignSelf: "center",
                  margin: 10,
                  borderRadius: 0,
                }}
                source={noticia.image}
              />
              <Title
                style={{
                  fontFamily: "Poppins",
                  color: "tomato",
                  marginLeft: 10,
                }}
              >
                {noticia.title}
              </Title>
              <Text
                style={{
                  textAlign: "justify",
                  margin: 10,
                  fontFamily: "Poppins",
                  fontSize: 13,
                  color: "gray",
                }}
              >
                {noticia.description}
              </Text>
            </View>
          </TouchableRipple>

          <View style={{ margin: 10, flexDirection: "row", gap: 15 }}>
            <Icon source="heart-outline" color="tomato" size={30} />
            <TouchableRipple onPress={() => handleNoticiaPress(noticia)}>
              <Icon source="chat-outline" color="tomato" size={30} />
            </TouchableRipple>
            <Icon source="share" color="tomato" size={30} />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
