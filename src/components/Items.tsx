import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { BRANDCOLOR,FONTS,coffeeItems } from './constants'
import { useNavigation } from '@react-navigation/native'
import Icon from "react-native-vector-icons/AntDesign"

export type CardProps = {
    item: {
      id:number,
      name: string,
      price: string,
      volume: string,
      stars: string,
      image: any,
      desc: string
    },
  }

function Card({item} : CardProps){
    const navigation = useNavigation();
    return(
            <View style={styles.container}>
                <View>
                  <Image source={item.image} style={styles.image} />
                </View>
                <View style={{marginHorizontal:15,paddingTop:20}}>
                  <Text style={[styles.name,FONTS.D]}>{item.name}</Text>
                  <Text style={{backgroundColor:"#ecf0f1",width:43,borderRadius:10,padding:2,marginVertical:12}}><Icon name='star'/> {item.stars}</Text>
                  <Text style={[{fontSize:20,color:"white"},FONTS.B]}>{item.volume}</Text>
                  <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10}}>
                    <Text style={[{fontSize:30,color:"black"},FONTS.B]}>${item.price}</Text>
                    <TouchableOpacity 
                    onPress={()=> navigation.navigate("Details",{itemId : item.id})} >
                      <Icon name='plus' color={BRANDCOLOR} size={30} style={{padding:10,backgroundColor:"white",borderRadius:30,elevation:15}}/>
                    </TouchableOpacity>
                  </View>
                </View>
            </View>            
    )
}


export default function Items() {
  return (
    <Carousel
        data={coffeeItems}
        containerCustomStyle={{overflow:"visible"}}
        firstItem={1}
        inactiveSlideOpacity={0.75}
        inactiveSlideScale={0.77}
        sliderWidth={400}
        itemWidth={260}
        renderItem={({item})=><Card item={item} />}
    />
  )
}

const styles = StyleSheet.create({
    container:{
        height:380,
        marginTop:20,
        borderRadius:60,
        backgroundColor:BRANDCOLOR
    },
    image:{
        width:170,
        height:170,
        alignSelf:"center",
    },
    name:{
        fontSize:30,
        color:"white",
      }
})