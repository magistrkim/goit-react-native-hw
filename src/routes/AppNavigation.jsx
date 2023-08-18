import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "../screens/RegistrationScreen";
import LoginScreen from "../screens/LoginScreen";
import MapsScreen from "../screens/MapsScreen";
import CommentsScreen from "../screens/CommentsScreen";
import BottomTabNavigation from "./BottomTabNavigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

const MainStack = createStackNavigator();

const AppNavigation = ({ navigation }) => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false, headerTitleAlign: "center" }}
      >
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
        />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{
            headerShown: true,
            title: "Коментарі",
            headerLeft: () => {
              const navigation = useNavigation();
              return (
                <TouchableOpacity
                  style={{ marginLeft: 16 }}
                  onPress={() => {
                    navigation.navigate("BottomTabNavigation");
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
        <MainStack.Screen
          name="Maps"
          component={MapsScreen}
          options={{
            headerShown: true,
            title: "Мапи",
            headerLeft: () => {
              const navigation = useNavigation();
              return (
                <TouchableOpacity
                  style={{ marginLeft: 16 }}
                  onPress={() => {
                    navigation.navigate("BottomTabNavigation");
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
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
