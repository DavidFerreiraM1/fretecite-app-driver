import {StyleSheet, Dimensions} from 'react-native';

export const freightStyles = StyleSheet.create({
  page: {
    // flex: 1,
  },
  container: {
    paddingHorizontal: 0,
  },
  buttonBottomContainer: {
    height: 56,
    width: '100%',
    position: 'absolute',
    bottom: 8,
  },
  buttonBottomComponent: {
    position: 'relative',
    left: Dimensions.get('screen').width - 64,
    borderRadius: 100,
    elevation: 8,
  },
  buttonBottom: {
    backgroundColor: '#005537',
  },
});
