import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, Dimensions, TouchableOpacity, Pressable, Image } from 'react-native';
import { Image1, cat1, cat2, cat3, contactImg, suggest1 } from '../../assets/images';
import  Icon  from 'react-native-vector-icons/Ionicons';
import  Icon2  from 'react-native-vector-icons/Fontisto';
import  Icon3  from 'react-native-vector-icons/MaterialIcons';
import  Icon4  from 'react-native-vector-icons/AntDesign';
import  Icon5  from 'react-native-vector-icons/Feather';

export const BottomDrawer = () => {

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isBottomSheetOpen}
        onRequestClose={handleCloseBottomSheet}
      >
        <View style={[styles.bottomSheet, { backgroundColor: "white" }]}>
        <View>
       
        <Pressable onPress={handleCloseBottomSheet}
            style={
            {alignSelf:"center",
            paddingVertical:20}}
            >
             <Icon3 name='cancel' color={"gray"} size={25}  />
          </Pressable>  
        </View>
      

          <View style={styles.orderDetailsContainer}>
            <Image style={styles.img} source={cat3} />
            <View style={styles.orderTextContainer}>
              <Text style={{color:"black"}}>Uttora Coffee House</Text>
              <Text style={{color:"black"}}>Ordered At 08 Sept, 10:00pm</Text>
              <Text style={{color:"black"}}>@x Burger</Text>
            </View>
          </View>

          <View style={styles.deliveryTimeContainer}>
            <Text style={{color:"black",fontSize:35,fontWeight:"bold"}}>20 min</Text>
            <Text style={{color:"gray"}} >ESTIMATED DELIVERY TIME</Text>
          </View>

          <View style={styles.statusCon1}>
                <View style={styles.statusCon}>
                <View style={[styles.dot,{backgroundColor:"orange"}]}>
                <Icon5 name='check' size={13} color={"white"}/>
                </View>
                <Text style={{color:"orange"}}>Your Order has been received</Text>
                </View>
                <View style={{height:20,backgroundColor:"gray",width:2,marginLeft:9}}></View>
                <View style={styles.statusCon}>
                <View style={styles.dot}>
                <Icon5 name='check' size={13} color={"white"}/>
                </View>
                <Text style={{color:"gray"}}>The restaurant is preparing your food</Text>
                </View>
                <View style={{height:20,backgroundColor:"gray",width:2,marginLeft:9}}></View>
               <View style={styles.statusCon}>
               <View style={styles.dot}>
               <Icon5 name='check' size={13} color={"white"}/>
               </View>
               <Text style={{color:"gray"}}>Your order has been picked up for delivery</Text>
               </View>
               <View style={{height:20,backgroundColor:"gray",width:2,marginLeft:9}}></View>
                <View style={styles.statusCon}>
                <View style={styles.dot}>
                <Icon5 name='check' size={13} color={"white"}/>
                </View>
                <Text style={{color:"gray",marginBottom:20}}>Order arriving soon</Text>
                </View>  
          </View>
        
            <View style={styles.contactCard}>
                <View style={{flexDirection:"row",gap:15}}>
                    <Image style={styles.img2} source={suggest1}/>
                    <View>
                        <Text style={{color:"black",fontWeight:"bold"}}>Robert F.</Text>
                        <Text style={{color:"gray"}}>Courier</Text>
                    </View>
                </View>

                <View style={{flexDirection:"row",alignItems:"center",gap:10}} >
                    <Icon name='call-outline' size={20}
                    style={styles.icon1}
                    />
                    <Icon2 name='messenger'color={"orange"} size={20} style={styles.icon2} />
                </View>
            </View>

        </View>
      </Modal>

      {!isBottomSheetOpen && (
        <Pressable
          onPress={handleOpenBottomSheet}
          style={[styles.bottomSheetButton, { backgroundColor: "#DAE0E2" }]}
        >
          <View>
            <View style={styles.upIcon} >
            <Icon4 name={"up"} color={"black"} size={20}/>
            </View>
            <View style={[styles.orderDetailsContainer,styles.bottomSheetButtonContent]}>
              <Image style={styles.img}  source={suggest1} />
              <View style={styles.orderTextContainer}>
                <Text style={{color:"black",fontWeight:"bold"}}>Uttora Coffee House</Text>
                <Text style={{color:"black"}} >Ordered At 08 Sept, 10:00pm</Text>
                <Text style={{color:"black"}}>@x Burger</Text>
              </View>
            </View>
          </View>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  img:{
    width:70,
    height:70,
    borderRadius:15
  },
  bottomSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal:Dimensions.get('window').width * 0.06,
    paddingBottom:Dimensions.get('window').height * 0.06,
    bottom: 0,
  },
  bottomSheetButton: {
    borderRadius: 20,
    width: '100%'

  },
  bottomSheetButtonContent: {
    
  },

  orderDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal:Dimensions.get('window').width * 0.06,
    paddingBottom:Dimensions.get('window').height * 0.03
  },
  orderTextContainer: {
    marginLeft: 10,
  },
  deliveryTimeContainer: {
    paddingVertical:Dimensions.get('window').height * 0.02,
    alignItems:"center"
  },
  dot:{
    height:20,
    width:20,
    backgroundColor:"gray",
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center"
  },
  statusCon1:{
    paddingVertical:15,
    borderBottomColor:"gray",
    borderBottomWidth:0.5
  },
  statusCon:{
    flexDirection:"row",
    gap:10
  },

  icon1:{
    backgroundColor:"orange",
    borderRadius:25,
    padding:10
  },
  icon2:{

    borderWidth:1,
    borderColor:"orange",
    borderRadius:25,
    padding:10
  },
  img2:{
    borderRadius:10,
    width:50,
    height:50
  },
  contactCard:{flexDirection:"row",justifyContent:"space-between",paddingTop:20}
,
  upIcon:{
    alignItems:"center",
    paddingVertical:10
}
});
