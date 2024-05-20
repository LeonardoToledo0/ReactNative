import { ContentAgenda } from "@/styles/AgendaStyles";
import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-paper";
const salao = require("../../assets/images/salao.jpg");
export default function AgendaSalao() {
  return (
    <ContentAgenda>
      <Card style={{ marginTop: 20, width: 380, alignSelf: "center" }}>
        <Card.Cover source={salao} />
      </Card>
    </ContentAgenda>
  );
}
