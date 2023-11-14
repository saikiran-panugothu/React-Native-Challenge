
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GamesScreen from '../screens/games/GamesScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import ProfileStack from './ProfileStack';
import Badges from '../components/Badges';


const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
    initialRouteName="GamesScreen"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name = "GamesScreen" component={GamesScreen}/>
    <Stack.Screen name='ProfileScreen' component={ProfileScreen}/>
    <Stack.Screen name='ProfileStack' component={ProfileStack}/>
    <Stack.Screen name='Badges' component={Badges}/>
  </Stack.Navigator>
  )
}

export default HomeStack