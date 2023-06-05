import React, { useEffect, useContext } from "react";
import { Image, TextInput, TouchableOpacity, Text, View, Keyboard } from "react-native";
import userImage from "../../../images/userImage.png";
import styles from "./RegistrationFormStyled";

// Create a new context
const KeyboardContext = React.createContext();

const RegistrationForm = () => {
  const { keyboardDidShow, keyboardDidHide } = useContext(KeyboardContext);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", keyboardDidShow);
    const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", keyboardDidHide);

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [keyboardDidShow, keyboardDidHide]);

  return (
    <View style={styles.wrapper}>
      <Image source={userImage} style={styles.userImage} />
      <Text style={styles.title}>Реєстрація</Text>
      <TextInput placeholder="Логін" style={styles.input} />
      <TextInput placeholder="Адреса електронної пошти" style={styles.input} />
      <TextInput placeholder="Пароль" style={styles.input} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("Register Button pressed")}
      >
        <Text style={styles.buttonText}>Зареєструватися</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Вже є акаунт? Увійти</Text>
    </View>
  );
};

export default RegistrationForm;
