import React from "react";
import { ContentConfiguracao } from "@/styles/ConfigStyles";
import { Divider, List, TouchableRipple } from "react-native-paper";

export default function ConfiguracoesComponent() {
  return (
    <>
      <ContentConfiguracao>
        <List.Section
          style={{
            width: 350,
            backgroundColor: "white",
            borderRadius: 8,
            marginTop: 50,
            shadowOpacity: 0.3,
          }}
        >
          <TouchableRipple onPress={() => {}}>
            <List.Item
              title="Alterar Avatar"
              titleStyle={{
                fontSize: 16,
                fontFamily: "Poppins",
                color: "tomato",
              }}
              left={() => (
                <List.Icon
                  icon="account-circle-outline"
                  color="tomato"
                  style={{
                    alignItems: "center",
                    marginLeft: 15,
                    justifyContent: "center",
                  }}
                />
              )}
              right={() => <List.Icon icon="chevron-right" color="tomato" />}
            />
          </TouchableRipple>
          <Divider style={{ backgroundColor: "tomato" }} />

          <TouchableRipple onPress={() => {}}>
            <List.Item
              title="Alterar Tema"
              titleStyle={{
                fontSize: 16,
                fontFamily: "Poppins",
                color: "tomato",
              }}
              left={() => (
                <List.Icon
                  icon="weather-night"
                  color="tomato"
                  style={{
                    alignItems: "center",
                    marginLeft: 15,
                    justifyContent: "center",
                  }}
                />
              )}
              right={() => <List.Icon icon="chevron-right" color="tomato" />}
            />
          </TouchableRipple>
          <Divider style={{ backgroundColor: "tomato" }} />

          <TouchableRipple onPress={() => {}}>
            <List.Item
              title="Alterar Instagram"
              titleStyle={{
                fontSize: 16,
                fontFamily: "Poppins",
                color: "tomato",
              }}
              left={() => (
                <List.Icon
                  icon="instagram"
                  color="tomato"
                  style={{
                    alignItems: "center",
                    marginLeft: 15,
                    justifyContent: "center",
                  }}
                />
              )}
              right={() => <List.Icon icon="chevron-right" color="tomato" />}
            />
          </TouchableRipple>
          <Divider style={{ backgroundColor: "tomato" }} />

          <TouchableRipple onPress={() => {}}>
            <List.Item
              title="Alterar Facebook"
              titleStyle={{
                fontSize: 16,
                fontFamily: "Poppins",
                color: "tomato",
              }}
              left={() => (
                <List.Icon
                  icon="facebook"
                  color="tomato"
                  style={{
                    alignItems: "center",
                    marginLeft: 15,
                    justifyContent: "center",
                  }}
                />
              )}
              right={() => <List.Icon icon="chevron-right" color="tomato" />}
            />
          </TouchableRipple>
          <Divider style={{ backgroundColor: "tomato" }} />

          <TouchableRipple onPress={() => {}}>
            <List.Item
              title="Alterar Linkedin"
              titleStyle={{
                fontSize: 16,
                fontFamily: "Poppins",
                color: "tomato",
              }}
              left={() => (
                <List.Icon
                  icon="linkedin"
                  color="tomato"
                  style={{
                    alignItems: "center",
                    marginLeft: 15,
                    justifyContent: "center",
                  }}
                />
              )}
              right={() => <List.Icon icon="chevron-right" color="tomato" />}
            />
          </TouchableRipple>
          <Divider style={{ backgroundColor: "tomato" }} />

          <TouchableRipple onPress={() => {}}>
            <List.Item
              title="Alterar Email"
              titleStyle={{
                fontSize: 16,
                fontFamily: "Poppins",
                color: "tomato",
              }}
              left={() => (
                <List.Icon
                  icon="email-outline"
                  color="tomato"
                  style={{
                    alignItems: "center",
                    marginLeft: 15,
                    justifyContent: "center",
                  }}
                />
              )}
              right={() => <List.Icon icon="chevron-right" color="tomato" />}
            />
          </TouchableRipple>
          <Divider style={{ backgroundColor: "tomato" }} />

          <TouchableRipple onPress={() => {}}>
            <List.Item
              title="Alterar Senha"
              titleStyle={{
                fontSize: 16,
                fontFamily: "Poppins",
                color: "tomato",
              }}
              left={() => (
                <List.Icon
                  icon="lock-outline"
                  color="tomato"
                  style={{
                    alignItems: "center",
                    marginLeft: 15,
                    justifyContent: "center",
                  }}
                />
              )}
              right={() => <List.Icon icon="chevron-right" color="tomato" />}
            />
          </TouchableRipple>
          <Divider style={{ backgroundColor: "tomato" }} />

          <TouchableRipple onPress={() => {}}>
            <List.Item
              title="Alterar Telefone"
              titleStyle={{
                fontSize: 16,
                fontFamily: "Poppins",
                color: "tomato",
              }}
              left={() => (
                <List.Icon
                  icon="cellphone"
                  color="tomato"
                  style={{
                    alignItems: "center",
                    marginLeft: 15,
                    justifyContent: "center",
                  }}
                />
              )}
              right={() => <List.Icon icon="chevron-right" color="tomato" />}
            />
          </TouchableRipple>
          <Divider style={{ backgroundColor: "tomato" }} />
        </List.Section>

        <List.Section
          style={{
            width: 350,
            backgroundColor: "white",
            borderRadius: 8,
            marginTop: 10,
            shadowOpacity: 0.3,
          }}
        >
          <TouchableRipple onPress={() => {}}>
            <List.Item
              title="Ligações"
              titleStyle={{
                fontSize: 16,
                fontFamily: "Poppins",
                color: "tomato",
              }}
              left={() => (
                <List.Icon
                  icon="phone-outline"
                  color="tomato"
                  style={{
                    alignItems: "center",
                    marginLeft: 15,
                    justifyContent: "center",
                  }}
                />
              )}
              right={() => <List.Icon icon="chevron-right" color="tomato" />}
            />
          </TouchableRipple>
          <Divider style={{ backgroundColor: "tomato" }} />

          <TouchableRipple onPress={() => {}}>
            <List.Item
              title="Conversas"
              titleStyle={{
                fontSize: 16,
                fontFamily: "Poppins",
                color: "tomato",
              }}
              left={() => (
                <List.Icon
                  icon="chat-outline"
                  color="tomato"
                  style={{
                    alignItems: "center",
                    marginLeft: 15,
                    justifyContent: "center",
                  }}
                />
              )}
              right={() => <List.Icon icon="chevron-right" color="tomato" />}
            />
          </TouchableRipple>
          <Divider style={{ backgroundColor: "tomato" }} />

          <TouchableRipple onPress={() => {}}>
            <List.Item
              title="Notificações"
              titleStyle={{
                fontSize: 16,
                fontFamily: "Poppins",
                color: "tomato",
              }}
              left={() => (
                <List.Icon
                  icon="bell-outline"
                  color="tomato"
                  style={{
                    alignItems: "center",
                    marginLeft: 15,
                    justifyContent: "center",
                  }}
                />
              )}
              right={() => <List.Icon icon="chevron-right" color="tomato" />}
            />
          </TouchableRipple>
          <Divider style={{ backgroundColor: "tomato" }} />

          <TouchableRipple onPress={() => {}}>
            <List.Item
              title="Convidar Amigo"
              titleStyle={{
                fontSize: 16,
                fontFamily: "Poppins",
                color: "tomato",
              }}
              left={() => (
                <List.Icon
                  icon="heart-outline"
                  color="tomato"
                  style={{
                    alignItems: "center",
                    marginLeft: 15,
                    justifyContent: "center",
                  }}
                />
              )}
              right={() => <List.Icon icon="chevron-right" color="tomato" />}
            />
          </TouchableRipple>
          <Divider style={{ backgroundColor: "tomato" }} />

          <TouchableRipple onPress={() => {}}>
            <List.Item
              title="Excluir Conta"
              titleStyle={{
                fontSize: 16,
                fontFamily: "Poppins",
                color: "tomato",
              }}
              left={() => (
                <List.Icon
                  icon="delete-outline"
                  color="tomato"
                  style={{
                    alignItems: "center",
                    marginLeft: 15,
                    justifyContent: "center",
                  }}
                />
              )}
              right={() => <List.Icon icon="chevron-right" color="tomato" />}
            />
          </TouchableRipple>
          <Divider style={{ backgroundColor: "tomato" }} />
        </List.Section>
      </ContentConfiguracao>
    </>
  );
}
