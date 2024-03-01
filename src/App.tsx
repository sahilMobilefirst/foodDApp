import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react';


import CartScreen from './screens/cart';







const App = () => {
  return (
   <SafeAreaView style={sytles.safviewCon}>
    <CartScreen/>
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