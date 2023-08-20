import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
// import LogoutButton from "../components/LogoutButton";
import userImage from "../images/userImage.png";
import bcgImage from "../images/photoBground.jpg";
import { AntDesign } from "@expo/vector-icons";
import ProfilePost from "../components/ProfilePost";
import posts from "../shared/postsData.js";
import { FlatList } from "react-native-gesture-handler";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const onPressLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={bcgImage}
        style={styles.container}
        resizeMode="cover"
      >
        <View style={styles.wrapper}>
          <View style={styles.imageWrapper}>
            <Image source={userImage} style={styles.placeholderImage} />
            <TouchableOpacity style={styles.addImageBtn}>
              <AntDesign
                size={25}
                color="#E8E8E8"
                name="pluscircleo"
                style={{ transform: [{ rotate: "45deg" }] }}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.logoutBtn} onPress={onPressLogin}>
            <MaterialIcons name="logout" size={24} color="#BDBDBD" />
          </TouchableOpacity>
          {/* <LogoutButton style={styles.logoutBtn} /> */}
          <Text style={styles.title}>Nataliya Kim</Text>
          <View style={styles.postsList}>
            {posts.map((item) => (
              <ProfilePost item={item} key={item.id} />
            ))}
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    paddingTop: 200,
  },
  wrapper: {
    width: "100%",
    position: "relative",
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingHorizontal: 16,
  },
  imageWrapper: {
    position: "absolute",
    transform: [{ translateY: -60 }],
    top: 0,
  },
  userImage: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  addImageBtn: {
    position: "absolute",
    width: 25,
    height: 25,
    right: 0,
    top: "60%",
    transform: [{ translateX: 12.5 }],
    borderRadius: 25,
  },
  logoutBtn: {
    position: "absolute",
    right: 14,
    top: 14,
  },
  title: {
    color: "#212121",
    fontSize: 30,
    lineHeight: 35,
    fontWeight: 500,
    textAlign: "center",
    marginBottom: 33,
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
  errorMessage: {
    color: "#FF6C00",
    marginBottom: 4,
  },
  inputWrapper: {
    width: "100%",
  },
  passwordText: {
    fontSize: 16,
    lineHeight: 19,
    right: 32,
  },
  showText: {
    position: "absolute",
    color: "#1B4371",
    right: -20,
    top: -50,
  },
  postsList: {
    flex: 1,
    width: "100%",
  },
});
