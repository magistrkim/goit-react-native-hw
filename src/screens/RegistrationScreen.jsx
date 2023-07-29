import React from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import bcgImage from "../images/photoBground.jpg";
import RegistrationForm from "../components/RegistrationForm";

const RegistrationScreen = () => {
  return (
    <ImageBackground
      source={bcgImage}
      style={styles.container}
      resizeMode="cover"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.screenWrapper}
          keyboardVerticalOffset={-200}
        >
          <RegistrationForm />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenWrapper: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
  },
});
