import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Entypo';




const OrderNav = ({navigation}:any) => {
    
  return (
    <View style={styles.con1}>
        <Pressable
        onPress={()=>navigation.goBack()}
        style={[styles.con2,{gap:15}]}>
          <Icon name='chevron-small-left' style={styles.icon1} color={'black'} size={25} />
            <Text style={{color:"black",fontSize:15}}>My Orders</Text>
        </Pressable>
    
        <View style={{alignItems: 'center' }}>
          <Icon2 style={styles.icon2} name='dots-three-horizontal' color={'black'} size={18} />
        </View>
      </View>
      
  )
}

export default OrderNav;

const styles = StyleSheet.create({
    con1:{ 
      flexDirection: 'row', 
      justifyContent: 'space-between',
      paddingHorizontal:Dimensions.get("window").width*0.04,
      paddingTop:Dimensions.get("window").height*0.02,
    },

    con2:{ 
      flexDirection: 'row', 
      alignItems: 'center'
    },

    navText1: {
      color: 'black',
      fontSize: 20,
      fontWeight: '400',
    },
    navText2: {
      color: '#676767',
      fontSize: 12,
      fontWeight: 'bold',
    },
    icon1:{
      padding: 7,
      backgroundColor: '#ECF0F4',
      borderRadius: 30,
    },
    icon2: {
        padding: 10,
        backgroundColor: '#ECF0F4',
        borderRadius: 30,

    },
   
    
  });
  