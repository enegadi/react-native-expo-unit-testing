import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomTextInput from "./components/CustomTextInput";
import React from "react";

export default function App() {
  const [name, setName] = React.useState<string>("");

  return (
    <View style={styles.container}>
      <Text>Hello {name}</Text>
      <StatusBar style="auto" />
      <CustomTextInput
        placeholder="Enter name"
        onChangeText={(text: string) => setName(text)}
        value={name}
      />
      ;
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
