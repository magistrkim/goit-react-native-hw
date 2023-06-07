import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import switchOffImage from "../../../images/add.png";
import switchOnImage from "../../../images/addOrange.png";
import userImage from "../../../images/userImage.png";
import styles from "./RegistrationFormStyled";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";

const RegistrationForm = () => {
  const [isReg, setIsReg] = useState(false);
  const [isSwitchOff, setIsSwitchOff] = useState(false);
  const toggleSwitch = () => setIsReg((previousState) => !previousState);

  return (
    <View style={styles.wrapper}>
      {isReg ? (
        <Image source={userImage} style={styles.userImage} />
      ) : (
        <View style={styles.placeholderImage} />
      )}

      <TouchableOpacity style={styles.switch} onPress={toggleSwitch}>
        <Image
          source={isSwitchOff ? switchOffImage : switchOnImage}
          style={styles.switchImage}
        />
      </TouchableOpacity>

      <Text style={styles.title}>Реєстрація</Text>
      <InputField placeholder="Логін" />
      <InputField placeholder="Адреса електронної пошти" />
      <InputField placeholder="Пароль" />
      <TouchableOpacity style={styles.passwordText}>
        <Text>Показати</Text>
      </TouchableOpacity>
      <Button
        onPress={() => Alert.alert("Register Button pressed")}
        title="Зареєструватися"
      />
      <Text style={styles.text}>Вже є акаунт? Увійти</Text>
    </View>
  );
};

export default RegistrationForm;
