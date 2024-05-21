import React from "react";
import { View, Text, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Card } from "react-native-paper";

type RootStackParamList = {
  Post: { noticia: Noticia };
};

type PostScreenProps = NativeStackScreenProps<RootStackParamList, "Post">;

interface Noticia {
  id: number;
  user: any;
  username: string;
  image: any;
  title: string;
  datepost: string;
  description: string;
}

const Post: React.FC<PostScreenProps> = ({ route }) => {
  const navigation = useNavigation();
  const { noticia } = route.params;

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
    </ScrollView>
  );
};
export default Post;
