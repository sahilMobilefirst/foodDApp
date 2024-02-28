import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { ListItem } from "."
import { useState } from "react"

export const Item =(item:ListItem)=>{
    const [selected,setSelected]=useState(false)
    return (
        <Pressable onPress={()=>setSelected(true)}>
            <View style={[styles.container,selected&&{backgroundColor:"#FFCA28"}]}>
            <Image
            style={styles.img}
            source={item.img}/>
            <Text style={styles.text}>{item.title}</Text>
        </View>
        </Pressable>
      
    )
  }

  const styles = StyleSheet.create({
        text:{
            color:"#32343E",
            fontSize:15,
            fontWeight:"600",
            paddingHorizontal:10
        },
        img:{
            width:44,
            height:44
        },
        container:{
            height:60,
            flexDirection:"row",alignItems:"center",
            backgroundColor:"white",
            borderRadius:50,
            marginLeft:10,
            padding:10,
            elevation:5
        }

  })