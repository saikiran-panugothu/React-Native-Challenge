import {View, Text, Image} from 'react-native';
import React from 'react';
import Comment from 'react-native-vector-icons/Foundation';
import Edit from 'react-native-vector-icons/FontAwesome5';
import Logout from 'react-native-vector-icons/FontAwesome';
import Arrow from 'react-native-vector-icons/FontAwesome6';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Badges from '../../components/Badges';
import GamesPlayed from '../../components/GamesPlayed';
import {styles} from './Styles';

const Tab = createMaterialTopTabNavigator();

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: 20, paddingVertical: 22}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image source={require('../../assets/images/logo.png')} />
          <Text style={styles.header}>Profile</Text>
          <View>
            <Comment name="comment" size={30} color="#727682" />
            <View style={styles.notification}>
              <Text style={styles.messages}>1</Text>
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center', marginTop: 10}}>
          <Image source={require('../../assets/images/dp.png')} />
          <View style={styles.circle}>
            <Edit name="edit" size={16} color="#727682" />
          </View>
        </View>
        <Text style={styles.name}>Jina Simons</Text>
        <Text style={styles.pts}>6000 Pts </Text>
        <Text style={styles.bio}>
          I’m a software developer that has been in the crypto space since 2012.
          And I’ve seen it grow and falter over a period of time. Really happy
          to be here!
        </Text>
        <View style={styles.Logoutcontainer}>
          <Logout name="sign-out" size={22} color="#727682" />
          <Text style={styles.logout}>Logout</Text>
        </View>
        <Image
          source={require('../../assets/images/star.png')}
          style={styles.starimg}
        />
        <View style={styles.card}>
          <View>
            <Text style={styles.cardheader}>Under or Over</Text>
            <View style={styles.box}>
              <View style={styles.upcontainerbox}>
                <Arrow name="arrow-up" color="#48C547" size={22} />
              </View>
              <Text style={styles.percent}>81%</Text>
            </View>
          </View>
          <View style={{marginRight: 40}}>
            <Text style={styles.cardheader}>Top 5</Text>
            <View style={styles.box}>
              <View style={styles.downpercentbox}>
                <Arrow name="arrow-down" color="#F73232" size={22} />
              </View>
              <Text style={styles.percent}>-51%</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{backgroundColor: '#F3F2F7', height: 6}}></View>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarActiveTintColor: '#6231AD',
          tabBarLabelStyle: {
            fontSize: 14,
            fontFamily: 'Montserrat-SemiBold',
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#6231AD',
          },
        })}>
        <Tab.Screen name="GamesPlayed" component={GamesPlayed} />
        <Tab.Screen name="Badges" component={Badges} />
      </Tab.Navigator>
    </View>
  );
};

export default ProfileScreen;
