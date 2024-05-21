import React, { useState, useEffect, useRef } from "react";
import { View, TextInput, Keyboard, Platform } from "react-native";
import { TouchableRipple, Icon } from "react-native-paper";

interface Props {
  onSend: (message: string) => void;
}

const NoticiasInput: React.FC<Props> = ({ onSend }) => {
  const [message, setMessage] = useState("");
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === "android" ? "keyboardDidShow" : "keyboardWillShow",
      (event) => {
        setKeyboardHeight(event.endCoordinates.height);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === "android" ? "keyboardDidHide" : "keyboardWillHide",
      () => {
        setKeyboardHeight(0);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleMessageSend = () => {
    if (message.trim() !== "") {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <View
      style={{
        position: "relative",
        bottom: keyboardHeight,
        width: "100%",
        marginTop: 20,
      }}
    >
      <View
        style={{
          alignSelf: "center",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          borderRadius: 28,
          backgroundColor: "white",
        }}
      >
        <TextInput
          ref={inputRef}
          placeholder="Digite sua mensagem..."
          placeholderTextColor="gray"
          value={message}
          onChangeText={setMessage}
          multiline
          style={{
            fontFamily: "Poppins",
            marginLeft: 20,
            marginTop: 10,
            height: 40,
            flex: 1,
          }}
        />
        <TouchableRipple
          onPress={handleMessageSend}
          style={{ marginRight: 10 }}
        >
          <Icon source="send" color="tomato" size={24} />
        </TouchableRipple>
      </View>
    </View>
  );
};

export default NoticiasInput;
