import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { NaviContainer } from './navigation';

// sass

const App = () => {
  return (
    <SafeAreaView style={styles.safviewCon}>
    <NaviContainer/>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  safviewCon: {
    flex: 1,
    backgroundColor: "white",
    color: "black",
  },
});
