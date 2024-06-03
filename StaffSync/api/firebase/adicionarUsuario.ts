import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import firebaseConfig from "../config/firebaseConfig";
import { Usuario } from "@/types/type";

const app = initializeApp(firebaseConfig);

const adicionarUsuario = async (usuario: Usuario) => {
  const db = getFirestore(app);
  const usuariosCollection = collection(db, "usuarios");

  const telefoneQuery = query(
    usuariosCollection,
    where("telefone", "==", usuario.telefone)
  );
  const telefoneSnapshot = await getDocs(telefoneQuery);
  if (!telefoneSnapshot.empty) {
    throw new Error(
      "O numero de telefone já está cadastrado. Por favor, use outro numero"
    );
  }
  try {
    const novoUsuarioRef = await addDoc(usuariosCollection, usuario);
  } catch (error) {
    console.error("Erro ao adicionar usuário", error);
  }
};

export default adicionarUsuario;
