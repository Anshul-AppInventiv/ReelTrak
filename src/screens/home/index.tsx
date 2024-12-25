import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.paragraph}>This is Our Home</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign:'center',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: '500',
    textAlign:'center',
  },
});
