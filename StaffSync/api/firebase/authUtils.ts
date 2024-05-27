import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUserData = async () => {
  try {
    const userData = await AsyncStorage.getItem("@usuarios");

    if (userData !== null) {
      const userDataObject = JSON.parse(userData);

      return userDataObject;
    }
    return null;
  } catch (error) {
    console.error("Erro ao recuperar os dados do usuário:", error);
    return null;
  }
};
