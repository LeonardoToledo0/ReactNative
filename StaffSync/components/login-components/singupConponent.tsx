import React from "react";
import {
  LoginButton,
  LoginContent,
  LoginInput,
  LoginInputWrapper,
  LoginLink,
  LoginText,
  TextButton,
} from "@/styles/LoginStyles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;

export default function SingUpComponent() {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = () => {
    navigation.navigate("Home");
  };

  return (
    <>
      <LoginContent>
        <LoginText>
          Ao se cadastrar, você concorda com nossos Termos e{" "}
          <LoginLink>Política de Privacidade</LoginLink>
        </LoginText>
        <LoginInputWrapper>
          <LoginInput placeholder="Nome" placeholderTextColor="gray" />
        </LoginInputWrapper>
        <LoginInputWrapper>
          <LoginInput placeholder="Email" placeholderTextColor="gray" />
        </LoginInputWrapper>
        <LoginInputWrapper>
          <LoginInput
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry
          />
        </LoginInputWrapper>
        <LoginButton onPress={handleLogin}>
          <TextButton>Cadastro</TextButton>
        </LoginButton>
      </LoginContent>
    </>
  );
}
