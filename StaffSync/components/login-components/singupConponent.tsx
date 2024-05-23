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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/hooks/configureStore";
import { setNome, setEmail, setSenha } from "@/hooks/usuarioSlice";
import { Alert } from "react-native";
import adicionarUsuario from "@/api/firebase/adicionarUsuario";

export default function SignUpComponent() {
  const dispatch = useDispatch();
  const { nome, email, senha } = useSelector(
    (state: RootState) => state.Usuario
  );

  const handleAdicionarUsuario = async () => {
    if (!nome || !email || !senha) {
      Alert.alert("Por favor, preencha todos os campos !!");
      return;
    }
    try {
      await adicionarUsuario({ nome, email, senha, createdAt: new Date() });
      Alert.alert("Cadastro com Sucesso!!");
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("E-mail já cadastrado")) {
          Alert.alert(
            "Erro",
            "E-mail já cadastrado. Por favor, use outro e-mail."
          );
        }
      } else {
        Alert.alert(
          "Erro",
          "Erro ao cadastrar usuário. Por favor, tente novamente."
        );
      }
      Alert.alert(
        "Erro",
        "Erro ao cadastrar usuário. Por favor, tente novamente."
      );
    }
  };

  return (
    <LoginContent>
      <LoginText>
        Ao se cadastrar, você concorda com nossos Termos e{" "}
        <LoginLink>Política de Privacidade</LoginLink>
      </LoginText>
      <LoginInputWrapper>
        <LoginInput
          placeholder="Nome"
          placeholderTextColor="gray"
          value={nome}
          onChangeText={(text) => dispatch(setNome(text))}
        />
      </LoginInputWrapper>
      <LoginInputWrapper>
        <LoginInput
          placeholder="Email"
          placeholderTextColor="gray"
          value={email}
          onChangeText={(text) => dispatch(setEmail(text))}
        />
      </LoginInputWrapper>
      <LoginInputWrapper>
        <LoginInput
          placeholder="Password"
          placeholderTextColor="gray"
          secureTextEntry
          value={senha}
          onChangeText={(text) => dispatch(setSenha(text))}
        />
      </LoginInputWrapper>
      <LoginButton onPress={handleAdicionarUsuario}>
        <TextButton>Cadastro</TextButton>
      </LoginButton>
    </LoginContent>
  );
}
