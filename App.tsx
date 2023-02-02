import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Router from "./Router/index";

const App = () => {
  return <Router />;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
