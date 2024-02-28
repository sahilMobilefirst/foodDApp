import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Navbar from '../../components/Navbar';
import Searchbar from '../../components/Searchbar';



const Home = () => {
  return (
    <View style={{ paddingTop: 12, paddingHorizontal: 15 }}>
    <Navbar/>

    <Text style={styles.text1}>Hey Septa, <Text style={{fontWeight:"bold"}}>Goog Afternoon</Text></Text>

    <Searchbar/>
    </View>
    
  );
};

export default Home;

const styles = StyleSheet.create({
  text1:{
    color:"black",
    fontSize:16,
    paddingVertical:20
  }
})