import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        paddingHorizontal:15,
        paddingVertical:10
    },
    RecentContainer:{
      paddingVertical:Dimensions.get("window").height * 0.01
    },
    RecentCon2:{
      paddingHorizontal:15,
      paddingVertical:10,
      borderColor:"#EDEDED",
      borderWidth:2,
      borderRadius:20,
      marginLeft:5,
      marginVertical:Dimensions.get("window").height * 0.01
    },
    RecentText1:{
      fontSize:20,
      color:"#32343E"
    },
    RecentText2:{
      color:"#181C2E",
      fontSize:16
    },
    SuggestCon: {
      flexDirection: "row",
      paddingVertical:Dimensions.get("window").height * 0.017,
      gap: 10,
      borderBottomColor: "#EBEBEB",
      borderBottomWidth: 1,
    },
    SuggestCon2:{
      flexDirection:"row",
      paddingVertical:7,

    },
    img:{
      height:Dimensions.get("window").height * 0.085,
      width:Dimensions.get("window").width * 0.185,
      borderRadius:10
    },
    popularFoodItem: {
      flexDirection: "column",
      marginHorizontal: 10,
      borderRadius: 15,
      paddingTop: 12,

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
      borderRadius: 15,
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
    PopularCon:{
      paddingTop:Dimensions.get("window").height * 0.03
    }
})