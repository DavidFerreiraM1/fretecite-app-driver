import {StyleSheet, Dimensions} from 'react-native';

const _WidthScreen = Dimensions.get('screen').width;

export const headerStyles = StyleSheet.create({
  root: {
    height: 72,
    width: '100%',
    backgroundColor: '#005537',
  },
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  rightElement: {
    width: 56,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftElement: {
    width: _WidthScreen - 40,
    height: 72,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    right: 32,
  },
  titleStyle: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    color: '#FFFFFF',
  },
});
