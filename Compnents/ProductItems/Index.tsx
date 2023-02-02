import {
  useFonts,
  Cairo_200ExtraLight,
  Cairo_300Light,
  Cairo_400Regular,
  Cairo_600SemiBold,
  Cairo_700Bold,
  Cairo_900Black,
} from "@expo-google-fonts/cairo";

import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}

const ProductItem = ({ item }: ProductItemProps) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("ProductDetails", { id: item.id });
  };

  let [fontsLoaded] = useFonts({
    Cairo_200ExtraLight,
    Cairo_300Light,
    Cairo_400Regular,
    Cairo_600SemiBold,
    Cairo_700Bold,
    Cairo_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Pressable onPress={onPress} style={styles.root}>
        <View style={styles.rightContainer}>
          <Text
            style={(styles.title, { fontFamily: "Cairo_300Light" })}
            numberOfLines={3}
          >
            {item.title}
          </Text>

          <View style={styles.ratingsContainer}>
            {[0, 0, 0, 0, 0].map((el, i) => (
              <FontAwesome
                style={styles.star}
                name={i < item.avgRating ? "star" : "star-o"}
                size={18}
                color="#e47911"
              />
            ))}
            <Text style={{ fontFamily: "Cairo_300Light" }}>{item.ratings}</Text>
          </View>
          <Text style={(styles.price, { fontFamily: "Cairo_400Regular" })}>
            LYD {item.price} من{" "}
          </Text>
          {item.oldPrice && (
            <Text style={styles.oldPrice}>LYD{item.oldPrice}</Text>
          )}
        </View>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
      </Pressable>
    );
  }
};

export default ProductItem;
