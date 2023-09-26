import {
  View,
  Text,
  TextInput,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import SendIcon from "../../assets/send.png";
const CommentsScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Коментувати..."
              placeholderTextColor="#BDBDBD"
              style={styles.input}
            />
            <TouchableOpacity style={styles.sendBtn} onPress={() => {}}>
              <Image source={SendIcon} style={styles.sendIcon} />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  imageWrapper: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#f6f6f6",
    marginBottom: 8,
    overflow: "hidden",
  },
  inputWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  input: {
    position: "relative",
    width: "100%",
    height: 50,
    padding: 16,
    marginTop: "auto",
    marginBottom: "auto",
    borderRadius: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  sendBtn: {
    position: "absolute",
    right: 14,
    width: 34,
    height: 34,
  },
  sendIcon: {
    width: "100%",
    height: "100%",
  },
});
