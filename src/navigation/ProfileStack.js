import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/profile/ProfileScreen';
import ResearchScreen from '../screens/ResearchScreen';
import LeaugesScreen from '../screens/LeaugesScreen';
import AccountScreen from '../screens/AccountScreen';
import Bar from 'react-native-vector-icons/Foundation';
import Person from 'react-native-vector-icons/Ionicons';
import Home from 'react-native-vector-icons/FontAwesome';
import LeaderBoardScreen from '../screens/LeaderBoardScreen';

const Tab = createBottomTabNavigator();

const ProfileStack = () => {
  const renderIcon = (name, focused, size, color) => {
    if (name === 'Home') {
      return (
        <Home name={focused ? 'home' : 'home'} size={size} color={color} />
      );
    } else if (name === 'Leagues') {
      return (
        <Home name={focused ? 'trophy' : 'trophy'} size={size} color={color} />
      );
    } else if (name === 'Profile') {
      return (
        <Person
          name={focused ? 'person' : 'person'}
          size={size}
          color={color}
        />
      );
    } else if (name === 'Research') {
      return (
        <Person
          name={focused ? 'search' : 'search'}
          size={size}
          color={color}
        />
      );
    } else if (name === 'LeaderBoard') {
      return (
        <Bar
          name={focused ? 'graph-bar' : 'graph-bar'}
          size={size}
          color={color}
        />
      );
    }
    return null;
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const {name} = route;
          return renderIcon(name, focused, size, color);
        },
        tabBarActiveTintColor: '#6231AD',
        tabBarInactiveTintColor: '#B5C0C8',
        tabBarStyle: {height: 70, paddingBottom: 10},
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: 'Montserrat-Medium',
        },
        headerShown:false,
      })}>
      <Tab.Screen name="Home" component={ProfileScreen} />
      <Tab.Screen name="Leagues" component={LeaugesScreen} />
      <Tab.Screen name="Research" component={ResearchScreen} />
      <Tab.Screen name="LeaderBoard" component={LeaderBoardScreen} />
      <Tab.Screen name="Profile" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default ProfileStack;
