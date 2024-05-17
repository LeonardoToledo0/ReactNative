import React from "react";
import { BottomNavigation } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { setindex, setroutes } from "@/hooks/navigationsSlice";
import { RootState } from "@/hooks/configureStore";

import AgendaScreen from "@/views/AgendaScreen";
import ConfiguracaoScreen from "@/views/ConfiguracaoScreen";
import MensagemScreen from "@/views/MensagemScreen";
import NoticiasScreen from "@/views/NoticiasScreen";
import QrcodeScreen from "@/views/QrcodeScreen";

const Noticias = () => <NoticiasScreen />;
const Agenda = () => <AgendaScreen />;
const QRCODE = () => <QrcodeScreen />;
const Conversas = () => <MensagemScreen />;
const Configuracoes = () => <ConfiguracaoScreen />;

export default function NavigatorPaper() {
  const dispatch = useDispatch();
  const { index } = useSelector((state: RootState) => state.Navigations);

  const routes = [
    { key: "noticias", title: "Notícias", icon: "newspaper" },
    { key: "agenda", title: "Agenda", icon: "calendar" },
    { key: "qrcode", title: "QR Code", icon: "qrcode" },
    { key: "conversas", title: "Conversas", icon: "message-text" },
    { key: "configuracoes", title: "Configurações", icon: "cog" },
  ];

  const renderScene = BottomNavigation.SceneMap({
    noticias: Noticias,
    agenda: Agenda,
    qrcode: QRCODE,
    conversas: Conversas,
    configuracoes: Configuracoes,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={(newIndex) => dispatch(setindex(newIndex))}
      renderScene={renderScene}
    />
  );
}
