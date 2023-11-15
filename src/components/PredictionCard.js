import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import NumberPicker from './NumberPicker';
import {useNavigation} from '@react-navigation/native';

const PredictionCard = ({predictionType}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.conatiner}>
      <View style={styles.dragHandle} />
      <Text style={styles.predictiontext}>
        Your Prediction is {predictionType}
      </Text>
      <Text style={styles.entryText}>ENTRY TICKETS</Text>
      <NumberPicker />
      <Text style={styles.win}>You can win </Text>
      <View style={styles.middlecard}>
        <Text style={styles.twothousand}>$2000</Text>
        <View style={styles.bottompart}>
          <Text style={styles.total}>Total</Text>
          <Image
            source={require('../assets/images/coin.png')}
            style={{left: 6, top: 3}}
          />
          <Text style={styles.five}>5</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProfileStack');
        }}
        style={styles.btn}>
        <Text style={styles.btnText}>Submit my prediction</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  dragHandle: {
    width: 50,
    height: 6,
    backgroundColor: '#B5C0C8',
    borderRadius: 10,
    marginTop: 8,
    alignSelf: 'center',
    marginBottom: 15,
  },
  conatiner: {
    backgroundColor: 'white',
    zIndex: 1,
    width: '110%',
    height: '58%',
    elevation: 10,
    position: 'absolute',
    bottom: 0,
    borderRadius: 32,
    paddingHorizontal: 24,
  },
  predictiontext: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#333333',
    marginBottom: 25,
  },
  entryText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: '#727682',
    marginBottom: 10,
  },
  win: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: '#B5C0C8',
  },
  btnText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  btn: {
    width: '92%',
    height: 50,
    borderRadius: 30,
    backgroundColor: '#6231AD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  total: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: '#727682',
  },
  five: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: '#727682',
    left: 15,
  },
  bottompart: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    right: 50,
  },
  twothousand: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: '#03A67F',
  },
  middlecard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    marginTop: 10,
  },
});

export default PredictionCard;
