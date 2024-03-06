import { Animated, Dimensions, FlatList, Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import { introData } from '../utils/data'
import { Image1, Image2, Image3 } from '../../assets/images'

const Carousel = () => {
const {width} = useWindowDimensions()
const ImgList = [Image1,Image3,Image2]
const [currentIndex,setCurrentIndex] = useState<number>(0);
const slidesRef = useRef(null)
const scorllX = useRef(new Animated.Value(0)).current;

const viewableItemsChanged = useRef(({viewableItems}:any)=>{
  setCurrentIndex(viewableItems[0].index)
}).current

const viewConfig = useRef({viewAreaCoveragePercentThreshold:50}).current

  return (
    <View style={styles.container}>
    <View>
    <FlatList
    ref={slidesRef}
    horizontal
    showsHorizontalScrollIndicator
    pagingEnabled
    onViewableItemsChanged={viewableItemsChanged}
    bounces={false}
    data={introData}
    onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scorllX}}}],{useNativeDriver:false})}
    viewabilityConfig={viewConfig}
    renderItem={({item})=>{
      console.log(item);
      
      return(
      <View style={[styles.container,{width}]}>
        <Image source={item.img} style={styles.img} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
      
    )}}
    />
    </View>
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  img:{
    width:Dimensions.get("window").width*0.7,
    height:Dimensions.get("window").height*0.5,
    justifyContent:"center"
  },
  text:{
    fontWeight:"800",
    fontSize:28,
    textAlign:"center",
    color:"black"
  }
})