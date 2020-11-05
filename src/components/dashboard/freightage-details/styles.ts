import {StyleSheet} from 'react-native';

export const freightageStyleDetailsStyles = StyleSheet.create({
  container: {
    width: '100%',
  },
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    marginTop: 24,
    color: '#005537',
    fontFamily: 'Barlow-Regular',
    textAlign: 'center',
    fontSize: 16,
  },
  transporterInfo: {
    height: 152,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  transporterPhotoBox: {
    height: 112,
    width: 112,
    borderRadius: 64,
    overflow: 'hidden',
    marginHorizontal: 8,
    backgroundColor: 'green',
    borderWidth: 2,
    borderColor: '#A8A8A8',
  },
  transporterPhoto: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  transporterInfoContentText: {
    alignItems: 'flex-end',
    marginRight: 8,
  },
  transporterName: {
    fontFamily: 'Roboto-Medium',
    color: '#484848',
    fontSize: 24,
  },
  vehicleTransporterInfoLine: {
    display: 'flex',
    flexDirection: 'row',
  },
  vehicleTransporterInfoProp: {
    fontFamily: 'Barlow-Light',
    fontSize: 14,
    color: '#787878',
    marginRight: 4,
    top: 1,
  },
  vehicleTransporterInfoValue: {
    fontFamily: 'Barlow-Medium',
    fontSize: 16,
    color: '#787878',
    marginLeft: 2,
  },
  transporteUrgency: {
    width: '100%',
  },
  transporteUrgencyText: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 8,
  },
  transporteUrgencyTextImmediate: {
    color: '#C00A2B',
  },
  originAndDestinyContent: {
    paddingHorizontal: 16,
  },
  originAndDestinyBody: {
    display: 'flex',
    flexDirection: 'row',
  },
  originAndDestinyBodyContentLeft: {
    width: '62%',
  },
  originAndDestinyStartAndEndTravelInfo: {
    paddingVertical: 0,
  },
  originAndDestinySTravelStartItem: {
    marginBottom: 4,
  },
  originAndDestinySTravelEndItem: {
    marginTop: 4,
  },
  originAndDestinyTravelStage: {
    fontFamily: 'Barlow-Medium',
    fontSize: 20,
  },
  originAndDestinySTravelDescription: {
    fontFamily: 'Barlow-Regular',
    fontSize: 14,
  },
  originAndDestinyBodyContentRight: {
    width: '38%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  originAndDestinyPriceContent: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    bottom: 0,
  },
  originAndDestinyPriceTitle: {
    fontFamily: 'Barlow-light',
    fontSize: 14,
  },
  originAndDestinyPriceText: {
    fontFamily: 'Barlow-SemiBold',
    fontSize: 18,
  },
  originAndDestinyBottom: {
    marginVertical: 24,
  },
  originAndDestinyBottomAreaDescription: {
    width: '100%',
    fontSize: 16,
    fontFamily: 'Barlow-Medium',
    marginBottom: 4,
    color: '#005537',
  },
  originAndDestinyBottomAreaDetailsItems: {
    width: '100%',
    paddingLeft: 8,
  },
  originAndDestinyBottomAreaDescriptionItem: {
    fontFamily: 'Barlow-Regular',
    color: '#000',
  },
});
