import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Avatar, Icon, TouchableRipple } from "react-native-paper";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Conversa } from "@/types/type";

type RootStackParamList = {
  ConversasId: { conversa: Conversa };
  PerfilContato: { conversa: Conversa };
};

export default function Conversas() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const conversas: Conversa[] = [
    {
      id: 1,
      username: "Ricardo",
      user: require("@/assets/images/perfilhomen.jpg"),
      visto: "14:30",
      mensagem: "Olá Jhoe, tudo bem?",
      readonly: false,
      online: true,
      status: "Funcionario",
      backuser: require("@/assets/images/fundo1.jpg"),
      telefone: "(11)9524-2536",
      cargo: " Zelador",
      descricao:
        "Ricardo Silva é um zelador experiente e dedicado, com mais de cinco anos de serviço no condomínio. Ele é conhecido por sua atenção aos detalhes, sua ética de trabalho impecável e sua abordagem amigável para lidar com os moradores.",
      responsabilidade:
        "Como zelador, Ricardo é responsável pela manutenção geral do condomínio, garantindo que todas as áreas comuns estejam limpas, seguras e bem conservadas. Suas tarefas incluem a limpeza diária das áreas comuns, a manutenção dos jardins e áreas verdes, e o acompanhamento de qualquer problema de manutenção que surja nas instalações.",
      qualificacoes:
        "Ricardo possui um histórico sólido em manutenção predial e habilidades técnicas que o tornam capaz de lidar com uma variedade de tarefas. Ele também é conhecido por sua habilidade em resolver problemas de forma eficiente e por sua disposição em ajudar os moradores sempre que necessário.",
      interesses:
        "Fora do trabalho, Ricardo gosta de passar tempo ao ar livre, especialmente cuidando de seu próprio jardim. Ele também é apaixonado por música e gosta de tocar violão nas horas vagas.",
    },
    {
      id: 2,
      username: "Maria",
      user: require("@/assets/images/perfilmulher.jpg"),
      visto: "18:30",
      mensagem: "Olá Jhoe, como você está?",
      readonly: true,
      online: true,
      status: "Moradora",
      backuser: require("@/assets/images/fundo2.jpg"),
      telefone: "(11)9845-7854",
      cargo: "Advogada",
      descricao:
        "Maria Oliveira é uma advogada experiente e comprometida, com sete anos de prática na área jurídica. Ela é reconhecida por sua capacidade de análise detalhada, sua ética profissional exemplar e sua abordagem empática ao lidar com os clientes.",
      responsabilidade:
        "Como advogada, Maria é responsável por representar os interesses legais de seus clientes em uma variedade de questões jurídicas. Suas responsabilidades incluem pesquisa jurídica, redação de documentos legais, comparecimento em audiências e negociação em nome de seus clientes.",
      qualificacoes:
        "Maria possui uma sólida formação acadêmica em Direito e uma vasta experiência prática em diversos campos do direito, incluindo civil, trabalhista e família. Ela é reconhecida por sua habilidade em comunicar-se de forma clara e eficaz, tanto com seus clientes quanto com outros profissionais do direito.",
      interesses:
        "Fora do escritório, Maria gosta de participar de eventos jurídicos e manter-se atualizada sobre as últimas tendências e mudanças na legislação. Ela também é uma entusiasta de viagens e adora explorar novos destinos sempre que possível.",
    },
  ];
  const handlePerfilPress = (conversa: Conversa) => {
    navigation.navigate("PerfilContato", { conversa });
  };

  const handleContatosPress = (conversa: Conversa) => {
    navigation.navigate("ConversasId", { conversa });
  };

  return (
    <ScrollView>
      {conversas.map((conversa) => (
        <TouchableRipple
          key={conversa.id}
          onPress={() => handleContatosPress(conversa)}
        >
          <View
            style={{
              width: "95%",
              alignSelf: "center",
              alignItems: "center",
              borderRadius: 8,
              backgroundColor: "white",
              marginTop: 10,
              flexDirection: "row",
            }}
          >
            <TouchableRipple onPress={() => handlePerfilPress(conversa)}>
              <Avatar.Image style={{ margin: 10 }} source={conversa.user} />
            </TouchableRipple>
            <View style={{ flex: 1 }}>
              <View
                style={{
                  marginLeft: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontFamily: "Poppins", fontSize: 18 }}>
                  {conversa.username}
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins",
                    fontSize: 12,
                    marginRight: 20,
                    marginTop: 4,
                  }}
                >
                  {conversa.online ? (
                    <Text style={{ color: "tomato" }}>Online</Text>
                  ) : (
                    <Text>{conversa.visto}</Text>
                  )}
                </Text>
              </View>
              <View style={{ flexDirection: "row", margin: 5, gap: 2 }}>
                <Icon
                  source="check-all"
                  size={16}
                  color={conversa.readonly ? "tomato" : "gray"}
                />
                <Text>{conversa.mensagem}</Text>
              </View>
            </View>
          </View>
        </TouchableRipple>
      ))}
    </ScrollView>
  );
}
