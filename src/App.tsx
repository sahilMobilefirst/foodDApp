import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react';
import IntroScreen from './screens/IntroScreen';










const App = () => {
  return (
   <SafeAreaView style={sytles.safviewCon}>
    <IntroScreen/>
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