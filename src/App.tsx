import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react';
import Home from './screens/Home';





const App = () => {
  return (
   <SafeAreaView style={sytles.safviewCon}>
    <Home/>
   </SafeAreaView>
  
  )
}

export default App;

const sytles = StyleSheet.create({
  safviewCon:{
    flex:1,
    backgroundColor:"white",
    color:"black"
  },
})