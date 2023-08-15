import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const MapsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MapsScreen</Text>
    </View>
  );
};

export default MapsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
});