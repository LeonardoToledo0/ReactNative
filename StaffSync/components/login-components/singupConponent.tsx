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

import { setNome, setEmail, setSenha, setSucesso } from "@/hooks/usuarioSlice";
import {
  Modal,
  PaperProvider,
  Portal,
  TouchableRipple,
} from "react-native-paper";
import { Text } from "react-native";
import adicionarUsuario from "@/api/firebase/adicionarUsuario";

type RootStackParamList = {
  Login: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

export default function SignUpComponent() {
  const dispatch = useDispatch();
  const { nome, email, senha, sucesso } = useSelector(
    (state: RootState) => state.Usuario
  );
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleAdicionarUsuario = async () => {
    try {
      const createdAt = new Date();

      await adicionarUsuario({ nome, email, senha, createdAt });
      dispatch(setSucesso(true));
    } catch (error) {
      console.error("Erro ao adicionar usuário", error);
    }
  };

  const handleNavigateToLogin = () => {
    dispatch(setSucesso(false));
  };

  return (
    <PaperProvider>
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
      <Portal>
        <Modal
          visible={sucesso}
          onDismiss={() => dispatch(setSucesso(false))}
          contentContainerStyle={{
            backgroundColor: "white",
            padding: 20,
            margin: 20,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Poppins",
              fontSize: 18,
              color: "green",
            }}
          >
            Cadastro com Sucesso!!
          </Text>
          <TouchableRipple
            onPress={handleNavigateToLogin}
            style={{
              marginTop: 20,
              backgroundColor: "tomato",
              width: 150,
              padding: 10,
              borderRadius: 10,
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Poppins",
                color: "white",
              }}
            >
              ok
            </Text>
          </TouchableRipple>
        </Modal>
      </Portal>
    </PaperProvider>
  );
}
