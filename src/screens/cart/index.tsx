import { Dimensions, FlatList, Pressable, StyleSheet, Text, View, Alert } from "react-native";
import CartNav from "../../components/Navbars/cartNav";
import { cartData } from "../../utils/data";
import { CartItem } from "../../components/items/cartItem";
import Icon from "react-native-vector-icons/Entypo";
import { styles } from "./style";

const Cart = () => {
  const Subtotal = cartData.reduce((amount, item) => item.price * item.quantity + amount, 0);

  const handlePlaceOrder = () => {
    Alert.alert("Place Order", "Order placed successfully!", [{ text: "OK" }]);
  };

  return (
    <View style={styles.container}>
      <CartNav />
      <FlatList
        style={{ marginTop: Dimensions.get("window").height * 0.02 }}
        data={cartData}
        renderItem={({ item, index }) => {
          return (
            <View key={index}>
              <CartItem {...item} />
            </View>
          );
        }}
      />
      <View style={styles.totalCard}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.subtotalText}>DELIVERY ADDRESS</Text>
          <Text style={{ color: "orange", textDecorationLine: "underline", fontSize: 16 }}>EDIT</Text>
        </View>

        <Text style={styles.address}>Nagpur, Maharashtra</Text>

        <View style={styles.subtotal}>
          <View style={styles.cardSubContainer}>
            <Text style={styles.subtotalText}>TOTAL: </Text>
            <Text style={{ color: "black", fontSize: 25 }}>${Subtotal}</Text>
          </View>
          <View style={styles.cardSubContainer}>
            <Text style={[styles.subtotalText, { color: "orange" }]}>Breakdown</Text>
            <Icon name="chevron-small-right" color={"black"} size={25} />
          </View>
        </View>

        <Pressable style={styles.addtocartBtn} onPress={handlePlaceOrder}>
          <Text style={styles.addtocartBtnText}>PLACE ORDER</Text>
        </Pressable>
      </View>
    </View>
  );
};


export default Cart;