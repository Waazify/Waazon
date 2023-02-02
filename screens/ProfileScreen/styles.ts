import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    margin: 0,
    marginLeft: 10,
    justifyContent: "flex-start",
  },
  pfp: {
    width: 50,
    height: 50,
    borderRadius: 60,
    marginTop: 10,
  },
  container: {
    borderRadius: 10,
    backgroundColor: "#fff",
    margin: 5,
  },
  iconsContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: "25%",
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});

export default styles;
