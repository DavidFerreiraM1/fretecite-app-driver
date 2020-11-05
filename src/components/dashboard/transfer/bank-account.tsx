import React from 'react';
import {View, Text} from 'react-native';
import {transferStyles as styles} from './styles';
import CheckedIcon from '../../../assets/icons/check-solid/check-solid-green.svg';

export function BankAccount() {
  return (
    <View style={styles.accountItemBox}>
      <View style={styles.accountContentLeft}>
        <Text style={styles.accountBankName}>Banco do Brasil</Text>
        <View style={styles.accountInfo}>
          <Text style={styles.accountInfoName}>Ag:</Text>
          <Text style={styles.accountInoValue}>xxxx</Text>
          <Text style={styles.accountInfoName}>Cc:</Text>
          <Text style={styles.accountInoValue}>xxxxx-x</Text>
        </View>
      </View>
      <View style={styles.accountContentRight}>
        <CheckedIcon height={24} width={32} />
      </View>
    </View>
  );
}
