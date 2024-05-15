import React from "react";
import {
  ContentLogin,
  LoginLogo,
  SubTextLogo,
  TextLogo,
  SubText,
  ViewLogin,
  Divisor,
  TextoRenderizar,
  RenderizarConteudo,
  ContetTextoRenderizar,
} from "@/styles/LoginStyles";
import SelectorLogin from "../utils/selectorLogin";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/hooks/configureStore";
import { setselectedButton } from "@/hooks/loginSlice";

const Logo = require("../assets/images/cloud.png");

export default function LoginScreen() {
  const dispatch = useDispatch();
  const selectedButton = useSelector(
    (state: RootState) => state.Login.selectedButton
  );
  const { Mudanca, Renderizar } = SelectorLogin();

  const handleClick = (selector: string) => {
    Mudanca(selector);
    dispatch(setselectedButton(selector));
  };

  return (
    <>
      <ViewLogin>
        <ContentLogin>
          <TextLogo>
            STAFF <SubTextLogo>SYNC</SubTextLogo>
          </TextLogo>
          <Divisor />
          <LoginLogo source={Logo} />
        </ContentLogin>
        <SubText>SOLUCÕES EM TECNOLOGIA</SubText>
        <ContetTextoRenderizar>
          <TextoRenderizar
            style={{ color: selectedButton === "Login" ? "tomato" : "gray" }}
            onPress={() => handleClick("Login")}
          >
            Login
          </TextoRenderizar>
          <TextoRenderizar
            style={{ color: selectedButton === "SingUp" ? "tomato" : "gray" }}
            onPress={() => handleClick("SingUp")}
          >
            Cadastro
          </TextoRenderizar>
        </ContetTextoRenderizar>
        <RenderizarConteudo>{Renderizar()}</RenderizarConteudo>
      </ViewLogin>
    </>
  );
}
