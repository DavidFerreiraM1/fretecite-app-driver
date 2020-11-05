import React, {ReactNode} from 'react';
import {View, ViewStyle, StatusBar} from 'react-native';
import {pageStyles} from './styles';

interface CustomStyles {
  root?: ViewStyle;
  bodyContainer?: ViewStyle;
}

interface OwnProps {
  header?: ReactNode;
  children?: ReactNode;
  customStyles?: CustomStyles;
}

type Props = OwnProps;

export function ContainerPage(props: Props) {
  const {header, children, customStyles} = props;

  return (
    <View style={[pageStyles.root, customStyles?.root]}>
      <StatusBar backgroundColor="#005537" />
      <View>{header && header}</View>
      <View style={[pageStyles.bodyContainer, customStyles?.bodyContainer]}>
        {children && children}
      </View>
    </View>
  );
}
