import styles from "./styles";
import React from "react";

import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import { Header } from "react-native-elements";
import { Avatar } from "react-native-elements";
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import profile from "../../data/profile";
import { auth, db } from "../../firebase";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export default function ProfileScreen({ navigation }) {
  const windowWidth = useWindowDimensions().width;

  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };
  return (
    <View>
      <ScrollView>
        <Header
          backgroundColor={"#ff4500"}
          statusBarProps={{ barStyle: "light-content" }}
          barStyle="light-content" // or directly
          leftComponent={
            <View
              style={{
                justifyContent: "flex-start",
                width: windowWidth,
                marginBottom: 20,
              }}
            >
              <Image
                source={{
                  uri: "https://media.discordapp.net/attachments/786125307638841345/888466486333689926/marhba_white.png",
                }}
                style={{ height: 40, width: 110, marginTop: 5 }}
              ></Image>
              <Text
                style={{
                  color: "white",
                  margin: 5,
                  fontSize: 25,
                  marginTop: 20,
                }}
              >
                Hello,{" "}
                <Text style={{ fontWeight: "bold" }}>
                  {auth?.currentUser?.displayName}
                </Text>
              </Text>
            </View>
          }
          rightComponent={
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
                <MaterialIcons name="logout" size={30} color="white" />
              </TouchableOpacity>
              <View style={{ marginTop: 30 }}>
                <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
              </View>
            </View>
          }
          containerStyle={{
            justifyContent: "space-around",
          }}
        />
      </ScrollView>
      <ScrollView>
        <View
          style={{
            justifyContent: "space-around",
            flexDirection: "row",
            marginHorizontal: 3,
            alignItems: "center",
          }}
        >
          <Button
            icon={
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 15 }}
              >
                My Whishlist
              </Text>
            }
            onPress={() => {
              console.log("Wishlist");
            }}
            style={{ alignSelf: "flex-start" }}
          />
          <Button
            icon={
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 15 }}
              >
                Followed Stores
              </Text>
            }
            onPress={() => {
              console.log("Followed Stores");
            }}
            style={{ alignSelf: "center" }}
          />
          <Button
            icon={
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 15 }}
              >
                Recently Viewed
              </Text>
            }
            onPress={() => {
              console.log("Recently Viewed");
            }}
            style={{ alignSelf: "flex-end" }}
          />
        </View>

        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.title}>My Orders</Text>
            <Pressable
              onPress={() => {
                console.log("gaming");
              }}
            >
              <TouchableOpacity onPress={() => console.log("view all orders")} activeOpacity={0.5}>
                <View style={{ alignSelf: "flex-end" }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: "#fc5c65",
                      margin: 5,
                      marginRight: 10,
                    }}
                  >
                    View All Orders {">>"}
                  </Text>
                </View>
              </TouchableOpacity>
            </Pressable>
          </View>

          <View style={styles.iconsContainer}>
            <View style={styles.icon}>
              <TouchableOpacity onPress={() => console.log("To Pay")}>
                <MaterialCommunityIcons
                  name="credit-card-clock-outline"
                  size={30}
                  color="black"
                />
              </TouchableOpacity>
                <Text>To Pay</Text>
            </View>

            <View style={styles.icon}>
              <TouchableOpacity onPress={()=> console.log("To Ship")}>
              <AntDesign name="book" size={30} color="black" />
              </TouchableOpacity>
              <Text>To Ship</Text>
            </View>

            <View style={styles.icon}>
              <TouchableOpacity > 
              <MaterialCommunityIcons name="truck" size={30} color="black" />
              </TouchableOpacity>
              <Text>To Recieve</Text>
            </View>
            
            <View style={styles.icon}>
              <TouchableOpacity>
              <MaterialCommunityIcons
                name="comment-processing-outline"
                size={30}
                color="black"
              />
              </TouchableOpacity>
              <Text>To Review</Text>
            </View>
          </View>
        </View>

        {/*More Services */}
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.title}>More Services</Text>
          </View>

          <View style={styles.iconsContainer}>
            <View style={styles.icon}>
              <MaterialIcons name="headset-mic" size={30} color="black" />
              <Text>Support</Text>
            </View>

            <View style={styles.icon}>
              <Pressable
                onPress={() => {
                  console.log("News Button");
                }}
              >
                <Ionicons name="newspaper-outline" size={30} color="black" />
                <Text>News</Text>
              </Pressable>
            </View>

            <View style={styles.icon}>
              <Pressable
                onPress={() => {
                  console.log("Help Button");
                }}
              >
                <Ionicons name="help-circle-outline" size={30} color="black" />
                <Text>Help</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={{ height: 300 }}></View>
      </ScrollView>
    </View>
  );
}
