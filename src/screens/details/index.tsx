import { Dimensions, Image, Pressable, ScrollView, Text, View } from 'react-native'
import React from 'react'
import DetailsNav from '../../components/Navbars/DetailsNav';
import { detailcon, detailsImg } from '../../../assets/images';
import Icon1 from 'react-native-vector-icons/Octicons';
import { cartData, dishSizes, popularFood } from '../../utils/data';
import { styles } from './style';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import OrdersBtn from '../../components/buttons/OrdersBtn';
import { RootStackParamList } from '../../navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList,"Details">

const DetailScreen = ({navigation}:DetailsScreenProps) => {
  
  const onPress = async()=>{
    try{
    const cartItem = JSON.stringify(cartData[0])
    await AsyncStorage.setItem("item",cartItem)
    console.log("Data stored successfully!",popularFood[0]);
    navigation.navigate("Cart");
    }catch(error){
      console.error('Error storing data:', error);
    }
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.nav}>
        <DetailsNav navigation={navigation}/>
      </View>
      
    <ScrollView style={{flex:1}}>
    <Image style={styles.img} source={detailsImg}/>
    <View style={{paddingHorizontal: Dimensions.get("window").height * 0.02,}}>
      <View style={styles.detailsContainer}>
        <Text style={styles.text1}>Joller Rice & Chicken</Text>
        <View style={styles.iconContainer}>
          <Image style={styles.iconImg} source={detailcon}/>
          <Text style={styles.text2}>Rose Garden</Text>
        </View>
      </View>

      <View style={styles.IconCon2}>
        <View style={styles.IconCon2Child}>
          <Icon1 name='star' size={20} color={"#FF7622"}/>
          <Text style={styles.text2}>4.7</Text>
        </View>
        <View style={styles.IconCon2Child}>
          <Icon1 name='star' size={20} color={"#FF7622"}/>
          <Text style={styles.text2}>Free</Text>
        </View>
        <View style={styles.IconCon2Child}>
          <Icon1 name='star' size={20} color={"#FF7622"}/>
          <Text style={styles.text2}>20 min</Text>
         </View>
      </View>

      <View style={styles.paraCon}>
        <Text style={{color:"#A0A5BA",fontSize:16}}>Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet</Text>
      </View>
      <View style={styles.paraCon}>
        <Text style={{color:"#A0A5BA",fontSize:16}}>Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet</Text>
      </View>
      <View style={styles.paraCon}>
        <Text style={{color:"#A0A5BA",fontSize:16}}>Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet</Text>
      </View>

        <View style={styles.sizeCon}>
            <Text style={{color:"#A0A5BA",fontSize:18}}>SIZE: </Text>
            <View style={{flexDirection:"row"}}>
                {dishSizes.map((size)=>{
                return(
                    <View key={size.key} style={styles.sizeCirlce}>
                        <Text style={styles.sizeText}>{size.name}</Text>
                    </View>)
                })}
            </View>
        </View>
    </View>
    </ScrollView>
    <View style={styles.cart}>
        <View style={styles.cartCon1}>
            <Text style={{color:"black",fontSize:25}}>$32</Text>
            <View style={styles.quantityBtnContainer}>
                <Pressable style={styles.quantityBtn}>
                <Text style={styles.quanitybtnText}>-</Text>
                </Pressable>
                <Text style={styles.quanitybtnText}>1</Text>
                <Pressable style={styles.quantityBtn}>
                <Text style={styles.quanitybtnText}>+</Text>   
                </Pressable>
            </View>
            
        </View>
       <OrdersBtn
       label='ADD TO CART'
       onPressFunc={onPress}
       btnContainer={styles.btnCon}
       buttonText={styles.addtocartBtnText}
       />
      </View>
   </View>
  )
}

export default DetailScreen;

