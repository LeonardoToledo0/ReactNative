import React from "react";
import { setselectConfig } from "@/hooks/configSlice";
import { RootState } from "@/hooks/configureStore";
import {
  ConfigCargo,
  ConfigContent,
  ConfigNome,
  ConfigPerfil,
  SobreNome,
} from "@/styles/ConfigStyles";
import {
  ContetTextoRenderizar,
  RenderizarConteudo,
  TextoRenderizar,
} from "@/styles/LoginStyles";
import SelectorConfig from "@/utils/selectorConfig";

import { Avatar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

const Perfil = require("../../assets/images/perfil.jpg");

export default function ConfigComponent() {
  const dispatch = useDispatch();
  const selectConfig = useSelector(
    (state: RootState) => state.Config.selectConfig
  );
  const { Mudanca, Renderizar } = SelectorConfig();

  const handleClick = (selector: string) => {
    Mudanca(selector);
    dispatch(setselectConfig(selector));
  };

  return (
    <ConfigContent>
      <ConfigPerfil>
        <Avatar.Image size={150} source={Perfil} />
      </ConfigPerfil>
      <ConfigNome>
        Jhon <SobreNome>Doe</SobreNome>
      </ConfigNome>
      <ConfigCargo>Desenvolvedor</ConfigCargo>
      <ContetTextoRenderizar>
        <TextoRenderizar
          style={{ color: selectConfig === "Perfil" ? "tomato" : "gray" }}
          onPress={() => handleClick("Perfil")}
        >
          Perfil
        </TextoRenderizar>
        <TextoRenderizar
          style={{
            color: selectConfig === "Configurações" ? "tomato" : "gray",
          }}
          onPress={() => handleClick("Configurações")}
        >
          Configurações
        </TextoRenderizar>
      </ContetTextoRenderizar>
      <RenderizarConteudo>{Renderizar()}</RenderizarConteudo>
    </ConfigContent>
  );
}
