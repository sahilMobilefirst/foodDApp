import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react';


import Home from './screens/Home';
import OrderScreen from './screens/orders';
import Cart from './screens/cart';
import OrderTracking from './screens/trackingOrder';
import DetailScreen from './screens/details';



const App = () => {
  return (
   <SafeAreaView style={sytles.safviewCon}>
    <OrderScreen/>
   </SafeAreaView>
  
  )
}

export default App;

const sytles = StyleSheet.create({
  safviewCon:{
    flex:1,
    backgroundColor:"white",
    color:"black",
  },
})