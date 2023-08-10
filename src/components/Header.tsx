import { StyleSheet, Text, TextInput, TouchableOpacity, View,ImageBackground } from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/FontAwesome'
import IconMatc from "react-native-vector-icons/MaterialCommunityIcons"
import IconMat from "react-native-vector-icons/MaterialIcons"
import IconEnt from "react-native-vector-icons/Entypo"
import { BRANDCOLOR, FONTS } from '../components/constants'

export default function Header() {
  return (
    <View>
        <View style={styles.header}>
            <TouchableOpacity style={styles.space}>
                <IconMat name="person-pin" size={50} color="white" />
            </TouchableOpacity>
            <View style={[styles.headerCol,styles.space]}>
                <IconMatc name='airplane-marker' color="white" size={40} />
                <Text style={[styles.city,FONTS.A]}>Mahbubnagar,IND</Text>
            </View>
            <TouchableOpacity style={styles.space}>
                <IconEnt name='notification' size={40} color="white"  />
            </TouchableOpacity>
        </View>
        <View style={styles.search}>
            <View style={styles.searchBar}>
            <TextInput style={styles.input}/>
            <TouchableOpacity>
                <Icon name='search' size={30} style={styles.searchIcon}/>
            </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:"space-between",
      },
      headerCol:{
        flexDirection:"row",
        top:30,
        right:9
      },
      city:{
        paddingLeft:5,
        fontSize:38,
        color:"white",
      },
      space:{
        padding:15
      },
      search:{
        marginTop:40,
        alignItems:"center",
      },
      searchIcon:{
        padding:8,
        backgroundColor:BRANDCOLOR,
        borderRadius:20,
        color:"#ecf0f1"

      },
      searchBar:{
        flexDirection:"row",
        borderRadius:30,
        padding:5,
        backgroundColor:"#ecf0f1",
        elevation:20
      },
      input:{
        width:280,
        borderRadius:20,
      }
})