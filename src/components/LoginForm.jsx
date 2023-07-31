import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import InputField from "./InputField";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";

const LoginForm = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [validation, setValidation] = useState({
    email: { error: false, errorMessage: "" },
    password: { error: false, errorMessage: "" },
  });
  const navigation = useNavigation();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleEmailChange = (text) => {
    setEmailText(text);
    setValidation((prevState) => ({
      ...prevState,
      email: {
        ...prevState.email,
        error: !text.trim() || !emailRegex.test(text),
        errorMessage: !text.trim()
          ? "Please enter a valid email address"
          : !emailRegex.test(text)
          ? "Email is not valid"
          : "",
      },
    }));
  };

  const handlePasswordChange = (text) => {
    setPasswordText(text);
    setValidation((prevState) => ({
      ...prevState,
      password: {
        ...prevState.password,
        error: false,
        errorMessage: "",
      },
    }));
  };
  const handleSubmit = () => {
    const newValidation = {
      email: {
        error: !emailText.trim() || !emailRegex.test(emailText),
        errorMessage: !emailText.trim()
          ? "Please enter a valid email address"
          : !emailRegex.test(emailText)
          ? "Email is not valid"
          : "",
      },
      password: {
        error: !passwordText.trim(),
        errorMessage: !passwordText.trim()
          ? "Password is a required field"
          : "",
      },
    };
    setValidation(newValidation);

    if (Object.values(newValidation).some((input) => input.error)) {
      return;
    }

    const submitData = {
      emailText,
      passwordText,
    };
    console.log(submitData);

    setEmailText("");
    setPasswordText("");

    navigation.navigate("Home");
  };

  const handlePasswordFocus = () => {
    setHidePassword(true);
  };

  const onPressRegistration = () => {
    navigation.navigate("Registration");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          onChangeText={handleEmailChange}
          errorMessage={
            validation.email.error ? validation.email.errorMessage : ""
          }
        />

        <View style={styles.inputWrapper}>
          <InputField
            secureTextEntry={hidePassword}
            placeholder="Пароль"
            value={passwordText}
            onChangeText={handlePasswordChange}
            onFocus={handlePasswordFocus}
            errorMessage={
              validation.password.error ? validation.password.errorMessage : ""
            }
          />

          <TouchableOpacity
            style={styles.passwordText}
            onPress={() => {
              setHidePassword(!hidePassword);
            }}
          >
            <Text style={styles.showText}>
              {hidePassword ? "Показати" : "Приховати"}
            </Text>
          </TouchableOpacity>
          <Button onPress={handleSubmit} title="Увійти" />

          <TouchableOpacity onPress={onPressRegistration}>
            <Text style={styles.text}>
              Немає акаунту?{" "}
              <Text style={styles.textLink}>Зареєструватися</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 32,
    paddingBottom: 144,
    paddingRight: 16,
    paddingLeft: 16,
  },
  title: {
    color: "#212121",
    fontSize: 30,
    lineHeight: 35,
    fontWeight: 500,
    textAlign: "center",
    marginBottom: 32,
  },
  errorMessage: {
    position: "absolute",
    color: "red",
    left: 40,
    top: 76,
  },
  inputWrapper: {
    width: "100%",
  },
  text: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: 400,
    textAlign: "center",
    marginBottom: 32,
    marginTop: 16,
  },
  textLink: {
    textDecorationLine: "underline",
  },
  passwordText: {
    position: "absolute",
    right: 16,
    top: 14,
  },
  showText: {
    color: "#1B4371",
  },
});
