import { StyleSheet, Text, View,Image,TouchableOpacity ,ImageBackground} from 'react-native'
import React from 'react'
import { BRANDCOLOR, FONTS } from '../components/constants'
import { useNavigation } from '@react-navigation/native'
import IconFont from "react-native-vector-icons/Fontisto"

export default function IntroScreen() {
    const navigation = useNavigation()
  return (
    <ImageBackground source={require("../assets/images/header-image.jpg")} style={{flex:1}} > 
      <View style={{flex:1,alignItems:"center",justifyContent:"space-evenly"}}>
        <View style={[styles.shadow,{backgroundColor:BRANDCOLOR,borderRadius:30,padding:18}]}>
        <Image source={require("../assets/images/logo.png")} style={{height:230,width:280}}  />  
        </View>
        <TouchableOpacity 
        onPress={()=> navigation.navigate("HomeScreen")} 
        style={[styles.shadow,{backgroundColor:"#efc798",paddingHorizontal:90,paddingVertical:20,borderRadius:30,flexDirection:"row",alignItems:"center"}]}
        >
          <Text style={[{color:"white",fontSize:28},FONTS.A]}>Let's have a  <IconFont name='coffeescript' size={30} color={BRANDCOLOR}/> !</Text>
        </TouchableOpacity>    
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  shadow:{
    shadowColor:"#000",
    shadowOffset:{width:1,height:30},
    shadowOpacity:0.4,
    shadowRadius:16,
    elevation:25   
  }
})