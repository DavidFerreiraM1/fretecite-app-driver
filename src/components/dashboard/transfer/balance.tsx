import React from 'react';
import {View, Text} from 'react-native';
import {transferStyles as styles} from './styles';

export function Balance() {
  return (
    <View>
      <Text style={styles.balanceText}>Saldo Atual</Text>
      <Text style={styles.balanceValueText}>R$ 400,00</Text>
    </View>
  );
}
