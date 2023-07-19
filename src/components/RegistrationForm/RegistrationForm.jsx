import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import switchOffImage from "../../../src/images/add.png";
import switchOnImage from "../../../src/images/addOrange.png";
import userImage from "../../../src/images/userImage.png";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";

const RegistrationForm = () => {
  const [isReg, setIsReg] = useState(false);
  const [isSwitchOff, setIsSwitchOff] = useState(false);
  const toggleSwitch = () => setIsReg((previousState) => !previousState);

  const [hidePassword, setHidePassword] = useState(true);
  const [loginText, setLoginText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [validation, setValidation] = useState({
    login: { error: false, errorMessage: "" },
    email: { error: false, errorMessage: "" },
    password: { error: false, errorMessage: "" },
  });

  const handleValidation = () => {
    const newValidation = {
      login: {
        error: !loginText.trim(),
        errorMessage: "Login is a required field",
      },
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

    setLoginText("");
    setEmailText("");
    setPasswordText("");
  };

  const handlePasswordFocus = () => {
    setHidePassword(true);
  };

  return (
    <View style={styles.wrapper}>
      {isReg ? (
        <Image source={userImage} style={styles.userImage} />
      ) : (
        <View style={styles.placeholderImage} />
      )}

      <TouchableOpacity style={styles.switch} onPress={toggleSwitch}>
        <Image
          source={isSwitchOff ? switchOffImage : switchOnImage}
          style={styles.switchImage}
        />
      </TouchableOpacity>

      <Text style={styles.title}>Реєстрація</Text>

      {Object.values(validation).some((field) => field.error) && (
        <Text style={styles.errorMessage}>
          All fields are required to be filled
        </Text>
      )}

      <InputField
        placeholder="Логін"
        value={loginText}
        onChangeText={setLoginText}
      />

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
      </View>

      <Button onPress={handleValidation} title="Зареєструватися" />

      <Text style={styles.text}>Вже є акаунт? Увійти</Text>
    </View>
  );
};

export default RegistrationForm;

const styles = StyleSheet.create({
  userImage: {
    position: "relative",
    left: 140,
    top: -60,
    position: "absolute",
    width: 120,
    height: 120,
  },
  placeholderImage: {
    position: "relative",
    left: 140,
    top: -60,
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  switch: {
    position: "absolute",
    left: 248,
    top: 18,
  },
  image: {
    height: 30,
    width: 30,
  },
  title: {
    color: "#212121",
    fontSize: 30,
    lineHeight: 35,
    fontWeight: 500,
    textAlign: "center",
    marginBottom: 28,
  },
  wrapper: {
    position: "relative",
    flex: 1,
    left: 0,
    top: 200,
    minHeight: 480,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingRight: 16,
    paddingLeft: 16,
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
  errorMessage: {
    position: "absolute",
    color: "red",
    left: 20,
    top: 136,
  },
  passwordText: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
    right: 32,
  },
  showText: {
    position: "absolute",
    color: "#1B4371",
    right: -20,
    top: -50,
  },
});
