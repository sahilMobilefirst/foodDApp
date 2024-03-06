import React, { useState, useRef } from 'react';
import { View, FlatList, StyleSheet, Image, Dimensions, TouchableOpacity, Text } from 'react-native';
import { introLines } from '../utils/data';

const Carousel = ({data}:any) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
    
  const handleDotPress = (index: number) => {
    
    flatListRef.current?.scrollToIndex({ index, animated: true });
  };

  const renderDot = (index: number) => (
    <TouchableOpacity
      key={index}
      style={[styles.dot, index === activeIndex && styles.activeDot]}
      onPress={() => handleDotPress(index)}
    />
  );

  const renderItem = ({ item,index }:any) => (
    <View style={styles.itemContainer}>
      <Image source={item} style={styles.image} />
      <Text style={styles.introText}>{introLines[index]}</Text>
    </View>
  );

  const flatListRef = useRef<FlatList | null>(null);

  return (
    <View style={styles.container}>
      <FlatList
        ref={(ref) => (flatListRef.current = ref)}
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        onScroll={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / Dimensions.get('window').width);
          setActiveIndex(index);
        }}
      />
      <View style={styles.dotsContainer}>{data?.map((_:any, index: number) => renderDot(index))}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  itemContainer: {
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"red",
    width: Dimensions.get('window').width,
  },
  image: {
    backgroundColor:"gray",
        width: 200,
        height: 300,
  },
  introText:{
    color:"black",
    fontSize:24,
    alignSelf:"center",
    fontWeight:"bold",
    paddingBottom:35
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    margin:5,
  },
  activeDot: {
    backgroundColor: 'red',
  },
});

export default Carousel;