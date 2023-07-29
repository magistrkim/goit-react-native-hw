import { useState } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import userImage from "../images/userImage.png";
import InputField from "./InputField";
import Button from "./Button";

const RegistrationForm = () => {
  const [isReg, setIsReg] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [loginText, setLoginText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [validation, setValidation] = useState({
    login: { error: false, errorMessage: "" },
    email: { error: false, errorMessage: "" },
    password: { error: false, errorMessage: "" },
  });
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const handleValidation = () => {
    const newValidation = {
      login: {
        error: !loginText.trim(),
        errorMessage: "Login is a required field",
      },
      email: {
        error: !emailText.trim() || !emailRegex.test(emailText),
        errorMessage: "Please enter a valid email address",
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
    const submitData = {
      loginText,
      emailText,
      passwordText,
    };
    console.log(submitData);

    setLoginText("");
    setEmailText("");
    setPasswordText("");
  };

  const handlePasswordFocus = () => {
    setHidePassword(true);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrapper}>
        <View style={styles.imageWrapper}>
          {isReg ? (
            <Image source={userImage} style={styles.userImage} />
          ) : (
            <View style={styles.placeholderImage} />
          )}
          <TouchableOpacity style={styles.addImageBtn}>
            <AntDesign size={25} color="#FF6C00" name="pluscircleo" />
          </TouchableOpacity>
        </View>
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
        <View style={styles.inputWrapper}>
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
          <Button onPress={handleValidation} title="Зареєструватися" />
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.text}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default RegistrationForm;

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingBottom: 78,
    paddingRight: 16,
    paddingLeft: 16,
  },
  imageWrapper: {
    position: "absolute",
    transform: [{ translateY: -60 }],
    top: 0,
  },
  userImage: {
    left: 140,
    top: -150,
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  placeholderImage: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  addImageBtn: {
    position: "absolute",
    width: 25,
    height: 25,
    right: 0,
    top: "60%",
    transform: [{ translateX: 12.5 }],
    borderRadius: 25,
  },
  title: {
    color: "#212121",
    fontSize: 30,
    lineHeight: 35,
    fontWeight: 500,
    textAlign: "center",
    marginBottom: 28,
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
    left: 40,
    top: 136,
  },
  inputWrapper: {
    width: "100%",
  },
  passwordText: {
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
