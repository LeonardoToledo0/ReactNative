import React from "react";
import { View, Text, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Card } from "react-native-paper";
import NoticiasInput from "./NoticiasInput";
import { Noticia } from "@/types/type";

type RootStackParamList = {
  Post: { noticia: Noticia };
};

type PostScreenProps = NativeStackScreenProps<RootStackParamList, "Post">;

const Post: React.FC<PostScreenProps> = ({ route }) => {
  const navigation = useNavigation();
  const { noticia } = route.params;

  const handleMessageSend = (message: string) => {
    console.log("Mensagem enviada:", message);
  };

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar.Image source={noticia.user} style={{ margin: 10 }} />
          <View>
            <Text
              style={{ fontFamily: "Poppins", color: "black", fontSize: 18 }}
            >
              {noticia.username}
            </Text>
            <Text>{noticia.datepost}</Text>
          </View>
        </View>

        <Card.Cover
          style={{ width: "100%", height: 500, borderRadius: 0 }}
          source={noticia.image}
        />
        <View
          style={{
            width: "100%",
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins",
              color: "tomato",
              fontSize: 18,
              padding: 10,
            }}
          >
            {noticia.title}
          </Text>
          <Text
            style={{
              fontFamily: "Poppins",
              color: "gray",
              fontSize: 16,
              padding: 10,
            }}
          >
            {noticia.description}
          </Text>
        </View>
      </View>
      <NoticiasInput onSend={handleMessageSend} />
    </ScrollView>
  );
};
export default Post;
