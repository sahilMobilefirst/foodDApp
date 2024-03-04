import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react';

// Navigation
import  {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"


// Screens
import Home from './screens/Home';
import OrderScreen from './screens/orders';
import Cart from './screens/cart';
import OrderTracking from './screens/trackingOrder';
import DetailScreen from './screens/details';
import SearchScreen from './screens/searchScreen';

export type RootStackParamList = {
  Home: undefined;
  Details:undefined;
  Cart:undefined;
  Order:undefined;
  Tracking:undefined;
  Search:undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
   <SafeAreaView style={sytles.safviewCon}>
    <NavigationContainer theme={{
    dark: false,
    colors: {
      primary: 'your_primary_color',
      background: 'white',
      card: 'your_card_color',
      text: 'your_text_color',
      border: 'your_border_color',
      notification: 'your_notification_color',
  },
}}>
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen 
      name='Home' 
      component={Home} options={{headerShown:false}} />
      <Stack.Screen 
      name='Details' 
      component={DetailScreen} options={{headerShown:false}}/>
      <Stack.Screen 
      name='Cart' 
      component={Cart} options={{headerShown:false}}/>
       <Stack.Screen 
      name="Order" 
      component={OrderScreen} options={{headerShown:false}}/>
       <Stack.Screen 
      name="Tracking" 
      component={OrderTracking} options={{headerShown:false}}/>
      <Stack.Screen 
      name="Search" 
      component={SearchScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
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