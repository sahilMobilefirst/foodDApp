import React, {useState, useRef} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
  Pressable,
} from 'react-native';
import {introData} from '../utils/data';

type Item = {
  img: any;
  text: string;
};

type Carousel2Props = {
  navigation: any;
  data: Item[];
};

const Carousel2 = ({navigation, data}: Carousel2Props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList | null>(null);
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 20}).current;

  const handleDotPress = (index: any) => {
    flatListRef.current?.scrollToIndex({index, animated: true});
  };

  const nextPress = () => {
    if (activeIndex == 2) {
      navigation.replace('Home');
    }
    const nextIndex = (activeIndex + 1) % introData.length;
    setActiveIndex(nextIndex);
    flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
  };

  const renderDot = (index: number) => (
    <TouchableOpacity
      key={index}
      style={[styles.dot, index === activeIndex && styles.activeDot]}
      onPress={() => handleDotPress(index)}
    />
  );

  const renderItem = ({item}: {item: any; index: number}) => (
    <View style={styles.itemContainer}>
      <Image source={item.img} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        viewabilityConfig={viewConfig}
        ref={ref => (flatListRef.current = ref)}
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        onScroll={event => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x / Dimensions.get('window').width,
          );
          setActiveIndex(index);
        }}
      />
      <View style={styles.dotsContainer}>
        {introData.map((_: any, index: number) => renderDot(index))}
      </View>
      <View style={{paddingHorizontal: 20}}>
        <Text style={styles.imgText2}>
          Get all your loved foods in one once place, you just place the orer we
          do the rest
        </Text>

        <Pressable
          onPress={nextPress}
          style={[styles.nextButton, {marginBottom: 20}]}>
          <Text style={styles.buttonText}>NEXT</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  itemContainer: {
    width: Dimensions.get('window').width,
  },
  image: {
    width: '95%',
    height: 400,
    resizeMode: 'cover',
  },
  dotsContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '800',
    fontSize: 28,
    textAlign: 'center',
    color: 'black',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    margin: 5,
  },
  activeDot: {
    backgroundColor: '#FFCA28',
  },
  imgText2: {
    color: '#646982',
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: '#FFCA28',
    width: '100%',
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default Carousel2;
