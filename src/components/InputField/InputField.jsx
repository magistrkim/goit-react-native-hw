import React, { useState } from "react";
import { TextInput } from "react-native";
import styles from "./InputFieldStyled";

const InputField = ({ secureTextEntry, placeholder, value, onChangeText }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const inputStyles = [styles.input, isFocused && styles.inputFocused];

  return (
    <TextInput
      style={inputStyles}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}   
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default InputField;
