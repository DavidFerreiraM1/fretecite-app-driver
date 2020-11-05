import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

export interface StylePropsInterface {
  root?: ViewStyle;
  container?: ViewStyle;
  children?: ViewStyle;
  text?: TextStyle;
}

export const buttonStyles = StyleSheet.create({
  root: {
    height: 56, // 56, 64, 72
    marginTop: 8,
    marginHorizontal: 8,
  },
  rootFullWidth: {
    height: 56,
    width: '100%',
    marginTop: 8,
  },
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  containedPrimary: {
    backgroundColor: '#262626',
  },
  outlinedPrimary: {
    borderWidth: 2,
    borderColor: '#262626',
  },
  outlinedSecondary: {
    borderWidth: 2,
    borderColor: '#005537',
  },
  children: {},
  textChildren: {
    fontFamily: 'OpenSans-SemiBold',
    letterSpacing: 0,
    fontSize: 14,
  },
  colorTextPrimary: {
    color: '#262626',
  },
  colorTextSecondary: {
    color: '#005537',
  },
  colorTextContrast: {
    color: '#FFFFFF',
  },
  rootCircleButton: {
    maxHeight: 56,
    maxWidth: 56,
  },
  containerCircleButton: {
    borderRadius: 100,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const setBackground = (
  variant?: 'contained' | 'outlined',
  color?: 'primary' | 'secondary',
) => {
  switch (variant) {
    case 'contained':
      return buttonStyles.containedPrimary;
    case 'outlined': {
      if (color === 'primary') return buttonStyles.outlinedPrimary;
      if (color === 'secondary') return buttonStyles.outlinedSecondary;
      return buttonStyles.outlinedPrimary;
    }
    default:
      return buttonStyles.containedPrimary;
  }
};

export const setColor = (
  variant?: 'contained' | 'outlined',
  color?: 'primary' | 'secondary',
) => {
  if (variant === 'contained' || variant === undefined)
    return buttonStyles.colorTextContrast;

  switch (color) {
    case 'primary':
      return buttonStyles.colorTextPrimary;
    case 'secondary':
      return buttonStyles.colorTextSecondary;
    default:
      return buttonStyles.colorTextPrimary;
  }
};

export const setFullWidth = (param?: boolean) => {
  if (param === undefined || param === false) return buttonStyles.root;
  return buttonStyles.rootFullWidth;
};
