import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const LogoutButton = ({ style = {} }) => {
  const navigation = useNavigation();
  const onPressLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <TouchableOpacity style={[styles.logoutBtn, style]} onPress={onPressLogin}>
      <MaterialIcons name="logout" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
};

export default LogoutButton;

const styles = StyleSheet.create({
  logoutBtn: {
    marginRight: 16,
  },
});
