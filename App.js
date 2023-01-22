import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigations/DrawerNavigator'

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
   <DrawerNavigator/>
   </NavigationContainer>
    );
  }
}