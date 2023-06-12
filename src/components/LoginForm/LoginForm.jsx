import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./LoginFormStyled";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";

const LoginForm = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [validation, setValidation] = useState({
    login: { error: false, errorMessage: "" },
    email: { error: false, errorMessage: "" },
    password: { error: false, errorMessage: "" },
  });

  const handleValidation = () => {
    const newValidation = {
      email: {
        error: !emailText.trim(),
        errorMessage: "Email is a required field",
      },
      password: {
        error: !passwordText.trim(),
        errorMessage: "Password is a required field",
      },
    };
    setValidation(newValidation);

    if (Object.values(newValidation).some((input) => input.error)) {
      return;
    }

    setEmailText("");
    setPasswordText("");
  };

  const handlePasswordFocus = () => {
    setHidePassword(true);
  };

  const onPressRegistration = () => {
    navigation.navigate("RegistrationScreen"); 
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Увійти</Text>
      {Object.values(validation).some((field) => field.error) && (
        <Text style={styles.errorMessage}>
          All fields are required to be filled
        </Text>
      )}
      <InputField
        placeholder="Адреса електронної пошти"
        value={emailText}
        onChangeText={setEmailText}
      />

      <InputField
        secureTextEntry={hidePassword}
        placeholder="Пароль"
        value={passwordText}
        onChangeText={setPasswordText}
        onFocus={handlePasswordFocus}
      />

      <TouchableOpacity
        style={styles.passwordText}
        onPress={() => {
          setHidePassword(!hidePassword);
        }}
      >
        <Text>{hidePassword ? "Показати" : "Приховати"}</Text>
      </TouchableOpacity>

      <Button onPress={handleValidation} title="Увійти" />

      <TouchableOpacity onPress={onPressRegistration}>
        <Text style={styles.text}>Немає акаунту? <Text style={styles.textLink}>Зареєструватися</Text></Text>
        
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;
