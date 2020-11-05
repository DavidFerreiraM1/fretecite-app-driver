import {StyleSheet, Dimensions} from 'react-native';

export const FreightageDetailsStyle = StyleSheet.create({
  screenContent: {
    paddingBottom: 64,
  },
  buttonBottomBox: {
    width: Dimensions.get('window').width,
    position: 'absolute',
    bottom: -60,
    paddingVertical: 4,
  },
});
