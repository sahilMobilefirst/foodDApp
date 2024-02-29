import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchNav from '../../components/SearchNav'
import Searchbar from '../../components/Searchbar'
import { RecentKeywords, SuggestedRes, popularFood } from '../../utils/data';
import Icon from 'react-native-vector-icons/Octicons';
import { styles } from './style';

type recentItemType = {
    key: string;
    name: string;
}

const SearchScreen = () => {
  return (
    <View style={styles.container}>
     <SearchNav/>
     <View style={{paddingVertical:Dimensions.get("window").height * 0.02}}>
     <Searchbar/>
     </View>
     <View style={styles.RecentContainer}>
        <Text style={styles.RecentText1}>Recent Keywords</Text>
        <FlatList
        horizontal
        data={RecentKeywords}
        keyExtractor={(item)=>item.key}
        renderItem={({item})=>{
          return(
          <View style={styles.RecentCon2}>
            <Text style={styles.RecentText2}>{item.name}</Text>
          </View>
        )}}
        />
       </View>

       <View>
            <Text style={styles.RecentText1}>Suggested Restaurants</Text>
            <FlatList
            data={SuggestedRes}
            keyExtractor={(item)=>item.key}
            renderItem={({item})=>{
              return(
              <View style={styles.SuggestCon}>
                <Image source={item.img} style={styles.img}/>
                <View>
                  <Text style={styles.RecentText2}>{item.name}</Text>
                  <View style={styles.SuggestCon2}>
                  <Icon name='star' size={20} color={"#FF7622"}/>
                  <Text style={styles.RecentText2}> {item.rating}</Text>
                  </View>
                </View>
                
              </View>
              )}}
              />
       </View>
       <View style={styles.PopularCon}>
          <Text style={styles.RecentText1}>Popular Fast Food</Text>
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
  )
}

export default SearchScreen;

