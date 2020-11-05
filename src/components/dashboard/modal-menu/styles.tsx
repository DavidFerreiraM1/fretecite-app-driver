import {StyleSheet, Dimensions} from 'react-native';

const _HeaderScreen = Dimensions.get('screen').height;

export const modalMenuStyles = StyleSheet.create({
  animated: {
    position: 'absolute',
    zIndex: 1000,
    elevation: 100,
    height: _HeaderScreen,
    width: '100%',
    backgroundColor: '#424A4A',
  },
  body: {
    flex: 1,
    width: '100%',
  },
  optionsContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    position: 'absolute',
    top: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    padding: 16,
  },
  customCard: {
    height: 100,
    width: 100,
    marginHorizontal: 8,
    elevation: 0,
  },
  customCardContainerActive: {
    borderWidth: 0.5,
    borderColor: '#002C1C',
  },
  customCardContentActive: {
    backgroundColor: '#005537',
    borderRadius: 8,
    borderWidth: 0.2,
    borderColor: '#002C1C',
  },
  customCardTextActive: {
    color: '#FFFFFF',
  },
  rowContent: {
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 14,
    fontFamily: 'OpenSans-Light',
    marginVertical: 4,
  },
});
