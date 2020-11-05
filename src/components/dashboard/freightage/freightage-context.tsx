/* eslint-disable @typescript-eslint/no-empty-function */
import React, {ReactNode, createContext} from 'react';
import {Animated} from 'react-native';

/**
 * Tipagem para os Valores Padrão
 * para cada api de contexto
 */
export interface StyleHeaderProfileContextProvidertInterface {
  style: {
    height: any;
    bottom: any;
    opacity: any;
  };
  setValue?: any;
}

/**
 * Declaração de contexto e valores padrão
 */
const HeaderHeightContextDefaultValue: StyleHeaderProfileContextProvidertInterface = {
  style: {
    height: 0,
    bottom: 80,
    opacity: 1,
  },
};
export const StyleHeaderProfileContextApi = createContext(
  HeaderHeightContextDefaultValue,
);

interface Props {
  children?: ReactNode;
}
export function StyleHeaderProfileContextProvider(props: Props) {
  let listeningScroll = new Animated.Value(0);
  const headerHeightStyle = listeningScroll.interpolate({
    inputRange: [16, 180],
    outputRange: [80, 0],
    extrapolate: 'clamp',
  });
  const headerBottomtStyle = listeningScroll.interpolate({
    inputRange: [16, 320],
    outputRange: [0, 80],
    extrapolate: 'clamp',
  });
  const headerOpacityStyle = listeningScroll.interpolate({
    inputRange: [16, 160],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  return (
    <StyleHeaderProfileContextApi.Provider
      value={{
        style: {
          height: headerHeightStyle,
          bottom: headerBottomtStyle,
          opacity: headerOpacityStyle,
        },
        setValue: listeningScroll,
      }}>
      {props.children}
    </StyleHeaderProfileContextApi.Provider>
  );
}
