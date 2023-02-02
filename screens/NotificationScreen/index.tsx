import React from "react";
import { View, Text } from "react-native";
import { Header } from "react-native-elements";
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

const NotificationScreen = () => {
  let [fontsLoaded] = useFonts({
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
          leftComponent={<View></View>}
          centerComponent={{
            text: "Messages",
            style: { color: "#fff", fontSize: 25, fontWeight: "bold" },
          }}
          rightComponent={<View></View>}
          containerStyle={{
            justifyContent: "space-around",
          }}
        />
        <View style={{ backgroundColor: "white", height: 1000 }}>
          <Text style={{ fontFamily: "Cairo_700Bold", fontSize: 20 }}>
            ههه Test
          </Text>
        </View>
      </View>
    );
  }
};

export default NotificationScreen;
