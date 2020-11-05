import React, {ReactNode} from 'react';
import {View, TouchableOpacityProps, TouchableHighlight} from 'react-native';
import {
  buttonStyles,
  StylePropsInterface,
  setBackground,
} from './button-styles';

interface StyleProps {
  variant?: 'contained' | 'outlined';
  color?: 'primary' | 'secondary';
  customStyles?: StylePropsInterface;
  text?: string;
  children?: ReactNode;
}

type Props = StyleProps & TouchableOpacityProps;

export function CircleButton(props: Props) {
  const {
    variant,
    color,
    customStyles,
    children: Children,
    ...otherProps
  } = props;
  return (
    <View style={[buttonStyles.rootCircleButton, customStyles?.root]}>
      <TouchableHighlight
        style={[
          buttonStyles.containerCircleButton,
          {...setBackground(variant, color)},
          customStyles?.container,
        ]}
        {...otherProps}>
        <View style={[buttonStyles.children, customStyles?.children]}>
          {Children}
        </View>
      </TouchableHighlight>
    </View>
  );
}
