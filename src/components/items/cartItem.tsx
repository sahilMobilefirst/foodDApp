import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
;
import Icon1 from "react-native-vector-icons/Octicons";
import Icon2 from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/MaterialIcons";

type CartItemType = {
  key: string;
  name: string;
  img: any;
  price: number;
  quantity: number;
};

export const CartItem = (item: CartItemType) => {
  return (
      <View style={styles.container}>
        <View style={{alignSelf:"center",elevation:5}}>
          <Image style={styles.img} source={item.img} />
        </View>

        <View style={styles.container2}>
          <View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.text}>{item.name}</Text>
              <Icon name="cancel" color={"red"} size={35}/>
            </View>
            <Text style={styles.text}>{item.price}</Text>
           
          </View>

          <View style={styles.container3}>
            <Icon1
              style={styles.icon1}
              name="dash"
              color={"black"}
              size={20}
            />
            <Text style={[styles.text]}>{item.quantity}</Text>
            <Icon2
              style={styles.icon2}
              name="plus"
              color={"black"}
              size={20}
            />
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#403F3E",
    fontSize: 20,
    fontWeight: "400",
  },
  img: {
    width:Dimensions.get("window").width*0.35,
    height:Dimensions.get("window").height*0.16,
    borderRadius:30,
  },
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    marginVertical:10,
    paddingHorizontal:Dimensions.get("window").width*0.06
  },
  container2:{
     flex: 1, justifyContent: 'space-between',marginLeft:Dimensions.get("window").width*0.05
  },
  
  container3:{ 
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: 'center',
    marginBottom:5,
    gap: 15 },
    
  icon1: {
   
  },
  icon2: {
  
  },
});
