import React from "react";
import { ImageBackground, KeyboardAvoidingView } from "react-native";
import bcgImage from "../../images/photoBground.jpg";
import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./LoginScreenStyled";

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ImageBackground
        source={bcgImage}
        style={styles.image}
        resizeMode="cover"
      >
        <LoginForm />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
