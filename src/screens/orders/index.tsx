import React, { useState } from 'react';
import { Dimensions, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import OrderNav from '../../components/Navbars/orderNav';
import { ordersData } from '../../utils/data';
import OrderItem from '../../components/items/OrderItem';
import HistoryItem from '../../components/items/HistoryItem';
import { styles } from './style';

const OrderScreen = () => {
  const [selectedOrders, setSelectedOrders] = useState("Ongoing");

  return (
    <View style={{ flex: 1 }}>
      <OrderNav />
      <View style={styles.con1}>
        <Pressable
          style={[
            styles.topbtn,
            selectedOrders === "Ongoing" && {
              borderBottomWidth: 2,
              borderBottomColor: "#FF7622",
            },
          ]}
          onPress={() => {
            setSelectedOrders("Ongoing");
          }}
        >
          <Text style={[styles.con1Text, selectedOrders === "Ongoing" && { color: "orange", fontWeight: "bold" }]}>
            Ongoing
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.topbtn,
            selectedOrders === "History" && {
              borderBottomWidth: 2,
              borderBottomColor: "#FF7622",
            },
          ]}
          onPress={() => {
            setSelectedOrders("History");
          }}
        >
          <Text style={[styles.con1Text, selectedOrders === "History" && { color: "orange", fontWeight: "bold" }]}>
            History
          </Text>
        </Pressable>
      </View>

      {selectedOrders === "Ongoing" && (
        <FlatList
          data={ordersData}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => {
            return <OrderItem {...item} />;
          }}
        />
      )}
      {selectedOrders === "History" && (
        <FlatList
          data={ordersData}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => {
            return <HistoryItem {...item} />;
          }}
        />
      )}
    </View>
  );
};

export default OrderScreen;


