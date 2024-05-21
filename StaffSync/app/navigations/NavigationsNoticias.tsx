import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FeedNoticias from "@/components/noticias-components/feedNoticias";
import PostarNoticias from "@/components/noticias-components/postarNoticias";
import Post from "@/components/noticias-components/post";

const Stack = createNativeStackNavigator();

const NavigationsNoticia = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "tomato",
        headerTitleStyle: { fontFamily: "Poppins" },
      }}
    >
      <Stack.Screen name="Feed" component={FeedNoticias} />
      <Stack.Screen name="Postar" component={PostarNoticias} />
      <Stack.Screen name="Post" component={Post as React.ComponentType} />
    </Stack.Navigator>
  );
};

export default NavigationsNoticia;
