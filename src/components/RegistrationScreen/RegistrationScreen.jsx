import React from "react";
import { ImageBackground, View, KeyboardAvoidingView } from "react-native";
import bcgImage from "../../images/photoBground.jpg";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import styles from "./RegistrationScreenStyled";

const RegistrationScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ImageBackground
        source={bcgImage}
        style={styles.image}
        resizeMode="cover"
      >
        <RegistrationForm />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default RegistrationScreen;
