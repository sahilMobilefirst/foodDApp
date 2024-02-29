import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DetailsNav from '../../components/Navbars/DetailsNav';
import { detailcon, detailsImg } from '../../../assets/images';
import Icon1 from 'react-native-vector-icons/Octicons';
import { dishSizes } from '../../utils/data';


const DetailScreen = () => {
    

  return (
    <View>
      <View style={styles.nav}>
        <DetailsNav/>
      </View>
      <Image style={styles.img} source={detailsImg}/>
    
    <View style={{paddingHorizontal: Dimensions.get("window").height * 0.02,}}>
      <View style={styles.detailsContainer}>
        <Text style={styles.text1}>Joller Rice & Chicken</Text>
        <View style={styles.iconContainer}>
          <Image style={styles.iconImg} source={detailcon}/>
          <Text style={styles.text2}>Rose Garden</Text>
        </View>
      </View>

      <View style={styles.IconCon2}>
        <View style={styles.IconCon2Child}>
          <Icon1 name='star' size={20} color={"#FF7622"}/>
          <Text style={styles.text2}>4.7</Text>
        </View>
        <View style={styles.IconCon2Child}>
          <Icon1 name='star' size={20} color={"#FF7622"}/>
          <Text style={styles.text2}>Free</Text>
        </View>
        <View style={styles.IconCon2Child}>
          <Icon1 name='star' size={20} color={"#FF7622"}/>
          <Text style={styles.text2}>20 min</Text>
         </View>
      </View>

      <View style={styles.paraCon}>
        <Text style={{color:"#A0A5BA",fontSize:16}}>Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet</Text>
      </View>

        <View style={styles.sizeCon}>
            <Text style={{color:"#A0A5BA",fontSize:18}}>SIZE: </Text>
            <View style={{flexDirection:"row"}}>
                {dishSizes.map((size)=>{
                return(
                    <View key={size.key} style={styles.sizeCirlce}>
                        <Text style={styles.sizeText}>{size.name}</Text>
                    </View>
                )
                })}
            </View>
        </View>

     

    </View>

    <View style={styles.cart}>
        <View style={styles.cartCon1}>
            <Text style={{color:"black",fontSize:25}}>$32</Text>
            <View style={styles.quantityBtnContainer}>
                <Pressable style={styles.quantityBtn}>
                <Text style={styles.quanitybtnText}>-</Text>
                </Pressable>
                <Text style={styles.quanitybtnText}>1</Text>
                <Pressable style={styles.quantityBtn}>
                <Text style={styles.quanitybtnText}>+</Text>   
                </Pressable>
            </View>
            
        </View>
        <Pressable style={styles.addtocartBtn}>
                <Text style={styles.addtocartBtnText}>ADD TO CART</Text>
            </Pressable>
      </View>
   </View>
  )
}

export default DetailScreen;

const styles = StyleSheet.create({
  nav: {
    zIndex: 5,
    position: "relative",
    top: Dimensions.get("window").height * 0.05,
    paddingHorizontal: Dimensions.get("window").width * 0.02,
  },
  img: {
    width: "100%",
    height: "51%",
    position: "relative",
    bottom: Dimensions.get("window").height * 0.05,
    zIndex: 2
  },
  detailsContainer: {
    marginTop: -Dimensions.get("window").height * 0.03,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop:5
  },
  text1: {
    color: "#181C2E",
    fontSize: 20,
    textAlignVertical: "center",
  },
  text2: {
    color: "#181C2E",
    fontSize: 16,
  },
  iconImg: {
    width: 25,
    height: 25,
    marginRight: 10,
  },

  IconCon2:{
    flexDirection:"row",
    color:"#A0A5BA",
    paddingVertical:Dimensions.get("window").height * 0.02,
  },
  IconCon2Child:{
    marginRight:20,
    flexDirection:"row",
    gap:5
  },
  paraCon:{
    paddingVertical: Dimensions.get("window").height * 0.01,
  },
  sizeCon:{
    paddingVertical: Dimensions.get("window").height * 0.01,
    flexDirection:"row",
    alignItems:"center",
    gap:15
  },
  sizeCirlce:{
    padding:8,
    borderRadius:20,
    backgroundColor:"#F0F5FA",
    marginRight:8,
  },
  sizeText:{
    fontSize:18,
    color:"black"
  },
  cart: {
    position: 'absolute',
    bottom:"-17%",
    left: 0,
    right: 0,
    height: Dimensions.get("window").height * 0.2,
    backgroundColor: "#F0F5FA",
    paddingVertical: 20,
    paddingHorizontal: Dimensions.get("window").width * 0.04,
    borderTopEndRadius:20,
    borderTopLeftRadius:20
  },
  cartCon1:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  quantityBtnContainer:{
    backgroundColor:"#121223",
    flexDirection:"row",
    alignItems:"center",
    gap:10,
    paddingHorizontal:15,
    paddingVertical:7,
    borderRadius:20

  },
  quantityBtn:{
    backgroundColor:"#333945",
    height:25,
    width:25,
    borderRadius:30,
    alignItems:"center"
  },
  quanitybtnText:{
    fontSize:18,
    fontWeight:"bold"
  },
  addtocartBtn:{
    backgroundColor:"#FF7622",
    paddingVertical:Dimensions.get("window").height * 0.025,
    borderRadius:20,
    marginTop:Dimensions.get("window").height * 0.02
  },
  addtocartBtnText:{
    fontSize:15,
    alignSelf:"center",
    fontWeight:"bold"
  }
});
