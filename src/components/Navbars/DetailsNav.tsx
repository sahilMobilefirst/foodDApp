import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { cat1, detailsImage } from '../../../assets/images';



const DetailsNav = () => {
    
  return (
    <View style={styles.con1}>
        <View style={styles.con2}>
          <Icon name='chevron-small-left' style={styles.icon1} color={'black'} size={25} />
        </View>
    
        <View style={{alignItems: 'center' }}>
          <Icon2 style={styles.icon2} name='heart' color={'#FF8400'} size={13} />
        </View>
      </View>
      
  )
}

export default DetailsNav;

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
      padding: 7,
      backgroundColor: 'white',
      borderRadius: 30,
    },
    icon2: {
      backgroundColor: 'white',
      borderRadius: 25,
      padding: 13,

    },
   
    
  });
  