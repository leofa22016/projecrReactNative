import React from 'react'

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { MyStackNavigator } from './src/navigator/Navigator';

import Icon from 'react-native-vector-icons/Ionicons';



const App = () => {
  return (
    <NavigationContainer>

      <MyStackNavigator />
</NavigationContainer>
 
  )
}

export default App
