import React from 'react';
import { Dimensions, Image, ImageSourcePropType, Pressable, StyleSheet, Text, View, Alert } from 'react-native';
import OrdersBtn from '../buttons/OrdersBtn';

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

const HistoryItem = (item: OrderItemType) => {

  const handleRatePress = () => {
    Alert.alert('Rate Pressed', `Rate order with ID: ${item.orderId}`);
  };

  const handleReOrderPress = () => {
    Alert.alert('Re-Order Pressed', `Re-Order from order ID: ${item.orderId}`);
  };

  return (
    <View style={styles.con1}>
      <View style={{ flexDirection: "row", gap: 40 }}>
        <Text style={[styles.text1]}>{item.category}</Text>
        <Text style={[styles.text1, { color: "green" }, item.status !== "Completed" && { color: "red" }]}>
          {item.status}
        </Text>
      </View>

      <View style={styles.con3}>
        <View style={styles.con2}>
          <Image style={styles.img} source={item.img} />
          <View style={{ marginLeft: 17, justifyContent: "space-between" }}>
            <Text style={{ color: "black", fontWeight: "bold" }}>{item.name}</Text>
            <View style={styles.con4}>
              <Text style={{ color: "black" }}>${item.price}</Text>
              <Text style={{ color: "black" }}>{item.date}</Text>
              <View style={styles.verticalLine}></View>
              <Text style={{ color: "black" }}>01 item</Text>
            </View>
          </View>
        </View>
        <Text style={{ color: "gray", textDecorationLine: "underline" }}>#{item.orderId}</Text>
      </View>

      <View style={styles.btnCon}>
        <OrdersBtn 
        label='Rate'
        onPressFunc={handleRatePress}
        buttonText={{color:"#FF7622",paddingHorizontal:15}}
        btnContainer={{paddingHorizontal:Dimensions.get('window').width*0.1}}
        />
       
        <OrdersBtn 
        label='Re-Order' 
        onPressFunc={handleReOrderPress}
        btnContainer={{backgroundColor:"#FF7622",paddingHorizontal:Dimensions.get('window').width*0.1}}
        buttonText={{color:"white"}}
        />
      </View>
      
    </View>
  );
};

export default HistoryItem;

const styles = StyleSheet.create({
  con1: {
    paddingTop: 10,
    paddingHorizontal: Dimensions.get("window").width * 0.04,
    paddingBottom:1
  },
  img: {
    height: Dimensions.get("window").height * 0.08,
    width: Dimensions.get("window").width * 0.15,
    borderRadius: 10,
  },
  text1: {
    color: "black",
    fontWeight: "bold",
    paddingVertical: Dimensions.get("window").height * 0.025,
  },
  con2: {
    flexDirection: "row",
  },
  con3: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderTopColor: "#CED7DF",
    borderTopWidth: 1,
  },
  con4: {
    flexDirection: "row",
    gap: 10,
  },
  btnCon: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    paddingHorizontal: Dimensions.get("window").width * 0.12,
    paddingVertical: Dimensions.get("window").height * 0.01,
    borderWidth: 1,
    borderColor: "orange",
    borderRadius: 8,
  },
  verticalLine: {
    height: "100%",
    width: 1,
    backgroundColor: "#CED7DF",
  },
});
