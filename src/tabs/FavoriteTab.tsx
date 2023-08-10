import { StyleSheet, Text, TouchableOpacity, View,Image, ImageBackground } from 'react-native'
import React from 'react'
import { BRANDCOLOR, FONTS, coffeeItems } from '../components/constants'
import IconIon from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native'
import { CardProps } from '../components/Items'
export default function Wishlist() {
  const navigation = useNavigation()
  const slice = coffeeItems.slice(0,2)
  return (
    <>
      <ImageBackground style={{flex:1}} source={require("../assets/images/header-image.jpg")}>
        <View style={{marginTop:50}}>
          {slice.map((item)=> <Card item={item} key={item.id} />)}
        </View>
      </ImageBackground>
    </>
  )
}

function Card({item}: CardProps){
  const navigation = useNavigation()
  return(
    <TouchableOpacity  style={styles.card} onPress={()=> navigation.navigate("Details",{itemId : item.id})} >
      <Image source={item.image} style={{width:150,height:150}}/>
      <View style={{flex:1}}>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          <Text style={[{fontSize:30,color:"black"},FONTS.D]}>{item.name}</Text>
          <IconIon name='remove-circle' color={BRANDCOLOR} size={30} style={{left:10,bottom:30}} />
        </View>
        <Text style={[{left:2},FONTS.B]}>{item.volume}</Text>
        <View style={{flexDirection:"row"}}>
        <Text style={[{fontSize:30,color:"black",top:5},FONTS.B]}>${item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card:{
    flexDirection:"row",
    alignItems:"center",
    borderRadius:30,
    margin:20,
    backgroundColor:"#bdc3c7",
    shadowColor:"#000",
    shadowOffset:{width:0,height:10},
    shadowOpacity:0.4,
    shadowRadius:10,
    elevation:17
  }
})