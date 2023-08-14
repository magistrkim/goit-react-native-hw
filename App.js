import React from "react";
import "react-native-gesture-handler";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import AppNavigation from "./src/routes/AppNavigation";

export default function App() {
  const [loaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });
  if (!loaded) {
    return null;
  }
  return <AppNavigation />;
}
