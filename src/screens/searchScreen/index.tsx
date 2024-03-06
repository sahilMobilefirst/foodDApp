import React from 'react';
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import SearchNav from '../../components/Navbars/SearchNav';
import Searchbar from '../../components/Searchbar';
import { RecentKeywords, SuggestedRes, popularFood } from '../../utils/data';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type recentItemType = {
  key: string;
  name: string;
};

type SearchScreenProps = NativeStackScreenProps<RootStackParamList, 'Search'>;

const SearchScreen = ({ navigation }: SearchScreenProps) => {
  return (
    <View style={styles.container}>
      <SearchNav navigation={navigation} />
      <View style={{ paddingVertical: Dimensions.get('window').height * 0.02 }}>
        <Searchbar navigation={navigation} />
      </View>
      <ScrollView>
      {/* Recent Keywords Section */}
      <View style={styles.RecentContainer}>
        <Text style={styles.RecentText1}>Recent Keywords</Text>
        <FlatList
          horizontal
          data={RecentKeywords}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => {
            return (
              <View style={styles.RecentCon2}>
                <Text style={styles.RecentText2}>{item.name}</Text>
              </View>
            );
          }}
        />
      </View>

      {/* Popular Fast Food Section */}
      <View style={styles.PopularCon}>
        <Text style={styles.RecentText1}>Popular Fast Food</Text>
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


<Text style={styles.RecentText1}>Suggested Restaurants</Text>
      <FlatList
        style={{marginBottom:Dimensions.get("window").height*0.2}}
        scrollEnabled={false}
        data={SuggestedRes}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View key={item.key} style={styles.SuggestCon}>
            <Image source={item.img} style={styles.img} />
            <View>
              <Text style={styles.RecentText2}>{item.name}</Text>
              <View style={styles.SuggestCon2}>
                <Icon name="star" size={20} color={'#FF7622'} />
                <Text style={styles.RecentText2}> {item.rating}</Text>
              </View>
            </View>
          </View>
        )}
      />



</ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  RecentContainer: {},
  RecentCon2: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: '#EDEDED',
    borderWidth: 2,
    borderRadius: 20,
    marginLeft: 5,
    marginVertical: Dimensions.get('window').height * 0.01,
  },
  RecentText1: {
    fontSize: 20,
    color: '#32343E',
  },
  RecentText2: {
    color: '#181C2E',
    fontSize: 16,
  },
  SuggestCon: {
    flexDirection: 'row',
    paddingVertical: Dimensions.get('window').height * 0.017,
    gap: 10,
    borderBottomColor: '#EBEBEB',
    borderBottomWidth: 1,
  },
  SuggestCon2: {
    flexDirection: 'row',
    paddingVertical: 7,
  },
  img: {
    height: Dimensions.get('window').height * 0.085,
    width: Dimensions.get('window').width * 0.185,
    borderRadius: 10,
  },
  popularFoodItem: {
    marginHorizontal: 10,
    borderRadius: 15,
    paddingTop: 12,
  },
  foodImage: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    borderRadius: 10,
    zIndex: 5,
  },
  foodDetailsContainer: {
    backgroundColor: 'white',
    minHeight: 100,
    elevation: 15,
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 15,
    justifyContent: 'flex-end',
    position: 'relative',
    bottom: 40,
    zIndex: 1,
  },
  foodTitle: {
    color: '#32343E',
    fontSize: 16,
    fontWeight: 'bold',
  },
  foodDescription: {
    color: '#646982',
    fontSize: 14,
  },
  PopularCon: {
    paddingTop: Dimensions.get('window').height * 0.03,
  },
});
