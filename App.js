import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, TextInput, TouchableOpacity } from 'react-native-web';
import Icon from 'react-native-vector-icons/ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react'

import Stack from './Main/Stack'
import Daftar from './Main/Daftar';
import Lainnya from './Main/Lainnya';
import Pembatalan from './Main/Pembatalan';

const Tab = createBottomTabNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };
  render() {
    return (
      <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Beranda" component={Stack}options={{headerShown: false, tabBarIcon: () => (<Icon name={'home'} size={28}  />)}}/>
        <Tab.Screen name="Pesanan Saya" component={Daftar}options={{headerShown: false, tabBarIcon: () => (<Icon name={'browsers-sharp'} size={28}  />)}}/>
        <Tab.Screen name="Pembatalan" component={Pembatalan}options={{headerShown: false, tabBarIcon: () => (<Icon name={'close-circle-sharp'} size={28}  />)}}/>
        <Tab.Screen name="Lainnya" component={Lainnya}options={{headerShown: false, tabBarIcon: () => (<Icon name={'menu'} size={28}  />)}}/>
      </Tab.Navigator>
    </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;