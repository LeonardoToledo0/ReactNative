import { initializeApp } from "firebase/app";
import firebaseConfig from "../config/firebaseConfig";
import {
  getFirestore,
  doc,
  updateDoc,
  DocumentSnapshot,
  onSnapshot,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

const updatePresence = async (isOnline: boolean) => {
  const currentUser = auth.currentUser;
  if (currentUser) {
    const { uid } = currentUser;
    const userRef = doc(db, "usuarios", uid);
    await updateDoc(userRef, { online: isOnline });
  }
};

const monitorPresence = () => {
  onAuthStateChanged(auth, (user: User | null) => {
    if (user) {
      updatePresence(true);

      const unsubscribe = onSnapshot(
        doc(db, "usuarios", user.uid),
        (snapshot: DocumentSnapshot) => {
          const userData = snapshot.data();
          if (!userData || !userData.online) {
            updatePresence(false);
          }
        }
      );
      return unsubscribe;
    }
  });
};
