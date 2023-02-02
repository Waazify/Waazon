import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: 10,
    backgroundColor: "#fff",
    marginVertical: 3,
  },
  image: {
    height: 150,
    flex: 2,
    resizeMode: "contain",
    marginRight: 5,
    borderRadius: 20,
    alignSelf: "center",
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  title: {
    fontSize: 18,
    fontFamily: "Cairo_300Light",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Cairo_300Light",
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
    fontFamily: "Cairo_300Light",
  },
});

export default styles;
