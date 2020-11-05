/* eslint-disable no-alert */
import React from 'react';
import {View, ScrollView} from 'react-native';
import {ContainerPage as Page, Header, Button} from '../../components';
import {
  StatusText,
  TransporterInfo,
  OriginAndDestiny,
} from '../../components/dashboard';
import {FreightageDetailsStyle as styles} from './styles/freightage-details-styles';

export function FreightageDetailsScreen() {
  return (
    <Page
      header={<Header title="Solicitação" />}
      customStyles={{
        root: styles.screenContent,
      }}>
      <ScrollView>
        <StatusText />
        <TransporterInfo />
        <OriginAndDestiny transporterImmedate />
      </ScrollView>
      <View style={styles.buttonBottomBox}>
        <Button
          variant="contained"
          color="primary"
          text="Efetuar Pagamento"
          onPress={() => alert('Realizando pagamento!!!')}
        />
      </View>
    </Page>
  );
}
