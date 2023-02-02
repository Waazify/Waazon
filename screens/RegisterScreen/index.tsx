import React, { useLayoutEffect } from "react";
import {
  KeyboardAvoidingView,
  Text,
  Image,
  Pressable,
  View,
  Button,
  StyleSheet,
} from "react-native";
import { Header } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import styles from "../ProfileScreen/styles";
import { StatusBar } from "expo-status-bar";
import { Input } from "react-native-elements/dist/input/Input";
import { useState } from "react";
import { ScrollView } from "react-native";
import { auth } from "../../firebase";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL:
            imageUrl ||
            "https://media.discordapp.net/attachments/786125307638841345/889225352084348968/anonymous-sec-whistleblower.png?width=645&height=671",
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        backgroundColor={"#ff4500"}
        statusBarProps={{ barStyle: "light-content" }}
        barStyle="light-content"
        rightComponent={
          <Pressable onPress={navigation.goBack}>
            <AntDesign name="right" size={24} color={"white"} />
          </Pressable>
        }
      />
      <View style={style.root}>
        <StatusBar style="light" />
        <View style={style.header}>
          <Image
            style={{ height: 90, width: 230, margin: 30 }}
            source={{
              uri: "https://media.discordapp.net/attachments/786125307638841345/888466486333689926/marhba_white.png",
            }}
          />
        </View>
        <View style={style.footer}>
          <ScrollView>
            <View style={style.inputContainer}>
              <Input
                placeholder="Name"
                autoFocus
                value={name}
                type="text"
                onChangeText={(text) => setName(text)}
              />
              <Input
                placeholder="Email"
                type="email"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <Input
                placeholder="Password"
                type="password"
                value={password}
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
              />
              <Input
                placeholder="Profile Picture Url (optional)"
                type="text"
                value={imageUrl}
                onChangeText={(text) => setImageUrl(text)}
                onSubmitEdit={register}
              />
              <View style={style.button}>
                <Button color="#ff4500" onPress={register} title="Register" />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#ff4500",
  },
  inputContainer: {
    width: 300,
    alignSelf: "center",
  },
  button: {
    width: 200,
    alignSelf: "center",
  },

  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});

export default RegisterScreen;
