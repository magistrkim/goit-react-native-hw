import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import CreatePostsScreen from "./src/screens/CreatePostsScreen";
import CommentsScreen from "./src/screens/CommentsScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import PostsScreen from "./src/screens/PostsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import MapsScreen from "./src/screens/MapsScreen";

const MainStack = createStackNavigator();
export default function App() {
  const [loaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });
  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Home" component={PostsScreen} />
        {/* <CreatePostsScreen />
        <CommentsScreen />
        <ProfileScreen />
        <MapsScreen />
        <HomeScreen /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
