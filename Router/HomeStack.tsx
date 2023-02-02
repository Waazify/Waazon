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
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import HomeScreen from "../screens/HomeScreen/Index";
import BottomTabNav from "./bottomTabNav";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ProductScreen from "../screens/ProductScreen/Index";
import { FontAwesome } from "@expo/vector-icons";
import fashionScreen from "../screens/FashionScreen";
import { Header } from "react-native-elements";

const Stack = createStackNavigator();

interface HeaderComponentProps {
  searchValue: string;
  setSearchValue: () => void;
}

const HeaderComponent = ({
  searchValue,
  setSearchValue,
}: HeaderComponentProps) => {
  let [fontsLoaded] = useFonts({
    Cairo_200ExtraLight,
    Cairo_300Light,
    Cairo_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            margin: 10,
            padding: 5,
            backgroundColor: "white",
            height: 40,
            marginTop: 50,
            alignItems: "center",
            borderRadius: 40,
            borderWidth: 2,
            borderColor: "#000000",
          }}
        >
          <TouchableOpacity
            style={{
              width: "9%",
              height: "100%",
              alignSelf: "flex-start",
              backgroundColor: "#000000",
              alignContent: "center",
              alignItems: "center",
              borderRadius: 40,
            }}
            onPress={() => console.log("Search")}
          >
            <FontAwesome name="search" size={24} color="white" />
          </TouchableOpacity>
          <TextInput
            style={{
              height: 30,
              width: "90%",
              backgroundColor: "white",
              marginRight: 5,
              fontFamily: "Cairo_300Light",
            }}
            placeholder="بحث في مرحبا"
            value={searchValue}
            onChangeText={setSearchValue}
          />
        </View>
      </View>
    );
  }
};

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Login" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <HeaderComponent
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ),
      }}
    >
      <Stack.Screen name="HomeScreen" options={{ title: "Home" }}>
        {() => <HomeScreen searchValue={searchValue} />}
      </Stack.Screen>
      <Stack.Screen
        component={ProductScreen}
        name="ProductDetails"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
