import React from "react";
import { TextInput, StyleSheet } from "react-native";

interface CustomTextInputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
}

const CustomTextInput = (props: CustomTextInputProps) => {
  const { placeholder, onChangeText, value } = props;

  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "blue",
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
    color: "black",
    backgroundColor: "white",
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default CustomTextInput;
