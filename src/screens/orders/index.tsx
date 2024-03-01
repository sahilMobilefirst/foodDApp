import { Dimensions, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderNav from '../../components/Navbars/orderNav';
import { ordersData } from '../../utils/data';
import OrderItem from '../../components/items/OrderItem';

const OrderScreen = () => {
  return (
    <View>
      <OrderNav/>
      <View style={styles.con1}>
        <Pressable>
        <Text style={styles.con1Text}>
            Ongoing
        </Text>
        </Pressable>
        <Pressable>
        <Text style={styles.con1Text}>
            History
        </Text>
        </Pressable>
      </View>

      <FlatList 
      data={ordersData}
      keyExtractor={(item)=>item.key}
      renderItem={({item})=>{
        return(
            <OrderItem {...item}/>
      )}}
      />
    </View>
  )
}

export default OrderScreen;

const styles = StyleSheet.create({
    con1:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:Dimensions.get("window").width*0.18,
        paddingTop:Dimensions.get("window").height*0.05,
        paddingBottom:12,
        borderBottomColor:"#CED7DF",
        borderBottomWidth:1.75
    },
    con1Text:{
        color:"#A5A7B9",
        fontSize:15
    }

})