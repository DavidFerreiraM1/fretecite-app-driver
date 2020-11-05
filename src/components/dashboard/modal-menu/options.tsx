import React, {ReactNode} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {CardBase} from '../../card/card-base';
import {modalMenuStyles} from './styles';

interface Props {
  icon: ReactNode;
  iconSetActive: ReactNode;
  text: string;
  routeName: string;
  closeMenu: Function;
}

export function Option(props: Props) {
  const {icon, text, iconSetActive, routeName, closeMenu} = props;
  const navigation = useNavigation();
  const currentRouteName = useRoute().name;

  const checkRoute = (returnStyle: any) => {
    if (currentRouteName === routeName) return returnStyle;
    return null;
  };

  const navigateTo = () => {
    if (currentRouteName !== routeName) {
      navigation.navigate(routeName);
    }
    return closeMenu();
  };

  return (
    <>
      <CardBase
        customStyle={{
          root: modalMenuStyles.customCard,
          container: {...checkRoute(modalMenuStyles.customCardContentActive)},
        }}>
        <TouchableOpacity onPress={() => navigateTo()}>
          <View style={modalMenuStyles.content}>
            <View>{routeName === currentRouteName ? iconSetActive : icon}</View>
            <Text
              style={[
                modalMenuStyles.cardText,
                {...checkRoute(modalMenuStyles.customCardTextActive)},
              ]}>
              {text}
            </Text>
          </View>
        </TouchableOpacity>
      </CardBase>
    </>
  );
}
