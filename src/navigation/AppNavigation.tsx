import React from 'react';
import { StyleSheet, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import FavoriteTab from '../tabs/FavoriteTab';
import CartTab from '../tabs/CartTab';
import {BRANDCOLOR} from '../components/constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconIon from "react-native-vector-icons/Ionicons"
import IconSim from "react-native-vector-icons/SimpleLineIcons"
import DetailsScreen from '../screens/DetailScreen';
import IntroScreen from '../screens/IntroScreen';
export type RootScreenProps = {
  Home : undefined,
  Details: {itemId : string}
}


const Stack = createNativeStackNavigator();
export default function AppNavigation() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="IntroScreen">
        <Stack.Screen name='IntroScreen' component={IntroScreen} options={{headerShown:false}}/>
        <Stack.Screen name="HomeScreen"component={HomeTabs} options={{headerShown: false}}/>
        <Stack.Screen name='Details' component={DetailsScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
      </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) =>{
            let icon;
            if (route.name == 'Home') {
              icon = focused ? (
                <IconIon name="home" size={30} style={{backgroundColor:"white",padding:10,borderRadius:25,color:BRANDCOLOR}} />
              ) : (
                <IconIon name="home-outline" size={30} color="white" />
              );
            }
            if (route.name === 'Wishlist') {
              icon = focused ? (
                <Icon name="heart" size={30} style={{backgroundColor:"white",padding:10,borderRadius:25,color:BRANDCOLOR}} />
              ) : (
                <Icon name="heart-o" size={30} color="white"  />
              );
            }
            if (route.name === 'Cart') {
              icon = focused ? (
                <IconIon name="cart" size={35} style={{backgroundColor:"white",padding:10,borderRadius:30,color:BRANDCOLOR}} />
              ) : (
                <IconIon name="cart-outline" size={35} color="white" />
              );
            }

            return <View>{icon}</View>;
          } ,
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarShowLabel:false,
          tabBarStyle: {
            backgroundColor: BRANDCOLOR,
            margin: 13,
            height: 80,
            borderRadius: 30,
            elevation: 5,
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen}  />
        <Tab.Screen name="Wishlist" component={FavoriteTab} />
        <Tab.Screen name="Cart" component={CartTab} />
      </Tab.Navigator>
  );
}

