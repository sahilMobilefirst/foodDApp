import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomDrawer } from '../../components/BottomDrawer'
import { mapImg } from '../../../assets/images'
import CartNav from '../../components/Navbars/cartNav'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation'


type TrackingProps = NativeStackScreenProps<RootStackParamList,"Tracking">

const OrderTracking = ({navigation}:TrackingProps) => {
  return (
    <View style={styles.mainCon}>
        
      <View style={styles.NavCon}>
            <CartNav navigation={navigation} NavName='Track Order' LeftIconBgColor='black' LeftIconColor='white'/>
      </View>
      <Image source={mapImg} style={styles.img}/>
      <BottomDrawer/>

    </View>
  )
}

export default OrderTracking

const styles = StyleSheet.create({
    mainCon:{
        flex:1,
        marginTop:-Dimensions.get("window").height * 0.08
    },
    NavCon:{
        zIndex: 5,
        position:"relative",
        top: Dimensions.get("window").height * 0.08
    },
    img:{
        zIndex:4,
        height:Dimensions.get("window").height*0.82,width:Dimensions.get("window").width*1
    }
})