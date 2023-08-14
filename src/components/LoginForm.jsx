import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import InputField from "./InputField";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";

const LoginForm = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [errors, setErrors] = useState({
    emailText: false,
    passwordText: false,
  });
  const navigation = useNavigation();

  const submitData = {
    emailText,
    passwordText,
  };
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = () => {
    if (!emailText) {
      setErrors((prevState) => ({ ...prevState, emailText: true }));
      return;
    } else if (!emailRegex.test(emailText)) {
      setErrors((prevState) => ({ ...prevState, emailText: true }));
      return;
    } else if (!passwordText) {
      setErrors((prevState) => ({ ...prevState, passwordText: true }));
      return;
    }
    console.log(submitData);

    setEmailText("");
    setPasswordText("");

    navigation.navigate("BottomTabNavigation");
  };

  const handlePasswordFocus = () => {
    setHidePassword(true);
  };

  const onPressRegistration = () => {
    navigation.navigate("Registration");
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Увійти</Text>
      {errors.emailText && (
        <Text style={styles.errorMessage}>Please enter the correct email</Text>
      )}
      <InputField
        placeholder="Адреса електронної пошти"
        value={emailText}
        onChangeText={(text) => {
          setEmailText(text);
          setErrors((prevState) => ({ ...prevState, emailText: false }));
        }}
        onBlur={() => {
          setFocusedInput(null);
        }}
      />

      {errors.passwordText && (
        <Text style={styles.errorMessage}>Password is a required field</Text>
      )}
      <View style={styles.inputWrapper}>
        <InputField
          secureTextEntry={hidePassword}
          placeholder="Пароль"
          value={passwordText}
          onChangeText={(text) => {
            setPasswordText(text);
            setErrors((prevState) => ({ ...prevState, passwordText: false }));
          }}
          onFocus={handlePasswordFocus}
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
            Немає акаунту? <Text style={styles.textLink}>Зареєструватися</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
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
    paddingHorizontal: 16,
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
    color: "#FF6C00",
    marginBottom: 4,
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
