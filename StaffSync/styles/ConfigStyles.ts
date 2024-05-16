import styled from "styled-components/native";
import { ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// Stylos da Configuração Screen

export const ConfigContent = styled(ScrollView)`
  flex: 1;
  background: white;
`;

export const ConfigPerfil = styled(View)`
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 10px gray;
`;
export const ConfigNome = styled(Text)`
  font-size: 26px;
  font-family: "Poppins";
  text-align: center;
  color: gray;
  margin-top: 5px;
`;
export const SobreNome = styled(Text)`
  color: tomato;
`;
export const ConfigCargo = styled(Text)`
  font-size: 18px;
  text-align: center;
  color: gray;
`;
export const ConfigIcons = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 20px;
`;

export const TouchIcons = styled(TouchableOpacity)``;
