import React,{Component} from "react";
import { StyleSheet, Text, View ,Alert, Button, SafeAreaView} from "react-native";
import Icon from 'react-native-vector-icons/ionicons';
import { TextInput, TouchableOpacity } from "react-native-web";

const Pembatalan = ({})=> {
    return(
      <SafeAreaView style={styles.background}>
        <View style={styles.box}>
            <Text style={styles.H1}>
            Ravenzy
            </Text>
          
            <View style={styles.box2}>
                <Text style={styles.H2}>Tidak Ada Aktivitas Pembatalan Tiket </Text>
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
  H1 :{
    paddingLeft: 30,
    alignSelf :'flex-start',
    fontSize :30,
    fontWeight :'bold',
  },
  H2 :{
    paddingLeft: 0,
    alignSelf :'flex-start',
    fontSize :12,
    fontWeight :'bold',
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
  Line :{
    alignSelf :'flex-start',
  },
 
  
})
  
export default Pembatalan;