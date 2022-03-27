import React from "react";
import {StyleSheet, Text, View ,Alert, Button, SafeAreaView, Picker} from "react-native";
import Icon from 'react-native-vector-icons/ionicons';
import {TextInput, TouchableOpacity } from "react-native-web";
import {NavigationContainer } from "@react-navigation/native";
import {useRoute} from '@react-navigation/native';

const Beranda =(props)=> {
  const route = useRoute();
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  const [pelabuhanawal, setpelabuhanawal] = React.useState();
  const [pelabuhanakhir, setpelabuhanakhir] = React.useState();
  const [pelayanan, setpelayanan] = React.useState();

    return(
      <SafeAreaView style={styles.background}>
        <View style={styles.box}>
          <Text style={styles.H}>
           Ravenzy
          </Text>

          <Text style={styles.H1}>
            Pelabuhan Awal
          </Text>

          <View style={styles.input}>
            <Icon name={'boat-outline'}  size={28}/>
            <Picker style={styles.TextInput} selectedValue={pelabuhanawal} onValueChange={(itemValue, itemIndex) =>setpelabuhanawal(itemValue)}>
              <Picker.Item label="Pilihan pelabuhan awal" value=""/>
              <Picker.Item label="Bakauheni" value="Bakauheni"/>
              <Picker.Item label="Tanjung Priok " value="Tanjung"/>
            </Picker>
          </View>

          <Text style={styles.H1}>
            Pelabuhan Tujuan
          </Text>

          <View style={styles.input}>
            <Icon name={'md-boat-sharp'}  size={28}/>
            <Picker style={styles.TextInput} selectedValue={pelabuhanakhir} onValueChange={(itemValue, itemIndex) =>setpelabuhanakhir(itemValue)}>
              <Picker.Item label="Pilih Pelabuhan Tujuan" value=""/>
              <Picker.Item label="Bakauheni" value="Bakauheni"/>
              <Picker.Item label="Tanjung Priok " value="Tanjung"/>
            </Picker>
          </View>

          <Text style={styles.H1}>
            Kelas Pelayanan
          </Text>
          <View style={styles.input}>
            <Icon name={'md-browsers-outline'}  size={28}/>
            <Picker style={styles.TextInput} selectedValue={pelayanan} onValueChange={(itemValue, itemIndex) =>setpelayanan(itemValue)}>
              <Picker.Item label="Pilih Layanan" value=""/>
              <Picker.Item label="Ekonomi" value="Ekonomi"/>
              <Picker.Item label="Bisnis" value="Bisnis"/>
              <Picker.Item label="Firs-class" value="Firs-class"/>
            </Picker>
          </View>

          <Text style={styles.H1}>
            Tanggal Masuk Pelabuhan
          </Text>
          <View style={styles.input}>
            <Icon name={'calendar-outline'}  size={28}/>
            <TextInput style={styles.TextInput} placeholder="Pilih Tanggal Masuk" />
          </View>

          <Text style={styles.H1}>
            Jam Masuk Pelabuhan 
          </Text>
          <View style={styles.input}>
            <Icon name={'time-outline'}  size={28}/>
            <TextInput style={styles.TextInput} placeholder="Pilih Jam Masuk" />
          </View>

          <Text style={styles.H1}>
            Jumlah Tiket
          </Text>
          <View style={styles.input}>
            <Icon name={'md-albums-outline'}  size={28}/>
            <TextInput style={styles.TextInput} placeholder="Masukkan Jumlah Tiket" />
          </View>

          <TouchableOpacity style={styles.tombol} onPress={() => props.navigation.push('Pesan')} >
            <Icon name={'search'}  size={20} color={'white'} />
            <Text style={styles.BuatTiket}>
              Buat Tiket
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );

};

const styles = StyleSheet.create({
  background : {
    backgroundColor: "white",
    flex : 1,
    alignItems:"center",
  },
  box:{
    marginTop : 70,
    width :330,
    alignItems : "center",
    backgroundColor :"ffffff",
    paddingVertical : 20,
    paddingHorizontal : 18,
    borderRadius : 5,
    shadowOpacity : 1,
    shadowRadius : 5
  },
  H : {
    color: "#00579c",
    fontWeight :"bold",
    fontSize : 30,
    marginBottom : 25,
  },
  H1 :{
    alignSelf :'flex-start',
    paddingTop : 5,
  },
  input :{
    flexDirection : "row",
    height : 30,
    width : 270,
    marginTop : 10
  },
  TextInput :{
    borderWidth :1,
    height : 30,
    marginLeft : 10,
    width : 250,
    borderRadius : 5,
    backgroundColor :"#eff4f4",
    paddingLeft: 15,
  },
  tombol :{
    backgroundColor :"#ee9e54",
    height : 40,
    width : 200,
    borderRadius :5,
    marginTop :20,
    flexDirection: 'row',
    alignItems : 'center',
    paddingHorizontal : 10
  },
  BuatTiket :{
    color : 'white',
    fontSize : 16,
    marginLeft : 35,
    fontWeight : 'bold',
  }
})

export default Beranda;