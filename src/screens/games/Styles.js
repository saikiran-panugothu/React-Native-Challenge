import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  header: {
    fontSize: 20,
    fontFamily: 'Avenir Next',
    fontWeight: '700',
    color: '#333333',
    letterSpacing: 0.5,
  },
  card: {
    height: 400,
    backgroundColor: '#EEEAF3',
    marginVertical: 20,
    elevation: 10,
  },
  cardTop: {
    height: 130,
    backgroundColor: '#6231AD',
    borderRadius: 2,
    elevation: 10,
    paddingHorizontal: 20,
    paddingVertical: 22,
  },
  innerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textbold: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: '#D2BAF5',
  },
  textmedium: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
    color: '#D2BAF5',
    left: 10,
  },
  underText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: '#D2BAF5',
  },
  startingIn: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
    color: '#D2BAF5',
    left: 10,
  },
  timer: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: '#D2BAF5',
  },
  bitcoinText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: '#D2BAF5',
    lineHeight: 24,
  },
  amountText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: '#FFFFFF',
  },
  middleCard: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 22,
    elevation: 10,
  },
  innerMiddle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  tableHeading: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: '#B5C0C8',
  },
  tableData: {
    fontWeight: '700',
    fontFamily: 'Avenir Next',
    fontSize: 16,
    color: '#333333',
  },
  cardOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  predictionText:{
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#727682',
  },
  btnContainer:{
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  underBtn:{
    width: 150,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#452C55',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btnText:{
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  overBtn:{
    width: 150,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#6231AD',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  bottomCard:{
    height: 130,
    backgroundColor: '#F6F3FA',
    borderRadius: 2,
    paddingHorizontal: 20,
    paddingVertical: 22,
    elevation: 10,
  },
  innerBottom:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  players:{
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#727682',
    right: 20,
  },
  chart:{
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#727682',
  },
  bottomText:{
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: '#B5C0C8',
  },
  last:{
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  firstbar:{
    width: '70%',
    backgroundColor: '#FE4190',
    height: 10,
  },
  secondbar:{
    width: '30%',
    backgroundColor: '#2DABAD',
    height: 10,
  },
  barcontainer:{
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
  }
});
