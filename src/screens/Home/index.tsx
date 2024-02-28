import { FlatList, Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Navbar from '../../components/Navbar';
import Searchbar from '../../components/Searchbar';
import { categories, openRestaurants, popularFood } from '../../utils/data';
import { Item } from '../../components/CategoryItem';
import { ResItem } from '../../components/ResItem';


export interface ListItem {
  key: string;
  title: string;
  img: ImageSourcePropType; // Assuming cat1 is an image source
}

export interface PopularItem {
  key: string;
  title: string;
  img: ImageSourcePropType;
  description:string // Assuming cat1 is an image source
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
        <View style={styles.categoryView}>
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
            <View style={styles.categoryView}>
              <Text style={{ color: "#32343E", fontSize: 20 }}>Open Restaurants</Text>
              <Text style={{ color: "#333333", fontSize: 16 }}>
                See All
              </Text>
            </View>
              <FlatList
              horizontal
              renderItem={({item})=>
               <ResItem {...item}/>
              }
              
              data={openRestaurants}
              keyExtractor={(item: ResItemType) => item.key}
              />

        </View>
        <View>
          <Text style={styles.text1}>Popular Food</Text>
          <View style={{alignContent:"center"}}>
          <FlatList
          horizontal
          data={popularFood}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => {
          return (
          <View style={styles.popularFoodItem}>
            <Image style={styles.foodImage} source={item.img} />
            <View style={styles.foodDetailsContainer}>
              <Text style={styles.foodTitle}>{item.title}</Text>
              <Text style={styles.foodDescription}>{item.description}</Text>
            </View>
      </View>
    );
  }}
/>

          </View>
         
        </View>
        
      </View>
    </View>
  );
};

export default Home;



const styles = StyleSheet.create({
  text1: {
    color: "black",
    fontSize: 20,
    paddingVertical:20
  },
  categoryView:{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 15, alignItems: "center" },
  popularFoodItem: {
    flexDirection: "column",
    marginHorizontal: 10,
    borderRadius: 15,
    padding: 6,
  },
  foodImage: {
    width: 90,
    height: 90,
    alignSelf: "center",
    borderRadius: 10,
    zIndex:5
  },
  foodDetailsContainer: {
    backgroundColor: "white",
    height:100,  // Set the height to 60
    elevation: 10,
    padding: 10,
    paddingHorizontal:25,
    borderRadius: 10,
    justifyContent: 'flex-end',
    position: "relative",
    bottom:40,  // Move the content to the bottom
    zIndex:1
  },
  foodTitle: {
    color: "#32343E",
    fontSize: 16,
    fontWeight:"bold"
  },
  foodDescription: {
    color: "#646982",
    fontSize: 14,
  },
});
