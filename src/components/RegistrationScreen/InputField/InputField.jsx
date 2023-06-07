import React, { useState } from "react";
import { TextInput } from "react-native";
import styles from "./InputFieldStyled";

const InputField = ({ placeholder }) => {
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
    />
  );
};

export default InputField;
