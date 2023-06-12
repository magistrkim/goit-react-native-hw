import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    position: "relative",
    height: 50,
    marginBottom: 16,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  inputFocused: {
    borderColor: "#FF6C00", 
  },
  text: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: 400,
    textAlign: "center",
    marginBottom: 32,
    marginTop: 16,
  },
});

export default styles;
