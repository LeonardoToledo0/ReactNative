import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Conversas() {
  return (
    <>
      <ScrollView>
        <View>
          <Text>Conversas1</Text>
          <Text>Conversas2</Text>
          <Text>Conversas3</Text>
        </View>
      </ScrollView>
    </>
  );
}
