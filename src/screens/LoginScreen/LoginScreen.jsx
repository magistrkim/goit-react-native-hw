import React from "react";
import { ImageBackground, KeyboardAvoidingView, StyleSheet } from "react-native";
import bcgImage from "../../images/photoBground.jpg";
import LoginForm from "../../components/LoginForm/LoginForm";


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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

