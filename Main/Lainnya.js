import React,{Component} from "react";
import { StyleSheet, Text, View ,Alert, Button, SafeAreaView} from "react-native";
import Icon from 'react-native-vector-icons/ionicons';
import { TextInput, TouchableOpacity } from "react-native-web";

const Lainnya = ({})=> {
    return(
      <SafeAreaView style={styles.background}>
        <View style={styles.box}>
            <View style={styles.box2}>
                <Icon style={styles.Icon} name={'notifications-circle-outline'}  size={30}>
                    <Text style={styles.H1}>Notifikasi</Text>
                </Icon>
                <Text style={styles.Line}>____________________________________________________</Text>
                
                <Icon style={styles.Icon} name={'person-circle-outline'}  size={30}>
                    <Text style={styles.H1}>Tentang Saya</Text>
                </Icon>
                <Text style={styles.Line}>____________________________________________________</Text>
                
                <Icon style={styles.Icon} name={'ios-albums-outline'}  size={30}>
                    <Text style={styles.H1}>Layanan</Text>
                </Icon>
                <Text style={styles.Line}>____________________________________________________</Text>
                
                <Icon style={styles.Icon} name={'mail-outline'}  size={30}>
                    <Text style={styles.H1}>Contact</Text>
                </Icon>
                <Text style={styles.Line}>____________________________________________________</Text>
            
                <Icon style={styles.Icon} name={'arrow-forward-circle-outline'}  size={30}>
                    <Text style={styles.H1}>Log Out</Text>
                </Icon>
                <Text style={styles.Line}>____________________________________________________</Text>
            
            </View>
        </View>
      </SafeAreaView>
    )
}
  
const styles = StyleSheet.create({
  background : {
    backgroundColor: "white",
    flex : 1,
    alignItems:"center",
  },
  box:{
    marginTop : 70,
    width :400,
    alignItems : "center",
    backgroundColor :"ffffff",
    paddingVertical : 20,
    paddingHorizontal : 18,
    borderRadius : 5,
    shadowOpacity : 1,
    shadowRadius : 5
  },
  box2:{
    marginTop : 10,
    width :340,
    backgroundColor :"ffffff",
    paddingVertical : 20,
    paddingHorizontal : 18,
  },
  H1 :{
    paddingLeft: 15,
    alignSelf :'flex-start',
    fontSize :16,
    fontWeight :'bold',
  },
  Line :{
    alignSelf :'flex-start',
  },
  tombol:{
    backgroundColor :"#ee9e54",
    height : 45,
    width : 200,
    borderRadius :5,
    marginTop :20,
    paddingHorizontal : 10,
  },
  Icon :{
    marginTop : 13,
  }
  
})
  
export default Lainnya;