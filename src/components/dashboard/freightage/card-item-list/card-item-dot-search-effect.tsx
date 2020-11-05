/* eslint-disable consistent-return */
import React, {useState, useEffect} from 'react';
import {Animated} from 'react-native';
import {freightageStyles as styles, DotSearchStatusEffectProps} from '../style';

type Props = DotSearchStatusEffectProps;

export function DotSearchStatusEffect(props: Props) {
  const {status} = props;
  const [dotSearchStatus] = useState(new Animated.Value(1));

  const handleEffect = (finished: boolean, toValue: number) => {
    if (finished && toValue === 1) return handleStartEffect(0);
    if (finished && toValue === 0) return handleStartEffect(1);
  };

  const timeAnimation = 600;
  const handleStartEffect = (toValue: number) => {
    return Animated.timing(dotSearchStatus, {
      toValue,
      duration: timeAnimation,
      useNativeDriver: true,
    }).start(({finished}) => {
      handleEffect(finished, toValue);
    });
  };

  const handleStopEffect = (toValue: number) => {
    Animated.timing(dotSearchStatus, {
      toValue,
      duration: timeAnimation,
      useNativeDriver: true,
    }).stop();
  };

  useEffect(() => {
    handleStartEffect(0);
  }, []);

  useEffect(() => {
    switch (status) {
      case 'found':
        return handleStopEffect(1);
      case 'canceled': {
        return handleStopEffect(1);
      }
      default:
        return handleStartEffect(1);
    }
  }, [status]);

  return (
    <Animated.View
      style={{
        opacity: dotSearchStatus,
        ...styles.cardHeaderStatusView,
        ...styles[status],
      }}
    />
  );
}
