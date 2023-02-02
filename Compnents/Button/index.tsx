import {
  useFonts,
  Cairo_200ExtraLight,
  Cairo_300Light,
  Cairo_400Regular,
  Cairo_600SemiBold,
  Cairo_700Bold,
  Cairo_900Black,
} from "@expo-google-fonts/cairo";
import AppLoading from "expo-app-loading";

import React from "react";
import { Pressable, Text, StyleSheet, TouchableOpacity } from "react-native";

interface ButtonProps {
  text: string;
  onPress: () => void;
  containerStyles?: object;
}

const Button = ({ text, onPress, containerStyles }: ButtonProps) => {
  let [fontsLoaded] = useFonts({
    Cairo_200ExtraLight,
    Cairo_300Light,
    Cairo_400Regular,
    Cairo_600SemiBold,
    Cairo_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.root, containerStyles]}
      >
        <Text
          style={{
            fontFamily: "Cairo_400Regular",
            fontSize: 14,
            color: "white",
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#fc5c65",
    marginVertical: 7,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    color: "white",
  },
});

export default Button;
