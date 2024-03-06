import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    con1: {
      alignItems:"center",
      paddingHorizontal: Dimensions.get("window").width * 0.15,
      paddingTop: Dimensions.get("window").height * 0.05,
      borderBottomColor: "#CED7DF",
      borderBottomWidth: 1.75,
      paddingBottom:20
    },
    con1Text: {
      color: "#A5A7B9",
      fontSize: 15,
    },
    topbtn: {
      paddingBottom: 12,
      paddingHorizontal: 35,
    },
    segmentedControl: {
      height: 40,
      width: '80%',
      borderRadius: 5,
    },
    segmentedTab: {
      backgroundColor: 'white',
      borderColor: 'gray',
    },
    activeSegmentedTab: {
      backgroundColor: '#FF7622',
    },
    segmentedText: {
      color: 'gray',
    },
    activeSegmentedText: {
      color: 'white',
    },
  });