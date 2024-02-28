import { FlatList, Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Navbar from '../../components/Navbar';
import Searchbar from '../../components/Searchbar';
import { categories, openRestaurants } from '../../utils/data';
import { Item } from '../../components/CategoryItem';
import { ResItem } from '../../components/ResItem';

export interface ListItem {
  key: string;
  title: string;
  img: ImageSourcePropType; // Assuming cat1 is an image source
}

export interface ResItemType {
  key: string;
  title: string;
  img: ImageSourcePropType;
  price:number,
  rating:number// Assuming cat1 is an image source
}

const Home = () => {
  return (
    <View style={{ paddingTop: 12, paddingHorizontal: 15 }}>
      <Navbar />
      <Text style={styles.text1}>
        Hey Septa, <Text style={{ fontWeight: "bold" }}>Good Afternoon</Text>
      </Text>
      <Searchbar />
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 15, alignItems: "center" }}>
          <Text style={{ color: "#32343E", fontSize: 20 }}>All Categories</Text>
          <Text style={{ color: "#333333", fontSize: 16 }}>
            See All
          </Text>
        </View>
        <FlatList
          horizontal
          renderItem={({item})=><Item {...item}/>}
          data={categories}
          keyExtractor={(item: ListItem) => item.key}
          
        />
        <View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 15, alignItems: "center" }}>
              <Text style={{ color: "#32343E", fontSize: 20 }}>Open Restaurants</Text>
              <Text style={{ color: "#333333", fontSize: 16 }}>
                See All
              </Text>
            </View>
              <FlatList
              horizontal
              renderItem={({item})=><ResItem {...item}/>}
              data={openRestaurants}
              keyExtractor={(item: ResItemType) => item.key}
              />

        </View>
        
      </View>
    </View>
  );
};

export default Home;



const styles = StyleSheet.create({
  text1: {
    color: "black",
    fontSize: 16,
    paddingVertical: 20
  }
});
