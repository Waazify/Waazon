import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
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

import ProductItem from "../../Compnents/ProductItems/Index";
import products from "../../data/products";
import Category from "../../Compnents/Category";
import MenuImageCarousel from "../../Compnents/MenuImageCarousel";
import productImages from "../../data/menuImages";
import catergories from "../../data/catergories";

const HomeScreen = ({ searchValue }: { searchValue: string }) => {
  console.log(searchValue);
  let [fontsLoaded] = useFonts({
    Cairo_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View>
        <ScrollView>
          <MenuImageCarousel images={productImages.images} />
          <View>
            <View style={{ marginTop: 10 }}>
              <ScrollView>
                <FlatList
                  data={catergories}
                  renderItem={({ item }) => <Category item={item} />}
                  keyExtractor={({ id }) => id}
                  horizontal
                  inverted={-1}
                  showsHorizontalScrollIndicator={false}
                  style={{
                    height: 200,
                  }}
                />
              </ScrollView>
              <Text
                style={{
                  fontSize: 20,
                  marginRight: 10,
                  color: "black",
                  fontFamily: "Cairo_700Bold",
                  alignSelf: "flex-end",
                }}
              >
                مُقترحة لك
              </Text>
            </View>
            <View style={styles.page}>
              <FlatList
                data={products}
                renderItem={({ item }) => <ProductItem item={item} />}
                keyExtractor={({ id }) => id}
              />
              <View style={{ height: 100 }}></View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default HomeScreen;
