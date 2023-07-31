import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import bcgImage from "../images/photoBground.jpg";
import LoginForm from "../components/LoginForm";

const LoginScreen = () => {
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
          keyboardVerticalOffset={-120}
        >
          <LoginForm />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default LoginScreen;

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
