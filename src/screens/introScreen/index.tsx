import {
  Dimensions,
  Image,
  Pressable,
  Text,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {introData} from '../../utils/data';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import {styles} from './style';
import {RootStackParamList} from '../../navigation';

type IntroScreenProps = NativeStackScreenProps<RootStackParamList, 'Intro'>;

const IntroScreen = ({navigation}: IntroScreenProps) => {
  const width = Dimensions.get('window').width;
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<ICarouselInstance>(null);

  const handleNext = () => {
    if (currentIndex == introData.length - 1) {
      navigation.replace('Home');
      return;
    }
    const nextIndex = currentIndex + 1;
    carouselRef.current?.scrollTo({index: nextIndex});
    setCurrentIndex(nextIndex);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Carousel
        width={width}
        height={width}
        data={introData}
        ref={carouselRef}
        onSnapToItem={index => setCurrentIndex(index)}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={item.img}
              style={{height: width * 0.86, width: width, marginRight: 20}}
            />
            <Text style={{textAlign: 'center', fontSize: 30, color: 'black'}}>
              {item.text}
            </Text>
          </View>
        )}
      />

      <View style={{paddingHorizontal: 30, marginTop: 20}}>
        {/* Next button */}
        <Pressable
          onPress={handleNext}
          style={[styles.nextButton, {marginBottom: 20}]}>
          <Text style={styles.buttonText}>NEXT</Text>
        </Pressable>

        {/* Skip button */}
        <Pressable
          onPress={() => navigation.replace('Home')}
          style={[styles.nextButton, {backgroundColor: 'white'}]}>
          <Text style={[styles.buttonText, {color: 'black'}]}>Skip</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default IntroScreen;
