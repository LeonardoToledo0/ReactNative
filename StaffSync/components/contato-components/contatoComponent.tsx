import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Avatar, TouchableRipple } from "react-native-paper";
import compareContato from "@/api/firebase/buscarContatos";
import buscarContatosNaoNoApp from "@/api/firebase/buscarContatosNaoApp";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type RootStackParamList = {
  ConversasId: { contato: Contato };
};

const userImage = require("@/assets/images/user.png");

interface Contato {
  nome: string;
  telefone: string;
  fotoPerfil: string | null;
  online: boolean;
}

export default function Contato() {
  const [contatosEncontrados, setContatosEncontrados] = useState<Contato[]>([]);
  const [contatosCell, setContatosCell] = useState<Contato[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const loadContatos = async () => {
      try {
        const storedContatos = await AsyncStorage.getItem("contatos");
        if (storedContatos !== null) {
          setContatosEncontrados(JSON.parse(storedContatos));
          setLoading(false);
        }
      } catch (error) {
        console.error("Erro ao carregar contatos:", error);
      }
    };

    loadContatos();
  }, []);

  useEffect(() => {
    const fetchContatos = async () => {
      try {
        const contatos = await compareContato();
        setContatosEncontrados(contatos);
        await AsyncStorage.setItem("contatos", JSON.stringify(contatos));
      } catch (error) {
        console.error("Erro ao buscar contatos:", error);
      } finally {
        setLoading(false);
      }
    };

    if (contatosEncontrados.length === 0) {
      fetchContatos();
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const fetchContatoCell = async () => {
      try {
        const contatos = await buscarContatosNaoNoApp(contatosEncontrados);
        setContatosCell((prevContatosCell: Contato[]) => {
          const novosContatos: Contato[] = contatos
            .filter(
              (contato) =>
                !prevContatosCell.some(
                  (prevContato) => prevContato.telefone === contato.telefone
                )
            )
            .map((contato) => ({
              nome: contato.nome,
              telefone: contato.telefone,
              fotoPerfil: null,
              online: false,
            }));

          return [...prevContatosCell, ...novosContatos];
        });
      } catch (error) {
        console.error("Erro ao buscar contatos na agenda:", error);
      }
    };

    if (contatosEncontrados.length > 0) {
      fetchContatoCell();
    }
  }, [contatosEncontrados]);

  const renderAvatar = (fotoPerfil: string | null) => {
    if (fotoPerfil) {
      return (
        <Avatar.Image style={{ margin: 10 }} source={{ uri: fotoPerfil }} />
      );
    } else {
      return <Avatar.Image style={{ margin: 10 }} source={userImage} />;
    }
  };

  const handleContatosPress = (contato: Contato) => {
    navigation.navigate("ConversasId", { contato });
  };
  return (
    <ScrollView>
      {loading ? (
        <View
          style={{
            marginTop: 300,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              marginBottom: 50,
              fontFamily: "Poppins",
              fontSize: 18,
              color: "tomato",
            }}
          >
            Sincronizando Contatos . . .
          </Text>
          <ActivityIndicator size="large" color="tomato" />
        </View>
      ) : (
        <>
          <View
            style={{
              width: "95%",
              alignSelf: "center",
              padding: 5,
              marginTop: 10,
              height: "auto",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 20,
                margin: 5,
                color: "gray",
              }}
            >
              Contatos no Staff Sync
            </Text>
            {contatosEncontrados.map((contato, index) => (
              <TouchableRipple
                key={index}
                onPress={() => handleContatosPress(contato)}
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
                  <TouchableRipple>
                    {renderAvatar(contato.fotoPerfil)}
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
                        {contato.nome}
                      </Text>
                      <Text
                        style={{
                          fontFamily: "Poppins",
                          fontSize: 12,
                          marginRight: 20,
                          marginTop: 4,
                        }}
                      >
                        <Text style={{ color: "tomato" }}>Online</Text>
                        <Text>ou não</Text>
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", margin: 5, gap: 2 }}>
                      <Text>{contato.telefone}</Text>
                    </View>
                  </View>
                </View>
              </TouchableRipple>
            ))}
          </View>
          <View
            style={{
              width: "95%",
              alignSelf: "center",
              padding: 5,
              marginTop: 10,
              height: "auto",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 20,
                margin: 5,
                color: "gray",
              }}
            >
              Contatos na Agenda
            </Text>
            {contatosCell.map((contato, index) => (
              <TouchableRipple key={index}>
                <View
                  style={{
                    width: "95%",
                    alignSelf: "center",
                    alignItems: "center",
                    borderRadius: 8,
                    backgroundColor: "white",
                    marginTop: 10,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View>{renderAvatar(contato.fotoPerfil)}</View>
                    <View>
                      <Text style={{ fontFamily: "Poppins", fontSize: 18 }}>
                        {contato.nome.length > 18
                          ? `${contato.nome.slice(0, 16)}...`
                          : contato.nome}
                      </Text>
                      <Text>{contato.telefone}</Text>
                    </View>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "tomato",
                        marginRight: 20,
                        fontFamily: "Poppins",
                      }}
                    >
                      Convidar
                    </Text>
                  </View>
                </View>
              </TouchableRipple>
            ))}
          </View>
        </>
      )}
    </ScrollView>
  );
}
