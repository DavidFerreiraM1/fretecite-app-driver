import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {ContainerPage as Page, Button, Header} from '../../components';
import {profitsStyles as styles} from './styles/profits-styles';
import {StackNavigationProps} from '../../routes/interfaces';

type Props = StackNavigationProps;

export function ProfitsSreen(props: Props) {
  return (
    <Page header={<Header title="Ganhos" />}>
      <Text style={styles.title}>Saldo</Text>
      <View>
        <Text style={styles.amountText}>R$ 400,00</Text>
      </View>
      <View style={styles.transferButtonBox}>
        <Button
          fullWidth
          text="Transferir"
          onPress={() =>
            props.navigation.navigate('client', {screen: 'transfer'})
          }
        />
      </View>
      <View>
        <Text style={styles.historicTitle}>Histórico</Text>
        <View style={styles.intervalHistoricBox}>
          <View style={styles.intervalHistoricBoxItem}>
            <Text>Inicial</Text>
            <Text>03/04/2020</Text>
          </View>
          <View style={styles.intervalHistoricBoxItem}>
            <Text>Fim</Text>
            <Text>03/04/2020</Text>
          </View>
        </View>
        <View style={styles.tableHeaderBox}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableColumnHeader}>Total</Text>
            <Text style={styles.tableColumnHeader}>Tarifa</Text>
            <Text style={styles.tableColumnHeader}>Recebido</Text>
          </View>
          <View style={styles.tableBody}>
            <ScrollView scrollEnabled style={styles.scrollTable}>
              <View style={styles.tableRow}>
                <Text style={styles.tableColumn}>R$ 100,00</Text>
                <Text style={styles.tableColumn}>R$ 20,00</Text>
                <Text style={styles.tableColumn}>R$ 80,00</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableColumn}>R$ 100,00</Text>
                <Text style={styles.tableColumn}>R$ 20,00</Text>
                <Text style={styles.tableColumn}>R$ 80,00</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableColumn}>R$ 100,00</Text>
                <Text style={styles.tableColumn}>R$ 20,00</Text>
                <Text style={styles.tableColumn}>R$ 80,00</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableColumn}>R$ 100,00</Text>
                <Text style={styles.tableColumn}>R$ 20,00</Text>
                <Text style={styles.tableColumn}>R$ 80,00</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableColumn}>R$ 100,00</Text>
                <Text style={styles.tableColumn}>R$ 20,00</Text>
                <Text style={styles.tableColumn}>R$ 80,00</Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </Page>
  );
}
