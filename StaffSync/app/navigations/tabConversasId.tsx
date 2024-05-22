import React, { useRef, useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ConversasID from "@/components/contato-components/conversasID";
import {
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { TouchableRipple, Icon } from "react-native-paper";
import { useIsFocused } from "@react-navigation/native";
import { useKeyboard } from "@react-native-community/hooks";

const Tab = createBottomTabNavigator();

const TabConversasId = () => {
  const isFocused = useIsFocused();
  const inputRef = useRef<TextInput>(null);
  const keyboard = useKeyboard();
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (event) => {
        setKeyboardHeight(event.endCoordinates.height);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardHeight(0);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handlePressAnywhere = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePressAnywhere}>
      <View style={{ flex: 1 }}>
        <Tab.Navigator>
          <Tab.Screen
            name="Id"
            component={ConversasID}
            options={{
              headerShown: false,
              tabBarLabel: ({ focused }) =>
                focused ? (
                  <View
                    style={{
                      flexDirection: "row",
                      width: "95%",
                      borderRadius: 28,
                      alignItems: "center",
                      backgroundColor: "#f2f2f2",
                      borderColor: "tomato",
                      borderWidth: 2,
                      paddingBottom: keyboardHeight,
                    }}
                  >
                    <TextInput
                      ref={inputRef}
                      placeholder="Digite sua mensagem..."
                      placeholderTextColor="gray"
                      multiline
                      style={{
                        fontFamily: "Poppins",
                        marginLeft: 10,
                        height: 40,
                        flex: 1,
                      }}
                    />
                    <TouchableRipple
                      onPress={() => {}}
                      style={{ marginRight: 10 }}
                    >
                      <Icon source="send" color="tomato" size={24} />
                    </TouchableRipple>
                  </View>
                ) : null,
            }}
          />
        </Tab.Navigator>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TabConversasId;
