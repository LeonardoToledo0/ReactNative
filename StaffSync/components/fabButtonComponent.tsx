import React from "react";
import { RootState } from "@/hooks/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { setopen } from "@/hooks/fabslice";
import { Portal, FAB, Provider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ContentFab } from "@/styles/MensagensStyles";

type RootStackParamList = {
  Mensagens: undefined;
  Ligações: undefined;
  Contatos: undefined;
};

export default function FabButton() {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.Fab.open);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const actions = [
    {
      icon: "account-outline",
      onPress: () => {
        navigation.navigate("Contatos");
      },
      color: "white",
    },
    {
      icon: "chat-outline",
      onPress: () => {
        navigation.navigate("Mensagens");
      },
      color: "white",
    },
    {
      icon: "cellphone",
      onPress: () => {
        navigation.navigate("Ligações");
      },
      color: "white",
    },
  ];

  const onStateChange = ({ open }: { open: boolean }) =>
    dispatch(setopen(open));

  return (
    <ContentFab>
      <Provider>
        <Portal>
          <FAB.Group
            open={open}
            visible
            icon={open ? "plus" : "chat-plus-outline"}
            actions={actions}
            onStateChange={onStateChange}
            onPress={() => {}}
            color="white"
            backdropColor="transparent"
            fabStyle={{ backgroundColor: "tomato" }}
          />
        </Portal>
      </Provider>
    </ContentFab>
  );
}
