import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  userImage: {
    position: "relative",
    left: 140,
    top: -60,
    position: "absolute",
    width: 120,
    height: 120,
  },
  placeholderImage: {
    position: "relative",
    left: 140,
    top: -60,
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  switch: {
    position: "absolute",
    left: 248,
    top: 18,
  },
  image: {
    height: 30,
    width: 30,
  },
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
    minHeight: 480,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
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
