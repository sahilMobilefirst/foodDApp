import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react';

import SearchScreen from './screens/searchScreen';
import DetailScreen from './screens/details';
import Home from './screens/Home';







const App = () => {
  return (
   <SafeAreaView style={sytles.safviewCon}>
    <DetailScreen/>
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