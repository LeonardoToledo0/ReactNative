import React from "react";
import { setselectConfig } from "@/hooks/configSlice";
import { RootState } from "@/hooks/configureStore";
import {
  ConfigCargo,
  ConfigContent,
  ConfigIcons,
  ConfigNome,
  ConfigPerfil,
  SobreNome,
  TouchIcons,
} from "@/styles/ConfigStyles";
import {
  ContetTextoRenderizar,
  RenderizarConteudo,
  TextoRenderizar,
} from "@/styles/LoginStyles";
import SelectorConfig from "@/utils/selectorConfig";
import { Avatar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { Feather } from "@expo/vector-icons";

const Perfil = require("../assets/images/perfil.jpg");

export default function ConfiguracaoScreen() {
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
        Leonardo <SobreNome>Toledo</SobreNome>
      </ConfigNome>
      <ConfigCargo>Desenvolvedor</ConfigCargo>
      <ConfigIcons>
        <TouchIcons onPress={() => {}}>
          <Feather name="instagram" color={"tomato"} size={24} />
        </TouchIcons>
        <TouchIcons onPress={() => {}}>
          <Feather name="facebook" color={"tomato"} size={24} />
        </TouchIcons>
        <TouchIcons onPress={() => {}}>
          <Feather name="linkedin" color={"tomato"} size={24} />
        </TouchIcons>
      </ConfigIcons>
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
