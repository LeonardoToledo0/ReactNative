import React from "react";
import { ScrollView, View } from "react-native";
import { Avatar, Card, Icon, Text, Title } from "react-native-paper";

const noticias = [
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

export default function FeedNoticias() {
  return (
    <ScrollView>
      {noticias.map((noticia) => (
        <View
          key={noticia.id}
          style={{
            width: 400,
            alignSelf: "center",
            marginTop: 20,
            backgroundColor: "white",
            borderRadius: 8,
            shadowOpacity: 0.3,
          }}
        >
          <Card style={{ height: "auto", backgroundColor: "white" }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Avatar.Image
                style={{ margin: 10 }}
                size={40}
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
            <Card.Cover
              style={{ width: 370, alignSelf: "center", margin: 10 }}
              source={noticia.image}
            />
            <Title
              style={{ fontFamily: "Poppins", color: "tomato", marginLeft: 10 }}
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
            <View style={{ margin: 10, flexDirection: "row", gap: 10 }}>
              <Icon color="tomato" source={"thumb-up-outline"} size={30} />
              <Icon color="tomato" source={"chat-outline"} size={30} />
              <Icon color="tomato" source={"share"} size={30} />
            </View>
          </Card>
        </View>
      ))}
    </ScrollView>
  );
}
