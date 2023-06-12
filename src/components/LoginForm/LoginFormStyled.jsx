import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    color: "#212121",
    fontSize: 30,
    lineHeight: 35,
    fontWeight: 500,
    textAlign: "center",
    marginBottom: 32,
  },
  wrapper: {
    position: "relative",
    flex: 1,
    left: 0,
    top: 263,
    minHeight: 380,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 32,
    paddingRight: 16,
    paddingLeft: 16,
  },
  passwordText: {
    position: "absolute",
    left: 300,
    top: 306,
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
