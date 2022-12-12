// srс/screens/HomeScreen.js

import React from 'react';
import { SafeAreaView, StatusBar, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />

      <Text style={{fontSize: 25, alignSelf: 'flex-start'}}>Browse by:-</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('BrandScreen')
            }}>
          <Text>Brand</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('NameScreen')
          }}>
          <Text>Name</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('PriceScreen')
          }}>
          <Text>Price</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('CategoryScreen')
          }}>
          <Text>Category</Text>
        </TouchableOpacity>
        
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 30,
    borderRadius: 30,
    width: 130,
    height: 50,
    justifyContent: "center",
  },
});

export default HomeScreen;