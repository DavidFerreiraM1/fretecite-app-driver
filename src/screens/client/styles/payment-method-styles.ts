import {StyleSheet, Dimensions} from 'react-native';

export const paymentMethodStyles = StyleSheet.create({
  buttonBottomContainer: {
    height: 56,
    width: '100%',
    position: 'absolute',
    bottom: 8,
  },
  content: {
    paddingHorizontal: 16,
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
