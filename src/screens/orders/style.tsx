import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    con1: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: Dimensions.get("window").width * 0.15,
      paddingTop: Dimensions.get("window").height * 0.05,
      borderBottomColor: "#CED7DF",
      borderBottomWidth: 1.75,
    },
    con1Text: {
      color: "#A5A7B9",
      fontSize: 15,
    },
    topbtn: {
      paddingBottom: 12,
      paddingHorizontal: 35,
    },
  });