import { Dimensions, Pressable, StyleSheet, Text, TextStyle } from 'react-native';
import React from 'react';

type LongButtonProps = {
  label: string;
  onPressFunc: () => void;
  buttonContainer?:TextStyle;
  buttonText?:TextStyle;

};

const LongButton = ({ label, onPressFunc,buttonContainer,buttonText }: LongButtonProps) => {
  return (
    <Pressable style={[styles.addtocartBtn,buttonContainer]} onPress={onPressFunc}>
      <Text style={[styles.addtocartBtnText,buttonText]}>{label}</Text>
    </Pressable>
  );
};

LongButton.defaultProps = {
  label: 'Default Label',
  onPressFunc: () => {
    console.log("okkk");
    
  },
  buttonContainer:{},
  buttonText:{}
};

export default LongButton;

const styles = StyleSheet.create({
  addtocartBtn: {
    backgroundColor: "#FF7622",
    paddingVertical:0,
    borderRadius: 12,
    marginTop: Dimensions.get("window").height * 0.02,
  },
  addtocartBtnText: {
    color: "#FFFFFF",
    fontSize: 15,
    alignSelf: "center",
    fontWeight: "600",
  },
});
