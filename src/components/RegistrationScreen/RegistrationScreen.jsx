import React from "react";
import { ImageBackground, View, Keyboard } from "react-native";
import bcgImage from "../../images/photoBground.jpg";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import styles from "./RegistrationScreenStyled";

// Create a new context
const KeyboardContext = React.createContext();

const RegistrationScreen = () => {
  const handleKeyboardDidShow = () => {
    // Handle keyboard did show event here
    // For example, update the state to adjust the view
  };

  const handleKeyboardDidHide = () => {
    // Handle keyboard did hide event here
    // For example, reset the state to the default view
  };

  return (
    <KeyboardContext.Provider
      value={{ keyboardDidShow: handleKeyboardDidShow, keyboardDidHide: handleKeyboardDidHide }}
    >
      <View style={styles.container}>
        <ImageBackground source={bcgImage} resizeMode="cover" style={styles.image}>
          <RegistrationForm />
        </ImageBackground>
      </View>
    </KeyboardContext.Provider>
  );
};

export default RegistrationScreen;
