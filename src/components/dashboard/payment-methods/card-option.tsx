import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {PaymentMethodStyles as styles} from './styles';
import {CardBase} from '../../card/card-base';
import ArrowIcon from '../../../assets/icons/arrow-solid/arrow-solid-grey.svg';

const OPTIONS = {
  credit: 'Cartão de crédito',
  debit: 'Cartão de débito',
};

interface OwnProps {
  defaultOption?: boolean;
  paymentOption: 'credit' | 'debit';
}

export function CardOption(props: OwnProps) {
  const {defaultOption, paymentOption} = props;
  return (
    <CardBase
      customStyle={{
        container: styles.cardOption,
      }}>
      <View style={styles.cardOptionContent}>
        <View style={styles.cardContentLeft}>
          <View style={styles.cardOptionPaymentDescriptionBox}>
            <Text style={styles.cardOptionPaymentDescription}>
              {OPTIONS[paymentOption]}
            </Text>
            <Text>{defaultOption === true && `-`}</Text>
            <Text style={styles.cardOptionPaymentDefaultOption}>
              {defaultOption === true && `Padrão`}
            </Text>
          </View>
          <View>
            <Text style={styles.cardOptionPaymentInfo}>
              Master Card **** 0000
            </Text>
          </View>
        </View>
        <View style={styles.cardContentRight}>
          <TouchableOpacity style={styles.touchbleArrow}>
            <ArrowIcon height={24} width={24} />
          </TouchableOpacity>
        </View>
      </View>
    </CardBase>
  );
}
