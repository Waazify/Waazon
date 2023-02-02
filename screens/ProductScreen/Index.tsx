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

import React, { useState } from "react";
import styles from "./styles";
import product from "../../data/product";
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Header, SearchBar } from "react-native-elements";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import QuantitySelector from "../../Compnents/QuantitySelector";
import Button from "../../Compnents/Button";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import ImageCarousel from "../../Compnents/ImageCarousel";

const ProductScreen = ({ navigation: { goBack }}) => {
  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[0] : null
  );
  const [quantity, setQuantity] = useState(1);
  console.log(selectedOption);

  const route = useRoute();

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
      <View>
        <Header
          backgroundColor={"#ff4500"}
          statusBarProps={{ barStyle: "light-content" }}
          barStyle="light-content" // or directly
          leftComponent={
            <Pressable>
              <Ionicons name="basket" size={30} color="white" />
            </Pressable>
          }
          centerComponent={
            <Image
              style={{ height: 45, width: 115 }}
              source={{
                uri: "https://media.discordapp.net/attachments/786125307638841345/888466486333689926/marhba_white.png",
              }}
            />
          }
          rightComponent={
            <TouchableOpacity onPress={() => { goBack() }}>
              <View style={{ marginTop: 10 }}>
                <AntDesign name="right" size={24} color={"white"} />
              </View>
            </TouchableOpacity>
          }
          containerStyle={{
            justifyContent: "space-around",
          }}
        />
        <ScrollView style={{ padding: 10 }}>
          {/*Image carousel*/}
          <ImageCarousel images={product.images} />
          <View style={styles.root}>
            {/*Title */}
            <View style={styles.titleContainer}>
              <Text
                style={
                  (styles.title,
                  { fontFamily: "Cairo_400Regular", fontSize: 18 })
                }
              >
                {product.title}
              </Text>
            </View>

            <View>
              {/*Option selector*/}
              <View
                style={{
                  height: 50,
                  borderBottomWidth: 1,
                  borderBottomColor: "lightgrey",
                }}
              >
                <Picker
                  selectedValue={selectedOption}
                  onValueChange={(itemValue) => setSelectedOption(itemValue)}
                >
                  {product.options.map((option) => (
                    <Picker.Item label={option} value={option} />
                  ))}
                </Picker>
              </View>

              {/*Price*/}
              <Text style={(styles.price, { fontFamily: "Cairo_400Regular" })}>
                from LYD{product.price}
              </Text>
              {product.oldPrice && (
                <Text style={styles.oldPrice}>LYD{product.oldPrice}</Text>
              )}

              {/*Quantity selector*/}
              <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
              {/*Button*/}
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Button
                    text={"Add to cart"}
                    onPress={() => {
                      console.log("Add to cart");
                    }}
                    containerStyles={{
                      backgroundColor: "#ffae00",
                    }}
                  />
                </View>

                <View style={styles.button}>
                  <Button
                    text={"Buy now"}
                    onPress={() => {
                      console.log("Buy Now");
                    }}
                    containerStyles={{
                      backgroundColor: "#ff4500",
                    }}
                  />
                </View>
              </View>
              {/*Description*/}
              <View>
                <Text style={{ fontFamily: "Cairo_400Regular" }}>
                  {product.description}
                </Text>
              </View>
              <View style={{ height: 200 }}></View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
};

export default ProductScreen;
