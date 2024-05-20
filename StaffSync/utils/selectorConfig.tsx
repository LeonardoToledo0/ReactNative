import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/hooks/configureStore";
import { setactiveContent } from "@/hooks/configSlice";
import PerfilComponent from "@/components/config-components/PerfilComponent";
import ConfiguracoesComponent from "@/components/config-components/configuracoesComponent";

const SelectorConfig = () => {
  const dispatch = useDispatch();
  const activeContent = useSelector(
    (state: RootState) => state.Config.activeContent
  );

  const Mudanca = (content: string | null = "Perfil") => {
    dispatch(setactiveContent(content));
  };

  const Renderizar = () => {
    switch (activeContent) {
      case "Perfil":
        return <PerfilComponent />;
      case "Configurações":
        return <ConfiguracoesComponent />;
      default:
        return <PerfilComponent />;
    }
  };

  return { Mudanca, Renderizar };
};

export default SelectorConfig;
