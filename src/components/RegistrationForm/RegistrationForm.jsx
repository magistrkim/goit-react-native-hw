import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import switchOffImage from "../../../src/images/add.png";
import switchOnImage from "../../../src/images/addOrange.png";
import userImage from "../../../src/images/userImage.png";
import styles from "./RegistrationFormStyled";
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

      <Button onPress={handleValidation} title="Зареєструватися" />

      <Text style={styles.text}>Вже є акаунт? Увійти</Text>
    </View>
  );
};

export default RegistrationForm;
