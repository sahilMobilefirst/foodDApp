import { Alert, Dimensions, Pressable, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import React from 'react';

type OrdersBtnProps = {
  label: string;
  onPressFunc: () => void;
  buttonText?:TextStyle;
  btnContainer?:ViewStyle;
};

const OrdersBtn = ({ label, onPressFunc,buttonText,btnContainer }: OrdersBtnProps) => {
  return (
    <Pressable style={[styles.btn,btnContainer]} onPress={onPressFunc}>
      <Text style={[buttonText]}>{label}</Text>
    </Pressable>
  );
};

OrdersBtn.defaultProps = {
  label: "Click Me",
  onPressFunc: () => {
    Alert.alert('Order', 'Order Selected successfully!', [{ text: 'OK' }]);
  },
  buttonText:{},
  btnContainer:{}
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
