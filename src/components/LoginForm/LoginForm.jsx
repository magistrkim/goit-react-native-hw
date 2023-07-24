import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={styles.wrapper}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
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

        <View>
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
            <Text style={styles.showText}>
              {hidePassword ? "Показати" : "Приховати"}
            </Text>
          </TouchableOpacity>
          <Button onPress={handleValidation} title="Увійти" />

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
