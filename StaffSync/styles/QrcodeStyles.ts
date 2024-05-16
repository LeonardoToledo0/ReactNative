import { Text, View } from "react-native";
import styled from "styled-components/native";

// Stylos do QRCODE screen

export const QRcodeContent = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: white;
`;

export const ContentTile = styled(View)`
  margin-bottom: 30px;
`;
export const QRTitle = styled(Text)`
  font-size: 30px;
  font-family: "Poppins";
  text-align: right;
  color: tomato;
  margin-top: -10px;
`;

export const Generator = styled(View)`
  padding: 15px;
  box-shadow: 4px 4px 10px gray;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background: #f1f1f1;
`;
export const TextValue = styled(Text)`
  font-size: 16px;
  color: gray;
  font-family: "Poppins";
  margin-top: 5px;
`;
