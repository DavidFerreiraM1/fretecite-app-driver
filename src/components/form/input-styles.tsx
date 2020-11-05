import React, {ReactNode} from 'react';
import {StyleSheet, ViewStyle, View} from 'react-native';

export interface StylePropsInterface {
  root?: ViewStyle;
  inputBody?: ViewStyle;
  children?: ViewStyle;
}

export const inputStyles = StyleSheet.create({
  root: {
    height: 56,
    marginTop: 8,
    maxWidth: 280,
  },
  rootFullWidth: {
    marginTop: 8,
    width: '100%',
  },
  inputBody: {
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  outlinedPrimary: {
    borderColor: '#787878',
    color: '#787878',
  },
  outlinedSecondary: {
    borderColor: '#005537',
    color: '#005537',
  },
  decoratedEnd: {
    width: '100%',
    height: 0,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    bottom: '50%',
    right: 14,
  },
  decoratedStart: {
    width: '100%',
    height: 0,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    bottom: '50%',
    left: 14,
  },
  paddingWithDecoratedStart: {
    paddingLeft: 40,
  },
  paddingWithDecoratedEnd: {
    paddingRight: 40,
  },
  inputRadioContainer: {
    height: 32,
    width: 32,
    borderRadius: 18,
    borderWidth: 2,
    overflow: 'hidden',
  },
  inputRadioBackground: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  raidioButtonChecked: {
    height: 18,
    width: 18,
    borderRadius: 16,
  },
  radioButtonBgColorPrimary: {
    backgroundColor: '#787878',
  },
  radioButtonBgColorSecondary: {
    backgroundColor: '#005537',
  },
  selectRootStyles: {
    borderRadius: 8,
    borderWidth: 2,
  },
  selectPickerStyles: {
    height: 48,
  },
  selectPickerItemStyles: {
    color: 'red',
  },
  selectPlaceholdBackground: {
    height: 0,
    width: '100%',
    paddingLeft: 12,
  },
  selectPlacehold: {
    bottom: 32.5,
  },
});

export const setPaddingForDecorated = (
  component: ReactNode | undefined,
  propStyle: 'decoratedEnd' | 'decoratedStart',
) => {
  const returnComponent = (
    receivedComponent: ReactNode,
    receivedStyleProp: 'paddingWithDecoratedStart' | 'paddingWithDecoratedEnd',
  ) => {
    if (receivedComponent !== undefined) return inputStyles[receivedStyleProp];
    return null;
  };

  switch (propStyle) {
    case 'decoratedStart':
      return returnComponent(component, 'paddingWithDecoratedStart');
    case 'decoratedEnd':
      return returnComponent(component, 'paddingWithDecoratedEnd');
    default:
      return null;
  }
};

export const setFullWidth = (param?: boolean) => {
  if (param === undefined || param === false) {
    return inputStyles.root;
  }
  return inputStyles.rootFullWidth;
};

export const setColor = (color?: 'primary' | 'secondary') => {
  switch (color) {
    case 'primary':
      return inputStyles.outlinedPrimary;
    case 'secondary':
      return inputStyles.outlinedSecondary;
    default:
      return inputStyles.outlinedPrimary;
  }
};

export const renderDecorated = (
  component: ReactNode,
  propStyle: 'decoratedEnd' | 'decoratedStart',
) => {
  return component && <View style={inputStyles[propStyle]}>{component}</View>;
};
