import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  BackHandler,
  StyleSheet
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Info from 'react-native-vector-icons/MaterialIcons';
import Clock from 'react-native-vector-icons/MaterialCommunityIcons';
import Person from 'react-native-vector-icons/Ionicons';
import Chart from 'react-native-vector-icons/FontAwesome5';
import Arrow from 'react-native-vector-icons/Foundation';
import PredictionCard from '../../components/PredictionCard';
import {styles} from './Styles';

const GamesScreen = () => {
  const initialTimeInSeconds = 3 * 60 * 60; // 3 hours in seconds
  const [timer, setTimer] = useState(initialTimeInSeconds);
  const [prediction, SetPrediction] = useState(false);
  const [predictionType, SetPredictionType] = useState('');

  //handling backpress
  useEffect(() => {
    const backAction = () => {
      if (prediction) {
        SetPrediction(false);
        return true;
      } else {
        BackHandler.exitApp();
      }
      return false;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
  }, [prediction]);

  //starting the timer
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timer > 0) {
        setTimer(prevTimer => prevTimer - 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timer]);

  //converting time into hours:minutes:seconds format
  const formatTime = timeInSeconds => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
      2,
      '0',
    )}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Text style={styles.header}>Today’s Games</Text>
      {/* card */}
      <View style={styles.card}>
        {/* card's top part */}
        <View style={styles.cardTop}>
          <View style={styles.innerTop}>
            <Text style={styles.underText}>UNDER OR OVER</Text>
            <Info
              name="info-outline"
              color="#D2BAF5"
              size={20}
              style={{right: 5}}
            />
            <Text style={styles.startingIn}>Starting in</Text>
            <Clock name="clock" color="#D2BAF5" size={20} style={{left: 5}} />
            <Text style={styles.timer}>{formatTime(timer)}</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View style={{width: 250}}>
              <Text style={styles.bitcoinText}>
                Bitcoin price will be under
              </Text>
              <Text style={styles.amountText}>
                $24,524 at 7 a ET on 22nd Jan’21
              </Text>
            </View>
            <View>
              <Image
                source={require('../../assets/images/bgcurve.png')}
                style={{right: 25, top: 18}}
              />
              <Image
                source={require('../../assets/images/bitcoin.png')}
                style={{bottom: 30}}
              />
            </View>
          </View>
        </View>
        {/* card's middle part */}
        <View style={styles.middleCard}>
          <View style={{marginBottom: 25}}>
            <View style={styles.innerMiddle}>
              <Text style={styles.tableHeading}>PRIZE POOL</Text>
              <Text style={styles.tableHeading}>UNDER</Text>
              <Text style={styles.tableHeading}>OVER</Text>
              <Text style={styles.tableHeading}>ENTRY FEES</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.tableData}>$12,000</Text>
              <Text style={styles.tableData}>3.25x</Text>
              <Text style={[styles.tableData, {left: -20}]}>1.25x</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.tableData}>5</Text>
                <Image
                  source={require('../../assets/images/coin.png')}
                  style={{marginLeft: 5}}
                />
              </View>
            </View>
          </View>

          <Text style={styles.predictionText}>What’s your prediction?</Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={() => {
                SetPrediction(true);
                SetPredictionType('Under');
              }}
              style={styles.underBtn}>
              <Arrow
                name="arrow-down"
                color="#FFFFFF"
                size={20}
                style={{right: 8}}
              />
              <Text style={styles.btnText}>Under</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                SetPrediction(true);
                SetPredictionType('Over');
              }}
              style={styles.overBtn}>
              <Arrow
                name="arrow-up"
                color="#FFFFFF"
                size={20}
                style={{right: 8}}
              />
              <Text style={styles.btnText}>Over</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* card's bottom part */}
        <View style={styles.bottomCard}>
          <View style={styles.innerBottom}>
            <Person name="person-sharp" size={24} color="#727682" />
            <Text style={styles.players}>355 Players</Text>
            <Chart
              name="chart-area"
              size={24}
              color="#727682"
              style={{right: -20}}
            />
            <Text style={styles.chart}>View chart</Text>
          </View>
          <View style={styles.barcontainer}>
            <View style={styles.firstbar} />
            <View style={styles.secondbar} />
          </View>
          <View style={styles.last}>
            <Text style={styles.bottomText}>232 predicted under</Text>
            <Text style={styles.bottomText}>123 predicted over</Text>
          </View>
        </View>
      </View>
      {prediction && (
        <View style={[styles.cardOverlay, StyleSheet.absoluteFill]}>
          <PredictionCard predictionType={predictionType} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default GamesScreen;
