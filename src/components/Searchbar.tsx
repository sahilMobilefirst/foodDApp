import { Dimensions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import  Icon  from 'react-native-vector-icons/Feather'
import  Icon2  from 'react-native-vector-icons/MaterialIcons'

const Searchbar = ({navigation,focus}:any) => {
  const [input,setInput] = useState('')
  
  return (
    <Pressable
    style={styles.container}>
     <Icon name='search' color={"#535C68"} size={25}/>
     <TextInput
     autoFocus={focus}
     onPressIn={()=>navigation.navigate("Search")}
     onChangeText={(text)=>setInput(text)}
     style={styles.inputbox}
     placeholderTextColor={"#676767"}  
     placeholder='What will you like to eat?'/>
     {input.length>0&&
     <Icon2 name='cancel' size={25} color={"#CDCDCF"}/>
     }
     
    </Pressable>
  )
}

export default Searchbar;

const styles = StyleSheet.create({
    container:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#F6F6F6",
    borderRadius:10,
    paddingVertical:3,
    paddingHorizontal:5,
    marginBottom:Dimensions.get("window").height*0.01
    },
    inputbox:{
        width:Dimensions.get("window").width*0.85,
        color:"black"   
    },
   

})