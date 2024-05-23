import { initializeApp } from "firebase/app";
import firebaseConfig from "../config/firebaseConfig";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

interface Usuario {
  email: string;
  senha: string;
}

const app = initializeApp(firebaseConfig);

const login = async (usuario: Usuario): Promise<boolean> => {
  const db = getFirestore(app);
  const usuariosCollection = collection(db, "usuarios");
  const q = query(usuariosCollection, where("email", "==", usuario.email));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return false;
  } else {
    let loginSucesso = false;
    querySnapshot.forEach((doc) => {
      const usuarioDb = doc.data() as Usuario;
      if (usuarioDb.senha === usuario.senha) {
        loginSucesso = true;
      }
    });
    return loginSucesso;
  }
};

export default login;
