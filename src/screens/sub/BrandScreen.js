// srс/screens/HomeScreen.js

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BrandScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Brand Screen</Text>
    </View>
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
    padding: 10
  },
});

export default BrandScreen;