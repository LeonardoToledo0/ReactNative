import styled, { css } from "styled-components/native";
import { View, Text, TextInput, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Divider } from "react-native-paper";

// Stylos do Screen Login
export const ViewLogin = styled(View)`
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const ContentLogin = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  margin-top: 50px;
`;
export const LoginLogo = styled(Image)`
  width: 100px;
  height: 100px;
`;
export const TextLogo = styled(Text)`
  color: tomato;
  font-size: 42px;
  font-family: "Poppins";
  margin-top: -20px;
`;
export const SubTextLogo = styled(Text)`
  color: gray;
  font-family: "Poppins";
`;
export const SubText = styled(Text)`
  color: gray;
  font-family: "Poppins";
  align-self: flex-start;
  font-size: 16px;
  margin-left: 35px;
  margin-top: -40px;
`;

export const Divisor = styled(Divider)`
  width: 2px;
  height: 80%;
  background: tomato;
`;
export const ContetTextoRenderizar = styled(View)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 20px;
  margin-top: 30px;
`;
export const RenderizarConteudo = styled(View)``;
export const TextoRenderizar = styled(Text)`
  font-size: 18px;
  font-family: "Poppins";
  color: gray;
`;
// Stylos loginComponet
export const LoginContent = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  margin-top: 10px;
`;
export const LoginTitle = styled(Text)`
  font-size: 42px;
  margin: 10px;
  padding: 10px;
  font-family: "Poppins";
`;
export const LoginText = styled(Text)`
  font-size: 16px;
  padding: 10px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 50px;
`;

export const LoginLink = styled(Text)`
  color: tomato;
  font-family: "Poppins";
`;

export const LoginButton = styled(TouchableOpacity)`
  padding: 14px 0;
  width: 305px;
  background: tomato;
  border-radius: 8px;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled(Text)`
  font-size: 16px;
  font-family: "Poppins";
  color: white;
  text-align: center;
`;
export const LoginInputWrapper = styled(View)`
  width: 300px;
  border-bottom-width: 2px;
  border-bottom-color: tomato;
  margin: 10px;
`;

export const LoginInput = styled(TextInput)`
  height: 50px;
  width: 100%;
  color: black;
  padding: 0;
`;
export const PlaceholderText = styled.Text`
  color: gray;
`;
// Styles Loanding

export const LoandingView = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const LoandingImage = styled(Image)`
  width: 200px;
  height: 200px;
`;
