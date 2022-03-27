import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, TextInput, TouchableOpacity } from 'react-native-web';
import Icon from 'react-native-vector-icons/ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React,{Component} from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Beranda from './Beranda'
import Pesanan from './Daftar'
import Tiket from './Konfirmasi-tiket'
import Pesan from './Pesan'
import Konfirmasi from './Konfirmasi-tiket';

const Stack = createStackNavigator();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  };
  render(){
    return (
      
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Beranda" component={Beranda}/>
          <Stack.Screen name="Pesan" component={Pesan}/>
          <Stack.Screen name="Konfirmasi" component={Konfirmasi}/>
        </Stack.Navigator>

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