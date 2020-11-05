import {StyleSheet} from 'react-native';

export const transferStyles = StyleSheet.create({
  balanceText: {
    fontSize: 14,
    fontFamily: 'Barlow-Light',
    color: '#0E0E0E',
    width: '100%',
    textAlign: 'center',
  },
  balanceValueText: {
    fontSize: 20,
    fontFamily: 'Barlow-Medium',
    color: '#005537',
    width: '100%',
    textAlign: 'center',
  },
  accountListBox: {
    width: '100%',
    paddingHorizontal: 16,
  },
  accountItemBox: {
    width: '100%',
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  accountContentLeft: {
    width: '64%',
    height: '100%',
    justifyContent: 'center',
  },
  accountBankName: {
    width: '100%',
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    color: '#787878',
  },
  accountInfo: {
    display: 'flex',
    flexDirection: 'row',
  },
  accountInfoName: {
    fontSize: 16,
    fontFamily: 'Barlow-Bold',
    color: '#787878',
  },
  accountInoValue: {
    fontSize: 14,
    fontFamily: 'Barlow-Regular',
    color: '#787878',
    marginRight: 16,
  },
  accountContentRight: {
    width: '36%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
