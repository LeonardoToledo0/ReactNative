import { initializeApp } from "firebase/app";
import firebaseConfig from "../config/firebaseConfig";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { Credenciais, Usuario } from "@/types/type";

const app = initializeApp(firebaseConfig);

export default async function login(
  credenciais: Credenciais
): Promise<boolean> {
  const db = getFirestore(app);
  const usuariosCollection = collection(db, "usuarios");
  const q = query(
    usuariosCollection,
    where("telefone", "==", credenciais.telefone)
  );
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return false;
  } else {
    let loginSucesso = false;
    querySnapshot.forEach((doc) => {
      const usuarioDb = doc.data() as Usuario;
      if (usuarioDb.senha === credenciais.senha) {
        loginSucesso = true;
      }
    });
    return loginSucesso;
  }
}
