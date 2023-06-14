import React from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import bcgImage from "../../images/photoBground.jpg";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default RegistrationScreen;
