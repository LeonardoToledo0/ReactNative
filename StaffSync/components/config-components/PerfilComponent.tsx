import React from "react";
import { ScrollView, View } from "react-native";
import { Card, Divider, Text } from "react-native-paper";

export default function PerfilComponent() {
  return (
    <>
      <ScrollView>
        <View
          style={{
            display: "flex",
            height: 500,
            alignItems: "center",
            shadowOpacity: 0.3,
            marginTop: 10,
          }}
        >
          <Card
            style={{
              width: 380,
              backgroundColor: "white",
            }}
          >
            <Card.Content style={{ gap: 10 }}>
              <Text
                variant="titleMedium"
                style={{ color: "tomato", fontFamily: "Poppins" }}
              >
                Nome:{" "}
                <Text
                  variant="bodyMedium"
                  style={{ color: "gray", fontFamily: "Poppins" }}
                >
                  Jhon Doe
                </Text>
              </Text>

              <Text
                variant="titleMedium"
                style={{ color: "tomato", fontFamily: "Poppins" }}
              >
                Telefone:{" "}
                <Text
                  variant="bodyMedium"
                  style={{ color: "gray", fontFamily: "Poppins" }}
                >
                  (11)9457-9658
                </Text>
              </Text>

              <Text
                variant="titleMedium"
                style={{ color: "tomato", fontFamily: "Poppins" }}
              >
                Bloco:{" "}
                <Text
                  variant="bodyMedium"
                  style={{ color: "gray", fontFamily: "Poppins" }}
                >
                  5
                </Text>{" "}
              </Text>

              <Text
                variant="titleMedium"
                style={{ color: "tomato", fontFamily: "Poppins" }}
              >
                Apartamento:{" "}
                <Text
                  variant="bodyMedium"
                  style={{ color: "gray", fontFamily: "Poppins" }}
                >
                  516
                </Text>
              </Text>

              <Text
                variant="titleMedium"
                style={{ color: "tomato", fontFamily: "Poppins" }}
              >
                Vaga:{" "}
                <Text
                  variant="bodyMedium"
                  style={{ color: "gray", fontFamily: "Poppins" }}
                >
                  N° 1845
                </Text>
              </Text>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </>
  );
}
