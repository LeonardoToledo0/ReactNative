import React from "react";

import { Text, View } from "react-native";

export default function TemaComponent() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  return (
    <View>
      <Text>Tema</Text>
    </View>
  );
}
