import {StyleSheet, Dimensions} from 'react-native';

const _WidthScreen = Dimensions.get('window').width;

export const loginStyles = StyleSheet.create({
  root: {
    backgroundColor: '#005537',
    flex: 1,
  },
  pageBody: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    bottom: 16,
  },
  logoBox: {
    height: 32,
    width: '100%',
    alignItems: 'center',
    bottom: 16,
  },
  formBox: {
    paddingHorizontal: 24,
  },
  customInputBorder: {
    backgroundColor: '#D2D2D2',
    opacity: 0.72,
    borderColor: '#787878',
    color: '#005537',
  },
  buttonLoginBox: {
    top: 24,
  },
  forgotPasswordBox: {
    width: '100%',
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPasswordText: {
    fontSize: 14,
    fontFamily: 'Barlow-Regular',
    color: '#D2D2D2',
    textDecorationLine: 'underline',
  },
  registerBox: {
    width: _WidthScreen,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  registerText: {
    fontSize: 18,
    fontFamily: 'Barlow-Regular',
    color: '#D2D2D2',
    textTransform: 'uppercase',
  },
});
