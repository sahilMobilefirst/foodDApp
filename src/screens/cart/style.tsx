import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    totalCard: {
      backgroundColor: "#F0F5FA",
      borderTopEndRadius: 15,
      borderTopLeftRadius: 15,
      paddingVertical: Dimensions.get("window").height * 0.02,
      paddingHorizontal: Dimensions.get("window").width * 0.06,
    },
    cardSubContainer:{ 
        flexDirection: "row", 
        alignItems: "center" 
    },
    subtotal: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: Dimensions.get("window").height * 0.02,
      paddingTop: Dimensions.get("window").height * 0.04,
      alignItems: "center",
    },
    address: {
      marginLeft: Dimensions.get("window").width * 0.1,
      color: "#A0A5BA",
      fontSize: 18,
      paddingVertical: Dimensions.get("window").height * 0.01,
    },
  
    subtotalText: {
      color: "#A0A5BA",
      fontWeight: "400",
      fontSize: 18,
    },
   
  });
  