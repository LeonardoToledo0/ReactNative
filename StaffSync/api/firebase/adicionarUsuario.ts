import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import firebaseConfig from "../config/firebaseConfig";

interface Usuario {
  nome: string;
  email: string;
  senha: string;
  createdAt: Date;
}

const app = initializeApp(firebaseConfig);

const adicionarUsuario = async (usuario: Usuario) => {
  const db = getFirestore(app);
  const usuariosCollection = collection(db, "usuarios");
  try {
    const novoUsuarioRef = await addDoc(usuariosCollection, usuario);
  } catch (error) {
    console.error("Erro ao adicionar usuário", error);
  }
};

export default adicionarUsuario;
