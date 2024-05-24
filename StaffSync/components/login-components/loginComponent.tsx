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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/hooks/configureStore";
import login from "@/api/firebase/auth";
import { Alert } from "react-native";
import { setGetSenha, setGetTelefone } from "@/hooks/usuarioSlice";

type RootStackParamList = {
  Home: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;

export default function LoginComponent() {
  const dispatch = useDispatch();
  const { getsenha, gettelefone } = useSelector(
    (state: RootState) => state.Usuario
  );
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = async () => {
    try {
      const isAuth = await login({ telefone: gettelefone, senha: getsenha });
      if (isAuth) {
        navigation.navigate("Home");
      } else {
        Alert.alert("Erro", "Credenciais Inválidas");
      }
    } catch (error) {
      console.log("Erro ao fazer login:", error);
      Alert.alert("Erro", "Algo deu errado ao fazer login.");
    }
  };

  return (
    <>
      <LoginContent>
        <LoginText>
          Ao fazer login você concorda com nossos Termos e{" "}
          <LoginLink>Política de Privacidade</LoginLink>
        </LoginText>
        <LoginInputWrapper>
          <LoginInput
            placeholder="Numero de Telefone"
            placeholderTextColor="gray"
            value={gettelefone}
            onChangeText={(text) => dispatch(setGetTelefone(text))}
          />
        </LoginInputWrapper>
        <LoginInputWrapper>
          <LoginInput
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry
            value={getsenha}
            onChangeText={(text) => dispatch(setGetSenha(text))}
          />
        </LoginInputWrapper>
        <LoginButton onPress={handleLogin}>
          <TextButton>Login</TextButton>
        </LoginButton>
      </LoginContent>
    </>
  );
}
