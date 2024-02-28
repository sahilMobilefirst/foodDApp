import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/Feather'

const Searchbar = () => {
  return (
    <View style={styles.container}>
     <Icon style={styles.icon} name='search' color={"#535C68"} size={25}/>
     <TextInput
     style={styles.inputbox}
     placeholderTextColor={"#676767"}
     placeholder='What will you like to eat?'/>
    </View>
  )
}

export default Searchbar

const styles = StyleSheet.create({
    container:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center"
    },
    inputbox:{
        backgroundColor:"#F6F6F6",
        borderBottomRightRadius:10,
        borderTopRightRadius:10,
        width:"85%",
        
    },
    icon:{
        backgroundColor:"#F6F6F6",
        padding:11.5,
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10
    }
})