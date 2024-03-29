import {
  Dimensions,
  FlatList,
  Pressable,
  Text,
  View,
  Alert,
} from 'react-native';
import CartNav from '../../components/Navbars/cartNav';
import {cartData} from '../../utils/data';
import {CartItem} from '../../components/items/cartItem';
import Icon from 'react-native-vector-icons/Entypo';
import {styles} from './style';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';
import OrdersBtn from '../../components/buttons/OrdersBtn';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type CartProps = NativeStackScreenProps<RootStackParamList,"Cart">

interface item {
  key: string;
  name: string;
  img: any;
  price: number;
  quantity: number;
}

const Cart = ({navigation}:CartProps) => {
  const [data,setData] = useState<item[]>()

  const Subtotal = cartData.reduce(
    (amount, item) => item.price * item.quantity + amount,
    0,
  );

  const handlePlaceOrder = () => {
    Alert.alert('Place Order', 'Order placed successfully!', [{text: 'OK'}]);
  };

  useEffect(()=>{
    const getData = async()=>{
      try{
        const storedData = await AsyncStorage.getItem("item")
        if (storedData !== null) {
          const parsedData = JSON.parse(storedData);
          setData([parsedData]);
          console.log('Retrieved Data:', parsedData);
        }
      }catch(err){
        console.log("error:",err)
      }
      
    }
    getData()
  },[])

  return (
    <View style={styles.container}>
      <CartNav NavName='Cart' LeftIconBgColor='#ECF0F4' LeftIconColor='black' navigation={navigation} />

      <FlatList
        style={{
          marginTop: Dimensions.get('window').height * 0.02
        }}
        data={data}
        renderItem={({item, index}) => {
          return (
            <View key={index}>
              <CartItem {...item} />
            </View>
          );
        }}
      />
      
      <View style={styles.totalCard}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.subtotalText}>DELIVERY ADDRESS</Text>
          <Text
            style={{
              color: 'orange',
              textDecorationLine: 'underline',
              fontSize: 16,
            }}>
            EDIT
          </Text>
        </View>

        <Text style={styles.address}>Nagpur, Maharashtra</Text>

        <View style={styles.subtotal}>
          <View style={styles.cardSubContainer}>
            <Text style={styles.subtotalText}>TOTAL: </Text>
            <Text style={{color: 'black', fontSize: 25}}>${Subtotal}</Text>
          </View>
          <View style={styles.cardSubContainer}>
            <Text style={[styles.subtotalText, {color: 'orange'}]}>
              Breakdown
            </Text>
            <Icon name="chevron-small-right" color={'black'} size={25} />
          </View>
        </View>

         <OrdersBtn
       label='PLACE ORDER'
       onPressFunc={()=>navigation.navigate("Order")}
       btnContainer={{backgroundColor:"#FF7622",marginTop:20,paddingVertical:18,alignItems:"center"}}
       buttonText={{color:"#FFFFFF",fontWeight:"700",
      fontSize:16
      }}
       />
      </View>
    </View>
  );
};

export default Cart;
