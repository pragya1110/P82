import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  Alert,
  ToastAndroid,
} from 'react-native';
import firebase from 'firebase';

export default class ProfileScreen extends Component {
   render() {
   
    return (
     
          <View style={styles.container}>
            <Text>Profile</Text>
          </View>
          
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  
}});
