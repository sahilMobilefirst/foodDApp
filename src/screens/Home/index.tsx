import { FlatList, Image, ImageSourcePropType, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Navbar from '../../components/Navbars/Navbar';
import Searchbar from '../../components/Searchbar';
import { categories, openRestaurants, popularFood } from '../../utils/data';
import { Item } from '../../components/items/CategoryItem';
import { ResItem } from '../../components/items/ResItem';
import { styles } from './style';
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import { RootStackParamList } from '../../navigation';



export interface ListItem {
  key: string;
  title: string;
  img: ImageSourcePropType;
}

export interface PopularItem {
  key: string;
  title: string;
  img: ImageSourcePropType;
  description:string 
}

export interface ResItemType {
  key: string;
  title: string;
  img: ImageSourcePropType;
  price:number,
  rating:number
}

type HomeProps = NativeStackScreenProps<RootStackParamList,'Home'>

const Home = ({navigation}:HomeProps) => {
  
  return (
    <View style={{flex:1, paddingTop: 12, paddingHorizontal: 15 }}>
      <Navbar navigation={navigation} />
      <Text style={styles.text1}>
        Hey Septa, <Text style={{ fontWeight: "bold" }}>Good Afternoon</Text>
      </Text>
      <Searchbar navigation={navigation} focus={false} />
      <ScrollView>
      
      <View>
        <View style={styles.categoryView}>
          <Text style={styles.categoryText1}>All Categories</Text>
          <Text style={styles.categoryText2}>
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
              <Text style={styles.categoryText1}>Open Restaurants</Text>
              <Text style={styles.categoryText2}>
                See All
              </Text>
            </View>
            <View>
              <FlatList
              horizontal
              renderItem={({item})=>
               <ResItem item={item} navigation={navigation}/>
              }
              
              data={openRestaurants}
              keyExtractor={(item: ResItemType) => item.key}
              />
            </View>
        </View>
        <View>
            <View style={styles.categoryView}>
              <Text style={styles.categoryText1}>Open Restaurants</Text>
              <Text style={styles.categoryText2}>
                See All
              </Text>
            </View>
            <View>
              <FlatList
              horizontal
              renderItem={({item})=>
               <ResItem item={item} navigation={navigation}/>
              }
              
              data={openRestaurants}
              keyExtractor={(item: ResItemType) => item.key}
              />
            </View>
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
      </ScrollView>
    </View>
  );
};

export default Home;



