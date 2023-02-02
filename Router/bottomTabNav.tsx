import React from "react";
import { View, Text } from "react-native";
import HomeScreen from "../screens/HomeScreen/Index";
import CartScreen from "../screens/ShoppingCartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LoginScreen from "../screens/LoginScreen";
import {
  Ionicons,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import fashionScreen from "../screens/fashionScreen/Index";
import NotificationScreen from "../screens/NotificationScreen";
import HomeStack from "./HomeStack";
import LoginStack from "./LoginStack";
import fashionScreen from "../screens/FashionScreen";

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        inactiveTintColor: "gray",
        activeTintColor: "#000000",
      }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          right: 10,
          left: 10,
          bottom: 15,
          marginHorizontal: 5,
          height: 80,
          elevation: 5,
          borderRadius: 15,
          shadowColor: "#000000",
          shadowOpacity: 0.2,
          shadowRadius: 2,
          shadowOffset: {
            height: 0.5,
            width: 0.5,
          },
        },
      }}
    >
      <Tab.Screen
        component={HomeStack}
        name="Home"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        component={fashionScreen}
        name="fashionScreen"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={30} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        component={NotificationScreen}
        name="Messaging"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="message" size={30} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        component={CartScreen}
        name="Cart"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="shopping-cart" size={30} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        component={LoginStack}
        name="Profile"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
