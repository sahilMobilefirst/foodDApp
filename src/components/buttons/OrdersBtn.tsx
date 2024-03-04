import { Alert, Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type OrdersBtnProps = {
  label: string;
  backgroundColor: string;
  textColor: string;
  TextHorizontalPadding:number,
  onPressFunc: () => void;
};

const OrdersBtn = ({ label, backgroundColor,TextHorizontalPadding, textColor, onPressFunc }: OrdersBtnProps) => {
  return (
    <Pressable style={[styles.btn, { backgroundColor: backgroundColor }]} onPress={onPressFunc}>
      <Text style={{ color: textColor,paddingHorizontal:TextHorizontalPadding }}>{label}</Text>
    </Pressable>
  );
};

OrdersBtn.defaultProps = {
  label: "Click Me",
  TextHorizontalPadding:0,
  backgroundColor: "#FF7622",
  textColor: "#FFFFFF",
  onPressFunc: () => {
    Alert.alert('Order', 'Order Selected successfully!', [{ text: 'OK' }]);
  },
};

export default OrdersBtn;

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: Dimensions.get("window").width * 0.12,
    paddingVertical: Dimensions.get("window").height * 0.01,
    borderWidth: 1,
    borderColor: "orange",
    borderRadius: 8,
  },
});
