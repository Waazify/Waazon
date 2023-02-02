import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    elevation: 10,
  },

  title: {
    color: "black",
    margin: 5,
    fontSize: 25,
  },

  titleContainer: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
  },

  price: {
    fontSize: 18,
    fontWeight: "bold",
  },

  oldPrice: {
    fontSize: 15,
    fontWeight: "normal",
    textDecorationLine: "line-through",
  },

  description: {
    margin: 10,
    lineHeight: 20,
    color: "black",
  },

  ratings: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },

  optionsContainer: {
    borderTopColor: "black",
    borderBottomColor: "black",
    backgroundColor: "lightgray",
    width: 150,
    height: 50,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },

  button: {
    width: "49%",
  },
});

export default styles;
