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

  const emailQuery = query(
    usuariosCollection,
    where("email", "==", usuario.email)
  );
  const emailSnapshot = await getDocs(emailQuery);
  if (!emailSnapshot.empty) {
    throw new Error("E-mail já cadastrado. Por favor, use outro e-mail");
  }
  try {
    const novoUsuarioRef = await addDoc(usuariosCollection, usuario);
  } catch (error) {
    console.error("Erro ao adicionar usuário", error);
  }
};

export default adicionarUsuario;
