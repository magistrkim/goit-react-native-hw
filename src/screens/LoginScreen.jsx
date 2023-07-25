import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
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
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.screenWrapper}
      >
        <LoginForm />
      </KeyboardAvoidingView>
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
