import {Platform, PixelRatio} from 'react-native';

export function getPixelSize(pixel: number): any {
  return Platform.select({
    ios: pixel,
    android: PixelRatio.getPixelSizeForLayoutSize(pixel),
  });
}
