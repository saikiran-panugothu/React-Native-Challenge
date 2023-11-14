import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';

const data = [
  {
    title: 'First Stripe Earned',
    description: 'Top 10% of highest spending \n players in a month',
    number: '3',
  },
  {
    title: 'Born Winner',
    description: 'Top 10% of highest spending \n players in a month',
  },
  {
    title: 'Trader of the Month',
    description: 'Won 7 under-over games in a \n row',
  },
  {
    title: 'Rising Star',
    description: 'Top 10% of highest spending \n players in a month',
  },
  {
    title: 'Jackpot',
    description: 'Top 10% of highest spending \n players in a month',
  },
  {
    title: 'Impossible',
    description: 'Top 10% of highest spending \n players in a month',
  },
];

const Badges = () => {
  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={require('../assets/images/menducky.png')} />
      <View style={{marginRight: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.title}>{item.title}</Text>
          {item.number !== null && item.number !== undefined ? (
            <Text style={styles.number}>x {item.number}</Text>
          ) : null}
        </View>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.main}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 20,
    backgroundColor: 'white',
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
  },

  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: '#333333',
    marginBottom: 5,
  },
  description: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: '#727682',
  },
  main: {
    backgroundColor: '#F3F2F7',
    paddingHorizontal: 20,
    paddingTop: 14,
  },
  number: {
    color: '#FFA600',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    top: -2,
    left: 10,
  },
});

export default Badges;
