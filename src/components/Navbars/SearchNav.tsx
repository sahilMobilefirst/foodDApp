import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Feather';



const SearchNav = ({navigation}:any) => {
    
  return (
    <View style={styles.con1}>
        <View style={styles.con2}>
          <Icon
          onPress={()=>navigation.goBack()}
          name='chevron-small-left' style={styles.icon1} color={'black'} size={25} />
          <View style={{ paddingLeft: 15 }}>
            <Text style={styles.navText1}>Search</Text>
          </View>
        </View>
    
        <View style={{alignItems: 'center' }}>
          <Icon2 style={styles.icon2} name='shopping-bag' color={'white'} size={25} />
          <Text style={styles.cartText}>2</Text>
        </View>
      </View>
  )
}

export default SearchNav;

const styles = StyleSheet.create({
    con1:{ 
      flexDirection: 'row', 
      justifyContent: 'space-between' 
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
      padding: 12, backgroundColor: '#ECF0F4', borderRadius: 30,
    },
    icon2: {
      backgroundColor: 'black',
      borderRadius: 25,
      padding: 10,
      position:"relative",
      top:5
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
  