import Contato from "@/components/contatoComponent";
import Conversas from "@/components/conversasComponent";
import Ligacoes from "@/components/ligacoesComponent";
import { RootState } from "@/hooks/configureStore";
import { setactiveContent } from "@/hooks/conversasSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SelectorConversas = () => {
  const dispacth = useDispatch();
  const activeContent = useSelector(
    (state: RootState) => state.Conversas.activeContent
  );
  const Mudanca = (content: string | null = "Conversas") => {
    dispacth(setactiveContent(content));
  };
  const Renderizar = () => {
    switch (activeContent) {
      case "Conversas":
        return <Conversas />;
      case "Ligações":
        return <Ligacoes />;
      case "Contatos":
        return <Contato />;
      default:
        return <Conversas />;
    }
  };
  return { Mudanca, Renderizar };
};
export default SelectorConversas;
