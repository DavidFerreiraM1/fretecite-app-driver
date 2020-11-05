import {StyleSheet} from 'react-native';

export interface DotSearchStatusEffectProps {
  status: 'searching' | 'canceled' | 'found' | 'done';
}

export const freightageStyles = StyleSheet.create({
  profileRoot: {
    backgroundColor: '#005537',
    width: '100%',
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 0,
    paddingHorizontal: 24,
    overflow: 'hidden',
  },
  profileContent: {
    top: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  photoContainer: {
    backgroundColor: '#FFFFFF',
    height: 72,
    width: 72,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  profilePhoto: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
  nameAndStarsContainer: {
    marginHorizontal: 16,
  },
  nameContainer: {
    width: '100%',
    bottom: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  name: {
    color: '#FFFFFF',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 20,
  },
  starsContainer: {
    top: 2,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  star: {
    marginHorizontal: 1,
  },
  listRoot: {
    backgroundColor: '#F8F8F8',
    width: '100%',
  },
  listContainer: {
    width: '100%',
    paddingHorizontal: 14,
    paddingTop: 8,
  },
  customCard: {
    width: '100%',
    display: 'flex',
    flexBasis: 0,
  },
  cardContainer: {
    padding: 16,
    paddingVertical: 8,
  },
  cardHeaderStatus: {
    paddingVertical: 16,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardHeaderStatusView: {
    height: 10,
    width: 10,
    borderRadius: 12,
    borderWidth: 0.5,
    marginRight: 4,
  },
  searching: {
    backgroundColor: '#FAFF00',
    borderColor: '#FFEA2E',
  },
  canceled: {
    opacity: 1,
    backgroundColor: '#DA6262',
    borderColor: '#902626',
  },
  found: {
    opacity: 1,
    backgroundColor: '#20FF1C',
    borderColor: '#04D600',
  },
  done: {
    opacity: 1,
    backgroundColor: '#0088EB',
    borderColor: '#04D600',
  },
  cardHeaderStatusText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    color: '#787878',
    marginLeft: 4,
  },
  cardBody: {
    display: 'flex',
    flexDirection: 'row',
  },
  cardBodyContentLeft: {
    width: '62%',
  },
  cardStartAndEndTravelInfo: {
    paddingVertical: 0,
  },
  cardSTravelStartItem: {
    marginBottom: 4,
  },
  cardSTravelEndItem: {
    marginTop: 4,
  },
  cardTravelStage: {
    fontFamily: 'Barlow-Medium',
    fontSize: 20,
  },
  cardSTravelDescription: {
    fontFamily: 'Barlow-Regular',
    fontSize: 14,
  },
  cardBodyContentRight: {
    width: '38%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  cardPriceContent: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    bottom: 0,
  },
  cardPriceTitle: {
    fontFamily: 'Barlow-light',
    fontSize: 14,
  },
  cardPriceText: {
    fontFamily: 'Barlow-SemiBold',
    fontSize: 18,
  },
  cardBottom: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 8,
    marginBottom: 16,
  },
  cardBottomContentLeft: {
    width: '62%',
    height: '100%',
  },
  cardBottomContentLeftCollapseArea: {
    width: '100%',
    height: 48,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardBottomContentLeftCollapseDetails: {
    marginHorizontal: 8,
    color: '#005537',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
  },
  cardBottomAreaCollpased: {
    paddingHorizontal: 16,
    width: '100%',
  },
  cardBottomAreaDescription: {
    width: '100%',
    fontSize: 14,
    fontFamily: 'Barlow-Light',
    marginBottom: 4,
  },
  cardBottomAreaDetailsItems: {
    width: '100%',
    paddingLeft: 8,
  },
  cardBottomAreaDescriptionItem: {
    fontFamily: 'Barlow-Regular',
    color: '#000',
  },
  cardBottomContentRight: {
    width: '38%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  cardCancelButtonRoot: {
    height: 40,
    minWidth: 112,
    left: 8,
  },
  cardCancelButtonContainer: {
    borderRadius: 4,
    borderWidth: 1.5,
  },
  cardButtonOpenMapBox: {
    width: '100%',
    height: 48,
    padding: 8,
  },
  cardButtonOpenMap: {
    height: '100%',
  },
  cardButtonOpenMapText: {
    color: '#787878',
    fontFamily: 'Barlow-Medium',
    fontSize: 16,
  },
});
