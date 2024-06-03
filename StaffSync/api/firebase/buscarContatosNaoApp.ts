import * as Contacts from "expo-contacts";
import { Contato } from "@/types/type";

const buscarContatosNaoNoApp = async (contatosNoApp: Contato[]) => {
  try {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status !== "granted") {
      throw new Error("Permissão para acessar contatos foi negada");
    }

    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
    });

    const contatosAgenda = data.map((contato) => ({
      nome: contato.name ?? "Sem Nome",
      telefone: contato.phoneNumbers?.[0]?.number ?? "",
      fotoPerfil: null,
    }));

    const contatosNaoNoApp = contatosAgenda.filter(
      (contatoAgenda) =>
        !contatosNoApp.find(
          (contatoApp) => contatoApp.telefone === contatoAgenda.telefone
        )
    );

    return contatosNaoNoApp;
  } catch (error) {
    console.error("Erro ao buscar contatos na agenda:", error);

    return [];
  }
};

export default buscarContatosNaoNoApp;
