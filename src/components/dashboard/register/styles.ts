import {StyleSheet} from 'react-native';

export const registerStyles = StyleSheet.create({
  contentBox: {
    flex: 1,
    backgroundColor: '#fff',
  },
  formContentBox: {
    height: '100%',
    justifyContent: 'center',
  },
  inputBox: {
    width: '100%',
    padding: 24,
  },
  label: {
    width: '100%',
    color: '#005537',
    fontSize: 20,
    fontFamily: 'Barlow-Light',
    marginVertical: 8,
  },
  input: {
    height: 48,
    width: '100%',
    color: '#005537',
    fontSize: 24,
    fontFamily: 'OpenSans-ExtraBold',
    marginVertical: 8,
    textTransform: 'capitalize',
  },
  actionBox: {
    width: '100%',
    height: 64,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
  },
  nexButtonBox: {
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
  },
  nextButton: {
    color: '#000',
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    paddingHorizontal: 32,
  },
  backButtonBox: {
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
  },
  backButton: {
    color: '#000',
    fontFamily: 'Roboto-Light',
    fontSize: 18,
    paddingHorizontal: 32,
  },
});
