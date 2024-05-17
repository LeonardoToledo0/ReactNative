import React from "react";
import { RootState } from "@/hooks/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { setopen } from "@/hooks/fabslice";
import { Portal, FAB, Provider } from "react-native-paper";

export default function FabButton() {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.Fab.open);

  const actions = [
    {
      icon: "account-outline",
      onPress: () => console.log("Clicou em Contatos"),
      color: "white",
      backgroundColor: "yellow",
    },
    {
      icon: "email-outline",
      onPress: () => console.log("Clicou em Enviar Email"),
      color: "white",
    },
    {
      icon: "cellphone",
      onPress: () => console.log("Clicou em Enviar Telefone"),
      color: "white",
    },
  ];

  const onStateChange = ({ open }: { open: boolean }) =>
    dispatch(setopen(open));

  return (
    <Provider>
      <Portal>
        <FAB.Group
          style={{ backgroundColor: "white" }}
          open={open}
          visible
          icon={open ? "plus" : "chat-plus-outline"}
          actions={actions}
          onStateChange={onStateChange}
          onPress={() => {}}
          color="white"
          backdropColor="white"
          fabStyle={{ backgroundColor: "tomato" }}
        />
      </Portal>
    </Provider>
  );
}
