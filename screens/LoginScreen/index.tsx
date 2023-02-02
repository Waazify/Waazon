import React, { useEffect } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Input } from "react-native-elements/dist/input/Input";
import { useState } from "react";
import { Header } from "react-native-elements";
import Button from "../../Compnents/Button";
import { auth } from "../../firebase";
import { TouchableOpacity } from "react-native-gesture-handler";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        navigation.replace("Profile");
      }
    });

    return unsubscribe;
  }, []);

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error));
  };

  return (
    <View style={styles.Container}>
      <View style={styles.header}>
        <Image
          style={{
            height: 90,
            width: 230,
            marginTop: 20,
            alignSelf: "center",
          }}
          source={{
            uri: "https://media.discordapp.net/attachments/786125307638841345/888466486333689926/marhba_white.png",
          }}
        />
      </View>

      <View style={styles.footer}>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 50,
              alignSelf: "center",
            }}
          >
            Sign In
          </Text>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.inputContainer}
            />
            <Input
              placeholder="Password"
              secureTextEntry
              type="password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={styles.inputContainer}
            />
          </View>
          <View style={{ width: 200, margin: 10, alignSelf: "center" }}>
            <Button
              text="Login"
              onPress={signIn}
              containerStyles={{ backgroundColor: "#ff4500" }}
            />
          </View>
          <View style={{ width: 200, margin: 10, alignSelf: "center" }}>
            <Button
              text="Register"
              onPress={() => navigation.navigate("Register")}
              containerStyles={{
                backgroundColor: "#ffae00",
              }}
            />
          </View>
          <View style={{ height: 500 }} />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#ff4500",
  },

  inputContainer: {
    width: 300,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  Button: { marginTop: 10, width: 200 },

  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },

  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

{
  /*        <Header
          backgroundColor={"#ff4500"}
          statusBarProps={{ barStyle: "light-content" }}
          barStyle="light-content"
          centerComponent={
            <Image
              style={{ height: 45, width: 115 }}
              source={{
                uri: "https://media.discordapp.net/attachments/786125307638841345/888466486333689926/marhba_white.png",
              }}
            />
          }
        /> */
}
