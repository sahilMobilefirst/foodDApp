import React from 'react';
import { Dimensions, Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native';

export interface OrderItemType {
  key: string;
  name: string;
  img: ImageSourcePropType;
  price: number;
  quantity: number;
  orderId: number;
  category: string;
  status: string; 
  date: string;
}

const OrderItem = (item: OrderItemType) => {
  return (
    <View style={styles.con1}>
      <Text style={styles.text1}>{item.category}</Text>
      <View style={styles.con3}>
        <View style={styles.con2}>
          <Image style={styles.img} source={item.img} />
          <View style={{marginLeft:17,justifyContent:"space-between"}}>
            <Text style={{ color: "black" }}>{item.name}</Text>
            <View style={styles.con4}>
              <Text style={{ color: "black" }}>{item.price}</Text>
              <View style={styles.verticalLine}></View>
              <Text style={{ color: "black" }}>01 item</Text>
            </View>
          </View>
        </View>
        <Text style={{ color: "gray",textDecorationLine:"underline" }}>#{item.orderId}</Text>
      </View>
      <View style={styles.btnCon}>
        <Pressable style={[styles.btn,{backgroundColor:"#FF7622"}]}><Text style={{color:"#FFFF"}}>Track Order</Text></Pressable>
        <Pressable  style={styles.btn}><Text style={{color:"#FF7622"}}>Cancel</Text></Pressable>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  con1: {
    paddingHorizontal: Dimensions.get("window").width * 0.04,
  },
  img: {
    height: Dimensions.get("window").height * 0.08,
    width: Dimensions.get("window").width * 0.15,
    borderRadius:10
  },
  text1: {
    color: "black",
    paddingVertical: Dimensions.get("window").height * 0.03,
  },
  con2: {
    flexDirection: "row",
  },
  con3: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical:15,
    borderTopColor:"#CED7DF",
    borderTopWidth:1
  },
  con4: {
    flexDirection: "row",
    gap:10

  },
  btnCon:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  btn:{
    paddingHorizontal:Dimensions.get("window").width * 0.12,
    paddingVertical:Dimensions.get("window").height * 0.01,
    borderWidth:1,
    borderColor:"orange",
    borderRadius:8
  },verticalLine: {
    height: "100%",
    width: 1,
    backgroundColor: "#CED7DF",
  },

});
