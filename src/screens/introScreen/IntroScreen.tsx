import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Image1,Image2,Image3 } from "../../../assets/images";
import { introLines } from '../../utils/data';
import { styles } from './style';

const IntroScreen = () => {
  const ImgList = [Image2,Image1,Image3]
  const [index,setIndex] = useState<number>(0)
  const nextPress = ()=>{
    if(index<ImgList.length-1){
    setIndex(
    (prev)=>prev+1)}
    else{
      return
    }
    }
  return (
    <View style={{ paddingHorizontal: 20,paddingTop:50 }}>
     <View style={styles.imgView}>
      <Image style={styles.img} source={ImgList[index]}/>
      <Text style={styles.introText}>{introLines[index]}</Text>
      <Text style={styles.imgText2} >Get all your loved foods in one once place, you just place the orer we do the rest</Text>
      <View style={{flexDirection:"row",alignSelf:"center"}}>
           <View style={styles.dotView}>
            {ImgList.map((_, i) => (
              <TouchableOpacity
                onPress={()=>setIndex(i)}
                key={i}
                style={[styles.dot, { backgroundColor: index === i ? '#F44336' : '#FFCDD2' }]}
              />
            ))}
          </View>
      </View>
     </View>

      <View style={{ paddingHorizontal: 15 }}>
        <Pressable style={[styles.nextButton, { marginBottom: 20 }]} onPress={nextPress}>
          <Text style={styles.buttonText}>NEXT</Text>
        </Pressable>
        <Pressable style={[styles.nextButton, { backgroundColor: "white" }]}>
          <Text style={[styles.buttonText, { color: "black" }]}>Skip</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default IntroScreen;


