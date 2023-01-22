import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import ProfileScreen from '../screens/Profile'

const Drawer = createDrawerNavigator();

const DrawerNavigator=()=> {
  return (

      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    
  );
}

export default DrawerNavigator