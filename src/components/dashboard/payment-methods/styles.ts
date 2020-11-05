import {StyleSheet} from 'react-native';

export const PaymentMethodStyles = StyleSheet.create({
  headerContentBox: {
    width: '100%',
    marginVertical: 8,
  },
  headerContetText: {
    fontFamily: 'Barlow-Regular',
    fontSize: 16,
    color: '#005537',
    width: '100%',
    textAlign: 'center',
    marginVertical: 8,
  },
  cardOption: {
    height: 102,
    overflow: 'hidden',
  },
  cardOptionContent: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  cardContentLeft: {
    width: '80%',
    height: '100%',
    justifyContent: 'center',
    paddingLeft: 16,
  },
  cardOptionPaymentDescriptionBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardOptionPaymentDescription: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: '#787878',
    marginRight: 8,
  },
  cardOptionPaymentDefaultOption: {
    fontFamily: 'Roboto-Light',
    fontSize: 18,
    color: '#005537',
    marginLeft: 8,
  },
  cardOptionPaymentInfo: {
    fontSize: 18,
    fontFamily: 'Barlow-Regular',
    color: '#787878',
  },
  cardContentRight: {
    width: '20%',
  },
  touchbleArrow: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
