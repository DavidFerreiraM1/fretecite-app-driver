import {StyleSheet, Dimensions} from 'react-native';

export const transporterRequestStyles = StyleSheet.create({
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
  },
  sideRowLeft: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingRight: 4,
  },
  sideRowRight: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 4,
  },
  textInputRadio: {
    color: '#787878',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    marginLeft: 8,
    height: '100%',
    textAlignVertical: 'center',
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
