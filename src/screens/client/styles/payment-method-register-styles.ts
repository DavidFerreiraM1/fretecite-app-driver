import {StyleSheet, Dimensions} from 'react-native';

export const paymentMethodRegisterScreen = StyleSheet.create({
  headerTitle: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
    color: '#005537',
  },
  formBox: {
    paddingHorizontal: 16,
  },
  rowBox: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 4,
    top: 4,
  },
  sideRowLeft: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 4,
  },
  sideRowRight: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 4,
  },
  bottomBox: {
    width: Dimensions.get('window').width,
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
  },
  sidedBox: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  confirmButon: {
    backgroundColor: '#297AE6',
  },
});
