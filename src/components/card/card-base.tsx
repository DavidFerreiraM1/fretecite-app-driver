import React, {ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';
import {cardStyles as styles} from './styles';

interface CustomStyles {
  root?: ViewStyle;
  container?: ViewStyle;
}

interface Props {
  customStyle?: CustomStyles;
  children?: ReactNode;
}

export function CardBase(props: Props) {
  const {children, customStyle} = props;
  return (
    <View style={[styles.root, customStyle?.root]}>
      <View style={[styles.container, customStyle?.container]}>{children}</View>
    </View>
  );
}
