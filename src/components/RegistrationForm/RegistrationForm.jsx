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
  const [loginError, setLoginError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = () => {
    if (!loginText) {
      setLoginError(true);
      return;
    } else if (!emailText) {
      setEmailError(true);
      return;
    } else if (!passwordText) {
      setPasswordError(true);
      return;
    }

    setLoginText("");
    setEmailText("");
    setPasswordText("");
    setLoginError(false);
    setEmailError(false);
    setPasswordError(false);
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
      {loginError && (
        <Text style={styles.errorMessage}>Login is a required field</Text>
      )}
      <InputField
        placeholder="Логін"
        value={loginText}
        onChangeText={setLoginText}
      />
      {emailError && (
        <Text style={styles.errorMessage}>Email is a required field</Text>
      )}
      <InputField
        placeholder="Адреса електронної пошти"
        value={emailText}
        onChangeText={setEmailText}
      />
      {passwordError && (
        <Text style={styles.errorMessage}>Password is a required field</Text>
      )}

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

      <Button onPress={handleSubmit} title="Зареєструватися" />

      <Text style={styles.text}>Вже є акаунт? Увійти</Text>
    </View>
  );
};

export default RegistrationForm;
