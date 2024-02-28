import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome6';
import Icon2 from 'react-native-vector-icons/Feather';
const Navbar = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name='bars-staggered' style={styles.icon1} color={'black'} size={25} />
          <View style={{ paddingLeft: 15 }}>
            <Text style={styles.navText1}>DELIVER TO</Text>
            <Text style={styles.navText2}>Los Angeles, USA</Text>
          </View>
        </View>
    
        <View style={{}}>
          <Icon2 style={styles.icon2} name='shopping-bag' color={'white'} size={25} />
          <Text style={styles.cartText}>2</Text>
        </View>
      </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
    navText1: {
      color: '#FC6E2A',
      fontSize: 12,
      fontWeight: 'bold',
    },
    navText2: {
      color: '#676767',
      fontSize: 12,
      fontWeight: 'bold',
    },
    icon1:{
      padding: 12, backgroundColor: '#ECF0F4', borderRadius: 30,
    },
    icon2: {
      backgroundColor: 'black',
      borderRadius: 25,
      padding: 10,
    },
    cartText:{
      fontSize:16,
      backgroundColor:"#FF7622",
      width:19,
      fontWeight:"bold",
      borderRadius:30,
      padding:1,
      paddingHorizontal:3,
      textAlign:"center",
      alignSelf:"flex-end",
      position:"relative",
      bottom:45
    }
  });
  