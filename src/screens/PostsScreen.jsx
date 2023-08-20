import React from "react";
import userImage from "../images/userImage.png";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import Post from "../components/Post";
import posts from "../shared/postsData.js";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userWrapper}>
        <Image source={userImage} style={styles.userImage} />
        <View>
          <Text style={styles.userName}>Kim Nataliya</Text>
          <Text style={styles.userEmail}>kim@gmail.com</Text>
        </View>
      </View>
      <FlatList
        style={styles.postsList}
        showsVerticalScrollIndicator={false}
        data={posts}
        renderItem={({ item }) => <Post item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  userWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
    gap: 8,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "teal",
  },
  userName: {
    fontWeight: "700",
    color: "#212121",
    fontSize: 13,
    lineHeight: 15,
  },
  userEmail: {
    fontWeight: "400",
    color: "#212121CC",
    fontSize: 11,
    lineHeight: 13,
  },
});
