import { StyleSheet, Text, View,ImageBackground,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { BRANDCOLOR, FONTS, coffeeItems } from '../components/constants'
export default function Cart() {
  const slice = coffeeItems.slice(1,3)
  return (
    <ImageBackground source={require("../assets/images/header-image.jpg")} style={{flex:1}} >
    <View style={{flexDirection:"row",marginTop:50,justifyContent:"space-evenly"}} >
      {slice.map((item)=> (
        <View key={item.id} style={[styles.card,styles.shadow]}>
          <Image source={item.image} style={{height:180,width:180}} />
          <Text style={[{fontSize:25,color:"black"},FONTS.D]}>{item.name}</Text>
          <Text style={FONTS.B}>{item.volume}</Text>
          <Text style={[{fontSize:30,color:"black"},FONTS.B]} >${item.price}</Text>
          <View style={[{flexDirection:"row",marginVertical:10,borderColor:"white",borderWidth:2},styles.shadow]}>
            <TouchableOpacity>
              <Text style={{backgroundColor:BRANDCOLOR,paddingHorizontal:10,color:"white"}} >-</Text>
            </TouchableOpacity>
            <Text style={[{marginHorizontal:5,backgroundColor:"white",paddingHorizontal:20,paddingVertical:3},FONTS.B]}>{item.id}</Text>
            <TouchableOpacity >
              <Text style={{backgroundColor:BRANDCOLOR,paddingHorizontal:10,color:"white"}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) )}
    </View>
    <View style={[styles.shadow,{backgroundColor:"#bdc3c7",margin:50,padding:10,borderRadius:15}]}>
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
            <Text style={[{color:"black",fontSize:20,paddingVertical:15},FONTS.A]}>SubTotal:</Text>
            <Text  style={FONTS.B}>$136.50</Text>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",alignContent:"center"}}>
            <Text style={[{color:"black",fontSize:20},FONTS.A]}>Taxes:</Text>
            <Text style={FONTS.B}>$0.00</Text>
        </View>
        <View style={[styles.shadow,{backgroundColor:BRANDCOLOR,margin:10,padding:20,flexDirection:"row",justifyContent:"space-between",borderRadius:15}]}>
            <Text style={[{color:"white",fontSize:30},FONTS.A]}>Total:</Text>
            <Text style={[{color:"white",fontSize:20,top:7},FONTS.B]}>$136.50</Text>
        </View>
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  card:{
    backgroundColor:"#bdc3c7",
    margin:10,
    borderRadius:30,
    alignItems:"center",
  },
  shadow:{
    shadowColor:"#000",
    shadowOffset:{width:1,height:10},
    shadowOpacity:0.5,
    shadowRadius:16,
    elevation:25   
  }
})