import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { MapScrenn } from '../pages/MapScrenn';
import { PermisionScrenn } from '../pages/PermisionScrenn';



const Stack = createStackNavigator();

export const MyStackNavigator=() =>{
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false,
            cardStyle:{
                backgroundColor:'white'
            }
            
        }} 



    >
        <Stack.Screen name="PermisionScrenn" component={PermisionScrenn} />
        <Stack.Screen name="MapScrenn" component={MapScrenn} />
     
    </Stack.Navigator>
  );
}