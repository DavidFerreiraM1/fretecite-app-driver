import React from 'react';
import {View} from 'react-native';
import {ContainerPage as Page, Header, Button} from '../../components';
import {Balance, BankAccount} from '../../components/dashboard';
import {transferStyles as styles} from './styles/transfer-styles';

export function TransferScreen() {
  return (
    <Page
      header={<Header title="Transferência" />}
      customStyles={{
        bodyContainer: styles.bodyContainer,
      }}>
      <View style={styles.headerBalance}>
        <Balance />
      </View>
      <View style={styles.inputArea} />
      <View style={styles.accountListBox}>
        <BankAccount />
      </View>
      <>
        <View style={styles.buttonBottomBox}>
          <Button fullWidth text="Confirmar" />
        </View>
      </>
    </Page>
  );
}
