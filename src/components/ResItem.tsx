import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { ResItemType } from "../screens/Home";
import Icon1 from "react-native-vector-icons/Fontisto";
import Icon2 from "react-native-vector-icons/FontAwesome6";

export const ResItem = (item: ResItemType) => {
  return (
    <Pressable>
      <View style={styles.container}>
        <View style={{ paddingVertical: 25, backgroundColor: "#F0ECE9" }}>
          <Image style={styles.img} source={item.img} />
        </View>

        <View style={styles.container2}>
          <View>
            <Text style={styles.text}>{item.title}</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 5, width: 166 }}>
              <Text style={styles.text}>{item.price}</Text>
              <Text style={{ color: "#B0A9A2", fontSize: 16 }}>
                ⭐{item.rating}
              </Text>
            </View>
          </View>

          <View style={styles.container3}>
            <Icon1
              style={styles.icon1}
              name="heart-alt"
              color={"black"}
              size={15}
            />
            <Icon2
              style={styles.icon2}
              name="bag-shopping"
              color={"white"}
              size={15}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#403F3E",
    fontSize: 20,
    fontWeight: "400",
  },
  img: {
    width: 80,
    height: 80,
  },
  container: {
    height: 136,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    marginLeft: 10,
    elevation: 3,
  },
  container2:{
     flex: 1, flexDirection: 'column', justifyContent: 'space-between', paddingHorizontal: 15
  },
  
  container3:{ 
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: 'flex-end',
    gap: 10 },
    
  icon1: {
    padding: 8,
    borderColor: "#E3DCD5",
    borderWidth: 1,
    borderRadius: 20,
    alignSelf: "center",
  },
  icon2: {
    backgroundColor: "#FFCA28",
    padding: 10,
    borderRadius: 20,
    paddingHorizontal: 11,
    alignSelf: "center",
  },
});
