import React from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import bcgImage from "../../images/photoBground.jpg";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const RegistrationScreen = () => {
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
        <RegistrationForm />
      </KeyboardAvoidingView>
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

// import React from "react";
// import {
//   ImageBackground,
//   KeyboardAvoidingView,
//   StyleSheet,
// } from "react-native";
// import bcgImage from "../../images/photoBground.jpg";
// import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

// const RegistrationScreen = () => {
//   return (
//     <KeyboardAvoidingView style={styles.container} behavior="padding">
//       <ImageBackground
//         source={bcgImage}
//         style={styles.image}
//         resizeMode="cover"
//       >
//         <RegistrationForm />
//       </ImageBackground>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     justifyContent: "center",
//   },
// });

// export default RegistrationScreen;
