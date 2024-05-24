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
import {
  resetUsuario,
  setNome,
  setSenha,
  setTelefone,
} from "@/hooks/usuarioSlice";
import { Alert } from "react-native";
import adicionarUsuario from "@/api/firebase/adicionarUsuario";

export default function SignUpComponent() {
  const dispatch = useDispatch();
  const { nome, telefone, senha } = useSelector(
    (state: RootState) => state.Usuario
  );

  const handleAdicionarUsuario = async () => {
    if (!nome || !telefone || !senha) {
      Alert.alert("Por favor, preencha todos os campos !!");
      return;
    }
    try {
      await adicionarUsuario({ nome, telefone, senha, createdAt: new Date() });
      Alert.alert("Cadastro com Sucesso!!");
      dispatch(resetUsuario());
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("Numero de telefone já cadastrado")) {
          Alert.alert(
            "Erro",
            "Numero de telefone já cadastrado. Por favor, use outro numero."
          );
        } else {
          Alert.alert(
            "Erro",
            "Erro ao cadastrar usuário. Por favor, tente novamente."
          );
        }
      } else {
        Alert.alert(
          "Erro",
          "Erro ao cadastrar usuário. Por favor, tente novamente."
        );
      }
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
          placeholder="Numero Telefone"
          placeholderTextColor="gray"
          value={telefone}
          onChangeText={(text) => dispatch(setTelefone(text))}
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
