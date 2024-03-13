import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer:{
      flex:1,
      marginTop:-Dimensions.get("window").height * 0.06
    },
    nav: {
      zIndex: 5,
      position:"relative",
      top: Dimensions.get("window").height * 0.08,
      paddingHorizontal: Dimensions.get("window").width * 0.02,
    },
    img: {
      width: Dimensions.get("window").width * 1,
      height:Dimensions.get("window").height * 0.4,
      zIndex: 2,
      borderRadius:15
    },
    detailsContainer: {
      marginTop:5
    },
    iconContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingTop:5
    },
    text1: {
      color: "black",
      fontSize: 20,
      textAlignVertical: "center",
    },
    text2: {
      color: "#181C2E",
      fontSize: 16,
    },
    iconImg: {
      width: 25,
      height: 25,
      marginRight: 10,
    },
  
    IconCon2:{
      flexDirection:"row",
      color:"#A0A5BA",
      paddingVertical:Dimensions.get("window").height * 0.02,
    },
    IconCon2Child:{
      marginRight:20,
      flexDirection:"row",
      gap:5
    },
    paraCon:{
      paddingVertical: Dimensions.get("window").height * 0.01,
    },
    sizeCon:{
      paddingVertical: Dimensions.get("window").height * 0.01,
      flexDirection:"row",
      alignItems:"center",
      gap:15
    },
    sizeCirlce:{
      padding:8,
      borderRadius:20,
      backgroundColor:"#F0F5FA",
      marginRight:8,
    },
    sizeText:{
      fontSize:18,
      color:"black"
    },
    cart: {
      height: Dimensions.get("window").height * 0.2,
      backgroundColor: "#F0F5FA",
      paddingVertical: 20,
      paddingHorizontal: Dimensions.get("window").width * 0.05,
      borderTopEndRadius:20,
      borderTopLeftRadius:20
    },
    cartCon1:{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center"
    },
    quantityBtnContainer:{
      backgroundColor:"#121223",
      flexDirection:"row",
      alignItems:"center",
      gap:10,
      paddingHorizontal:15,
      paddingVertical:7,
      borderRadius:20
  
    },
    quantityBtn:{
      backgroundColor:"#333945",
      height:25,
      width:25,
      borderRadius:30,
      alignItems:"center"
    },
    quanitybtnText:{
      fontSize:18,
      fontWeight:"bold",
      color:"white"
    },
    addtocartBtnText:{
      color:"white",
      fontSize:15,
      alignSelf:"center",
      fontWeight:"bold"
    },
    btnCon:{backgroundColor:"#FF7622",marginTop:20,paddingVertical:15,alignItems:"center"}
  });
  