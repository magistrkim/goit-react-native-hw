import { useState } from "react";
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import userImage from "../images/userImage.png";
import InputField from "./InputField";
import Button from "./Button";

const RegistrationForm = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [hidePassword, setHidePassword] = useState(true);
  const [loginText, setLoginText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [errors, setErrors] = useState({
    loginText: false,
    emailText: false,
    passwordText: false,
  });
  const navigation = useNavigation();

  const submitData = {
    loginText,
    emailText,
    passwordText,
  };
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = () => {
    if (!loginText) {
      setErrors((prevState) => ({ ...prevState, loginText: true }));
      return;
    } else if (!emailText) {
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

    setLoginText("");
    setEmailText("");
    setPasswordText("");

    navigation.navigate("BottomTabNavigation");
  };

  const handlePasswordFocus = () => {
    setHidePassword(true);
  };

  const onPressLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <Image /*source={userImage}*/ style={styles.placeholderImage} />
        <TouchableOpacity style={styles.addImageBtn}>
          <AntDesign size={25} color="#FF6C00" name="pluscircleo" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Реєстрація</Text>
      {errors.loginText && (
        <Text style={styles.errorMessage}>Login is a required field</Text>
      )}
      <InputField
        placeholder="Логін"
        value={loginText}
        onChangeText={(text) => {
          setLoginText(text);
          setErrors((prevState) => ({ ...prevState, loginText: false }));
        }}
        onBlur={() => {
          setFocusedInput(null);
        }}
      />
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
        <Button onPress={handleSubmit} title="Зареєструватися" />
        <TouchableOpacity onPress={onPressLogin}>
          <Text style={styles.text}>Вже є акаунт? Увійти</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    paddingHorizontal: 16,
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
    color: "#FF6C00",
    marginBottom: 4,
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
