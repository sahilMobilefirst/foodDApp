import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { Image1,Image2,Image3, cat1 } from "../../../assets/images";

import {NativeStackScreenProps} from "@react-navigation/native-stack"
import { RootStackParamList } from '../../App';
import Carousel from '../../components/Carousel';
import Carousel2 from '../../components/Carousel2';



type IntroScreenProps =NativeStackScreenProps<RootStackParamList,"Intro">

const IntroScreen = ({navigation}:IntroScreenProps) => {
  const ImgList = [Image2,Image1,Image3]
  
  const [index,setIndex] = useState<number>(0)
 
  

  return (
    <View style={{flex:1,justifyContent:"center"}}>
    <Carousel2 navigation={navigation}/>
      <View style={{ paddingHorizontal:30 }}>
        <Pressable
        onPress={()=>navigation.replace("Home")}
        style={[styles.nextButton, { backgroundColor: "white" }]}>
          <Text style={[styles.buttonText, { color: "black" }]}>Skip</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({

    imgView:{
      marginTop:50,
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
      textAlign:"center",
      paddingVertical:20

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
