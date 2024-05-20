import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/hooks/configureStore";
import { setactiveContent } from "@/hooks/loginSlice";
import LoginComponent from "@/components/login-components/loginComponent";
import SingUpComponent from "@/components/login-components/singupConponent";

const SelectorLogin = () => {
  const dispatch = useDispatch();
  const activeContent = useSelector(
    (state: RootState) => state.Login.activeContent
  );

  const Mudanca = (content: string | null = "Login") => {
    dispatch(setactiveContent(content));
  };

  const Renderizar = () => {
    switch (activeContent) {
      case "Login":
        return <LoginComponent />;
      case "SingUp":
        return <SingUpComponent />;
      default:
        return <LoginComponent />;
    }
  };

  return { Mudanca, Renderizar };
};

export default SelectorLogin;
