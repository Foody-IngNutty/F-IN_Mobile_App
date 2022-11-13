// src/navigation/MainNavigator.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/main/HomeScreen';
import WelcomeScreen from '../screens/main/WelcomeScreen';

import BrandScreen from '../screens/sub/BrandScreen';
import NameScreen from '../screens/sub/NameScreen';
import PriceScreen from '../screens/sub/PriceScreen';
import CategoryScreen from '../screens/sub/CategoryScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        
        <Stack.Screen
          name="Welcome"
          options={{animationEnabled: false, header: () => null}}
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="Home"
          options={{animationEnabled: true, header: () => null}}
          component={HomeScreen}
        />

        <Stack.Screen name="BrandScreen" component={BrandScreen} />
        <Stack.Screen name="NameScreen" component={NameScreen} />
        <Stack.Screen name="PriceScreen" component={PriceScreen} />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />      

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;