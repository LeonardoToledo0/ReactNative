import { ContentAgenda } from "@/styles/AgendaStyles";
import React from "react";
import { Card } from "react-native-paper";
const churras = require("../../assets/images/churras.jpg");

export default function AgendaChurrasqueira() {
  return (
    <ContentAgenda>
      <Card style={{ marginTop: 20, width: 380, alignSelf: "center" }}>
        <Card.Cover source={churras} />
      </Card>
    </ContentAgenda>
  );
}
