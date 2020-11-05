import React from 'react';
import {View, Text} from 'react-native';
import {PaymentMethodStyles as styles} from './styles';
import {CardOption} from './card-option';

export function PaymentMethodsContent() {
  return (
    <View>
      <View style={styles.headerContentBox}>
        <Text style={styles.headerContetText}>Meus Cartões</Text>
      </View>
      <View>
        <CardOption paymentOption="credit" defaultOption />
        <CardOption paymentOption="credit" />
      </View>
    </View>
  );
}
