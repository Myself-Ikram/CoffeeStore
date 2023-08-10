import { StyleSheet, Text, View ,FlatList,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { categories,BRANDCOLOR, size, FONTS } from './constants'

type CategoriesProps = {
  type: string
}

export default function Categories({type} : CategoriesProps) {
    const [isActive,setIsActive] = useState(1);
    const [isSize,setIsSize] = useState(type === "size" ? true : false)

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={isSize? size : categories}
      renderItem={({item}) =>(
            <TouchableOpacity style={[isSize? styles.sizeContainer :styles.container,{backgroundColor: isActive === item.id? BRANDCOLOR : "#f1f2f6"}]} 
            onPress={()=> setIsActive(item.id)}>
                <Text 
                style={[
                  FONTS.B,
                  isSize? styles.sizeText : styles.text,
                  {color: isActive=== item.id ? "white" : "black"}]}>{item.title}</Text>
            </TouchableOpacity>
      )}  
    />
  )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical:13,
        paddingHorizontal:20,
        margin:14,
        borderRadius:25,
        borderColor:BRANDCOLOR,
        borderWidth:1
    },
    text:{
        fontSize:20,
    },
    sizeContainer:{
      paddingVertical:8,
      paddingHorizontal:15,
      margin:10,
      borderRadius:25,
      borderColor:BRANDCOLOR,
      borderWidth:1
  },
  sizeText:{
    fontSize:10
  }
})