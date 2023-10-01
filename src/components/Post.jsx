import { Image, Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Post = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <Image source={item.url} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.linkWrapper}>
        <TouchableOpacity
          style={styles.link}
          onPress={() => {
            navigation.navigate("Comments", { imageUrl: item.url });
          }}
        >
          <Feather
            name="message-circle"
            size={24}
            color="#BDBDBD"
            style={{ transform: [{ scaleX: -1 }] }}
          />
          <Text style={styles.comments}>{item.comments}</Text>
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

export default Post;

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
    color: "#BDBDBD",
  },
  description: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
    textDecorationLine: "underline",
  },
});
