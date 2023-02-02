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
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

interface CategoryItemProps {
  item: {
    id: string;
    title: string;
    image: string;
  };
}

const Category = ({ item }: CategoryItemProps) => {
  let [fontsLoaded] = useFonts({
    Cairo_200ExtraLight,
    Cairo_300Light,
    Cairo_400Regular,
    Cairo_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ padding: 5 }}>
        <TouchableOpacity
          style={styles.root}
          onPress={() => console.log(item.title)}
        >
          <View style={styles.topContainer}>
            <Text
              style={
                (styles.text, { fontFamily: "Cairo_700Bold", fontSize: 13 })
              }
            >
              {item.title}
            </Text>
          </View>
          <Image
            style={styles.image}
            source={{
              uri: item.image,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
};

export default Category;
