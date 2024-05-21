import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import { FAB, Portal, Provider } from "react-native-paper";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

type RootStackParamList = {
  Feed: undefined;
  Postar: undefined;
};

export default function FabNoticias() {
  const [open, setOpen] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const actions = [
    {
      icon: "newspaper-variant-outline",
      onPress: () => {
        navigation.navigate("Feed");
      },
      color: "tomato",
    },
    {
      icon: "pencil",
      onPress: () => {
        navigation.navigate("Postar");
      },
      color: "tomato",
    },
  ];
  const onStateChange = ({ open }: { open: boolean }) => setOpen(open);
  return (
    <View
      style={{
        width: 100,
        height: 100,
        marginTop: -100,
        alignSelf: "flex-end",
      }}
    >
      <Provider>
        <Portal>
          <FAB.Group
            open={open}
            visible
            icon={open ? "plus" : "pencil-plus-outline"}
            onStateChange={onStateChange}
            actions={actions}
            color="white"
            backdropColor="transparent"
            fabStyle={{ backgroundColor: "tomato" }}
          />
        </Portal>
      </Provider>
    </View>
  );
}
