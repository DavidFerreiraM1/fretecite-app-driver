import React from 'react';
import {View, Text} from 'react-native';
import {freightageStyleDetailsStyles as styles} from './styles';

export function StatusText() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {`O transportador se encontra\nno lodal de partida`}
        </Text>
      </View>
    </View>
  );
}
