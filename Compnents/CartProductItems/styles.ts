import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: 10,
    backgroundColor: "#fff",
    marginVertical: 3,
  },
  row: {
    flexDirection: "row",
  },

  image: {
    height: 150,
    flex: 2,
    resizeMode: "contain",
    marginLeft: 5,
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  ratingsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  star: {
    margin: 1,
  },
  oldPrice: {
    fontSize: 15,
    fontWeight: "normal",
    textDecorationLine: "line-through",
  },
  quantityContainer: {
    marginLeft: 20,
    marginVertical: 10,
  },
});

export default styles;
