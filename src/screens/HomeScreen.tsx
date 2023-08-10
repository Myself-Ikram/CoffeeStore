import { ImageBackground, StyleSheet, View} from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootScreenProps } from '../navigation/AppNavigation'
import CoffeeItems from '../components/Items'

type HomeProps = NativeStackScreenProps<RootScreenProps,"Home">

export default function Home({} : HomeProps) {
  return (
    <View>
      <ImageBackground source={require("../assets/images/detail-image.jpg")} style={styles.backgroundImage} blurRadius={2}>
      <Header/>
      </ImageBackground>
      <Categories type="categories"/>
      <CoffeeItems/>
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundImage:{
    height:190,
    width:"100%",
  }
})