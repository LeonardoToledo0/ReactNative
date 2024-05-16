import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { LoandingView, LoandingImage } from "@/styles/LoginStyles";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/hooks/configureStore";
import { setisAppLoaded } from "@/hooks/loginSlice";

const Logo = require("../assets/images/cloud.png");

export default function LoadingScreen() {
  const dispatch = useDispatch();
  const isAppLoaded = useSelector(
    (state: RootState) => state.Login.isAppLoaded
  );
  const navigation = useNavigation<NavigationProp<any>>();

  useEffect(() => {
    const loadApp = async () => {
      await Promise.all([]);

      dispatch(setisAppLoaded(true));
    };

    loadApp();
  }, [dispatch]);

  useEffect(() => {
    if (isAppLoaded) {
      navigation.navigate("Login");
    }
  }, [isAppLoaded, navigation]);

  return (
    <LoandingView>
      <LoandingImage source={Logo} />
      <ActivityIndicator size="large" color="tomato" />
    </LoandingView>
  );
}
