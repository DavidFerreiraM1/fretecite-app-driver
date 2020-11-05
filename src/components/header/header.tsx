import React, {useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {headerStyles} from './styles';
import {ModalMenu} from '../dashboard';
import MenuBarSvg from '../../assets/icons/menu-bar/menu-bar-white.svg';
import ArrowBackIcon from '../../assets/icons/arrow-solid/arrow-angle-solid-white.svg';

interface Props {
  title?: string;
  noMenu?: boolean;
}

interface Ref {
  current: any;
}

export function Header(props: Props) {
  const modalMenu: Ref = useRef();
  const {title, noMenu} = props;
  const navigate = useNavigation();

  const handleNoMenu = () => {
    if (noMenu !== undefined && noMenu === true) {
      return (
        <TouchableOpacity onPress={() => navigate.goBack()}>
          <View style={headerStyles.rightElement}>
            <ArrowBackIcon height={24} width={24} />
          </View>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity onPress={() => modalMenu.current.open()}>
        <View style={headerStyles.rightElement}>
          <MenuBarSvg height={24} width={24} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={headerStyles.root}>
        <View style={headerStyles.container}>
          {handleNoMenu()}
          <View style={headerStyles.leftElement}>
            <Text style={headerStyles.titleStyle}>{title}</Text>
          </View>
        </View>
      </View>
      <>
        <ModalMenu ref={modalMenu} />
      </>
    </>
  );
}
