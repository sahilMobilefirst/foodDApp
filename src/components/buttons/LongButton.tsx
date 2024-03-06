import { Dimensions, Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';

type LongButtonProps = {
  label: string;
  onPressFunc: () => void;
};

const LongButton = ({ label, onPressFunc }: LongButtonProps) => {
  return (
    <Pressable style={styles.addtocartBtn} onPress={onPressFunc}>
      <Text style={styles.addtocartBtnText}>{label}</Text>
    </Pressable>
  );
};

LongButton.defaultProps = {
  label: 'Default Label',
  onPressFunc: () => {
    console.log("okkk");
    
  },
};

export default LongButton;

const styles = StyleSheet.create({
  addtocartBtn: {
    backgroundColor: "#FF7622",
    paddingVertical: Dimensions.get("window").height * 0.025,
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
