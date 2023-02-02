import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    borderRadius: 5,
    shadowOpacity: 0.08,
    elevation: 5,
    height: 180,
    width: 135,
    backgroundColor: "white",
    alignItems: "center",
  },
  image: {
    height: 135,
    width: 135,
    alignSelf: "auto",
    position: "absolute",
    bottom: 0,
    borderRadius: 5,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
  topContainer: {
    flexDirection: "column",
    alignSelf: "flex-end",
    marginRight: 5,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    alignSelf: "flex-end",
  },
});

export default styles;
