import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react';
import { navigationStack } from './navigation';



const App = () => {
  return (
   <SafeAreaView style={sytles.safviewCon}>
    {navigationStack()}
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