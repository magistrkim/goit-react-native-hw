import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native-gesture-handler";
import LogoutButton from "../components/LogoutButton";
import PostsScreen from "../screens/PostsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CreatePostsScreen from "../screens/CreatePostsScreen";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Tabs = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const navigation = useNavigation();
  return (
    <Tabs.Navigator
      initialRouteName="PostsScreen"
      screenOptions={{
        headerTitleAlign: "center",
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 84,
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 10,
          paddingHorizontal: 60,
          },
        tabBarBadgeStyle: { height: 100},
        tabBarActiveTintColor: "#FFFFFF",
        tabBarItemStyle: { ...styles.btnWrapper },
        tabBarActiveBackgroundColor: "#FF6C00",
      }}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerShown: true,
          headerRight: () => <LogoutButton />,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="grid-view" size={size} color={color} />
          ),
          headerTitleStyle: {
            fontWeight: "medium",
            fontSize: 17,
            color: "#212121",
          },
        }}
      />
      <Tabs.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          tabBarStyle: { display: "none" },
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <AntDesign name="plus" size={18} color={color} />
          ),
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{ marginLeft: 16 }}
                onPress={() => {
                  navigation.navigate("Posts");
                }}
              >
                <Feather
                  name="arrow-left"
                  size={24}
                  color={`rgba(33, 33, 33, 0.8)`}
                />
              </TouchableOpacity>
            );
          },
          headerTitleStyle: {
            fontWeight: "medium",
            fontSize: 17,
            color: "#212121",
          },
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabNavigation;

const styles = {
  btnWrapper: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginHorizontal: 9,
    alignItems: "center",
  },
};
