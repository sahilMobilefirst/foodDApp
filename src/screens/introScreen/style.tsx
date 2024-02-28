import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    img: {
      width: 200,
      height: 300,
      alignSelf:"center",
    },
    imgView:{
      alignSelf:"center", 
    },
    introText:{
      color:"black",
      fontSize:24,
      alignSelf:"center",
      fontWeight:"bold",
      paddingBottom:35
    },
    buttonText: {
      color: "white",
      fontSize: 15,
      fontWeight: "bold",
    },
    nextButton: {
      backgroundColor: "#FFCA28",
      width: "100%",
      height: 65,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    imgText2:{
      color:"#646982",
      fontSize:16,
      textAlign:"center"
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: '#FFCDD2',
      margin:5,
    },
    dotView:{
      flexDirection: "row", alignSelf: "center",paddingVertical:30
    }
  });