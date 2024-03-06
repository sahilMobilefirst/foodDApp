import { Dimensions, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Image1,Image2,Image3 } from "../../../assets/images";
import { introLines } from '../../utils/data';
import Carousel from 'react-native-reanimated-carousel';
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import { RootStackParamList } from '../../App';

type IntroScreenProps =NativeStackScreenProps<RootStackParamList,"Intro">

const IntroScreen = ({navigation}:IntroScreenProps) => {
  const ImgList = [Image2,Image1,Image3]
  
  const [index,setIndex] = useState<number>(0)
  const width = Dimensions.get('window').width;
  return (
    <View style={{flex:1,paddingHorizontal:15,marginTop:50}}>
      <Carousel
      loop
      width={50}
      height={width / 2}
      autoPlay={true}
      data={ImgList}
      scrollAnimationDuration={1000}
      onSnapToItem={(index:number) => console.log('current index:', index)}
      renderItem={(item:any) => (
          <View>           
          <Image source={item} style={styles.image} />
          <Text style={styles.introText}>{introLines[index]}</Text>
          </View>
          )}
        />

     <View style={styles.imgView}>
        <Text style={styles.imgText2} >Get all your loved foods in one once place, you just place the orer we do the rest</Text>
       
     </View>

      <View style={{ paddingHorizontal: 15,paddingVertical:20 }}>
        <Pressable style={[styles.nextButton, { marginBottom: 20 }]}>
          <Text style={styles.buttonText}>NEXT</Text>
        </Pressable>
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
  image: {
        width: 200,
        height: 300,
  },
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
