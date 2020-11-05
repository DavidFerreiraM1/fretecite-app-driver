import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
} from 'react-native';
import {
  buttonStyles,
  StylePropsInterface,
  setBackground,
  setColor,
  setFullWidth,
} from './button-styles';

interface StyleProps {
  variant?: 'contained' | 'outlined';
  color?: 'primary' | 'secondary';
  fullWidth?: boolean;
  customStyles?: StylePropsInterface;
  text?: string;
}

type Props = StyleProps & TouchableOpacityProps;

export function Button(props: Props) {
  const {variant, color, text, customStyles, fullWidth, ...otherProps} = props;
  return (
    <View style={[{...setFullWidth(fullWidth)}, customStyles?.root]}>
      <TouchableOpacity
        style={[
          buttonStyles.container,
          {...setBackground(variant, color)},
          customStyles?.container,
        ]}
        {...otherProps}>
        <View style={[buttonStyles.children, customStyles?.children]}>
          <Text
            style={[
              buttonStyles.textChildren,
              {...setColor(variant, color)},
              customStyles?.text,
            ]}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
