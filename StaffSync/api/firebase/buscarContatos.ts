import * as Contacts from "expo-contacts";
import {
  collection,
  getFirestore,
  where,
  getDocs,
  query,
} from "firebase/firestore";
import firebaseConfig from "../config/firebaseConfig";
import { initializeApp } from "firebase/app";
import { Contato } from "@/types/type";

const getContatos = async () => {
  try {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers],
      });
      return data;
    } else {
      throw new Error("Permissão para acessar contatos foi negada");
    }
  } catch (error) {
    console.error("Erro ao recuperar os contatos", error);
    return [];
  }
};

const compareContato = async (): Promise<Contato[]> => {
  const contatos = await getContatos();
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const userCollection = collection(db, "usuarios");

  const contatosEncontrados: Contato[] = [];

  for (const contato of contatos) {
    if (contato.phoneNumbers && contato.phoneNumbers.length > 0) {
      for (const phoneNumberObj of contato.phoneNumbers) {
        if (phoneNumberObj.number) {
          const phoneNumber = phoneNumberObj.number.replace(/\D/g, "");

          const q = query(userCollection, where("telefone", "==", phoneNumber));
          const snapshot = await getDocs(q);

          if (!snapshot.empty) {
            snapshot.forEach((doc) => {
              contatosEncontrados.push(doc.data() as Contato);
            });
          } else {
            console.log("Usuário não encontrado para o contato:", contato.name);
          }
        }
      }
    }
  }

  return contatosEncontrados;
};

export default compareContato;
