import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";

import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost'

const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  
  
  render() {
    return (
      <Tab.Navigator
        labeled={false}
      
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "feed") {
              iconName = focused ? "book" : "book-outline";
            } else if (route.name === "createPost") {
              iconName = focused ? "create" : "create-outline";
            }
            return (
              <Ionicons
                name={iconName}
                size={RFValue(25)}
                color={color}
               
              />
            );
          }
        })}
      >
      <Tab.Screen name="feed" component={Feed} />
        <Tab.Screen name="createPost" component={CreatePost} options={{headerShown:false}} />
        
      </Tab.Navigator>
    );
  }
}
     