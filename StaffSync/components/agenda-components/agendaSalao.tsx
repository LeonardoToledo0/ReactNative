import React, { useState } from "react";
import { ScrollView, View, TouchableHighlight } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Calendar } from "react-native-calendars";
import { Card, Text, Title, TouchableRipple } from "react-native-paper";
const salao = require("../../assets/images/salao.jpg");

const customTheme = {
  arrowColor: "tomato",
  selectedDayBackgroundColor: "white",
  selectedDayTextColor: "tomato",
};
const timeSlots = [
  { id: "1", time: "09:00" },
  { id: "2", time: "10:00" },
  { id: "3", time: "11:00" },
  { id: "4", time: "12:00" },
  { id: "5", time: "13:00" },
];

export default function AgendaSalao() {
  const [selectedDate, setSelectedDate] = useState<string | undefined>(
    undefined
  );
  const [selectTime, setSelectTime] = useState("");
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleDayPress = (day: any) => {
    const selectedDateString = day.dateString;

    if (selectedDate === selectedDateString) {
      setSelectedDate(undefined);
    } else {
      setSelectedDate(selectedDateString);
    }
  };

  return (
    <ScrollView>
      <Card style={{ marginTop: 10, width: "95%", alignSelf: "center" }}>
        <Card.Cover source={salao} />
      </Card>
      <Card
        style={{
          marginTop: 10,
          width: "95%",
          alignSelf: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Card.Content>
          <Title
            style={{
              textAlign: "center",
              fontFamily: "Poppins",
              color: "gray",
            }}
          >
            Calendário da Salão
          </Title>
          <View style={{ marginTop: 20 }}>
            <Calendar
              theme={customTheme}
              markingType={"period"}
              onDayPress={handleDayPress}
              current={selectedDate}
              markedDates={{
                [selectedDate || ""]: {
                  selected: true,
                  selectedColor: "tomato",
                },
              }}
            />
          </View>
        </Card.Content>
      </Card>

      <View
        style={{
          display: "flex",
          width: "95%",
          marginTop: 20,
          alignSelf: "center",
          backgroundColor: "white",
          borderRadius: 8,
          shadowOpacity: 0.3,
        }}
      >
        <Text
          style={{
            padding: 5,
            marginTop: 20,
            textAlign: "center",
            fontFamily: "Poppins",
            color: "gray",
            fontSize: 18,
          }}
        >
          Horários Disponíveis
        </Text>

        <Picker
          selectedValue={selectTime}
          onValueChange={(itemValue, itemIndex) => setSelectTime(itemValue)}
        >
          {timeSlots.map((slot) => (
            <Picker.Item key={slot.id} label={slot.time} value={slot.time} />
          ))}
        </Picker>
      </View>

      <TouchableRipple
        style={{
          padding: 12,
          marginTop: 20,
          marginBottom: 20,

          alignSelf: "center",
          backgroundColor: "tomato",
          width: "95%",
          borderRadius: 8,
        }}
        onPress={() => {}}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontFamily: "Poppins",
            fontSize: 18,
          }}
        >
          Agendar
        </Text>
      </TouchableRipple>
    </ScrollView>
  );
}
