import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    text1: {
      color: "black",
      fontSize: 20,
      paddingVertical:10
    },
    categoryView:{
      flexDirection: "row",
      justifyContent: "space-between",
      paddingTop:10,
      paddingBottom:5, 
      alignItems: "center" 
    },
    categoryText1:{ 
      color: "#32343E", 
      fontSize: 20 
    },
    categoryText2:{ 
      color: "#333333", 
      fontSize: 16 
    },
    popularFoodItem: {
      flexDirection: "column",
      marginHorizontal: 10,
      borderRadius: 15,
      padding: 6,
    },
    foodImage: {
      width: 90,
      height: 90,
      alignSelf: "center",
      borderRadius: 10,
      zIndex:5
    },
    foodDetailsContainer: {
      backgroundColor: "white",
      height:100,
      elevation: 15,
      padding: 10,
      paddingHorizontal:25,
      borderRadius: 10,
      justifyContent: 'flex-end',
      position: "relative",
      bottom:40, 
      zIndex:1
    },
    foodTitle: {
      color: "#32343E",
      fontSize: 16,
      fontWeight:"bold"
    },
    foodDescription: {
      color: "#646982",
      fontSize: 14,
    },
  });
  