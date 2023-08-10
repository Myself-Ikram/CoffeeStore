import { ImageBackground, StyleSheet, Image, View ,Text,Button, Pressable, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootScreenProps } from '../navigation/AppNavigation'
import {useNavigation }from "@react-navigation/native"
import { BRANDCOLOR, FONTS, coffeeItems } from '../components/constants'
import Icon  from 'react-native-vector-icons/FontAwesome'
import IconIon from "react-native-vector-icons/Ionicons"
import IconFeather  from "react-native-vector-icons/Feather"
import Categories from '../components/Categories'
import { Snackbar } from 'react-native-paper'

type DetailsProps = NativeStackScreenProps<RootScreenProps,"Details">

export default function Details({route} : DetailsProps) {
  const navigation = useNavigation()
  const itemData =  coffeeItems.find(item=>item.id === route.params.itemId)
  const [counter,setCounter] = useState(1)
  const [add,setAdd] = useState(false)
  function addToWish(){
    setAdd(!add); 
  }
  return (
      <View style={styles.container}>
        <ImageBackground source={require("../assets/images/detail-image.jpg")} style={{height:250,width:"100%"}}>
          <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <TouchableOpacity onPress={()=> navigation.goBack() }>
            <IconIon name='arrow-back-circle-outline' size={50} color="white" style={{padding:15}}  />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> addToWish() }>
              <IconIon name={add ? "heart" : 'heart-outline'} size={40} color="white" style={{padding:20}} />
            </TouchableOpacity>
          </View>
          <Image source={itemData?.image} style={{height:350,width:350,alignSelf:"center"}}/> 
        </ImageBackground>
        <View style={{marginTop:150,paddingHorizontal:15}}>
          <Text style={{backgroundColor:BRANDCOLOR,color:"white",width:55,paddingLeft:3,borderRadius:10,marginVertical:12,fontSize:20}}><Icon name='star' size={15}/> {itemData?.stars}</Text>
          <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
            <Text style={[{fontSize:38,color:"black"},FONTS.D]}>{itemData?.name}</Text>
            <Text style={[{fontSize:20,color:"green"},FONTS.B]}>$ {itemData?.price}</Text>
          </View>
          <View >
            <Text style={{fontSize:17}}>Coffee Size</Text>
            {/* Size chart */}
            <Categories type="size" />
          </View>
          <View>
            <Text style={{fontSize:17}}>About</Text>
            <Text style={{fontSize:14,height:54,color:"black"}}>{itemData?.desc}</Text>
          </View>
          <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:5}} >
            <Text style={{fontSize:18}}>Volume: <Text style={[{color:"black"},FONTS.B]}>{itemData?.volume}</Text></Text>
            <View style={{flexDirection:"row",borderColor:BRANDCOLOR,borderWidth:2,borderRadius:25}}>
              <TouchableOpacity style={styles.counterBtn} onPress={()=> setCounter(counter === 1 ? counter : counter - 1 )}>
                <Text style={{color: counter === 1 ? "white" : BRANDCOLOR}}>-</Text>
              </TouchableOpacity>
              <Text style={{alignSelf:"center",marginHorizontal:10}}>{counter}</Text>
              <TouchableOpacity  style={styles.counterBtn} onPress={()=> setCounter(counter + 1)}>
                <Text style={{color:BRANDCOLOR}} >+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection:"row",marginTop:10}}>
            <TouchableOpacity onPress={()=> navigation.navigate("Wishlist")} style={{flex:1,borderColor:"black",paddingVertical:20,alignItems:"center",borderWidth:2,borderRadius:35}}>
            <IconFeather name='shopping-bag' size={30} color="black"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate("Cart")} style={{flex:4,backgroundColor:BRANDCOLOR,justifyContent:"center",alignItems:"center",borderRadius:35,marginLeft:10}}>
              <Text style={{color:"white"}}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:"100%",
  },
  counterBtn:{
    paddingHorizontal:15,
    paddingVertical:10,
  }
  
})