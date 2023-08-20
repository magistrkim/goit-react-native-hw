import { Image, Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather, AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const ProfilePost = ({ item }) => {
  const [likeColor, setLikeColor] = useState("#212121");
  const navigation = useNavigation();

  const handleLikePress = () => {
    const newColor = likeColor === "#212121" ? "#FF6C00" : "#212121";
    setLikeColor(newColor);
  };

  return (
    <View style={styles.wrapper}>
      <Image source={item.url} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.linkWrapper}>
        <TouchableOpacity
          style={styles.link}
          onPress={() => {
            navigation.navigate("Comments");
          }}
        >
          <Ionicons
            name="chatbubble-sharp"
            size={24}
            color="#FF6C00"
            style={{ transform: [{ scaleX: -1 }] }}
          />
          <Text style={styles.comments}>{item.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={handleLikePress}>
          <AntDesign name="like2" size={24} color={likeColor} />
          <Text style={styles.comments}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.link}
          onPress={() => {
            navigation.navigate("Maps", {
              postLocation: item.postLocation,
              description: item.description,
            });
          }}
        >
          <Feather
            name="map-pin"
            size={22}
            color="#BDBDBD"
            style={styles.icon}
          />
          <Text style={styles.description}>{item.description}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfilePost;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    marginBottom: 35,
  },
  image: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    backgroundColor: "#f6f6f6",
    marginBottom: 8,
  },
  title: {
    marginBottom: 11,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "500",
  },
  linkWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  comments: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
    color: "#212121",
  },
  description: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
    textDecorationLine: "underline",
  },
});
