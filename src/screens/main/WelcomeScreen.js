// src/screens/SplashScreen.js
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const WelcomeScreen = props => {
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 3000);
  }, []);

  useEffect(() => {
    if (authLoaded) {
      props.navigation.replace('Home');
    }
  }, [authLoaded, props.navigation]);

  return (
    <View style={styles.root}>
      <Text style={{fontSize: 50}}>Welcome to Foody IngNutty</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WelcomeScreen;