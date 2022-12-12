// src/screens/SplashScreen.js
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';

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
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <Text style={{fontSize: 50}}>Welcome to Foody IngNutty</Text>
    </SafeAreaView>
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