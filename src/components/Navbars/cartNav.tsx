import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';




interface CartNavProps {
  NavName: string;
  LeftIconBgColor:string,
  LeftIconColor:string
  navigation:any
}

const CartNav: React.FC<CartNavProps> = ({ NavName,LeftIconBgColor,LeftIconColor,navigation }) => {
  return (
    <View style={styles.con1}>
      <Pressable 
      onPress={()=>navigation.goBack()}
      style={[styles.con2,]}>
        <Icon name='chevron-small-left' style={[styles.icon1,{backgroundColor:LeftIconBgColor}]} color={LeftIconColor} size={25} />
      </Pressable>
      <Text style={{ color: "black", fontSize:20,fontWeight:"bold" }}>{NavName}</Text>
    </View>
  );
};

export default CartNav;

const styles = StyleSheet.create({
    con1:{
      paddingHorizontal:Dimensions.get("window").width*0.03,
      paddingTop:Dimensions.get("window").height*0.02,
      flexDirection:"row",
      alignItems:"center",
      gap:15
    },

    con2:{ 
      flexDirection: 'row', 
      alignItems: 'center' 
    },

    icon1:{
      padding: 7,
      borderRadius: 30,
    },
    icon2: {
      backgroundColor: 'white',
      borderRadius: 25,
      padding: 13,

    },
   
    
  });
  