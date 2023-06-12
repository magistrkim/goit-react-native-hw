import { Text, View, TouchableOpacity } from "react-native";
import styles from "./LoginFormStyled";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";

const LoginForm = () => {
  
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Увійти</Text>
      <InputField placeholder="Адреса електронної пошти" />
      <InputField placeholder="Пароль" />
      <TouchableOpacity style={styles.passwordText}>
        <Text>Показати</Text>
      </TouchableOpacity>
      <Button
        onPress={() => Alert.alert("Login Button pressed")}
        title="Увійти"
      />
      <Text style={styles.text}>Немає акаунту? Зареєструватися</Text>
    </View>
  );
};

export default LoginForm;
