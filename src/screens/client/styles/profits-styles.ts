import {StyleSheet, Dimensions} from 'react-native';

const _WIDTH_SCREEN = Dimensions.get('window').width;

export const profitsStyles = StyleSheet.create({
  title: {
    height: 64,
    width: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Barlow-Regular',
    fontSize: 16,
    color: '#000000',
  },
  amountText: {
    height: 32,
    width: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Barlow-Medium',
    fontSize: 24,
    color: '#000000',
  },
  transferButtonBox: {
    paddingHorizontal: 16,
  },
  historicTitle: {
    height: 64,
    width: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Barlow-Regular',
    fontSize: 16,
    color: '#000000',
  },
  intervalHistoricBox: {
    height: 64,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  intervalHistoricBoxItem: {
    alignItems: 'center',
    marginHorizontal: 24,
  },
  tableHeaderBox: {
    height: 56,
    width: '100%',
    paddingHorizontal: 16,
  },
  tableHeader: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#969696',
  },
  tableColumnHeader: {
    width: (_WIDTH_SCREEN - 32) / 3,
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Barlow-Medium',
    fontSize: 16,
    color: '#FFFFFF',
  },
  tableBody: {
    width: '100%',
  },
  scrollTable: {
    height: 240,
  },
  tableRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  tableColumn: {
    width: (_WIDTH_SCREEN - 32) / 3,
    height: 32,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Barlow-Regular',
    fontSize: 14,
    color: '#000000',
  },
});
